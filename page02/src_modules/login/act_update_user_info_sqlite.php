<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);
    
    $oO = array();
    $oO["rtnCode"] = "OK";

    if(!isset($_POST)){$oO["rtnCode"] = "NG: no POST";echo(json_encode($oO));return;}
    if(!isset($_POST["login_email"])){$oO["rtnCode"] = "NG: no POST/login_email";echo(json_encode($oO));return;}

    require_once("../../src_modules/login/users_sqlite3.class.php");
    $user = new User_by_sqlite3;

    $oO["reg_user_status"] = $user->reg_user($_POST["login_email"],$_POST);
    $oO["testData"]  = $_POST;

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>