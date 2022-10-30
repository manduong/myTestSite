<?php
    // return controlling data for generation of menu at init/ or changed at sequences
    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["cntData"] = array();

    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-box-arrow-left", "tooltip" => "Log in by OTP", "onclick" => "dsp_login_form('OTP')"));
    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-box-arrow-left", "tooltip" => "Log in", "onclick" => "dsp_login_form()"));
    array_push($oO["cntData"],array("position" => "right", "text" => "", "icon" => "bi-box-arrow-right", "tooltip" => "Log out", "onclick" => "my_logout()"));
    array_push($oO["cntData"],array("position" => "right", "text" => "test", "icon" => "", "tooltip" => "my test function", "onclick" => "myTest()"));

    echo(json_encode($oO));
?>