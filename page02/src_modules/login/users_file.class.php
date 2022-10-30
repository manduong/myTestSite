<?php

class User_by_file
{
    private $tgtd = "../../data/login";
    private $global_setting_file = "global_setting_users.json";
    private $suffix = "_login.json";
    
    public $role = "Guess";//Guess, Admin, User, SuperUser
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
   
    static function chk_login_json_data(){
        $tgtd = "../../data/login";
        $tgtf = "$tgtd/login.json";
        if(!is_dir($tgtd)){
            if(! mkdir($tgtd)) return 101; # "msg" => "Failed: cannot create dir holding data.";
        }
        if(!file_exists($tgtf)){
            if(file_put_contents($tgtf,"",LOCK_EX) === false) return 102; #"msg" => "Failed: cannot create simple login json data.";
        }else{
            if(is_writeable($tgtf)) return 1; # array("code"=>1,"msg" => "OK: login.json writable.");
            if(is_readable($tgtf))  return 2; #array("code"=>2,"msg" => "OK: login.json readable.");
            return 103; #array("code" => 103,  "msg" => "Failed: login json not writable, not readble.");
        }
    }

    function get_all_user_emails(){
        if($this->role !== "Admin"
        && $this->role !== "SuperUser"
        ) return array();

        $oO = array();
        foreach(glob($this->tgtd . "/*" . $this->suffix) as $file){
            $email =
                preg_replace("/".preg_quote($this->suffix)."/","", 
                    preg_replace("/^\//","",
                        preg_replace('/' . preg_quote($this->tgtd,'/') . '/',"",$file)
                    )
                );
            array_push($oO,$email);
        }
        return $oO;
    }

    function reg_user($email="",$info=array()){
        // newly register or modify a user for his/her email
        if($email === "") $email = $this->login_email;
        if($email === "") return 101;//no email to reg

        if($this->login_email !== $email
        && ($this->role !== "Admin"
         && $this->role !== "SuperUser")
        ) return 102;//NG: cannot register the user info when: (1) diff account, and (2) not a Admin or SuperUser

        $mode = "modify";
        $info[$mode . "_on"] = time();
        $info[$mode . "_by"] = $this->login_email;
        
        $tgtf = $this->tgtd . "/" . $email . $this->suffix;
        if(!file_exists($tgtf)){
            if(isset($info["removed"])) return 2;//if not exist and there is remove command, then ignore to create newly
            $mode = "register";
            $info[$mode . "_on"] = time();
            $info[$mode . "_by"] = $this->login_email;
            if(!isset($info["login_email"])) $info["login_email"] = $email;
            if(!isset($info["user_name"])) $info["user_name"] = "IamMe";
            if(!isset($info["role"])) $info["role"] = "Guess";
            if($email === $this->login_email) $info["role"] = $this->role;
            if(!file_put_contents($tgtf,json_encode($info),LOCK_EX)){
                return 103;//NG: failed on write to file
            }else{
                return 1;//OK: newly created
                $this->status = "JustCreated";
            }
        }

        $curInfo = array();
        if(file_exists($tgtf)){
            $curInfo = json_decode(file_get_contents($tgtf),true);
        }
        foreach($curInfo as $keyw => $content){
            if(!isset($info[$keyw])){
                $info[$keyw] = $content;
            }
        }
        if(!file_put_contents($tgtf,json_encode($info),LOCK_EX)){
            return 104;//NG: failed on write to file
        }
        $this->status = "JustModified";
        if(isset($info["removed"]) && $info["removed"] === "yes") $this->status = "Removed";

        return 1;//OK
    }

    function remove_user($email=""){
        // remove is not remove, just modify with removed property
        return $this->reg_user($email,array("removed" => "yes"));
    }

    function get_user_info($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return array();

        $tgtf = $this->tgtd . "/" . $this->login_email . $this->suffix;
        if(file_exists($tgtf)){
            return json_decode(file_get_contents($tgtf),true);
        }

        return array();
    }

    function get_status($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return "";

        $tgtf = $this->tgtd . "/" . $this->login_email . $this->suffix;
        if(!file_exists($tgtf)) return "NotRegYet";

        $userInfo = $this->get_user_info($email);
        if(isset($userInfo["removed"])){
            if($userInfo["removed"] === "yes"){
                return "Removed";
            }
        }

        return "Already";
    }

    function get_role($email=""){
        if($email === "") $email = $this->login_email;
        if($email === "") return "Guess";

        $tgtf = $this->tgtd . "/" . $this->global_setting_file;
        if(file_exists($tgtf)){
            $rtnO = json_decode(file_get_contents($tgtf),true);
            if(isset($rtnO[$email])){
                if(isset($rtnO[$email]["role"])) return $rtnO[$email]["role"];
            }
        }

        $tgtf = $this->tgtd . "/" . $this->login_email . $this->suffix;
        if(file_exists($tgtf)){
            $rtnO = json_decode(file_get_contents($tgtf),true);
            if(isset($rtnO[$email])){
                if(isset($rtnO[$email]["role"])) return $rtnO[$email]["role"];
            }
        }

        return "Guess";
    }

    /////////////////////////////////////////////////////
    function manduong($cmd="removeAllFiles"){
        if($this->login_email !== "man.duong.ym@renesas.com") return array("error" => "not man.duong");
        $regInfo = array();
        if($cmd === "removeAllFiles"){
            foreach(glob($this->tgtd . "/*") as $file){
                array_push($regInfo, "mand: removing file: " . $file);
                unlink($file);
            }
        }else{
            $regInfo["error"] = "Command not found: $cmd";
        }
        return $regInfo;
    }
}
?>