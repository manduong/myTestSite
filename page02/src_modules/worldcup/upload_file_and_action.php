<?php
    // ini_set('display_errors',0);//don't display error if there is catching error function (error_get_last)
    // ini_set('display_startup_errors',1);
    // ini_set('html_errors',1);
    // error_reporting(E_ALL);

    require_once '../../src_main/my.php';
    require_once("../../src_modules/worldcup/worldcup_sqlite3.class.php");
    register_shutdown_function("my_handler_fatal");
    $wc = new WorldCup_by_sqlite3;

    // return control data for generation of login form
    $oO = array();
    // $oO["FILE"] = $_FILES;
    // $oO["POST"] = $_POST;

    // Firstly check the ERROR
    // Undefined | Multiple Files | $_FILES Corruption Attack
    // If this request falls under any of them, treat it invalid.
    if (
        !isset($_FILES['upfile']['error']) ||
        is_array($_FILES['upfile']['error'])
    ) {
        $oO["rtnCode"] =  "NG: Invalid upload process.";
        echo(json_encode($oO));
        exit;
    }
    // Check $_FILES['upfile']['error'] value.
    switch ($_FILES['upfile']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            $oO["rtnCode"] =  "NG: No file sent.";
            echo(json_encode($oO));
            exit;
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            $oO["rtnCode"] =  "NG: Exceeded filesize limit.";
            echo(json_encode($oO));
            exit;
        default:
            $oO["rtnCode"] =  "NG: Unknown uploading error.";
            echo(json_encode($oO));
            exit;;
    }

    $finfo  = finfo_open(FILEINFO_MIME_TYPE);// return mime type ala mimetype extension

    $target_dir = "../../data/uploads/";
    if(!file_exists($target_dir)) mkdir($target_dir,0777,true);

    // $save_to_file = $target_dir . basename($_FILES["upfile"]["name"]);
    $save_to_file = $target_dir . "tmp.csv";//fixed the name, allow to work once at a time
    $uploadOk = 1;
    $fileExtension = strtolower(pathinfo($_FILES["upfile"]["name"],PATHINFO_EXTENSION));
    
    // // Check if image file is a actual image or fake image
    // if(isset($_POST["submit"])) {
    //   $check = getimagesize($_FILES["upfile"]["tmp_name"]);
    //   if($check !== false) {
    //     $oO["mime" = $check["mime"];
    //     $uploadOk = 1;
    //   } else {
    //     $oO["rtnCode] = "NG: File is not an image.";
    //     $uploadOk = 0;
    //   }
    // }

    // Check if file already exists
    if (file_exists($save_to_file)) {
        $oO["rtnCode"] = "NG: file already exists.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["upfile"]["size"] > 500000) {
        $oO["rtnCode"] =  "NG: file is too large.";
        $uploadOk = 0;
    }
    if ($_FILES["upfile"]["size"] === 0) {
        $oO["rtnCode"] =  "NG: file empty.";
        $uploadOk = 0;
    }

    // check file name
    if(!preg_match('/^[-0-9a-zA-Z_\.]+$/',basename($_FILES["upfile"]["name"]))){
        $oO["rtnCode"] =  "NG: file name's strange.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($fileExtension !== "csv"){
        $oO["rtnCode"] =  "NG: not a .csv.";
        $uploadOk = 0;
    }

    // Accept type for proceeding
    if(!isset($_POST["mode"])){
        $oO["rtnCode"] =  "NG: 'mode' is required.";
        $uploadOk = 0;
    }
    if(isset($_POST["mode"]) && $_POST["mode"] !== "matches" && $_POST["mode"] !== "betScore"){
        $oO["rtnCode"] =  "NG: 'mode' must be either 'matches' or 'betScore'.";
        $uploadOk = 0;
    }

    // => cannot upload
    if($uploadOk === 0) {
        echo(json_encode($oO));
        exit;
    }

    // => action
    if (is_uploaded_file($_FILES['upfile']['tmp_name'])) {
        // echo "File ". $_FILES['upfile']['name'] ." uploaded successfully.\n";
        // => working with content and type
        // $oO["content"] = file_get_contents($_FILES['upfile']['tmp_name']);
        if(move_uploaded_file($_FILES['upfile']['tmp_name'],$save_to_file)){
            if($_POST["mode"] === "matches"){
                $oO["reg_from_file_status"] = $wc->reg_matches_from_file($save_to_file);//
                $oO["cntData"] = $wc->get_match_info(0);//0 to get all matches info
            }else{
                $oO["reg_from_file_status"] = $wc->reg_betScore_from_file($save_to_file);//
                $oO["cntData"] = $wc->get_match_info(0);//0 to get all matches info
            }

            // done, then remove the file
            $oO["rm_file_stt"] = unlink($save_to_file);
        }else{
            $oO["rtnCode"] =  "NG: Failed to move uploaded file.";
            echo(json_encode($oO));
            exit;
        }
     } else {
        $oO["rtnCode"] =  "NG: Possible file upload attacked.";
        echo(json_encode($oO));
        exit;
     }

    $oO["rtnCode"] = "OK";

    // =>
    echo(json_encode($oO)); //don't print here if register_shutdown_function() because it will dup.
?>