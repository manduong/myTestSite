<?php
    require_once("./session.php");
    $oO = array();

    // session_start();     // $oO["testData1"] = $_SESSION;
    my_destroy_session();   // $oO["testData2"] = $_SESSION;
    
    $oO["rtnCode"] = "OK";
    echo(json_encode($oO));
?>