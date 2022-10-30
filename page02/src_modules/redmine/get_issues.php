<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    // ref: https://github.com/kbsali/php-redmine-api
    // $apiKey = "3b96f9078763fcf1fc0bff57a44d937df6293c44";//mand
    $apiKey = "a649e2afc2b0272759256dba8c901ad1c9f88316";//quyen
    $url = "http://172.29.143.22:8080";
    
    $lastIndex = -1;//index starts from 0
    $limit = 100;
    $offset = 0;
    $childURL = "issues.json";//
    $opMode = "sum";//sum: return summary info | org: return original data
    
    $dbg = 0;
    // $lastIndex = 124;
    
    if(isset($_GET["apiKey"])) $apiKey = $_GET["apiKey"];

    if(isset($_GET["offset"])) $offset = $_GET["offset"];
    if(isset($_GET["limit"])) $limit = $_GET["limit"];
    if(isset($_GET["lastIndex"])) $lastIndex = $_GET["lastIndex"];
    
    if(isset($_GET["childURL"])) $childURL = $_GET["childURL"];
    if(isset($_GET["opMode"])) $opMode = $_GET["opMode"];
    
    // consider executed as scripting at server side
    if($argc > 1){
        $options = getopt("",array("offset:","limit:","lastIndex:","childURL:","opMode:","apiKey:"));
        if(isset($options["offset"])) $offset = $options["offset"];
        if(isset($options["limit"])) $limit = $options["limit"];
        if(isset($options["lastIndex"])) $lastIndex = $options["lastIndex"];
        if(isset($options["childURL"])) $childURL = $options["childURL"];
        if(isset($options["opMode"])) $opMode = $options["opMode"];
        if(isset($options["apiKey"])) $apiKey = $options["apiKey"];
    }
    // return;
    
    ////////////////////////////////////////////////////
    require_once "src/NativeCurlClient.php";
    $curlClient = new \Redmine\Client\NativeCurlClient(
        $url,
        $apiKey,
        null
    );
    ////////////////////////////////////////////////////

    if($opMode === "upHistory"){
        // checking whether it needs updated
        // 1. check if the flag updating is on
        if(file_exists("./data/flg_updating.txt")){
            echo json_encode(array(
                "regTime" => time(),
                "outObj" => array(
                    "result" => "flg_updating on.",
                ),
            ));
            return;
        }else{
            // 2. check if the last time updating is more than 15min
            $chkFile = "./data/last_updating.json";
            if(file_exists($chkFile)){
                if($fh = fopen($chkFile, "r")){
                    $tmpObj = json_decode(fread($fh, filesize($chkFile)), true);
                    fclose($fh);
                    if(time() - $tmpObj["regTime"] < 15 * 60){
                        echo json_encode(array(
                            "regTime" => time(),
                            "outObj" => array(
                                "result" => "regTime less than 15min",
                            ),
                        ));
                        return;
                    }else{}
                } else { }
            }else{}
        }
        // register the flg_updating.txt
        if(! $fh = fopen("./data/flg_updating.txt","w")){
            //cannot open for writing
            echo json_encode(array(
                "regTime" => time(),
                "outObj" => array(
                    "result" => "Cannot register flg_updating.",
                ),
            ));
            return;
        }else{
            fwrite($fh,"ongoing");
            fclose($fh);
        }
    }

    $time_start = microtime(true);
    //echo $curlClient->requestGet("/issues/20409.json");
    // echo json_encode($curlClient->requestGet("/issues.json"));

    $dataAll = array();
    $dataThis = array();
    
    $allUsers = array();
    $outObj = array();
    $regItems = array();//for debugging
    
    $lastTotalCount = 0;
    
    $_limit = 100;
    if($lastIndex > -1 && $lastIndex < $limit) $limit = $lastIndex - $offset + 1;
    while($limit > 0){
        if($limit > 100){
            $_limit = 100;
            $limit -= 100;
        }else{
            $_limit = $limit;
            $limit = 0;
        }
        $modURL = "?limit=${_limit}&offset=$offset";
        $curlClient->requestGet("/" . $childURL .$modURL);
        $dataThis = json_decode($curlClient->getLastResponseBody(),true);
        
        $offset += $_limit;
        if(array_key_exists("total_count",$dataThis)){
            if($offset >= $dataThis["total_count"]){
                $limit = 0;
            }else{
                if($lastIndex > -1 && $lastIndex < $dataThis['total_count']){
                    $limit = $lastIndex - $offset + 1;
                }else{
                    $limit = $dataThis["total_count"] - $offset;
                }
            }
            $lastTotalCount = $dataThis['total_count'];
        }
        // $dataAll = array_merge_recursive($dataAll, $dataThis);
        ///////////////////////////////
        if($opMode === "sum" || $opMode === "upHistory"){
            manipulate_issues_data($dataThis,$allUsers,$outObj,$regItems);
        }elseif($opMode === "org"){
            $outObj = array("received" => $dataThis);
        }else{
        }
        ///////////////////////////////
        if($dbg){
            echo "limit='$limit' offset='$offset' limit='$limit' total_count=". $dataThis['total_count'] 
            . " count=" . count($dataThis["issues"]) 
            . " consumed:" . number_format(memory_get_usage()/(1024*1024),1)  . "Mb"
            . " " . number_format(microtime(true) - $time_start,1) . "(sec)"
            . "\n";
            // if($offset >= $dbg * 100) $limit = 0; //testing only
        }
        if($lastIndex > -1 && $offset >= $lastIndex) $limit = 0;//max reached
    }
    if(!$dbg){
        // inform the http request
        if($opMode === "sum" || $opMode === "org"){
            echo json_encode(array(
                "regTime" => time(),
            #    "allUsers" => $allUsers,
                "outObj" => $outObj,
                "total_count" => $lastTotalCount,
                "offset" => $offset,
            #    'regItems' => $regItems,
                "dbg_inputs" => array(
                    "opMode" => $opMode,
                    "childURL" => $childURL,
                    "apiKey" => $apiKey
                ),
            ));
            return;
        }elseif($opMode === "upHistory"){
            //
            $status = "done";
            //write to specific decided file
            $fh = null;
            if(!$fh = fopen("./data/sum_issues.json","w")){
                $status = "Cannot open for writing to file.";
            }else{
                fwrite($fh,json_encode(
                    array(
                        "regTime" => time(),
                        "outObj" => $outObj,
                        "total_count" => $lastTotalCount,
                        "offset" => $offset,
                        )
                ));
                fclose($fh);
            }
            //delete the flagging file
            if(file_exists("./data/flg_updating.txt")) unlink("./data/flg_updating.txt");
            // register the date-time
            $fh = null;
            if(!$fh = fopen("./data/last_updating.json","w")){
                $status = "Cannot open for writing to file.";
            }else{
                fwrite($fh,json_encode(
                    array(
                        "regTime" => time()
                    )
                ));
                fclose($fh);
            }
            // and inform user about the finishing
            echo json_encode(array(
                "regTime" => time(),
            #    "allUsers" => $allUsers,
                "outObj" => array(
                    "result" => $status,
                ),
            # "total_count" => $lastTotalCount,
            #   "offset" => $offset,
            #    'regItems' => $regItems,
                "dbg_inputs" => array(
                    "opMode" => $opMode,
                    "childURL" => $childURL,
                    "apiKey" => $apiKey
                ),
            ));
            return;
        }else{
            //unknown request from client
            echo json_encode(array(
                "regTime" => time(),
            #    "allUsers" => $allUsers,
                "outObj" => array(
                    "result" => "unknown request",
                ),
            # "total_count" => $lastTotalCount,
            #   "offset" => $offset,
            #    'regItems' => $regItems,
                "dbg_inputs" => array(
                    "opMode" => $opMode,
                    "childURL" => $childURL,
                    "apiKey" => $apiKey
                ),
            ));
            return;
        }
    }else{}

    ////////////////////////////////////////////////////
    function manipulate_issues_data($data,&$forUsers,&$forPrjs,&$regItems){
        foreach($data["issues"] as $issue){
            // =>
            $userId = $issue['author']['id'];
            $userName = $issue['author']['name'];
            if(isset($issue['assigned_to']) && isset($issue['assigned_to']['id']) && isset($issue['assigned_to']['name'])){
                $userId = $issue['assigned_to']['id'];
                $userName = $issue['assigned_to']['name'];
            }
            if(!isset($forUsers[$userId])){
                $forUsers[$userId]['count'] = 0;
                $forUsers[$userId]['name'] = $userName;
            }
            $forUsers[$userId]['count']++;
            
            // =>
            if(!isset($forPrjs[$issue['project']['name']])){
                $forPrjs[$issue['project']['name']] = array();
                $forPrjs[$issue['project']['name']]['id'] = $issue['project']['id'];
                $forPrjs[$issue['project']['name']]['total'] = 0;
                $forPrjs[$issue['project']['name']]['emptyMAC'] = 0;
                $forPrjs[$issue['project']['name']]['MAC<31'] = 0;
                $forPrjs[$issue['project']['name']]['MAC=31-90'] = 0;
                $forPrjs[$issue['project']['name']]['MAC>90'] = 0;
                $forPrjs[$issue['project']['name']]['emptyMAC_issues'] = array();
                $forPrjs[$issue['project']['name']]['MAC<31_issues'] = array();
                $forPrjs[$issue['project']['name']]['MAC=31-90_issues'] = array();
                $forPrjs[$issue['project']['name']]['MAC>90_issues'] = array();
            }
            $forPrjs[$issue['project']['name']]['total']++;
            $MACDateStr = "";
            foreach ($issue['custom_fields'] as $field){
                if($field['name'] === 'Y3. Monthly Asset Check Date'){
                    $MACDateStr = $field["value"];
                }else{}
            }
            if($MACDateStr === ""){
                $forPrjs[$issue['project']['name']]['emptyMAC']++;
                array_push($forPrjs[$issue['project']['name']]['emptyMAC_issues'],$issue['id']);
            }else{
                $MACDateObj = date_create($MACDateStr);
                $diffDays = date_diff($MACDateObj,date_create());
                if($diffDays->format("%r%a") - 31 < 0){
                    $forPrjs[$issue['project']['name']]['MAC<31']++;
     //  array_push($forPrjs[$issue['project']['name']]['MAC<31_issues'],$issue['id']);
                }elseif($diffDays->format("%r%a") - 91 < 0){
                    $forPrjs[$issue['project']['name']]['MAC=31-90']++;
         array_push($forPrjs[$issue['project']['name']]['MAC=31-90_issues'],$issue['id']);
                }else{
                    $forPrjs[$issue['project']['name']]['MAC>90']++;
         array_push($forPrjs[$issue['project']['name']]['MAC>90_issues'],$issue['id']);
                }
            }
            
            // =>
            array_push($regItems,$issue['id']);
        }
    }
?>