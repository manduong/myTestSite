<?php
require_once "../../src_modules/login/users_sqlite3_OTP.class.php";
date_default_timezone_set("Asia/Ho_Chi_Minh");

class WorldCup_by_sqlite3
{
    private $tgtd = "../../data/by_sqlite3";
    private $dbname_matches = "worldcup_matches.db";
    private $manual_input_matches = "../../data_manual/data_worldcup_matches.csv";
    private $manual_input_betScore = "../../data_manual/data_worldcup_betScore.csv";

    private $thisUser = null;

    function __construct(){
        if(!file_exists($this->tgtd)){
            try {
                mkdir($this->tgtd,0777,true);
            }catch(Exception $e){
                return $e;
            }
        }else{}

        $this->init_table();
        $this->thisUser = new User_by_sqlite3;

        return "OK";
    }

    function init_table(){
        $db = new SQLite3($this->tgtd . "/" . $this->dbname_matches);
        if(!$db) return "103: Cannot access database: " . $db->lastErrorMsg();

        /// => MATCHES table
        $sql ="CREATE TABLE IF NOT EXISTS
            MATCHES (
                id              INTEGER PRIMARY KEY  AUTOINCREMENT,
                match_datetime ,
                match_group    TEXT ,
                teamA          TEXT ,
                teamB          TEXT ,
                def_AB_bet     TEXT ,
                def_BS_bet     TEXT ,
                def_score_bet  TEXT ,
                score          TEXT ,
                modify_on,
                modify_by,
                register_on,
                register_by
            );";
        
        // create table
        $retExec = $db->exec($sql);
        if(!$retExec) return $db->lastErrorMsg();

        /// => USERS_BET table
        $sql ="CREATE TABLE IF NOT EXISTS
            USERS_BET (
                user     TEXT,
                match_id INTEGER ,
                bet_AB TEXT,
                bet_AB_v INTEGER,
                bet_score TEXT,
                bet_score_v INTEGER,
                bet_BS TEXT,
                bet_BS_v INTEGER,
                modify_on,
                modify_by,
                register_on,
                register_by,
                FOREIGN KEY(match_id) REFERENCES MATCHES(id)
            );";
        // create table
        $retExec = $db->exec($sql);
        if(!$retExec) return $db->lastErrorMsg();

        /// => DEF_BET_SCORE table
        $sql ="CREATE TABLE IF NOT EXISTS
            DEF_BET_SCORE (
                match_id INTEGER ,
                with_score TEXT,
                ratio TEXT,
                FOREIGN KEY(match_id) REFERENCES MATCHES(id)
            );";
        
        // create table
        $retExec = $db->exec($sql);
        if(!$retExec) return $db->lastErrorMsg();

        $db->close();
        return "OK";
    }

    function reg_match($id=0,$info=array()){
        // newly register or modify a match by its id
        if($info === array() ) return "101: nothing to reg or mod";//nothing to reg or mod

        foreach(array('match_datetime','teamA','teamB') as $chkkey){
            if(!isset($info[$chkkey])) return "NG: must have '$chkkey'";
            if($info[$chkkey] === "") return "NG: '$chkkey' must not empty";
        }

        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db) return "NG: NotRegYet";

        if($id === 0){
            // create new
            if(count($info)){
                // => check if there is chance that the item was already registered
                $matchDT = $info['match_datetime'];
                $teamA = $info['teamA'];
                $teamB = $info['teamB'];
                $sql = "SELECT * from MATCHES WHERE match_datetime=$matchDT AND teamA='$teamA' AND teamB='$teamB';";
                $fA = $db->query($sql)->fetchArray(SQLITE3_ASSOC);
                if($fA) return "NG: already existed, matchDT='$matchDT' teamA='$teamA' teamB='$teamB'";
                // => do the job
                $info["register_on"] = time();
                $info["register_by"] = $this->thisUser->login_email;
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
                    $sql = "INSERT INTO MATCHES $updStrHeads $updStrValues ;";
                    $info["sql"] = $sql;
                    $info["exec_stt"] = $db->exec($sql);
                    $info["exec_msg"] = $db->lastErrorMsg();
                }
                $info["id"] = $id;
                return array("info" => $info);
            }else{}
        }elseif($id>0){
            // modify one by query the table
            $info["modify_on"] = time();
            $info["modify_by"] = $this->thisUser->login_email;

            $sql = "SELECT * from MATCHES WHERE id='" . $id . "'";
            $fA = $db->query($sql)->fetchArray();//fetch array
            if(! $fA){
                return "105: cannot modify an none-existed match.";
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
                        $sql = "UPDATE MATCHES SET $updStr WHERE id=$id";
                        $info["sql"] = $sql;
                        $info["exec_stt"] = $db->exec($sql);
                        $info["exec_msg"] = $db->lastErrorMsg();
                    }
                    $info["id"] = $id;
                    return array("info" => $info);
                }else{}
            }
        }else{
            // out of scope
            return "104: out-of-scope id='" .$id."'" ;
        }

        $db->close();
        return "OK:$id";//OK
    }

    function reg_matches_from_file($tgtf=""){
        if($tgtf==="") $tgtf = $this->manual_input_matches;
        if(!file_exists($tgtf)) return "NG: target file none-existed.";
        $oData = array();
        $oO = array();
        $nol = 0;
        if($fh = fopen($tgtf,"r")){
            while(!feof($fh)){
                $nol++;
                $line = trim(fgets($fh));
                if(!$line) continue;
                if(preg_match('/^#/',trim($line))) continue;
                if(preg_match('/#match_datetime/',$line)) continue;
                $aoW = explode(",",$line);
                if(count($aoW) < 6) continue;
                if($aoW[0] === ""
                || $aoW[1] === ""
                || $aoW[2] === ""
                || $aoW[3] === ""
                ) continue;
                array_push($oData,array(
                    "match_datetime" => strtotime($aoW[0]),
                    "match_group" =>  $aoW[1],
                    "teamA" =>  $aoW[2],
                    "teamB" =>  $aoW[3],
                    "def_AB_bet" =>  $this->recal_score_like_string($aoW[4]),
                    "def_BS_bet" =>  $aoW[5],
                    "score" =>  $this->recal_score_like_string($aoW[6]),
                ));
                // if($nol > 1) break; // debuging - stop at 1
            }
            fclose($fh);
        }else{
            return "NG: cannot open file.";
        }
        if(count(array_keys($oData)) > 0){
            $nol = 0;
            foreach($oData as $item){
                $nol++;
                // => register newly
                $rtnMsg = $this->reg_match(0,$item);
                // => loging the status
                if(isset($rtnMsg["info"]) && isset($rtnMsg["info"]["exec_msg"]) && $rtnMsg["info"]["exec_msg"] === "not an error"){
                }elseif(preg_match("/OK:/",$rtnMsg)){
                }else{
                    array_push($oO,$rtnMsg);
                }
            }
        }
        // return "OK";
        return $oO;
    }

    function reg_bet($match_id=0,$user="",$info=array()){
        if($match_id === 0) return "NG: there is no id to delete.";
        if($user === "") return "NG: there is no user to delete.";
        if($info === array() ) return "101: nothing to reg or mod";//nothing to reg or mod

        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"USERS_BET");
        if(!$db) return "NG: NotRegYet";

        // check if the time allow the betting
        $matchInf = $this->get_match_info($match_id);
        if(count(array_keys($matchInf)) > 0){
            // => allow users to register or not
            // if($matchInf[1][1] + 30*60 < time())  return "NG: Over time, cannot bet anymore.";//OK
        }else{
            return "NG: No match found";//OK
        }

        $sql = "SELECT * from USERS_BET WHERE match_id=$match_id AND user=\"$user\";";
        $query = $db->query($sql);
        $fA = false;
        if($query) $fA = $query->fetchArray(SQLITE3_ASSOC);
        if($fA){
            // already existed, modify only
            $info["modify_on"] = time();
            $info["modify_by"] = $this->thisUser->login_email;
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
                $sql = "UPDATE USERS_BET SET $updStr WHERE match_id=$match_id AND user=\"$user\"";
                $info["sql"] = $sql;
                $info["exec_stt"] = $db->exec($sql);
                $info["exec_msg"] = $db->lastErrorMsg();
            }
            $info["match_id"] = $match_id;
            $info["user"] = $user;
            // return array("info" => $info);
        }else{
            // create new bet
            $info["register_on"] = time();
            $info["register_by"] = $this->thisUser->login_email;
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
                $sql = "INSERT INTO USERS_BET $updStrHeads $updStrValues ;";
                $info["sql"] = $sql;
                $info["exec_stt"] = $db->exec($sql);
                $info["exec_msg"] = $db->lastErrorMsg();
            }
            $info["match_id"] = $match_id;
            $info["user"] = $user;
            // return array("info" => $info);
        }

        $db->close();
        return "OK: $match_id,$user";//OK
    }

    function del_match($id=0){
        if($id === 0) return "NG: there is no id to delete.";
        if($this->thisUser->role !== "Admin" && $this->thisUser->role !== "AdminWC") return "NG: User not a valid role.";
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db) return "NG: NotRegYet";
        $sql = "DELETE FROM MATCHES WHERE id=$id;";
        $info["sql"] = $sql;
        $info["exec_stt"] = $db->exec($sql);
        $info["exec_msg"] = $db->lastErrorMsg();
        $db->close();
        return "OK:$id";//OK
    }

    function del_bet($match_id=0,$user=""){
        if($match_id === 0) return "NG: there is no id to delete.";
        if($user === "") return "NG: there is no user to delete.";
        if($this->thisUser->login_email !== $user) return "NG: Can delete self bet only.";
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"USERS_BET");
        if(!$db) return "NG: NotRegYet";
        $sql = "DELETE FROM USERS_BET WHERE match_id=$match_id AND user=$user";
        $info["sql"] = $sql;
        $info["exec_stt"] = $db->exec($sql);
        $info["exec_msg"] = $db->lastErrorMsg();
        $db->close();
        return "OK: $match_id, $user";//OK
    }

    function get_match_info($id=0){
        $oO = array();
 
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db) return "NG: NotRegYet";

        // => header
        array_push($oO,array());
        $sql = "PRAGMA table_info(MATCHES)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO[0],$fA["name"]);
        }

        // => content
        $sql = "SELECT * from MATCHES";
        if($id > 0) $sql .= " WHERE id=$id;";
        $query = $db->query($sql);
        if(!$query) return $oO;
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO,array_values($fA));
        }
 
        $db->close();
        return $oO;
    }

    function get_bet_info($match_id=0,$user=""){
        $oO = array();
 
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"USERS_BET");
        if(!$db) return "NG: NotRegYet";

        // => header
        array_push($oO,array());
        $sql = "PRAGMA table_info(USERS_BET)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO[0],$fA["name"]);
        }

        // => content
        $sql = "SELECT * from USERS_BET";
        if($match_id > 0 && $user !== ""){
            $sql .= " WHERE match_id=$match_id AND user='$user';";
        }elseif($match_id > 0){
            $sql .= " WHERE match_id=$match_id;";
        }elseif($user !== ""){
            $sql .= " WHERE user='$user';";
        }else{}
        $query = $db->query($sql);
        if(!$query) return $oO;
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            array_push($oO,array_values($fA));
        }

        $db->close();
        return $oO;
    }

    function get_point_per_user($match_id=0,$user=""){
        $oO = array();
        $oMatches = array();
 
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"USERS_BET");
        if(!$db) return "NG: NotRegYet";

        // => get bet info
        $sql = "SELECT * from USERS_BET";
        if($match_id > 0 && $user !== ""){
            $sql .= " WHERE match_id=$match_id AND user='$user';";
        }elseif($match_id > 0){
            $sql .= " WHERE match_id=$match_id;";
        }elseif($user !== ""){
            $sql .= " WHERE user='$user';";
        }else{}
        $query = $db->query($sql);
        if(!$query) return $oO;
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            ///// => for each betting info: extract match result and calculate point of the user
            // => init
            if(!isset($oO[$fA["user"]])){
                $oO[$fA["user"]] = array();
                $oO[$fA["user"]]["points"] = 0;
                $oO[$fA["user"]]["totalAB"] = 0;
                $oO[$fA["user"]]["totalBS"] = 0;
                $oO[$fA["user"]]["totalScore"] = 0;
                $oO[$fA["user"]]["detail"] = array();
            }
            
            // => extract match result
            $matchInfo = $this->get_match_info($fA["match_id"]);
            if(is_array($matchInfo) && count($matchInfo) > 1){
                if(!isset($oMatches[$fA["match_id"]])) $oMatches[$fA["match_id"]] = $matchInfo[1];
                // => calculate the point
                $match_def_AB = $oMatches[$fA["match_id"]][5];//5 for 'def_AB_bet' index
                $match_def_BS = $oMatches[$fA["match_id"]][6];//6 for 'def_BS_bet' index
                $match_score = $this->recal_score_like_string($oMatches[$fA["match_id"]][8]);//8 for 'score' index

                $match_def_score = $this->get_def_bet_score($fA["match_id"]);
                
                $betABInf = $this->rtn_pts_AB($match_score,$match_def_AB,$fA["bet_AB"],$fA["bet_AB_v"]);
                $betBSInf = $this->rtn_pts_BS($match_score,$match_def_BS,$fA["bet_BS"],$fA["bet_BS_v"]);
                $betScoreInf = $this->rtn_pts_score($match_score,$match_def_score,$fA["bet_score"],$fA["bet_score_v"]);

                // reg to output
                if($betABInf["bet"]){
                    if(!isset($oO[$fA["user"]]["detail"][$fA["match_id"]])) $oO[$fA["user"]]["detail"][$fA["match_id"]] = array();
                    $oO[$fA["user"]]["detail"][$fA["match_id"]]["AB"] = $betABInf;
                    $oO[$fA["user"]]["points"]+=$betABInf["points"];
                    $oO[$fA["user"]]["totalAB"]+=$betABInf["userBetValue"];
                }else{}
                if($betBSInf["bet"]){
                    if(!isset($oO[$fA["user"]]["detail"][$fA["match_id"]])) $oO[$fA["user"]]["detail"][$fA["match_id"]] = array();
                    $oO[$fA["user"]]["detail"][$fA["match_id"]]["BS"] = $betBSInf;
                    $oO[$fA["user"]]["points"]+=$betBSInf["points"];
                    $oO[$fA["user"]]["totalBS"]+=$betBSInf["userBetValue"];
                }else{}
                if($betScoreInf["bet"]){
                    if(!isset($oO[$fA["user"]]["detail"][$fA["match_id"]])) $oO[$fA["user"]]["detail"][$fA["match_id"]] = array();
                    $oO[$fA["user"]]["detail"][$fA["match_id"]]["Score"] = $betScoreInf;
                    $oO[$fA["user"]]["points"]+=$betScoreInf["points"];
                    $oO[$fA["user"]]["totalScore"]+=$betScoreInf["userBetValue"];
                }else{}
                
            }else{}
        }
        // $oO = $oMatches;
        $db->close();
        return $oO;
    }

    function get_matches_table_header(){
        // return array of header in sqlite3 table, without some internal controlling names
        $oO = array();
 
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db) return false;

        // => header
        $sql = "PRAGMA table_info(MATCHES)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            if($fA["name"] === "id"
            || $fA["name"] === "register_on"
            || $fA["name"] === "register_by"
            || $fA["name"] === "modify_on"
            || $fA["name"] === "modify_by"
            ) continue;
            array_push($oO,$fA["name"]);
        }
 
        $db->close();
        return $oO;
    }

    function reg_betScore_from_file($tgtf=""){
        if($tgtf==="") $tgtf = $this->manual_input_betScore;
        if(!file_exists($tgtf)) return "NG: target file none-existed.";
        $oData = array();
        $oO = array();
        if($fh = fopen($tgtf,"r")){
            while(!feof($fh)){
                $line = trim(fgets($fh));
                if(!$line) continue;
                if(preg_match('/^#/',trim($line))) continue;
                if(preg_match('/#match_datetime/',$line)) continue;
                $aoW = explode(",",$line);
                if(count($aoW) < 5) continue;
                if($aoW[0] === ""
                || $aoW[1] === ""
                || $aoW[2] === ""
                || $aoW[3] === ""
                || $aoW[4] === ""
                ) continue;
                $matchDT = strtotime($aoW[0]);
                $teamA = $aoW[1];
                $teamB = $aoW[2];
                $score = $this->recal_score_like_string($aoW[3]);
                $ratio = $aoW[4];
                $matchID = $this->rtn_match_id($matchDT,$teamA,$teamB);
                if($matchID){
                    if(!isset($oData[$matchID])) $oData[$matchID] = array();
                    $oData[$matchID]["score=" . $score] = $ratio;
                }
            }
            fclose($fh);
        }else{
            return "NG: cannot open file.";
        }
        $oO["data"] = $oData;

        if(count(array_keys($oData)) > 0){
            foreach($oData as $matchID => $info){
                // => working on it
                $rtnMsg = $this->reg_def_bet_score($matchID,$info);
                // => loging the status
                if(isset($rtnMsg["status"]) && is_array($rtnMsg["status"]) && count($rtnMsg["status"]) > 0){
                    array_push($oO,$rtnMsg);
                }elseif(is_array($rtnMsg) && $rtnMsg === array()){
                }else{
                    array_push($oO,$rtnMsg);
                }
            }
        }

        // return "OK";
        return $oO;
    }

    function reg_def_bet_score($id=0,$info=array()){
        $oO = array();
        if($id === 0) return $oO;
        $oO["status"] = "starting";
        $oO["detail"] = array();
        // $oO["info"] = $info;

        $db_matches = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db_matches) return "NG: NotRegYet";
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"DEF_BET_SCORE");
        if(!$db) return "NG: NotRegYet";

        // => check if match existed
        $sql = "SELECT * from MATCHES WHERE id=$id;";
        $fA = $db_matches->query($sql)->fetchArray();//fetch array
        if(! $fA){
            return "105: cannot modify an none-existed match, id='".$id."'";
        }else{
            if(count(array_keys($info))){
                $oO["status"] = array();
                foreach($info as $guide => $ratio){
                    if(!preg_match('/^score=/',$guide)) continue;
                    if($ratio === "") continue;
                    $tmpa = explode("=",$guide);
                    $with_score = $this->recal_score_like_string($tmpa[1]);
                    // check if there existed the match def-bet-score already
                    $chkSql = "SELECT * from DEF_BET_SCORE WHERE match_id=$id AND with_score='$with_score';";
                    $fA = $db->query($chkSql)->fetchArray(SQLITE3_ASSOC);
                    if(! $fA){
                        // newly creating...
                        $updStrHeads = "(";
                        $updStrValues = "VALUES(";
                        foreach(array("match_id" => $id, "with_score" => $with_score, "ratio" => $ratio)  as $keyw => $value){
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
                            $sql = "INSERT INTO DEF_BET_SCORE $updStrHeads $updStrValues ;";
                            $tmpH = array();
                            $tmpH["sql"] = $sql;
                            $tmpH["exec_stt"] = $db->exec($sql);
                            $tmpH["exec_msg"] = $db->lastErrorMsg();
                            // array_push($oO["detail"],"new: id=" . $id . " w/ " . $with_score . " = " . $value);
                            array_push($oO["detail"],$tmpH);
                            if($tmpH["exec_msg"] !== "not an error"){
                                array_push($oO["status"], "NG: new id='$id' score='$with_score' stt='".$tmpH['exec_stt']."'");
                            }else{
                                array_push($oO["status"], "OK: new id='$id' score='$with_score' stt='".$tmpH['exec_stt']."'");
                            }
                        }
                    }else{
                        // modify when existed
                        $updStr = "";
                        foreach(array("with_score" => $with_score, "ratio" => $ratio)  as $keyw => $value){
                            if(is_int($value) || is_long($value) || is_null($value) || is_float($value)){
                                $updStr .= $keyw . " = " . $value . " , ";
                            }else{
                                $updStr .= $keyw . " = '" . $value . "' , ";
                            }
                        }
                        if($updStr !== ""){
                            $updStr = preg_replace("/ , $/","",$updStr);
                            $sql = "UPDATE DEF_BET_SCORE SET $updStr WHERE match_id=$id";
                            $tmpH = array();
                            $tmpH["sql"] = $sql;
                            $tmpH["exec_stt"] = $db->exec($sql);
                            $tmpH["exec_msg"] = $db->lastErrorMsg();
                            // array_push($oO["detail"],"mod: id=" . $id . " w/ " . $with_score . " = " . $value);
                            // array_push($oO["detail"],$tmpH);
                            if($tmpH["exec_msg"] !== "not an error"){
                                array_push($oO["status"], "NG: mod id='$id' score='$with_score' stt='".$tmpH['exec_stt']."'");
                            }else{
                                array_push($oO["status"], "OK: mod id='$id' score='$with_score' stt='".$tmpH['exec_stt']."'");
                            }
                        }
                    }
                }
            }else{
                $oO["status"] = "NG: nothing to go.";
            }
        }

        $db_matches->close();
        $db->close();
        return $oO;
    }

    function get_def_bet_score($match_id=0){
        $oO = array();
        if($match_id === 0) return $oO;
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"DEF_BET_SCORE");
        if(!$db) return "NG: NotRegYet";
        $sql = "SELECT * from DEF_BET_SCORE WHERE match_id=$match_id;";
        $query = $db->query($sql);
        if($query){
            while($fA = $query->fetchArray(SQLITE3_ASSOC)){
                $oO[$fA["with_score"]] = $fA["ratio"];//simplify the output
            }
        }else{}

        return $oO;
    }

    function get_bet_table_header(){
        // return array of header in sqlite3 table, without some internal controlling names
        $oO = array();
 
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"USERS_BET");
        if(!$db) return false;

        // => header
        $sql = "PRAGMA table_info(MATCHES)";
        $query = $db->query($sql);
        while($fA = $query->fetchArray(SQLITE3_ASSOC)){
            if(0
            || $fA["name"] === "register_on"
            || $fA["name"] === "register_by"
            || $fA["name"] === "modify_on"
            || $fA["name"] === "modify_by"
            ) continue;
            array_push($oO,$fA["name"]);
        }
 
        $db->close();
        return $oO;
    }

    ////////////////////////
    private function rtn_pts_AB($score,$defBet,$userBet,$userBetValue){
        $oO = array(
            "bet" => true,
            "score" => $score,
            "defBet" => $defBet,
            "userBet" => $userBet,
            "userBetValue" => $userBetValue,
            "points" => 0,
            "status" => "cannot proceed",
        );

        if($userBet === null || $userBet === "") return $oO;
        if($userBetValue === null || $userBetValue === "") return $oO;
        
        if($userBet !== null && $userBetValue !== null) $oO["bet"] = true;
        
        $oO["status"] = "OK";
        if(!$oO["bet"]) return $oO;
        
        if($score === null || $score === ""){
            $score = "-:-";
            $oO["points"] = 0;
        }else{
            
            if($defBet === null || $defBet === ""){
                $oO["status"] = "NG: no defBet.";
                return $oO;
            }else{}

            $tmpa1 = preg_split('/[-:,_]/',$score);
            $tmpa2 = preg_split('/[-:,_]/',$defBet);
            $tmpv = ($tmpa1[0]+$tmpa2[0]) - ($tmpa1[1]+$tmpa2[1]);
            if($userBet === "B") $tmpv =  -$tmpv;

            if($tmpv <= -0.5){
                $oO["points"] = -1.0 * $userBetValue;
            }elseif($tmpv <= -0.25){
                $oO["points"] = -0.5 * $userBetValue;
            }elseif($tmpv <= 0){
                $oO["points"] =  0.0 * $userBetValue;
            }elseif($tmpv < 0.5){
                $oO["points"] =  0.5 * $userBetValue;
            }else{
                $oO["points"] =  1.0 * $userBetValue;
            }
        }

        return $oO;
    }

    private function rtn_pts_BS($score,$defBet,$userBet,$userBetValue){
        $oO = array(
            "bet" => false,
            "score" => $score,
            "defBet" => $defBet,
            "userBet" => $userBet,
            "userBetValue" => $userBetValue,
            "points" => 0,
            "status" => "cannot proceed",
        );

        if($userBet === null || $userBet === "") return $oO;
        if($userBetValue === null || $userBetValue === "") return $oO;

        if($userBet !== null && $userBetValue !== null) $oO["bet"] = true;

        $oO["status"] = "OK";
        if(!$oO["bet"]) return $oO;

        if($score === null || $score === ""){
            $score = "-:-";
            $oO["points"] = 0;
        }else{
            if($defBet === null || $defBet === ""){
                $oO["status"] = "NG: no defBet.";
                return $oO;
            }else{}

            $tmpa1 = preg_split('/[-:,_]/',$score);
            $tmpv = ($tmpa1[0]+$tmpa1[1]) - $defBet;
            if($userBet === "small") $tmpv =  -$tmpv;

            if($tmpv <= -0.5){
                $oO["points"] = -1.0 * $userBetValue;
            }elseif($tmpv <= -0.25){
                $oO["points"] = -0.5 * $userBetValue;
            }elseif($tmpv <= 0){
                $oO["points"] =  0.0 * $userBetValue;
            }elseif($tmpv < 0.5){
                $oO["points"] =  0.5 * $userBetValue;
            }else{
                $oO["points"] =  1.0 * $userBetValue;
            }
        }

        return $oO;
    }

    private function rtn_pts_score($score,$defBet,$userBet,$userBetValue){
        $oO = array(
            "bet" => true,
            "score" => $score,
            "defBet" => $defBet,
            "userBet" => $userBet,
            "userBetValue" => $userBetValue,
            "points" => 0,
            "status" => "cannot proceed",
        );

        if($defBet === null || $defBet === "") return $oO;
        if($userBet === null || $userBet === "") return $oO;
        if($userBetValue === null || $userBetValue === "") return $oO;

        if($score === null || $score === ""){
            $score = "-:-";
            $oO["points"] = 0;
        }else{
            if($defBet === null || $defBet === "" || count(array_keys($defBet )) === 0){
                $oO["status"] = "NG: no defBet.";
                return $oO;
            }else{}

            $ratio = 2;
            if(isset($defBet[$score])){
                $ratio = $defBet[$score];
            }else{
                $oO["status"] = "No bet-score for $score";
            }

            if($userBet !== null && $userBetValue !== null) $oO["bet"] = true;

            $oO["status"] = "OK";
            if(!$oO["bet"]) return $oO;

            if($score === $userBet){
                $oO["points"] = ($ratio-1) * $userBetValue;//-1 for the bet-value needed to be in-scope
            }else{
                $oO["points"] = -1 * $userBetValue;
            }
        }

        return $oO;
    }

    private function rtn_match_id($matchDT="",$teamA="",$teamB=""){
        if($matchDT === "") return false;
        if($teamA === "") return false;
        if($teamB === "") return false;
        
        $db = $this->is_tbl_existed($this->tgtd . "/" . $this->dbname_matches,"MATCHES");
        if(!$db) return false;

        $sql = "SELECT * from MATCHES WHERE match_datetime=$matchDT AND teamA='$teamA' AND teamB='$teamB';";
        $query = $db->query($sql);
        if(!$query){
            $db->close();
            return false;
        }else{}

        $fA = $query->fetchArray(SQLITE3_ASSOC);
        if(!$fA){
            $db->close();
            return false;
        }else{}
        
        $db->close();
        return $fA["id"];
    }

    private function recal_score_like_string($str=""){
        if($str === "") return $str;
        $tmpa = preg_split('/[-:,_\s]/',preg_replace('/[\r\n]/','',trim($str)));
        if(count($tmpa) < 2) return $str;
        return "$tmpa[0]:$tmpa[1]";
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

    /////////////////////////////////////////////////////
}
?>