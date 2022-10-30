<?php
    //
    require_once("../../src_main/my.php");
    // register_shutdown_function("my_handler_fatal",array());
    
    require_once("../../src_modules/login/users_file.class.php");
    
    function chk_mysql_connection(){
        // $servername = "localhost";
        // $username = "root";
        // $password = "Pass1234";
        $servername = "localhost";
        $username = "";
        $password = "";
        try {
            // $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
            $conn = new PDO("mysql:host=$servername", $username, $password);
            // $conn = new PDO("sqlite:host=$servername", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // $oO["rtnCode"] = "Connected successfully";
            $conn = null;
            return 1;#"OK: can connect to mysql.";
        } catch(PDOException $e) {
            // $oO["rtnCode"] = "Connection failed: " . $e->getMessage();
            return $e->getCode();#"Failed: " . $e->getMessage();
        }
    };

    $oO = array();
    $oO["rtnCode"] = "OK";

    $oO['mysql_connect_check'] = chk_mysql_connection();
    $oO['simple_login_json_check'] = User_by_file::chk_login_json_data();

    $user = new User_by_file;
    $oO["login_email"] = $user->login_email;
    $oO["status1"] = $user->status;
    // $oO["remove_status"] = $user->remove_user();
    $oO["reg_status1"] = $user->reg_user();
    $oO["status2"] = $user->status;
    $oO["reg_status2"] = $user->remove_user();
    $oO["status3"] = $user->status;
    $oO["user_info"] = $user->get_user_info();
    
    $oO["mand"] = $user->manduong("removeAllFiles");
    
    //last command to accumulate output before sendingF
    $oO["FATAL"] = error_get_last();
    echo(json_encode($oO));
?>