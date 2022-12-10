<?php
    require_once '../../src_main/my.php';
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    register_shutdown_function("my_handler_fatal");
    $oO = array();
    $user = new User_by_sqlite3;

    if(isset($_GET) && isset($_GET["login_email"]) && $_GET["login_email"] !== $user->login_email){
        $oO["user_info"] = $user->get_user_info($_GET["login_email"]);
        $oO["requested_email"] = $_GET["login_email"];
    }else{
        $oO["user_info"] = $user->get_user_info();
        $oO["requested_email"] = "this email";
    }

    $oO["this_user"] = $user->login_email;
    $oO["this_role"] = $user->role;
    echo(json_encode($oO));
?>