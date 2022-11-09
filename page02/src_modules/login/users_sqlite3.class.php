<?php

class User_by_sqlite3
{
    private $tgtd = "../../data/by_sqlite3";
    private $dbname = "users.db";
    private $dbname2 = "users_cipher.db";
    private $global_setting_file = "global_setting_users.json";
    private $salt_len = 6;
    // private $suffix = "_login.json";
    
    public $role = "GuessX";//Guess, Admin, User, SuperUser
    public $login_email = "";
    public $satus = "Unknown";//NotRegYet|Already|Removed|Unknown

    function __construct(){
        $this->login_email = $this->get_current_login_email();
        $this->role = $this->get_role();
        $this->status = $this->get_status();
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
        if(! $fA) return array();
        $oO = $fA;
        return $oO;
    }

    function get_all_user_emails(){
        if($this->role !== "Admin"
        && $this->role !== "SuperUser"
        ) return array();

        if(!file_exists($this->tgtd . "/" . $this->dbname)) return array();
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return array();
        
        $oO = array();
        $queryRtn = $db->query("SELECT * FROM USERS");//fetch array: // Fetch Associated Array (1 for SQLITE3_ASSOC)
        while($fA = $queryRtn->fetchArray(1)){
            array_push($oO, $fA["login_email"]);
        }
        return $oO;
    }

    function reg_user($email="",$info=array()){
        // newly register or modify a user for his/her email
        if($email === "") $email = $this->login_email;
        if($email === "") return 101;//no email to reg

        if($this->login_email !== "" && $this->login_email !== $email
        && ($this->role !== "Admin"
         && $this->role !== "SuperUser")
        ) return "102";//NG: cannot register the user info when: (1) diff account, and (2) not a Admin or SuperUser

        $mode = "modify";
        $info[$mode . "_on"] = time();
        $info[$mode . "_by"] = $this->login_email;
        if($this->login_email === "") $info[$mode . "_by"] = $email;//
        
        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return "103:" . $db->lastErrorMsg();

        $sql ="CREATE TABLE IF NOT EXISTS
            USERS (
                login_email     TEXT  PRIMARY KEY     NOT NULL,
                user_name       TEXT ,
                moreInfo        TEXT ,
                role            TEXT ,
                salt_core       TEXT,
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
            if(!isset($_POST["login_password_repeated"])) return "NG: Signup without password.";
            if($_POST["login_password_repeated"]==="") return "NG: Signup without password.";

            $salt = $this->generateRandomString($this->salt_len);
            $hash = $this->calculateHash($salt,$_POST["login_password_repeated"],$email);

            // create table of salt-hash
            $db2 = new SQLite3(($this->tgtd . "/" . $this->dbname2));
            if(!$db2) return "104:" . $db2->lastErrorMsg();
            $sql ="CREATE TABLE IF NOT EXISTS
            USERS_CIPHER (
                salt        TEXT,
                hash        TEXT
            );";
            // create table
            $retExec = $db2->exec($sql);
            if(!$retExec) return $db2->lastErrorMsg();
            // insert new to user cipher
            $sql = "INSERT INTO USERS_CIPHER (salt,hash)
            VALUES ('".$salt."','".$hash."')";
            $retExec = $db2->exec($sql);
            if(!$retExec) return $db2->lastErrorMsg();
            $db2->close();

            // insert new to user
            $sql = "INSERT INTO USERS (login_email, register_on, register_by, salt_core)
            VALUES ('".$email."',".time().",'".$this->login_email."','".$salt."')";
            $retExec = $db->exec($sql);
            if(!$retExec) return $db->lastErrorMsg();
            
        }else{
            
        }
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
        }

        $this->status = "JustModified";
        if(isset($info["removed"]) && $info["removed"] === "yes") $this->status = "Removed";

        $db->close();

        return "OK:$email";//OK
    }

    function remove_user($email=""){
        // remove is not remove, just modify with removed property
        if($this->role !== "Admin" || $this->role !== "SuperUser") return "NG: not admin.";
        return $this->reg_user($email,array("removed" => "yes"));
    }

    function remove_user_complete($email=""){
        // completely remove out of database
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

        $tgtf = $this->tgtd . "/" . $this->global_setting_file;
        if(file_exists($tgtf)){
            $rtnO = json_decode(file_get_contents($tgtf),true);
            if(isset($rtnO[$email])){
                if(isset($rtnO[$email]["role"])) return $rtnO[$email]["role"];
            }
        }

        $db = new SQLite3($this->tgtd . "/" . $this->dbname);
        if(!$db) return "Guess";

        // $tgtf = $this->tgtd . "/" . $this->login_email . $this->suffix;
        // if(file_exists($tgtf)){
        //     $rtnO = json_decode(file_get_contents($tgtf),true);
        //     if(isset($rtnO[$email])){
        //         if(isset($rtnO[$email]["role"])) return $rtnO[$email]["role"];
        //     }
        // }

        return "Guess";
    }

    function sign_in($email="",$pass=""){
        if($email === "" || $pass === "") return "NG: no email/pass specified.";
        $salt = "";
        $hash = "";
        $db = $this->is_tbl_existed($this->dbname,"USERS");
        if($db){
            $sql = "SELECT * from USERS WHERE login_email='" . $email . "'";
            $fA = $db->query($sql)->fetchArray(SQLITE3_ASSOC);//fetch array SQLITE3_ASSOC
            if($fA){
               $salt = $fA["salt_core"];
            }
            $db->close();
        }
        if($salt === "") return "NG: no salt detected.";
        $db2 = $this->is_tbl_existed($this->dbname2,"USERS_CIPHER");
        if($db2){
            $sql = "SELECT * from USERS_CIPHER WHERE salt='" . $salt . "'";
            $fA = $db2->query($sql)->fetchArray(SQLITE3_ASSOC);//fetch array SQLITE3_ASSOC
            if($fA){
               $hash = $fA["hash"];
            }
            $db2->close();
        }
        if($hash === "") return "NG: no hash detected.";
        if($this->calculateHash($salt,$pass,$email) !== $hash) return "NG: wrong password.";
        /// =>
        return "OK: passed Signin, .";
    }

    ///////////////////////
    /**
	 * Generate Random String
	 *
	 * @param integer $length
	 * @return string
	 */
    private function generateRandomString($length = 6)
	{
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		
		return $randomString;
	}

    private function calculateHash($salt,$pass,$email){
        $algo = "sha256";
        $key = "mand@rvc";
        $data = $salt.$pass.$email;
        $hash = hash_hmac($algo,$data,$key);
        return $hash;
    }
    private function is_tbl_existed($dbn="",$tbln=""){
        if(filesize($this->tgtd . "/" . $dbn) === 0) return false;
        $db = new SQLite3($this->tgtd . "/" . $dbn);
        if(!$db) return false;
        $sql = "SELECT * from sqlite_master WHERE name='".$tbln."' and type='table'";
        if(!$db->query($sql)) {$db->close();return false;}
        return $db;
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
            return $this->remove_user_complete($tgt);

        }elseif($cmd === "sql_get_user_info"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            $regInfo = $this->get_user_info($tgt);

        }elseif($cmd === "sql_get_test_user_role"){
            if($tgt === "") $tgt = "test.test.test@renesas.com";
            $regInfo = $this->get_user_info($tgt);

        }elseif($cmd === "sql_removeUserGlobal"){
            $tgtf = $this->tgtd . "/" . $this->global_setting_file;
            return unlink($tgtf);

        }elseif($cmd === "sql_init_user_global_setting"){
            $initUsernRole = array();
            $initUsernRole["man.duong.ym@renesas.com"] = array("role" => "Admin");

            $tgtf = $this->tgtd . "/" . $this->global_setting_file;
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