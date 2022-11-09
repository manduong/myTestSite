<?php
$mysql_connection = mysql_connect( "localhost", "root", "Pass1234" );
mysql_select_db( "joomlasec" );



print "<center>\n";
print "<div>\n";

//print "<div><font color=red><blink>This site is down for maintenance. Please check back again soon.</blink></font></div>";

$getUsrname    =& JFactory::getUser();
$usermail           = $getUsrname->get('email');
$username        = $getUsrname->get('name');

if(isset($_POST['sel_item'])&& isset($_REQUEST['usergrp'])&& isset($_REQUEST['usercode'])&&($_POST['sel_item'] != "" )&&($_REQUEST['usergrp']  != "" )&&($_REQUEST['usercode'] != "" )){

    $usercode      = $_REQUEST['usercode'];
    $usergroup    = $_REQUEST['usergrp'];
    $sel_item       = $_POST['sel_item'];
    $item_no        = count($sel_item);
    $stationeries  = "";

    for ( $i = 0; $i < $item_no; $i++ ) {
        $mysql_items   = mysql_query ( "SELECT * FROM stationeries WHERE id='$sel_item[$i]' " );

        //$mysql_items   = mysql_query ( "SELECT * FROM stationeries WHERE id='item_1' " );

        $get_item      = mysql_fetch_assoc ( $mysql_items );

        $stationeries  = $stationeries . "|||" .$get_item['item'];

    }
    send_req ( $username, $usercode, $usermail, $usergroup, $stationeries );


    print '<font size="5" color="blue"><img src="./components/com_stationery/img/email_sent.png" />Your request has been sent to RVC Secretaries.';
    print 'Please wait for a moment, we will reply to confirm your order. Thank you very much!</font><hr />';

}elseif(isset($_REQUEST['usercode'])){
    print '<font size="5" color="red"><img src="./components/com_stationery/img/email_n_sent.png" /><b>Please fill all information!</b></font><hr />';
}

function send_req ( $username, $usercode, $usermail, $usergroup, $stationeries ) {

    $req_item  = explode ( "|||", $stationeries );

    // Mail
    $command   = "REQUEST";
    $toGroup       = $usergroup;
    $fromName  = $username;
    $fromMail      = $usermail;
    $toName       = "RVC Secretaries";

    $toAddr     = 'rvc-eng-sec@lm.renesas.com';

    //$toAddr     = 'huy.tran.xc@rvc.renesas.com';

    $message   = "Dear Secretaries,\n\n";
    $message  .= "I would like to request stationery from you as below information:\n\n";
    for ( $i = 1; $i < count($req_item); $i++ ) {
    $message .= "$i - ". $req_item[$i] . "\n";



    }

    $message  .= "\n";
    $message  .= "Thank you very much,\n";
    $message  .= "$username\n";

    $header    = "From: $fromMail\n";
    $header   .= "Bcc: $usermail\n";

    #sendmail ( $command, $usercode, $fromName, $toName, $toGroup, $toAddr, $message, $header );

    sendmail ( $command, $usercode, $fromMail, $toName, $toGroup, $toAddr, $message, $header );

}

function sendmail( $command, $usercode, $fromName, $toName, $toGroup, $toAddr, $message, $header ) {
    $subject            =   "";
    switch ( $command ) {
    case "REQUEST":
    $subject            =   $subject . "[Stationery Request] $fromName - $usercode ($toGroup)";
    break;
    default:
    $subject            =   $subject . "[DON'T KNOW]";
    break;
    }

    $message                   .=   "\n\n---------------------------------------------------------\n";
    $message                   .=   "Sent by RVC Secretaries System by IP " . $_SERVER['REMOTE_ADDR'];
    mail( $toAddr, $subject, $message, $header );
}

$usergid  = $getUsrname->get('usertype');

print '<form method="post">';

print '  <table style="width:40%;">';

if ( $username == "") {
print '      <div style="width:80%;font-size:15px;" class="table_st" > Please Login, then you can submit your request  </div>';
print "\n\n";
}else{

print "    <tr>\n";
print '      <td colspan="10"><center><h2>Let\'s Save Stationery Together. Please request the same item after 4 months! ◕‿◕</h2></center></td>';

print"</tr>\n";



print"<tr>\n";

print "      <td colspan=\"3\">Code</td><td><input title=\"Please input your Code \"  size=\"25\" type=\"number\" name=\"usercode\" ></td>";

print '      <td >';
print "        <select name='usergrp'>\n";
print "          <option value=''>Choose Your Group</option>\n";
print "          <option value=''>--------------------------------------</option>\n";



$mysql_gr  = mysql_query ( "SELECT * FROM stationeries_group ORDER BY groupName" );
 while ( $mysql_grrow = mysql_fetch_array( $mysql_gr ) ) {

$group_name  = $mysql_grrow[0];
print "          <option value='$group_name'>$group_name</option>\n";
}


if ($usergid == "Super Administrator"){
print "          <option value='Debugging'>..:: Super Administrator ::.. - For testing</option>\n";
}
 print "        </select>\n";
 print "      </td>\n";
 print "    </tr>\n";
}
print "  </table>\n";

print '

<table style=\"
width: 80%;
border-collapse: collapse;
border: 10px solid  red;
font-family: Verdana, Arial, Helvetica, sans-serif;
font-size: 15px;
margin: 2px auto;\" class=\"moduletable_content clearfix\">

<tr style=\"font-style:bold;text-align:center;border: 1px solid;background-color:#F9F9F9;\" class=\"table_st\">

<td style=\"strong;width:20%;\" class=\"table_hdm\" colspan=\"2\">#</td>

<td style=\"strong;width:60%;\" class=\"table_hdm\" colspan=\"2\">#ITEMS</td>

<td style=\"strong;width:20%;\" class=\"table_hdm\">#REQUEST</td>

</tr>';


#print "    <tr>\n";
#print '     <td class="table_hdm" colspan="2">ITEMS</td>';
#print '      <td class="table_hdr">REQUEST</td>';
#print "    </tr>\n";

$mysql_st  = mysql_query ( "SELECT * FROM stationeries ORDER BY id" );
while ( $mysql_row = mysql_fetch_array( $mysql_st ) ) {
 $item_index = $mysql_row[2];
 $item_name  = $mysql_row[0];
 print "<tr style=\"background-color:#F9F9F9;border-top: 2px solid white;border-bottom: 2px solid white;\">\n";
 print "  <td  style=\"text-align:center;border-top: 4px solid white;border-bottom: 4px solid white;width:20%;\"><center><img height=50px src=./components/com_stationery/img/item_${item_index}.jpg /></center></td>\n";
 print "  <td  style=\"text-align:left;border-top: 4px solid white;border-bottom: 4px solid white;width:60%;margin: 15px auto;\"><b>&#9830 $item_name</b></td>\n";
 print "  <td  style=\"text-align:center;border-top: 4px solid white;border-bottom: 4px solid white;width:20%;\"><center><center><input name=sel_item[] type=checkbox value=$item_index></input></center></td>";
 print "</tr>\n";
}

print "    <tr>\n";
print "      <td colspan=2></td>\n";
if ( $username == "") {
 print "      <td class='button_f'><center><b>Login<b></center></td>\n";
}else{
 print '      <td><center> <input type="submit" value="Submit" class="button_f"></center></td>';
}
 print "    </tr>\n";
 print "  </table>\n";
 print "\n";
print "</form>\n";
print "\n";
print "</div>\n";
print "</center>\n";

//-- Add item to stationery request list
if ($usergid == "Super Administrator"){

print"<center>\n";

print"<hr />";

print '<form style="width:80%;" method=post action="./components/com_stationery/index3.php" class="table_st" enctype="multipart/form-data">';




print "<table >\n";

print "<tr>";
print '<td ><img src="./components/com_stationery/img/sta_conf.png" /></td><td><h2>Stationeries Management</h2></td>';
print "</tr>";

print "<tr>";
print "<td></td><td><hr /></td>";
print "</tr>";

print "<tr>";
print "<td></td><td>Fill Item name, choose image (jpg) and press <b>Add new item</b></td>";
print "</tr>";

print "<td title=\"Only JPG (Firefox) and JPEG (IE) are supported\">Chose the item image :</td><td><input id=\"file\" name=\"file\" type=\"file\" /></td>";

print "<tr>";
print '<td title="Please give an exactly item name ">Item name:</td><td><input name="sitem" size="20" type="text" /></td>';
//print "</tr>";
//print "<tr>";
//print "</tr>";
//print "<tr>";
print '<td></td><td><input title="Add a new item to stationery database"  class="button_f"  type="submit" value="Add new item"/></td>';
print "</tr>";

//--Delete item from stationery request list

print "<tr>";
print "<td></td><td><hr /></td>";
print "</tr>";

print "<tr>";
print "<td></td><td>Please consider carefully when you delete an item</td>";
print "</tr>";
print "    <tr>\n";
print "      <td></td>\n";
print "<td>";
print "        <select name='itemList'>\n";
print "          <option value='value'>Choose Item to delete</option>\n";
print "          <option value='value'>--------------------------------------</option>\n";
$mysql_st  = mysql_query ( "SELECT * FROM stationeries ORDER BY id" );
 while ( $mysql_row = mysql_fetch_array( $mysql_st ) ) {
$item_index = $mysql_row[2];
$item_name  = $mysql_row[0];
print "          <option value='$item_name'>$item_name</option>\n";
}
print "        </select>\n";
print "      </td>\n";

print '<td></td><td><input title="Delete:" size="20" name="submitDel" class="button_f" type="submit" value="Delete Item"/></td>';


print "    </tr>\n";
print "<tr>";
print "<td></td><td colspan=2></td>";

print "</tr>";

print"</form>\n";

print "<tr><hr /></tr>";

//---------------------Group Modification

print '<form method="post" action="./components/com_stationery/index4.php" class="table_st"  enctype="multipart/form-data">';

print "<tr>";
print '<td ><img src="./components/com_stationery/img/rvc_group_added.png" /></td><td><h2>Group/Team Modification</h2></td>';
print "</tr>";

print "<tr>";
print "<td></td><td><hr /></td>";
print "</tr>";

print "<tr>";
print '<td >Group name:</td><td><input name="grName" size="20" type="text" /></td>';
print '<td></td><td><input title="Add a new group" size="20" type="submit" class="button_f" name="submitAddGr" value="Add new group"/></td>';
print "</tr>";

print "    <tr>\n";
print "      <td>Delete group:</td>\n";
print "<td>";
print "        <select name='groupList'>\n";
print "          <option value='value'>Choose group/team to delete</option>\n";
print "          <option value='value'>--------------------------------------</option>\n";
$mysql_gr  = mysql_query ( "SELECT * FROM stationeries_group ORDER BY groupName" );
 while ( $mysql_grrow = mysql_fetch_array( $mysql_gr ) ) {

$group_name  = $mysql_grrow[0];
print "          <option value='$group_name'>$group_name</option>\n";
}
print "        </select>\n";
print "      </td>\n";


print '<td></td><td><input  type="submit" size="20" name="groupDel" id="groupDel" class="button_f" value="Delete group"/></td>';

print "    </tr>\n";
print "<tr>";

//---------------------



//--End

print "<tr>";
print "<td></td><td><hr /></td>";
print "</tr>";
print "</table></form>";
}
print "</div>\n";
print "</center>\n";
?>

