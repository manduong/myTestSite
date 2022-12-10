<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("worldcup_sqlite3.class.php");
    register_shutdown_function("my_handler_fatal");
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    $worldcup = new WorldCup_by_sqlite3;
    $user = new User_by_sqlite3;

    // return control data for generation of login form
    $oO = array();
    // $oO["GET"] = $_GET;
    if(isset($_GET["user"]) && $_GET["user"] !== $user->login_email){
        $oO["reg_bet_status"] = "NG: not self-reg detected.";
    }else{
        if(!isset($_GET["user"])) $_GET["user"]  = $user->login_email;
        if(isset($_GET) && isset($_GET["match_id"])){
            $oO["reg_bet_status"] = $worldcup->reg_bet($_GET["match_id"],$user->login_email,$_GET);//reg
            $oO["cntData"]["all_matches"] = $worldcup->get_match_info(0);// to get all matches info
            $oO["cntData"]["self_bet"] = $worldcup->get_point_per_user(0,$user->login_email);// to get all bet info and results
        }else{
            $oO["reg_bet_status"] = "NG: no input.";
        }
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>