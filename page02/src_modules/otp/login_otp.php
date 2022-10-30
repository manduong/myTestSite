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
        sendOTP($email,$code);//send the code via email
        $oObj["OTP"] = "Sent";//OTP sent
        # => testing
        // $oObj['hash'] = $hash;
        // $oObj['code'] = $code;
    }else{
        // register the email and the received OTP (or so it is)
        $oObj["OTP"] = "NG";
        if(!isset($_SESSION)) session_start();
        if(!isset($_SESSION['hash'])){
            $oObj["OTP"] = "NG:already-finished-OTP-missing-hash";
        }else if(!isset($_SESSION['email'])){
            $oObj["OTP"] = "NG:already-finished-OTP-missing-email";
        }else{
            $email = $_SESSION['email'];
            $hash = $_SESSION['hash'];
            $code = $_POST['login_OTP'];
            
            $hash = $otp->VerifyOTP($email,$code,$hash);
            
            if($hash === "MATCHED")
            {
                $oObj["OTP"] = "OK";
                session_destroy();// comment out to keep the info in SESSION
                
                // start a new session entry and reg the info
                session_start();
                $_SESSION["login_email"] = $email;
                $_SESSION["logStatus"] = "OK";
                $_SESSION["logMethod"] = "OTP";
                $_SESSION["logStart"] = time();

                // => register to system
                require_once "../../src_modules/login/users_file.class.php";
                $user = new User_by_file;
                $oObj["status_1"] = $user->status;
                $user->reg_user();
                $oObj["status_2"] = $user->status;
                $oObj["user_info"] = $user->get_user_info();
            }
            else
            {
                $oObj["OTP"] = "NG:mismatch";
                $error = true;
            }
            # => testing
            // $oObj['hash'] = $hash;
            // $oObj['code'] = $code;
        }
    }

    // => check if data is already existed
    echo json_encode($oObj);
?>