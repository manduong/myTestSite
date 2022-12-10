<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("worldcup_sqlite3.class.php");
    register_shutdown_function("my_handler_fatal");
    $worldcup = new WorldCup_by_sqlite3;
    date_default_timezone_set("Asia/Ho_Chi_Minh");

    // return control data for generation of login form
    $oO = array();
    
    if(!isset($_POST) || count($_POST) === 0){
        if(isset($_GET) && isset($_GET["id"])){
            // GET with id, modifying form needed
            if($worldcup->get_matches_table_header() === false){
                echo array();
                $oO["rtnCode"] = "NG: no header.";
                exit;
            }else{}
            
            $oO["cntData"] = array();
            $oO["formAction"] = "src_modules/worldcup/rtn_data_n_reg_match.php";
            $data = $worldcup->get_match_info($_GET["id"]);
            for($i=0;$i<count(array_keys($data[0]));$i++){
                $header = $data[0][$i];
                if($header === "register_on"
                || $header === "register_by"
                || $header === "modify_on"
                || $header === "modify_by"
                ) continue;
                $value = $data[1][$i];
                $type = "text";
                if(preg_match("/datetime/",$header)){
                    $type = "datetime-local";
                    $value = strftime('%Y-%m-%dT%H:%M:%S', $value);
                }
                if($header === "id"){
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "value" => $value, "readonly" => true));
                }elseif($header === "def_score_bet"){
                    // this is reg by another method (table)
                }else{
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "value" => $value));
                }
            }
            array_push($oO["cntData"],array("label" => "Modify", "type" => "submit"));

            $oO["rtnCode"] = "OK";
        }else{
            // => no GET, new register
            if($worldcup->get_matches_table_header() === false){
                echo array();
                $oO["rtnCode"] = "NG: no header.";
                exit;
            }else{}
            
            $oO["cntData"] = array();
            $oO["formAction"] = "src_modules/worldcup/rtn_data_n_reg_match.php";
            foreach($worldcup->get_matches_table_header() as $header){
                $type = "text";
                if(preg_match("/datetime/",$header)) $type = "datetime-local";
                if($header === "def_score_bet"){
                    // this is reg by another method (table)
                }else{
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header));
                }
            }
            array_push($oO["cntData"],array("label" => "Add New", "type" => "submit"));

            $oO["rtnCode"] = "OK";
        }
    }else{
        if(isset($_POST) && isset($_POST["id"])){
            $_POST["match_datetime"] = strtotime($_POST["match_datetime"]);
            $oO["reg_match_status"] = $worldcup->reg_match($_POST["id"],$_POST);//reg for existed
        }else{
            $_POST["match_datetime"] = strtotime($_POST["match_datetime"]);
            $oO["reg_match_status"] = $worldcup->reg_match(0,$_POST);//reg as new
        }
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>