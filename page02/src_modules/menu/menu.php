<?php
    // return controlling data for generation of menu at init/ or changed at sequences
    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["cntData"] = array();

    array_push($oO["cntData"],array("position" => "rightright", "text" => "", "icon" => "bi-box-arrow-left", "tooltip" => "Log in by OTP", "onclick" => "dsp_login_form('OTP')", "id" => "btn_login_otp"));
    array_push($oO["cntData"],array("position" => "rightright", "text" => "", "icon" => "bi-box-arrow-right", "tooltip" => "Log out", "onclick" => "my_logout()", "id" => "btn_logout"));
    // array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-box-arrow-left", "tooltip" => "Log in", "onclick" => "dsp_login_form()", "id" => "btn_login"));
    array_push($oO["cntData"],array("position" => "right", "text" => "test", "icon" => "", "tooltip" => "my test function", "onclick" => "myTest()"));
    // =>
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    $user = new User_by_sqlite3;
    
    if($user->login_email === "man.duong.ym@renesas.com" || preg_match('/Admin.*|SuperUser/',$user->role)){
        array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-person-fill-exclamation", "tooltip" => "Menu for admin", "onclick" => "dsp_menu_admin(this)"));
    }

    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-clock-history", "tooltip" => "PL team's activities by timeline", "onclick" => "dsp_activities_by_timeline(this)"));
    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "assets/PVPI_logo.svg", "tooltip" => "Menu for PVPI", "onclick" => "dsp_menu_PVPI(this)"));
    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "assets/worldcup/2022_FIFA_World_Cup_mod.svg", "tooltip" => "Menu for Worldcup competition.", "onclick" => "dsp_menu_worldcup(this)"));

    
    // if($user->login_email === "man.duong.ym@renesas.com"){
    //     $oO["testMenu"] = array();
    //     array_push($oO["testMenu"],array("text" => "Remove all"             , "getCmd" => "removeAllFiles" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "Remove Global Setting"  , "getCmd" => "removeUserGlobal" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "Init Global Setting"    , "getCmd" => "init_user_global_setting" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "All Users"              , "getCmd" => "listUsers" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "[SQL] Remove all"       , "getCmd" => "sql_removeAllFiles" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "[SQL] Remove Global Setting"  , "getCmd" => "sql_removeUserGlobal" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "[SQL] Init Global Setting"    , "getCmd" => "sql_init_user_global_setting" , "Sfunc" => "src_modules/test/md_command.php"));
    //     // array_push($oO["testMenu"],array("text" => "[SQL] user-info"        , "getCmd" => "sql_get_user_info" , "Sfunc" => "src_modules/test/md_command.php"));
    //     // array_push($oO["testMenu"],array("text" => "[SQL] reg-test-acc"     , "getCmd" => "sql_reg_test" , "Sfunc" => "src_modules/test/md_command.php"));
    //     // array_push($oO["testMenu"],array("text" => "[SQL] rm-test-acc"      , "getCmd" => "sql_rm_test" , "Sfunc" => "src_modules/test/md_command.php"));
    //     // array_push($oO["testMenu"],array("text" => "[SQL] rm-test-acc complete"     , "getCmd" => "sql_rm_test_complete" , "Sfunc" => "src_modules/test/md_command.php"));
    //     array_push($oO["testMenu"],array("text" => "[SQL] All Users"     , "getCmd" => "sql_all_users" , "Sfunc" => "src_modules/test/md_command.php"));
    // }

    echo(json_encode($oO));
?>