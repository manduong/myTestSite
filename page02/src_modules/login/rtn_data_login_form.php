<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    // return control data for generation of login form
    require_once("./session.php");
    $oO = array();

    
    $oO["cntData"] = array();
    if($_GET["mode"] === "OTP"){
        $oO["formAction"] = "src_modules/otp/login_otp.php";
        array_push($oO["cntData"],array("label" => "Email", "type" => "email", "name" => "login_email","onkeyup"=>"act_on_change_email_input(this)"));
        array_push($oO["cntData"],array("label" => "OTP", "type" => "text", "name" => "login_OTP", "onkeyup"=>"act_on_change_OTP_input(this)"));
        array_push($oO["cntData"],array("label" => "Get OTP", "type" => "submit", "disabled" => true));
    }else{
        $oO["formAction"] = "src_modules/login/login.php";
        array_push($oO["cntData"],array("label" => "Email", "type" => "email", "name" => "login_email","onkeyup"=>"act_on_change_email_input(this)"));
        // array_push($oO["cntData"],array("label" => "Called Name", "type" => "text", "name" => "login_name",));
        array_push($oO["cntData"],array("label" => "Password", "type" => "password", "name" => "login_password","onkeyup"=>"act_on_change_password_input(this)"));
        array_push($oO["cntData"],array("label" => "Password Again", "type" => "password", "name" => "login_password_repeated","onkeyup"=>"act_on_change_password_repeated_input(this)","disabled" => true,"display" => "none"));
        array_push($oO["cntData"],array("label" => "Login", "type" => "submit", "disabled" => true));
        array_push($oO["cntData"],array("label" => "Remember me", "type" => "checkbox", "name" => "login_rememberme", "checked" => "checked",));
    }

    $oO["rtnCode"] = "OK";
    $oO["dbgData"] = $_GET;

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>