<?php
    // my collection of common functions
    // =================================
    
    session_start();//Start new or resume existing session
    $oO = array();
    // $oO["GET"] = $_GET; 
    // $oO["POST"] = $_POST; 
    // $oO["COOKIES"] = $_COOKIE;
    $oO["SESSION"] = $_SESSION;
    $oO["test"] = 2;
    // $oO["SERVER"] = $_SERVER;
    // $oO["GLOBALS"] = $GLOBALS;
    // $oO["REQUEST"] = $_REQUEST;
    // $oO["ENV"] = $_ENV;
    // $oO["FILES"] = $_FILES;
    // $oO["version_php"] =  phpversion();
    // $oO["version_apache"] =  apache_get_version();
    // $oO["version_SQLite3"] =  SQLite3::version();

    echo(json_encode($oO));
?>