<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once "../../src_modules/login/users_sqlite3_OTP.class.php";
    register_shutdown_function("my_handler_fatal");
    $user = new User_by_sqlite3;

    
    // return control data for generation of login form
    $oO = array();

    if(!isset($_REQUEST) || !isset($_REQUEST["file"])){
        $oO['rtnCode'] = "NG: No specific file.";
    }elseif($user->get_role() !== "Admin" || $user->login_email !== "man.duong.ym@renesas.com"){
        $oO['rtnCode'] = "NG: Not authorized.";
    }else{
        try {
            if(0777 === (fileperms($_REQUEST["file"]) & 0777)){
                $oO["chmod_status"] = chmod($_REQUEST["file"],0644);
            }else{
                $oO["chmod_status"] = chmod($_REQUEST["file"],0777);
            }
            $oO["rtnCode"] = "OK";
        }catch(Exception $e){
            $oO["rtnCode"] = $e;
        }
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>