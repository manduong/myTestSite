<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    register_shutdown_function("my_handler_fatal");

    function reg_file_content($file,&$oO){
        if(file_exists($file)){
            $oO[basename(($file))] = preg_replace('/\r/','',file_get_contents($file));
        }
        return;
    }

    // return control data for generation of login form
    $oO = array();
    
    reg_file_content("../../docs/worldcup/format_import_files.md",$oO);

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>