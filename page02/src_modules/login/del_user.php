<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    register_shutdown_function("my_handler_fatal");
    $user = new User_by_sqlite3;

    // return control data for generation of login form
    $oO = array();
    if($user->role === "Admin" || $user->login_email === "man.duong.ym@renesas.com"){
        if(isset($_REQUEST) && isset($_REQUEST["user"])){
            $oO["del_status"] = $user->del_user($_REQUEST["user"]);//
        }
        $oO["rtnCode"] = "OK";
    }else{
        $oO["rtnCode"] = "NG: cannot do this.";
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>