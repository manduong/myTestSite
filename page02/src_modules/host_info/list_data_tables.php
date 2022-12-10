<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    register_shutdown_function("my_handler_fatal");

    // return control data for generation of login form
    $oO = array();
    
    $oO["cntData"][0] = array("File","TableName");
    foreach(glob("../../data/by_sqlite3/*") as $file){
        $db = new SQLite3($file);
        if($db){
            $sql = "SELECT * from sqlite_master WHERE type='table'";
            $query = $db->query($sql);
            if($query){
                while($fA = $query->fetchArray(SQLITE3_ASSOC)){
                    array_push($oO["cntData"],array($file,$fA["tbl_name"]));
                }
            }else{}
            $db->close();
        }else{}
    }
    
    $oO["rtnCode"] = "OK";

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>