<?php

namespace Redmine\Client;

/**
 * Native cURL client.
 */
final class NativeCurlClient
{
    // private string $url;
    // private string $apikeyOrUsername;
    // private ?string $password;
    // private ?string $impersonateUser = null;
    // private int $lastResponseStatusCode = 0;
    // private string $lastResponseContentType = '';
    // private string $lastResponseBody = '';
    // private array $curlOptions = [];
    // private array $httpHeaders = [];
    // private array $httpHeadersNames = [];
    // private ?int $port = null;

    /**
     * $apikeyOrUsername should be your ApiKey, but it could also be your username.
     * $password needs to be set if a username is given (not recommended).
     */
    public function __construct(
        $url,
        $apikeyOrUsername,
        $password = null
    ) {
        $this->url = $url;
        $this->apikeyOrUsername = $apikeyOrUsername;
        $this->password = $password;

        // get Port from url
        $defaultPorts = array(
            'http' => 80,
            'https' => 443,
        );

        $tmp = parse_url($this->url);

        if (isset($tmp['port'])) {
            $this->port = $tmp['port'];
        } elseif (isset($tmp['scheme']) && array_key_exists($tmp['scheme'], $defaultPorts)) {
            $this->port = $defaultPorts[$tmp['scheme']];
        } else {
            $this->port = $defaultPorts['http'];
        }

        // =>
        $this->impersonateUser = null;
        $this->httpHeadersNames = array();
        $this->httpHeaders = array();
    }

    /**
     * Sets to an existing username so api calls can be
     * impersonated to this user.
     */
    public function startImpersonateUser($username)
    {
        $this->impersonateUser = $username;
    }

    /**
     * Remove the user impersonate.
     */
    public function stopImpersonateUser()
    {
        $this->impersonateUser = null;
    }

    /**
     * Create and send a GET request.
     */
    public function requestGet($path)
    {
        return $this->request('get', $path);
    }

    /**
     * Create and send a POST request.
     */
    public function requestPost($path, $body)
    {
        return $this->request('post', $path, $body);
    }

    /**
     * Create and send a PUT request.
     */
    public function requestPut($path, $body)
    {
        return $this->request('put', $path, $body);
    }

    /**
     * Create and send a DELETE request.
     */
    public function requestDelete($path)
    {
        return $this->request('delete', $path);
    }

    /**
     * Returns status code of the last response.
     */
    public function getLastResponseStatusCode()
    {
        return $this->lastResponseStatusCode;
    }

    /**
     * Returns content type of the last response.
     */
    public function getLastResponseContentType()
    {
        return $this->lastResponseContentType;
    }

    /**
     * Returns the body of the last response.
     */
    public function getLastResponseBody()
    {
        return $this->lastResponseBody;
    }

    /**
     * Set a cURL option.
     *
     * @param int   $option The CURLOPT_XXX option to set
     * @param mixed $value  The value to be set on option
     */
    public function setCurlOption(int $option, $value)
    {
        // Headers must be handled serperatly
        if ("CURLOPT_HTTPHEADER" === $option) {
            // $value must be an array. setHttpHeaders() will enforce this.
            $this->setHttpHeaders($value);

            return;
        }

        $this->curlOptions[$option] = $value;
    }

    /**
     * Unset a cURL option.
     *
     * @param int $option The CURLOPT_XXX option to unset
     */
    public function unsetCurlOption(int $option)
    {
        // Headers must be handled serperatly
        if ("CURLOPT_HTTPHEADER" === $option) {
            $this->httpHeaders = array();
            $this->httpHeadersNames = array();

            return;
        }

        if (array_key_exists($option, $this->curlOptions)) {
            unset($this->curlOptions[$option]);
        }
    }

    /**
     * Set multiple HTTP headers.
     */
    private function setHttpHeaders(array $headers)
    {
        foreach ($headers as $header) {
            $values = explode(':', $header, 2);

            // Ignore invalid header
            if (count($values) < 2) {
                continue;
            }

            $this->setHttpHeader(trim($values[0]), trim($values[1]));
        }
    }

    /**
     * Set a HTTP header.
     */
    private function setHttpHeader($name, $value)
    {
        $this->unsetHttpHeader($name);

        $this->httpHeadersNames[strtolower($name)] = $name;
        $this->httpHeaders[$name] = $value;
    }

    /**
     * Unset a HTTP header.
     */
    private function unsetHttpHeader($name)
    {
        $headerId = strtolower($name);

        if (array_key_exists($headerId, $this->httpHeadersNames)) {
            unset($this->httpHeaders[$this->httpHeadersNames[$headerId]]);
            unset($this->httpHeadersNames[$headerId]);
        }
    }

    /**
     * @throws ClientException If anything goes wrong on curl request
     */
    private function request($method, $path, $body = "")
    {
        if($body === null) $body = '';
        $this->lastResponseStatusCode = 0;
        $this->lastResponseContentType = '';
        $this->lastResponseBody = '';

        $curl = $this->createCurl($method, $path, $body);

        $response = curl_exec($curl);

        $curlErrorNumber = curl_errno($curl);

        if (CURLE_OK !== $curlErrorNumber) {
            // $e = new ClientException(curl_error($curl), $curlErrorNumber);
            curl_close($curl);
            echo "curlError: $curlErrorNumber: ".curl_error($curl) . "\n";
            return "Error: $curlErrorNumber";
            // throw $e;
            // throw new Exception("UNKNOWN");
        }

        $this->lastResponseBody = (false === $response) ? '' : $response;
        $this->lastResponseStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        $possibleContentType = curl_getinfo($curl, CURLINFO_CONTENT_TYPE);

        if (is_string($possibleContentType)) {
            $this->lastResponseContentType = $possibleContentType;
        }

        curl_close($curl);

        return $this->lastResponseStatusCode < 400;
    }

    /**
     * Prepare the request by setting the cURL options.
     *
     * @return resource a cURL handle on success, <b>FALSE</b> on errors
     */
    private function createCurl($method, $path, $body = "")
    {
        if($body === null) $body = '';
        // General cURL options
        $curlOptions = array(
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, // use HTTP 1.1
            CURLOPT_PORT => $this->port,
        );

        // Merge custom curl options
        // $curlOptions = array_replace($curlOptions, $this->curlOptions);

        // Host and request options
        $curlOptions[CURLOPT_URL] = $this->url.$path;

        // Set the HTTP request headers
        $curlOptions[CURLOPT_HTTPHEADER] = $this->createHttpHeader($path);

        unset($curlOptions[CURLOPT_CUSTOMREQUEST]);
        unset($curlOptions[CURLOPT_POST]);
        unset($curlOptions[CURLOPT_POSTFIELDS]);
        switch ($method) {
            case 'post':
                $curlOptions[CURLOPT_POST] = 1;
                if ($this->isUploadCall($path) && $this->isValidFilePath($body)) {
                    @trigger_error('Uploading an attachment by filepath is deprecated, use file_get_contents() to upload the file content instead.', E_USER_DEPRECATED);

                    $file = fopen($body, 'r');
                    $size = filesize($body);
                    $filedata = fread($file, $size);

                    $curlOptions[CURLOPT_POSTFIELDS] = $filedata;
                    $curlOptions[CURLOPT_INFILE] = $file;
                    $curlOptions[CURLOPT_INFILESIZE] = $size;
                } elseif (isset($body)) {
                    $curlOptions[CURLOPT_POSTFIELDS] = $body;
                }
                break;
            case 'put':
                $curlOptions[CURLOPT_CUSTOMREQUEST] = 'PUT';
                if (isset($body)) {
                    $curlOptions[CURLOPT_POSTFIELDS] = $body;
                }
                break;
            case 'delete':
                $curlOptions[CURLOPT_CUSTOMREQUEST] = 'DELETE';
                break;
            default: // GET
                break;
        }

        // Set or reset mandatory curl options
        $curlOptions = array_replace($curlOptions, array(
            CURLOPT_VERBOSE => 0,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => 1,
        ));

        $curl = curl_init();

        // Set all cURL options to the current cURL resource
        curl_setopt_array($curl, $curlOptions);

        // print_r($curlOptions);
        // print_r(curl_getinfo($curl));
        return $curl;
    }

    private function createHttpHeader($path)
    {
        // Additional request headers
        $httpHeaders = array(
            'Expect: ',
        );

        // Redmine specific headers
        if (null !== $this->impersonateUser && !array_key_exists(strtolower('X-Redmine-Switch-User'), $this->httpHeadersNames)) {
            $httpHeaders[] = 'X-Redmine-Switch-User: '.$this->impersonateUser;
        }

        // Set Authentication header
        // @see https://www.redmine.org/projects/redmine/wiki/Rest_api#Authentication
        if (null === $this->password && !array_key_exists(strtolower('X-Redmine-API-Key'), $this->httpHeadersNames)) {
            $httpHeaders[] = 'X-Redmine-API-Key: '.$this->apikeyOrUsername;
        } else {
            if (!array_key_exists(strtolower('Authorization'), $this->httpHeadersNames)) {
                // Setting Header "Authorization: Basic base64" is the same as
                // $this->setCurlOption(CURLOPT_USERPWD, "$username:$password")
                // @see https://stackoverflow.com/a/26285941
                $httpHeaders[] = 'Authorization: Basic '.base64_encode($this->apikeyOrUsername.':'.$this->password);
            }
        }

        // prepare custom headers
        $customHttpHeaders = array();

        foreach ($this->httpHeaders as $headerName => $headerValue) {
            $customHttpHeaders[] = $headerName.': '.$headerValue;
        }

        // Merge custom headers
        $httpHeaders = array_merge($httpHeaders, $customHttpHeaders);

        // Now set or reset mandatory headers

        // Content type headers
        $tmp = parse_url($this->url.$path);

        if ($this->isUploadCall($path)) {
            $httpHeaders[] = 'Content-Type: application/octet-stream';
        } elseif ('json' === substr($tmp['path'], -4)) {
            $httpHeaders[] = 'Content-Type: application/json';
        } elseif ('xml' === substr($tmp['path'], -3)) {
            $httpHeaders[] = 'Content-Type: text/xml';
        }

        return $httpHeaders;
    }
    
    private function isUploadCall($path)
    {
        $path = strtolower($path);

        return (false !== strpos($path, '/uploads.json')) || (false !== strpos($path, '/uploads.xml'));
    }

    private function isValidFilePath($body)
    {
        return
            '' !== $body
            && strlen($body) <= \PHP_MAXPATHLEN
            && is_file(strval(str_replace("\0", '', $body)))
        ;
    }
}