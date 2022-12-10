<?php
    require_once("./src_modules/login/session.php");
   my_init_session();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PLPI</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/x-icon" href="assets/logo.bmp" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<link rel="stylesheet" href="css/my.css">
<script src="src_main/my.js"></script>
<script src="src_modules/login/logging.js"></script>
<script src="src_modules/login/user_mod_info.js"></script>
</head>
<body class="bg" onload="my_onload()">
<div class="my-icon"></div>
<div id="myMenu2" class="w3-bar" style="padding-left:100px">
    <!-- <div class="w3-bar-item" style="width:100px"></div> -->
    
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="my_login()"><i class="w3-text-indigo bi bi-box-arrow-left w3-xlarge"></i><span class="my-tooltip-content">Log-in</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="my_logout()"><i class="w3-text-indigo bi bi-box-arrow-right w3-xlarge"></i><span class="my-tooltip-content">Log-out</span></div> -->

    <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_mod_user_info()" id="userDisplay">
        <span class="w3-xlarge">NobodyButYou</span>
        <span class="my-user-email">Somebody@nowhere.com</span>
        <span class="my-user-title">Guess</span>
        <i class="bi bi-shield-x my-login-tick-ng"></i>
        <span class="my-tooltip-content">Login is required for further action</span>
    </div>
</div>
<div id='notificationHolder'></div>

<div id="leftSide" class="w3-animate-left w3-bar-block">
</div>
<div id="mainSide" class="w3-row-padding w3-responsive">
</div>

<footer>No pain, no gain - don't complain.</footer>
</body>
<script src="src_main/globals.js"></script>
<script src="src_modules/w3/w3.js"></script>
<script src="src_modules/menu/menu.js"></script>
<script src="src_modules/worldcup/worldcup.js"></script>
<script src="src_modules/host_info/working_on_host_info.js"></script>
<!-- markdeep -->
<link rel='stylesheet' href="src_modules/markdeep/my_add_md.css">
<script>window.markdeepOptions={mode:'script'};</script>
<script src="src_modules/markdeep/markdeep.js"></script>
</html>