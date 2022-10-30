<?php
    require_once("./src_modules/login/session.php");
    my_init_session();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>BudgetMe</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/x-icon" href="bg/BudgetMe.svg" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<link rel="stylesheet" href="css/my.css">
<script src="src_main/my.js"></script>
<script src="src_modules/login/logging.js"></script>
</head>
<body class="bg" onload="my_onload()">
<div class="my-icon"></div>
<div id="myMenu2" class="w3-bar">
    <div class="w3-bar-item" style="width:100px"></div>
    
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="my_login()"><i class="w3-text-indigo bi bi-box-arrow-left w3-xlarge"></i><span class="my-tooltip-content">Log-in</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="my_logout()"><i class="w3-text-indigo bi bi-box-arrow-right w3-xlarge"></i><span class="my-tooltip-content">Log-out</span></div> -->

    <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_login()" id="userDisplay">
        <span class="w3-xlarge">NobodyButYou</span>
        <span class="my-user-email">Somebody@nowhere.com</span>
        <span class="my-user-title">Guess</span>
        <i class="bi bi-shield-x my-login-tick-ng"></i>
        <span class="my-tooltip-content">Login is required for further action</span>
    </div>

    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_tbl_scoring()"><i class="w3-text-indigo bi bi-bullseye w3-xlarge"></i><span id="theScore" class="my-add-info">100</span><span class="my-tooltip-content">Your score</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_all_items('warn')"><i class="w3-text-indigo bi bi-bell w3-xlarge"></i><span id="theWarn" class="my-add-info">0</span><span class="my-tooltip-content">Notification</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip"><i class="w3-text-indigo bi bi-calendar3 w3-xlarge"></i><span class="my-tooltip-content">Calendar View</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_all_items('all')"><i class="w3-text-indigo bi bi-grid-3x3-gap w3-xlarge"></i><span class="my-tooltip-content">Your all items</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_add_person()"><i class="w3-text-indigo bi bi-person-plus w3-xlarge"></i><span class="my-tooltip-content">Add/Modify Member</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_add_item()"><i class="w3-text-indigo bi bi-node-plus w3-xlarge"></i><span class="my-tooltip-content">Add/Modify Item</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_sum_all_items('graphs')"><i class="w3-text-indigo bi bi-pie-chart w3-xlarge"></i><span class="my-tooltip-content">Summary in charts (ongoing only)</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_sum_all_items('tables')"><i class="w3-text-indigo bi bi-table w3-xlarge"></i><span class="my-tooltip-content">Summary in tables (all)</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="dsp_all_users()"><i class="w3-text-indigo bi bi-people w3-xlarge"></i><span class="my-tooltip-content">Show accounts</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="toggle_left()"><i class="w3-text-indigo bi bi-layout-sidebar-inset aria-label w3-xlarge" aria-label="ToggleLeft"></i><span class="my-tooltip-content">Toggle sidebar</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="retrieve_sum_by_recent_updated()"><i class="w3-text-indigo bi bi-check-all w3-xlarge" aria-label="SumHistoric"></i><span class="my-tooltip-content">Immediately get sum all by historic data.</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip" onclick="clear_all()"><i class="w3-text-indigo bi bi-stars w3-xlarge"></i><span class="my-tooltip-content">Show the beautiful background.</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round w3-right my-tooltip w3-padding-16" onclick="myTest()">test</div> -->
    <!-- <div class="w3-bar-item w3-mobile my-tooltip"><input class="w3-input w3-small" style="width:293px" onchange="retrieve_Redmine_API_key_info(this)"></input><span class="my-tooltip-content">RAMS Redmine API to change data scope, leave empty for default.</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round my-tooltip" style="animation-duration:0.1s" onclick="update_history_data()"><i class="w3-text-indigo bi bi-cloud-download w3-xlarge" aria-label="Download"></i><span class="my-tooltip-content">Update the history data under ground (will take long ~12min, no impact to other functions).</span></div> -->
    <!-- <div class="w3-bar-item w3-mobile w3-button w3-round my-tooltip" onclick="retrieve_sum_by_get_all_issues_now()"><i class="w3-text-indigo bi bi-cloud-haze2 w3-xlarge" aria-label="SumNow"></i><span class="my-tooltip-content">Get sum all by querying RAMS (will take long ~12min, impact much to other functions).<br>Click again to stop.</span></div> -->
</div>

<div id="leftSide" class="w3-animate-left">
</div>
<div id="mainSide" class="w3-row-padding w3-responsive">
</div>

<footer>No pain, no gain - don't complain.</footer>
<?php
    print_r($_SESSION);
?>
</body>
<script src="src_main/globals.js"></script>
</html>
