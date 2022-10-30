<?php
    require_once("../../src_modules/login/users_file.class.php");
    $oO = array();
    $user = new User_by_file;
    $oO["user_info"] = $user->get_user_info();
    echo(json_encode($oO));
?>