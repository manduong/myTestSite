<?php
    function my_destroy_session(){
        // used for log-out - completely clear all session vars, delete the session, and create a new session without leaving old session stuff behind in all browsers.
        if(!isset($_SESSION)) session_start();
        session_unset();
        session_destroy();
        session_write_close();
        setcookie(session_name(),'',0,"/");
        session_regenerate_id(true);
    }

    function my_init_session(){
        if(!isset($_SESSION)) session_start();
        if(isset($_SESSION["MD_started"])) {
            // this maybe a form action
            return 2;
        }else{}

        $_SESSION["MD_started"] = 1;
        define("MD_init",1);
        return 1;
    }

?>