<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("worldcup_sqlite3.class.php");
    register_shutdown_function("my_handler_fatal");
    $worldcup = new WorldCup_by_sqlite3;
    date_default_timezone_set("Asia/Ho_Chi_Minh");

    // return control data for generation of login form
    $oO = array();
    $oO["formAction"] = "src_modules/worldcup/rtn_data_n_reg_bet_score.php";
    if(!isset($_POST) || count($_POST) === 0){
        if(isset($_GET) && isset($_GET["id"])){
            // GET with id, modifying form needed
            $oO["cntData"] = $worldcup->get_def_bet_score($_GET["id"]);
            $oO["match_id"] = $_GET["id"];
            $oO["rtnCode"] = "OK";
        }else{
            // => no GET, new register
            $oO["rtnCode"] = "NG: no match ID";
        }
    }else{
        if(isset($_POST) && isset($_POST["match_id"])){
            $oO["reg_def_bet_score_status"] = $worldcup->reg_def_bet_score($_POST["match_id"],$_POST);//reg for existed
        }else{
            $oO["reg_def_bet_score_status"] = "NG: no match ID";
        }
        $oO["match_id"] = $_POST["match_id"];
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>