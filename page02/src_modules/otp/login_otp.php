<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
    // => check if data is valid #1
    
    require_once '../../src_main/my.php';
    require_once '../../src_modules/login/session.php';
    register_shutdown_function("my_handler_fatal");

    require_once 'otp.class.php';
    require_once 'mail_function.php';

    $defOTPf = "../../data_manual/list_user_w_def_OTP.txt";#file holding default OTP incase there is problem with OTP sending email, this is very dangerous

    if(array_count_values($_POST) === 0) {echo "{}";return 0; }
    if(!isset($_POST["login_email"])) {echo "{}";return 0;}
    if(!isset($_POST["login_OTP"])) {echo "{}";return 0;}
    
    $oObj = array();
    $oObj["OTP"] = "Not proceeded yet.";
    // $oObj["login_email"] = $_POST["login_email"];

    session_start();
    $otp = new Sakib\OTP;

    if($_POST["login_OTP"] === ""){
        // reset all the session then start a new session for this login-info
        if(isset($_SESSION["login_email"]))  my_destroy_session();
        if(isset($_SESSION["email"]))  my_destroy_session();
        if(!isset($_SESSION)) session_start();

        // register the email and ask for OTP
        $oObj["OTP"] = "no OTP";
        $code = $otp->generateRandomString(6);
        $email = $_POST['login_email'];
        $hash = $otp->CreateOTP($email,$code);
        $_SESSION['email'] = $email;
        $_SESSION['hash'] = $hash;
        # => sending email
        $oObj["mailStt"] = sendOTP($email,$code);//send the code via email
        $oObj["OTP"] = "Sent";//OTP sent
    }else{
        // register the email and the received OTP (or so it is)
        $oObj["OTP"] = "";
        $flgInit = false;
        if(isset($_SESSION)){
            if(isset($_SESSION["hash"]) && isset($_SESSION["email"])) $flgInit = true;
            if(!isset($_SESSION["hash"])) $oObj["OTP"] .= "NG:missing-hash ";
            if(!isset($_SESSION["email"])) $oObj["OTP"] .= "NG:missing-email ";
            $oObj["SESSION"] = $_SESSION;
        }else{
            $oObj["OTP"] = "NG: missing SESSION.";
        }
        // => try to check and overwrite behavior if there is manual def OTP
        $defCode = "";
        if(file_exists($defOTPf) && isset($_SESSION["email"])){
            $FH = fopen($defOTPf,"r");
            if($FH){
                while(!feof($FH)){
                    $tmpa = explode(",",fgets($FH));
                    if($tmpa[0] === $_SESSION["email"]){
                        $defCode = preg_replace('/[\n\r]/','',$tmpa[1]);
                        $flgInit = true;
                    }
                }
                fclose($FH);
            }
        }else{}
        $oObj["flgInit"] = $flgInit;
        $oObj["defCode"] = $defCode;

        if($flgInit === true){
            $email = $_SESSION['email'];
            $hash = "n/a";if(isset($_SESSION['hash'])) $hash = $_SESSION['hash'];
            $code = $_POST['login_OTP'];
            
            $hash = $otp->VerifyOTP($email,$code,$hash);
            
            if($hash === "MATCHED" || ($defCode !== "" && $code === $defCode)){
                $oObj["OTP"] = "OK";
                session_destroy();// comment out to keep the info in SESSION
                session_start();// start a new session entry and reg the info
                $_SESSION["login_email"] = $email;
                $_SESSION["logStatus"] = "OK";
                $_SESSION["logMethod"] = "OTP";
                $_SESSION["logStart"] = time();

                // => register to system
                require_once "../../src_modules/login/users_sqlite3_OTP.class.php";
                $user = new User_by_sqlite3;
                if($user->status !== "Already") $user->reg_user();
                $oObj["user_info"] = $user->get_user_info();
            }else{
                $oObj["OTP"] = "NG:mismatch";
            }
        }
    }

    // => check if data is already existed
    echo json_encode($oObj);
?>