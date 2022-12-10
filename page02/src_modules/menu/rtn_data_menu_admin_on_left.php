<?php
    // return controlling data for generation of menu at init/ or changed at sequences
    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["cntData"] = array();
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    $user = new User_by_sqlite3;

    if($user->login_email === "man.duong.ym@renesas.com" || preg_match('/Admin|SuperUser/',$user->role)){
        array_push($oO["cntData"],array("text" => "Users", "tooltip" => "Manage all users info", "cFuncN" => "dsp_users_info","sFuncN" => "./src_modules/login/rtn_users_info.php"));
    }
    
    if($user->login_email === "man.duong.ym@renesas.com" || $user->role === "Admin"){
        array_push($oO["cntData"],array("text" => "Data-files", "tooltip" => "List all data-files under data/by-sqlite3", "cFuncN" => "dsp_simple_table_4_data_files","sFuncN" => "./src_modules/host_info/list_data_files.php"));
        array_push($oO["cntData"],array("text" => "Sqlite Tables", "tooltip" => "List all tables under data/by-sqlite3", "cFuncN" => "dsp_simple_table_4_data_tables","sFuncN" => "./src_modules/host_info/list_data_tables.php"));
        array_push($oO["cntData"],array("text" => "phpinfo", "tooltip" => "phpinfo", "cFuncN" => "","sFuncN" => "./src_modules/host_info/phpinfo.html.php"));
        array_push($oO["cntData"],array("text" => "host-refresh", "tooltip" => "host info with refreshing inteval", "cFuncN" => "dsp_host_info_w_interval","sFuncN" => "./src_modules/host_info/host_info_w_interval.php"));
    }else{}

    echo(json_encode($oO));
?>