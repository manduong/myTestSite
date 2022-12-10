<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("worldcup_sqlite3.class.php");
    register_shutdown_function("my_handler_fatal");
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    $worldcup = new WorldCup_by_sqlite3;
    $user = new User_by_sqlite3;

    // return control data for generation of login form
    $oO = array();
    $oO["POST"] = $_POST;
    $oO["GET"] = $_GET;
    
    if(!isset($_POST) || count($_POST) === 0){
        if(isset($_GET) && isset($_GET["id"])){
            // GET with id, modifying form needed
            if($worldcup->get_bet_table_header() === false){
                echo array();
                $oO["rtnCode"] = "NG: no header.";
                exit;
            }else{}
            
            $oO["cntData"] = array();
            $oO["formAction"] = "src_modules/worldcup/rtn_data_n_reg_bet.php";
            $data = $worldcup->get_bet_info($_GET["id"],$user->login_email);
            $oO["testData"]["id"] = $_GET["id"];
            $oO["testData"]["user"] = $user->login_email;
            for($i=0;$i<count(array_keys($data[0]));$i++){
                $header = $data[0][$i];
                if($header === "register_on"
                || $header === "register_by"
                || $header === "modify_on"
                || $header === "modify_by"
                ) continue;
                $value = "";
                if(isset($data[1])) $value = $data[1][$i];
                $type = "text";
                if(preg_match("/datetime/",$header)) $type = "datetime-local";
                if($header === "match_id" || $header === "user"){
                    if($header === "match_id") $value = $_GET["id"];
                    if($header === "user") $value = $user->login_email;
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "value" => $value, "readonly" => true));
                }elseif($header === "bet_AB"){
                    array_push($oO["cntData"],array("label" => $header, "type" => "select", "name" => $header, "options" => array("A","B"), "value" => $value));
                }elseif($header === "bet_BS"){
                    array_push($oO["cntData"],array("label" => $header, "type" => "select", "name" => $header, "options" => array("big","small"), "value" => $value));
                }else{
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "value" => $value));
                }
            }
            array_push($oO["cntData"],array("label" => "Modify", "type" => "submit"));

            $oO["rtnCode"] = "OK";
        }else{
            // => no GET, new register, cannot happen
        }
    }else{
        $oO["reg_bet_status"] = $worldcup->reg_bet($_POST["match_id"],$user->login_email,$_POST);//reg
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>