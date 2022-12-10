<?php
    // return controlling data for generation of menu at init/ or changed at sequences
    require_once '../../src_main/my.php';
    register_shutdown_function("my_handler_fatal");

    $oO = array();
    $oO["rtnCode"] = "OK";
    $oO["cntData"] = array();

    require_once("../../src_modules/login/users_sqlite3_OTP.class.php");
    $user = new User_by_sqlite3;

    if($user->role === "Admin" || $user->login_email === "man.duong.ym@renesas.com"){
        array_push($oO["cntData"],array("text" => "Import Matches (fixed file)", "tooltip" => "Input matches for betting from fixed file.", 
            "cFuncN" => "dsp_matches_w_adding",
            "sFuncN" => "./src_modules/worldcup/import_matches_from_file.php"
        ));
        array_push($oO["cntData"],array("text" => "Import betScore (fixed file)", "tooltip" => "Input betScore for betting from fixed file.", 
            "cFuncN" => "dsp_matches_w_adding",
            "sFuncN" => "./src_modules/worldcup/import_betScore_from_file.php"
        ));
    }

    if($user->role === "Admin" || $user->role === "SuperUser" || $user->role === "AdminWC"){
        // more universal
        array_push($oO["cntData"],array("text" => "Import from uploaded file", "tooltip" => "Input matches/bet-score for betting", 
        "cFuncN" => "dsp_upload_file_and_action",
        "sFuncN" => ""
        ));
        array_push($oO["cntData"],array("text" => "Import matches' info", "tooltip" => "Input matches for betting", 
            "cFuncN" => "dsp_matches_w_adding",
            "sFuncN" => "./src_modules/worldcup/rtn_matches.php"
        ));
    }

    array_push($oO["cntData"],array("text" => "Matches vs. your bet", "tooltip" => "Matches and your bet", 
        "cFuncN" => "dsp_matches_vs_self_bet",
        "sFuncN" => "./src_modules/worldcup/rtn_matches_vs_self_bet.php"
    ));
    array_push($oO["cntData"],array("text" => "All Users' Bet/matches", "tooltip" => "Betting results of all users per each match", 
        "cFuncN" => "dsp_bet_results_vs_matches",
        "sFuncN" => "./src_modules/worldcup/rtn_bet_results_vs_matches.php"
    ));
    array_push($oO["cntData"],array("text" => "All Users' ranking", "tooltip" => "All users' results in ranks", 
        "cFuncN" => "dsp_users_points",
        "sFuncN" => "./src_modules/worldcup/rtn_users_points.php"
    ));

    echo(json_encode($oO));
?>