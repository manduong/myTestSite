<?php
    //
    require_once("../../src_main/my.php");
    require_once("session.php");
    register_shutdown_function("my_handler_fatal",array());
    require_once("users_sqlite3.class.php");
    $user = new User_by_sqlite3;
    
    $oO = array();
    $oO["REQUEST"] = $_REQUEST;

    if($_REQUEST["login_password"] === "" || $_REQUEST["login_email"] === ""){
        $oO["rtnCode"] = "NG: Name/Pass required.";
        echo(json_encode($oO));
        return;
    }
    if($user->get_status($_REQUEST["login_email"]) !== "Already"){
        if(!isset($_REQUEST["login_password_repeated"])){
            $oO["rtnCode"] = "NG: status='".$user->get_status($_REQUEST["login_email"])."'";
            echo(json_encode($oO));
            return;
        }
        if($_REQUEST["login_password_repeated"] === ""){
            $oO["rtnCode"] = "NG: status='".$user->get_status($_REQUEST["login_email"])."'";
            echo(json_encode($oO));
            return;
        }
        if($_REQUEST["login_password_repeated"] !== $_REQUEST["login_password"]){
            $oO["rtnCode"] = "NG: Signup Password not matched.";
            echo(json_encode($oO));
            return;
        }
    }

    $oO["rtnCode"] = "NG: No status";
    //continue to check password or to sign-up
    if($user->get_status($_REQUEST["login_email"]) === "Already"){
        $oO["test"] = "TEST";
        $oO["rtnCode"] = $user->sign_in($_REQUEST["login_email"],$_REQUEST["login_password"]) . " on Signin";
    }else{
        $oO["rtnCode"] = $user->reg_user($_REQUEST["login_email"],array()) . " on Signup.";
    }
    
    // my_destroy_session();
    if(!isset($_SESSION)) session_start();
    if(preg_match("/^OK/",$oO["rtnCode"])){
        $_SESSION["login_email"] = $_REQUEST["login_email"];//trigger for this user
        $oO["test"] = "TEST";
    }

    // $oO["status"] = $user->get_status($_REQUEST["login_email"]);
    $oO["SESSION"] = $_SESSION;
    $oO["user_info"] = $user->get_user_info();
    // 
    //
    echo(json_encode($oO));
?>