<?php
    require_once("../../src_main/my.php");
    register_shutdown_function("my_handler_fatal",array());

   class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('../../data/test.db');
      }
   }
   $db = new MyDB();

   $oO = array();
   if(!$db){
      $oO["rtnCode"] = $db->lastErrorMsg();
   } else {
      $oO["rtnCode"] = "Opened database successfully";
   }

   echo(json_encode($oO));
?>