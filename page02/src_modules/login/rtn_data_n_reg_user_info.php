<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    register_shutdown_function("my_handler_fatal");
    $user = new User_by_sqlite3;

    $roles = array();
    $allRoles = $user->list_of_roles;

    for($i=0;$i<count($allRoles);$i++){
        if($user->role === $allRoles[$i]){
            for($j=$i;$j<count($allRoles);$j++){
                if(is_array($allRoles[$j])){
                    foreach($allRoles[$j] as $tmpv){
                        array_push($roles,$tmpv);
                    }
                }else{
                    array_push($roles,$allRoles[$j]);
                }
            }
            break;
        }
    }

    // return control data for generation of login form
    $oO = array();
    $oO["POST"] = $_POST;
    $oO["GET"] = $_GET;
    
    if(!isset($_POST) || count($_POST) === 0){
        if(isset($_GET) && isset($_GET["user"])){
            // GET with user, modifying form needed
            if($user->get_users_table_header() === false){
                echo array();
                $oO["rtnCode"] = "NG: no header.";
                exit;
            }else{}
            
            $oO["cntData"] = array();
            $oO["formAction"] = "src_modules/login/rtn_data_n_reg_user_info.php";
            $data = $user->get_user_info($_GET["user"]);
            foreach($data as $header => $value){
                if($header === "register_on"
                || $header === "register_by"
                || $header === "modify_on"
                || $header === "modify_by"
                || $header === "shielded"
                || $header === "removed"
                ) continue;
                $type = "text";
                if($header === "role"){
                    $type = "select";
                    if($value === null) $value = $allRoles[count($allRoles)-1];
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "options" => $roles, "value" => $value));
                }else{
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "value" => $value));
                }
            }
            array_push($oO["cntData"],array("label" => "Modify", "type" => "submit"));

            $oO["rtnCode"] = "OK";
        }else{
            // => no GET, new register
            if($user->get_users_table_header() === false){
                echo array();
                $oO["rtnCode"] = "NG: no header.";
                exit;
            }else{}

            $oO["cntData"] = array();
            $oO["formAction"] = "src_modules/login/rtn_data_n_reg_user_info.php";
            $data = $user->get_users_table_header();
            foreach($data as $header){
                if($header === "register_on"
                || $header === "register_by"
                || $header === "modify_on"
                || $header === "modify_by"
                || $header === "removed"
                || $header === "shielded"
                ) continue;
                $type = "text";
                if($header === "role"){
                    $type = "select";
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header, "options" => $roles));
                }else{
                    array_push($oO["cntData"],array("label" => $header, "type" => $type, "name" => $header));
                }
            }
            array_push($oO["cntData"],array("label" => "Modify", "type" => "submit"));
        }
    }else{
        $oO["reg_bet_status"] = $user->reg_user($_POST["login_email"],$_POST);//reg
    }

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>