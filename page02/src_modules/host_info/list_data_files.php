<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    register_shutdown_function("my_handler_fatal");
    date_default_timezone_set("Asia/Ho_Chi_Minh");

    // return control data for generation of login form
    $oO = array();
    
    $oO["cntData"][0] = array("File","Owner","Perm","Size","Last mod.");
    $aoF = array();
    foreach(glob("../../data/*/*") as $file) array_push($aoF,$file);
    foreach($aoF as $file){
        $stat = stat($file);
        $owner = $stat["uid"];
        if(function_exists('posix_getpwuid')){
            $tmpv = posix_getpwuid($stat[4]);
            if($tmpv) $owner = $tmpv["name"];
            // $owner = posix_getpwuid($stat[4])['name'];
        }
        $size = $stat["size"]; $size = sprintf("%.1f",$size/(1024)) . "KB";
        $perm = decoct(fileperms($file) & 0777);
        $mtime = date("M d Y H:i:s",$stat["mtime"]);
        array_push($oO["cntData"],array($file,$owner,$perm,$size,$mtime));
    }
    
    $oO["rtnCode"] = "OK";

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>