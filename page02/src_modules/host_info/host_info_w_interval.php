<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    register_shutdown_function("my_handler_fatal");

    function my_try_catch_exec($cmd){
        $output = array();
        $rtnCode = null;
        $tmpa = preg_split('/\s+/',$cmd);
        try {
            exec($cmd,$output,$rtnCode);
        }catch(Exception $e){
            array_push($output,"Failed execution.");
        }
        return array($tmpa[0],$output);
    }

    // return control data for generation of login form
    $oO = array();

    array_push($oO,my_try_catch_exec("df -h /tmp"));
    array_push($oO,my_try_catch_exec("finger -s"));
    array_push($oO,my_try_catch_exec("mpstat"));
    // array_push($oO,my_try_catch_exec("top -b -n 1 | head -5"));
    array_push($oO,my_try_catch_exec("hostname;hostname -i"));
    // array_push($oO,my_try_catch_exec("ping -c 4 -q `hostname -i`"));
    // array_push($oO,my_try_catch_exec("hostname -i"));

    array_push($oO,array("REMOTE_ADDR",$_SERVER['REMOTE_ADDR']));
    
    
    // $oO["rtnCode"] = "OK";

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>