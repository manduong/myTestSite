<?php
    // return controlling data for generation of menu at init/ or changed at sequences
    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["cntData"] = array();

    // array_push($oO["cntData"],array("text" => "phpinfo", "tooltip" => "phpinfo", "cFuncN" => "","sFuncN" => "./src_modules/host_info/phpinfo.html.php"));
    array_push($oO["cntData"],array("text" => "Observer", "tooltip" => "Sum by projects", "cFuncN" => "sum_by_projects","sFuncN" => "./src_modules/PVPI/sum_by_projects.php"));
    array_push($oO["cntData"],array("text" => "Insider_data", "tooltip" => "List all PV sessions by data flow", "cFuncN" => "sum_by_data_flow","sFuncN" => "./src_modules/PVPI/sum_by_data_flow.php"));
    array_push($oO["cntData"],array("text" => "Insider_errors", "tooltip" => "List all PV sessions got errors/ unexpected exit.", "cFuncN" => "sum_by_problems","sFuncN" => "./src_modules/PVPI/sum_by_problems.php"));

    echo(json_encode($oO));
?>