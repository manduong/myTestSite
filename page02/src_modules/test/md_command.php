<?php
    //
    require_once("../../src_main/my.php");
    // register_shutdown_function("my_handler_fatal",array());
    
    require_once("../../src_modules/login/users_file.class.php");
    require_once("../../src_modules/login/users_sqlite3.class.php");
    $user = new User_by_file;
    $user2 = new User_by_sqlite3;

    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["tgt"] = ""; if(isset($_REQUEST["input"])) $oO["tgt"] = $_REQUEST["input"];
    $oO["cmd"] = ""; if(isset($_REQUEST["command"])) $oO["cmd"] = $_REQUEST["command"];
    $oO["GET"] = $_GET;
    $oO["POST"] = $_POST;
    
    if(preg_match("/^sql_/",$oO["cmd"])){
        $oO["cmdRtnCode"] = $user2->manduong($oO["cmd"],$oO["tgt"]);
    }else{
        $oO["cmdRtnCode"] = $user->manduong($oO["cmd"]);
    }
    
    //last command to accumulate output before sendingF
    $oO["FATAL"] = error_get_last();
    echo(json_encode($oO));
?>