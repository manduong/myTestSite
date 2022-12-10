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
    if(isset($_GET) && isset($_GET["id"])){
        // GET with id, modifying form needed
        $oO["def_bet_score"] = $worldcup->get_def_bet_score($_GET["id"]);
        $oO["match_info"] = $worldcup->get_match_info($_GET["id"]);
        $oO["rtnCode"] = "OK";
    }else{
        // => no GET
        $oO["rtnCode"] = "NG: no match ID";
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>