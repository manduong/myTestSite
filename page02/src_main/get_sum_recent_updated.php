<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    $initFile = "./data/sum_issues.json";
    $oData = array();
    if(file_exists($initFile)){
        if($fh = fopen($initFile, "r")){
            $oData = json_decode(fread($fh, filesize($initFile)), true);
            fclose($fh);
        }else{}
    }else{}
    
    echo json_encode($oData);
?>