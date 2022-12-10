<?php

class User_by_sqlite3
{
    private $tgtd = "../../data/by_sqlite3";
    private $dbname = "users.db";
    private $global_setting_file = "../../data_manual/global_setting_users.json";
    
    public $role = "GuessX";//Guess, Admin, User, SuperUser
                            // special: AdminWorldCup, UserWorldCup
    public $login_email = "";
    public $satus = "Unknown";//NotRegYet|Already|Removed|Unknown
    public $list_of_roles = array("Admin", "SuperUser", "AdminWC", array("User","UserWC"),"Guess");

    function __construct(){
        $this->login_email = $this->get_current_login_email();
        $this->role = $this->get_role();
        $this->status = $this->get_status();

        if(!file_exists($this->tgtd)){
            try {
                mkdir($this->tgtd,0777,true);
            }catch(Exception $e){
                return $e;
            }
        }else{}
        return "OK";
    }

    private function get_current_login_email(){
        if(!isset($_SESSION)) session_start();
        if(!isset($_SESSION["login_email"])) return "";
        return $_SESSION["login_email"];
    }

    function get_user_info($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return array();
        
        if(!file_exists($this->tgtd . "/" . $this->dbname)) return array();
    
        $oO = array();
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return array();

        // query the table
        $sql = "SELECT * from USERS WHERE login_email='" . $email . "'";
        $fA = $db->query($sql)->fetchArray(SQLITE3_ASSOC);//fetch array SQLITE3_ASSOC
        if($fA){
            // => update from database
            $oO = $fA;
            // => provide a sign of shielded
            $oO["shielded"] = "yes";
        }else{}

        // => overwrite by global settings
        $tgtf = $this->global_setting_file;
        if(file_exists($tgtf)){
            $rtnO = json_decode(file_get_contents($tgtf),true);
            if(isset($rtnO[$email])){
                if(isset($rtnO[$email]["role"])) $oO["role"] = $rtnO[$email]["role"];
            }
        }

        return $oO;
    }

    function get_all_user_emails(){
        if($this->role !== "Admin"
        && $this->role !== "SuperUser"
        && $this->role !== "AdminWC"
        ) return array();

        if(!file_exists($this->tgtd . "/" . $this->dbname)) return array();
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return array();
        
        $oO = array();
        // => header
        array_push($oO,array());
        $sql = "PRAGMA table_info(USERS)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO[0],$fA["name"]);
        }

        // => content
        $queryRtn = $db->query("SELECT * FROM USERS");//fetch array: // Fetch Associated Array (1 for SQLITE3_ASSOC)
        while($fA = $queryRtn->fetchArray(1)){
            array_push($oO, array_values($fA));
        }
        return $oO;
    }

    function get_users_table_header(){
        if($this->role !== "Admin"
        && $this->role !== "SuperUser"
        ) return array();

        if(!file_exists($this->tgtd . "/" . $this->dbname)) return array();
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return false;
        
        $oO = array();
        // => header
        $sql = "PRAGMA table_info(USERS)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO,$fA["name"]);
        }

        return $oO;
    }

    function reg_user($email="",$info=array()){
        // newly register or modify a user for his/her email
        if($email === "") $email = $this->login_email;
        if($email === "") return 101;//no email to reg

        if($this->login_email !== "" && $this->login_email !== $email
        && (
               $this->role !== "Admin"
            && $this->role !== "SuperUser"
            && $this->role !== "AdminWC"
           )
        ) return "102: not valid role to mod other.";//NG: cannot register the user info when: (1) diff account, and (2) not a Admin or SuperUser

        if($this->login_email !== "" && $this->login_email !== $email && isset($info["role"])){
            if($this->get_role_lvl($this->role) >= $this->get_role_lvl($this->get_role($email))){
                return "104: role level too small.";
            }else{}
        }else{}

        $mode = "modify";
        $info[$mode . "_on"] = time();
        $info[$mode . "_by"] = $this->login_email;
        if($this->login_email === "") $info[$mode . "_by"] = $email;//
        
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return "103: db error: " . $db->lastErrorMsg();

        $sql ="CREATE TABLE IF NOT EXISTS
            USERS (
                login_email     TEXT  PRIMARY KEY     NOT NULL,
                user_name       TEXT ,
                moreInfo        TEXT ,
                role            TEXT ,
                modify_on,
                modify_by,
                register_on,
                register_by,
                removed
            );";
        
        // create table
        $retExec = $db->exec($sql);
        if(!$retExec) return $db->lastErrorMsg();

        // query the table
        $sql = "SELECT * from USERS WHERE login_email='" . $email . "'";
        $fA = $db->query($sql)->fetchArray();//fetch array
        if(! $fA){
            if(!isset($info["login_email"])) $info["login_email"] = $email;
            if(!isset($info["register_on"])) $info["register_on"] = time();
            if(!isset($info["register_by"])) $info["register_by"] = $this->login_email;
            // insert new to user
            $updStrHeads = "(";
            $updStrValues = "VALUES(";
            foreach($info  as $keyw => $value){
                $updStrHeads .= $keyw . " , ";
                if(is_int($value) || is_long($value) || is_null($value) || is_float($value)){
                    $updStrValues .= $value . " , ";
                }else{
                    $updStrValues .= "'" . $value . "' , ";
                }
            }
            $updStrHeads = preg_replace("/, $/","",$updStrHeads);
            $updStrValues = preg_replace("/, $/","",$updStrValues);
            $updStrHeads .= ")";
            $updStrValues .= ")";
            if($updStrHeads !== "()" && $updStrValues !== "VALUES()"){
                $sql = "INSERT INTO USERS $updStrHeads $updStrValues ;";
                $retExec = $db->exec($sql);
                if(!$retExec) return $db->lastErrorMsg();
            }else{
                return "NG: nothing to reg.";
            }
        }else{
            if(count($info)){
                // modify when existed
                $updStr = "";
                foreach($info  as $keyw => $value){
                    if(is_int($value) || is_long($value) || is_null($value) || is_float($value)){
                        $updStr .= $keyw . " = " . $value . " , ";
                    }else{
                        $updStr .= $keyw . " = '" . $value . "' , ";
                    }
                }
                if($updStr !== ""){
                    $updStr = preg_replace("/ , $/","",$updStr);
                    $sql = "UPDATE USERS SET $updStr WHERE login_email='" . $email . "'";
                    $info["sql"] = $sql;
                    $info["exec_stt"] = $db->exec($sql);
                    $info["exec_msg"] = $db->lastErrorMsg();
                }
                $info["tgt_email"] = $email;
                return array("info" => $info);
            }else{}
            $this->status = "JustModified";
            if(isset($info["removed"]) && $info["removed"] === "yes") $this->status = "Removed";
        }

        $db->close();
        return "OK:$email";//OK
    }

    function remove_user($email=""){
        // remove is not remove, just modify with removed property
        if($this->role !== "Admin" || $this->role !== "SuperUser") return "NG: not admin.";
        return $this->reg_user($email,array("removed" => "yes"));
    }

    function del_user($email=""){
        // completely remove out of database
        if($this->role !== "Admin" && $this->login_email !== "man.duong.ym@renesas.com") return "NG: User not a valid role.";
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname,"USERS");
        if(!$db) return "NG: NotRegYet";
        $sql = "DELETE FROM USERS WHERE login_email='$email';";
        $info["sql"] = $sql;
        $info["exec_stt"] = $db->exec($sql);
        $info["exec_msg"] = $db->lastErrorMsg();
        $db->close();
        return "OK:$email";//OK
    }

    function get_status($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return "";

        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname,"USERS");
        if(!$db) return "NotRegYet";
        $sql = "SELECT * from USERS WHERE login_email='" . $email . "'";
        $sqlRes = $db->query($sql);
        if(!$sqlRes) {$db->close();return "NotRegYet";}
        $fA = $sqlRes->fetchArray();//fetch array
        if(! $fA) {$db->close();return "NotRegYet";}
        if($fA["removed"] === "yes") {$db->close();return "Removed";}
        $db->close();return "Already";
    }

    function get_role($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return "Empty";
        // if($this->login_email === "man.duong.ym@renesas.com") return "Admin";//in developing only

        $role = "Guess";

        $tgtf = $this->global_setting_file;
        if(file_exists($tgtf)){
            $rtnO = json_decode(file_get_contents($tgtf),true);
            if(isset($rtnO[$email])){
                if(isset($rtnO[$email]["role"])) return $rtnO[$email]["role"];
            }
        }

        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname,"USERS");
        if(!$db) return $role;

        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return $role;

        $sql = "SELECT * from USERS WHERE login_email='" . $email . "'";
        $sqlRes = $db->query($sql);
        if(!$sqlRes) {$db->close();return $role;}
        $fA = $sqlRes->fetchArray();//fetch array
        if(! $fA) {$db->close();return $role;}
        if($fA["role"] === null || $fA["role"] === "") {$db->close();return $role;}
        $role = $fA["role"];
        $db->close();

        return $role;
    }

    ///////////////////////
    private function is_tbl_existed($dbPath="",$tbln=""){
        if($dbPath === "") return false;
        if(!file_exists($dbPath)) return false;
        if(filesize($dbPath) === 0) return false;
        $db = new SQLite3($dbPath);
        if(!$db) return false;
        $sql = "SELECT * from sqlite_master WHERE name='".$tbln."' and type='table'";
        if(!$db->query($sql)) {$db->close();return false;}
        return $db;
    }

    private function get_role_lvl($role=""){
        // get level of the role
        if($role === "") return count(array_keys($this->list_of_roles));
        for($i=0;$i<count(array_keys($this->list_of_roles));$i++){
            if(is_array($this->list_of_roles[$i])){
                for($j=0;$j<count(array_keys($this->list_of_roles[$i]));$j++){
                    if($this->list_of_roles[$i][$j] === $role) return $i;
                }
            }else{
                if($this->list_of_roles[$i] === $role) return $i;
            }
        }
        return count(array_keys($this->list_of_roles));
    }

    /////////////////////////////////////////////////////
    function manduong($cmd="sql_removeAllFiles",$tgt=""){
        if($this->login_email !== "man.duong.ym@renesas.com") return array("error" => "not man.duong");
        $regInfo = array();
        if($cmd === "sql_removeAllFiles"){
            foreach(glob($this->tgtd . "/*") as $file){
                array_push($regInfo, "mand: removing file: " . $file);
                unlink($file);
            }

        }elseif($cmd === "sql_all_users"){
            return $this->get_all_user_emails();

        }elseif($cmd === "sql_reg_test"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            $regInfo["stt1"] = $this->reg_user($tgt,array());

        }elseif($cmd === "sql_rm_test"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            return $this->remove_user($tgt);

        }elseif($cmd === "sql_rm_test_complete"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            return $this->del_user($tgt);

        }elseif($cmd === "sql_get_user_info"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            $regInfo = $this->get_user_info($tgt);

        }elseif($cmd === "sql_get_test_user_role"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            $regInfo = $this->get_user_info($tgt);

        }elseif($cmd === "sql_removeUserGlobal"){
            $tgtf = $this->global_setting_file;
            return unlink($tgtf);

        }elseif($cmd === "sql_init_user_global_setting"){
            $initUsernRole = array();
            $initUsernRole["man.duong.ym@renesas.com"] = array("role" => "Admin");

            $tgtf = $this->global_setting_file;
            if(!file_exists($tgtf)) {
                if(file_put_contents($tgtf,json_encode($initUsernRole),LOCK_EX) === false) return 102;
                return 1;//ok, successfully written
            }
            return 2;//ok, no writing

        }else{
            $regInfo["error"] = "Command not found: $cmd";
        }
        return $regInfo;
    }
}
?>