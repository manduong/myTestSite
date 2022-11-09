<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once("../../src_modules/login/users_sqlite3.class.php");
    $user = new User_by_sqlite3;

    // return control data for generation of login form
    $oO = array();
    
    $oO["cntData"] = array();
    $oO["formAction"] = "src_modules/login/act_update_user_info_sqlite.php";
    if($user->role === "Admin" || $user->role === "SuperUser") {
        array_push($oO["cntData"],array("label" => "Email", "type" => "email", "name" => "login_email"));
    }else{
        array_push($oO["cntData"],array("label" => "Email", "type" => "email", "name" => "login_email","disabled" => true));
    }
    array_push($oO["cntData"],array("label" => "Called Name", "type" => "text", "name" => "user_name"));
    array_push($oO["cntData"],array("label" => "More info", "type" => "textarea", "name" => "moreInfo"));
    if($user->role === "Admin" || $user->role === "SuperUser") {
        array_push($oO["cntData"],array("label" => "Role", "type" => "select", "name" => "role", "options" => array("Admin","SuperUser","User","Guess")));
    }
    array_push($oO["cntData"],array("label" => "Modify", "type" => "submit"));

    $oO["rtnCode"] = "OK";

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>