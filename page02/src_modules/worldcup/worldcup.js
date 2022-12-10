// ============================================
///////////////////////////////////////////////
function dsp_matches_w_adding(cntO){
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_matches_admin"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable"],{"min-width":"100%"});
    let eTbd = my_create("tbody",undefined,["w3-small"],{"min-width":"100%"});
    let eAdd = my_create("div","Add new",["w3-btn","w3-card-2","w3-border","w3-hover-indigo"],{"width":"100%"});
    eAdd.addEventListener("click",dsp_add_new_match_form);

    // reg columns
    let regCols = [];
    for(let i=0;i<cntO["cntData"][0].length;i++){
        if(0
        || cntO["cntData"][0][i] === "modify_on"
        || cntO["cntData"][0][i] === "modify_by"
        || cntO["cntData"][0][i] === "register_on"
        || cntO["cntData"][0][i] === "register_by"
        ) continue;
        regCols.push(i);
    }
    // header
    let thData = [];
    for(let i of regCols) { thData.push(cntO["cntData"][0][i]); }
    thData.push("");//preserve room for added button later
    thData.push("");
    eTbd.appendChild(my_add_row(thData,"th",{"padding":"2px"}));

    // content
    for(let j=1;j<cntO["cntData"].length;j++){
        let tdData = [];
        let flgPast = false;
        for(let i of regCols) { 
            if(thData[i] === "match_datetime"){
                let d = new Date(cntO["cntData"][j][i] * 1000);
                if(d - Date.now() < 0) flgPast = true;
                tdData.push(d.toLocaleString("en-US",{dateStyle:"short",timeStyle:"short"}));
            }else if(thData[i] === "def_score_bet"){
                tdData.push("<i class='bi bi-gear w3-button w3-hover-orange w3-xlarge w3-round' style='padding:0'></i>");
            }else{
                tdData.push(cntO["cntData"][j][i]); 
            }
        }
        // => add some more buttons
        tdData.push("<i class='bi bi-bandaid w3-button w3-hover-orange w3-xlarge w3-round' style='padding:0'></i>")
        // tdData.push("<i class='bi bi-info-circle w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        tdData.push("<i class='bi bi-trash w3-button w3-hover-orange w3-xlarge w3-round' style='padding:0'></i>")
        // =>
        if(flgPast){
            eTbd.appendChild(my_add_row(tdData,"td",{"text-align":"center","vertical-align":"middle","padding":"2px","border":"1px dotted dimgrey","border-radius":"5px","background-color":"lightgray"}));
        }else{
            eTbd.appendChild(my_add_row(tdData,"td",{"text-align":"center","vertical-align":"middle","padding":"2px","border":"1px dotted dimgrey","border-radius":"2px"}));
        }
    }

    for(let tmpe of eTbd.getElementsByClassName("bi-gear")){
        tmpe.addEventListener("click",dsp_mod_bet_score_tbl_from_gear_button);
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-bandaid")){
        tmpe.addEventListener("click",dsp_mod_match_form_from_mod_button);
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-trash")){
        tmpe.addEventListener("click",dsp_del_match_from_del_button);
    }
    // layout-ing
    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    eTop.appendChild(eAdd)
    mainSide.appendChild(eTop);

    // display none some column
    let aoTr = eTbd.getElementsByTagName("tr");
    for(let tr of aoTr){
        tr.childNodes[0].style.display = "none";
    }
    // add some class 
    w3.addClass("#tbl_matches_admin td","w3-hover-shadow w3-hover-indigo")
    return 1;
}

function dsp_add_new_match_form(){
    let sf = "src_modules/worldcup/rtn_data_n_reg_match.php";
    my_ajax_get(sf,[{}],function(rtnO){
        let tgtForm  = my_gen_form(rtnO,function(tgtForm,rtnO){
            tgtForm.remove();
            console.log(rtnO);
            my_ajax_get("./src_modules/worldcup/rtn_matches.php",[{}],dsp_matches_w_adding)
        });
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function dsp_mod_bet_score_tbl_from_gear_button(){
    let sf = "src_modules/worldcup/rtn_data_n_reg_bet_score.php";
    let id = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{id:id}],function(rtnO){
        let tgtForm  = my_gen_bet_score_tbl(rtnO,function(tgtForm,rtnO){
            tgtForm.remove();
            console.log(rtnO);
            my_ajax_get("./src_modules/worldcup/rtn_matches.php",[{}],dsp_matches_w_adding)
        });
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function dsp_mod_match_form_from_mod_button(){
    let sf = "src_modules/worldcup/rtn_data_n_reg_match.php";
    let id = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{id:id}],function(rtnO){
        let tgtForm  = my_gen_form(rtnO,function(tgtForm,rtnO){
            tgtForm.remove();
            console.log(rtnO);
            my_ajax_get("./src_modules/worldcup/rtn_matches.php",[{}],dsp_matches_w_adding)
        });
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function dsp_del_match_from_del_button(){
    // => confirm
    if(!confirm("WARNING: You're deleting something, this work can not be reverted. Are you sure?")) return;

    // => do the job
    let sf = "src_modules/worldcup/del_match.php";
    let id = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{id:id}],function(rtnO){
        console.log(rtnO)
        my_ajax_get("./src_modules/worldcup/rtn_matches.php",[{}],dsp_matches_w_adding);
    });
    return;
}

function my_gen_bet_score_tbl(cntData,func_act_after_submit){
    //
    console.log(cntData)
    if(!cntData.hasOwnProperty("cntData")) return; //
    if(!cntData.hasOwnProperty("formAction")) cntData["formAction"] = ""; //
    // console.log(cntData)
    let eTop = my_create("div",undefined,["w3-container"]);
    let eBtnClose = my_create("span","&times;",["w3-button","w3-display-topright"],{},{"onclick":"this.parentNode.parentNode.parentNode.remove()"})
    // form content
    let eForm = my_create("form",undefined,["w3-container","w3-padding-16"],{},{"method":"post"});
    let eRef = my_create("div",undefined,["w3-container"]);
    // => ref
    eRef.appendChild(my_create("label","Match-ID:"));
    eRef.appendChild(my_create("input",undefined,["w3-lightgrey","w3-border-0"],{},{"readonly":true,"name":"match_id","value":cntData["match_id"]}))
    // => submit button
    let eBtn = my_create("input","Submit",["w3-input","w3-button","w3-indigo"],{"margin-top":"20px"},{"type":"submit"})

    // => table of valid scores
    let eTblTop = my_create("div",undefined);
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable"]);
    let eTbd = my_create("tbody",undefined);
    let trData = [];
    trData.push("A-B"); for(let i=0;i<11;i++){ trData.push(i) }
    eTbd.appendChild(my_add_row(trData,"th",{"padding":0,"width":"8.33%"}));
    for(let i=0;i<11;i++){
        let tr = my_create("tr",undefined);
        tr.appendChild(my_create("th",i,[],{"padding":0}))
        for(let j=0;j<11;j++){
            let td = my_create("td",my_create("input",undefined,["w3-round","w3-card-2"],{"width":"100%"},{"type":"text","name":"score="+i+":"+j}),[],{"padding":0});
            td.childNodes[0].style.backgroundColor = "lightgray";
            if(Object.keys(cntData).length > 0){
                if(cntData["cntData"].hasOwnProperty(i+":"+j)){
                    if(cntData["cntData"][i+":"+j] !== undefined
                    && cntData["cntData"][i+":"+j] !== ""
                    && cntData["cntData"][i+":"+j] !== "null"
                    ){
                        td.childNodes[0].value = cntData["cntData"][i+":"+j];
                        td.childNodes[0].style.backgroundColor = "orange";
                    }else{}
                }else{}
            }
            td.addEventListener("change",function(e){
                if(e.target.value === ""){
                    e.target.style.backgroundColor = "lightgray";
                }else{
                    e.target.style.backgroundColor = "orange";
                }
            })
            // => init it
            tr.appendChild(td)
        }
        eTbd.appendChild(tr)
    }


    // submisson behavior
    eForm.setAttribute("action",cntData["formAction"]);
    // prevent default submit behavaior and redirect it to the submit-button
    eForm.addEventListener("submit",function(event){
        event.preventDefault(); 
        my_ajax_post_form(cntData["formAction"],eForm,function(rtnO){
            func_act_after_submit(eTop.parentNode.parentNode,rtnO);
            // console.log(rtnO)
        })
        // event.target.parentNode.parentNode.parentNode.remove();// don't auto close form because OTP need sendingOTP to standstill
    })

    eTbl.appendChild(eTbd);
    eTblTop.appendChild(eTbl);
    eForm.appendChild(eRef);
    eForm.appendChild(eTblTop);
    eForm.appendChild(eBtn);
    eTop.appendChild(eBtnClose);
    eTop.appendChild(eForm);
    return my_create("div",my_create("div",eTop,["w3-modal-content"]),["w3-modal"],{},{});
}

// ============================================
///////////////////////////////////////////////
function dsp_matches_vs_self_bet(cntO){
    console.log(cntO)
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"]["all_matches"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_matches_self_bet"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable"],{"min-width":"100%"});
    let eTbd = my_create("tbody",undefined,[],{"min-width":"100%"});

    // reg columns
    let regCols = [];
    for(let i=0;i<cntO["cntData"]["all_matches"][0].length;i++){
        if(0
        || cntO["cntData"]["all_matches"][0][i] === "modify_on"
        || cntO["cntData"]["all_matches"][0][i] === "modify_by"
        || cntO["cntData"]["all_matches"][0][i] === "register_on"
        || cntO["cntData"]["all_matches"][0][i] === "register_by"
        || (cntO["cntData"]["all_matches"][0][i].search(/^def/) > -1)
        ) continue;
        regCols.push(i);
    }
    // header
    let thData = [];
    for(let i of regCols) { thData.push(cntO["cntData"]["all_matches"][0][i]); }
    thData.push("A_B pts");
    thData.push("B_S pts");
    thData.push("Score pts");
    thData.push("All pts");
    thData.push("");
    thData.push("");
    eTbd.appendChild(my_add_row(thData,"th",{"padding":"2px"}));

    let user = "";
    for(let tmpv in cntO["cntData"]["self_bet"]) {user = tmpv;}

    // content
    for(let j=1;j<cntO["cntData"]["all_matches"].length;j++){
        let tdData = [];
        let flgPast = false;
        for(let i of regCols) { 
            if(thData[i] === "match_datetime"){
                let d = new Date(cntO["cntData"]["all_matches"][j][i] * 1000);
                if(d - Date.now() < 0) flgPast = true;
                tdData.push(d.toLocaleString("en-US",{dateStyle:"short",timeStyle:"short"})); 
            }else{
                tdData.push(cntO["cntData"]["all_matches"][j][i]); 
            }
        }

        if(!cntO["cntData"].hasOwnProperty("self_bet")
        || !cntO["cntData"]["self_bet"].hasOwnProperty(user)
        || !cntO["cntData"]["self_bet"][user].hasOwnProperty("detail")
        || !cntO["cntData"]["self_bet"][user]["detail"].hasOwnProperty(cntO["cntData"]["all_matches"][j][0])){
            tdData.push("-","-","-",0);
        }else{
            let pts_AB = "-";
            if(cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]].hasOwnProperty("AB")){
                pts_AB = cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]]["AB"]["points"];
            }else{}
            let pts_BS = "-";
            if(cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]].hasOwnProperty("BS")){
                pts_BS = cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]]["BS"]["points"];
            }else{}
            let pts_score = "-";
            if(cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]].hasOwnProperty("Score")){
                pts_score = cntO["cntData"]["self_bet"][user]["detail"][cntO["cntData"]["all_matches"][j][0]]["Score"]["points"];
            }else{}
            let sum = 0;
            if(Number.isInteger(pts_AB)) sum+=pts_AB;
            if(Number.isInteger(pts_BS)) sum+=pts_BS;
            if(Number.isInteger(pts_score)) sum+=pts_score;
            tdData.push(pts_AB,pts_BS,pts_score,sum);
        }
        // => add info button
        tdData.push("<i class='bi bi-info-circle w3-button w3-hover-orange w3-xlarge w3-round' style='padding:0'></i>")
        // => add mod button
        tdData.push("<i class='bi bi-bandaid w3-button w3-hover-orange w3-xlarge w3-round' style='padding:0'></i>")
        // =>
        if(flgPast){
            eTbd.appendChild(my_add_row(tdData,"td",{"padding":"2px","background-color":"lightgray"}));
        }else{
            eTbd.appendChild(my_add_row(tdData,"td",{"padding":"2px"}));
        }
    }

    for(let tmpe of eTbd.getElementsByClassName("bi-bandaid")){
        tmpe.addEventListener("click",dsp_mod_bet_form_from_mod_button);
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-info-circle")){
        tmpe.addEventListener("click",function(){
            let theMatchID = this.parentNode.parentNode.childNodes[0].innerText;
            console.log(theMatchID)
            dsp_bet_score_tbl_as_info(theMatchID);
        });
    }

    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    mainSide.appendChild(eTop);
    
    // display none some column, and modify some columns
    let aoTr = eTbd.getElementsByTagName("tr");
    for(let tr of aoTr){
        tr.childNodes[0].style.display = "none";//hide match_id column
        tr.childNodes[3].style.textAlign = "right";
        tr.childNodes[3].style.color = "indigo";
        tr.childNodes[3].style.verticalAlign = "middle";
        tr.childNodes[4].style.textAlign = "left";
        tr.childNodes[4].style.color = "red";
        tr.childNodes[4].style.verticalAlign = "middle";
        for(let i=5;i<tr.childNodes.length;i++){
            tr.childNodes[i].style.textAlign = "center";
            tr.childNodes[i].style.verticalAlign = "middle";
        }
    }

    // add some inputs (easier for users to input)
    for(let i=1;i<aoTr.length;i++){
        let eTeamA = aoTr[i].childNodes[3];
        let eTeamB = aoTr[i].childNodes[4];
        let eScore = aoTr[i].childNodes[5];
        eTeamB.insertBefore(my_create("i",undefined,["bi-circle","w3-button","myCnt-select-B"],{"padding":0,"color":"gray"},{}),eTeamB.childNodes[0]);
        eTeamA.appendChild(my_create("i",undefined,["bi-circle","w3-button","myCnt-select-A"],{"padding":0,"color":"gray"},{}));
        eScore.style.position = "relative";
        eScore.insertBefore(my_create("i",undefined,["bi-box-arrow-down","w3-button","w3-small","myCnt-select-small"],{"padding":0,"color":"gray"},{}),eScore.childNodes[0]);
        eScore.insertBefore(my_create("i",undefined,["bi-box-arrow-up","w3-button"  ,"w3-small","myCnt-select-big"],{"padding":0,"color":"gray"},{}),eScore.childNodes[0]);
        let eBetScore = my_create("span","-:-",["my-tooltip","myCnt-bet-score","w3-small","w3-hover-shadow","w3-text-purple"],{"padding":0,"font-style":"italic"},{});
        eBetScore.appendChild(my_create("input",undefined,["myCnt-input-bet-score","w3-small","my-tooltip-content-right"],{"width":"30px"}));
        eScore.appendChild(eBetScore);
        eScore.style.height = "36px";
        eScore.style.minWidth = "42px";
        eScore.style.verticalAlign = "top";
    }

    // update icon specifying the betting
    for(let i=1;i<aoTr.length;i++){
        let matchID = aoTr[i].childNodes[0].innerText;
        let betAB = chk_exist_and_return(cntO["cntData"],["self_bet",user,"detail",matchID,"AB","userBet"]);
        let betBS = chk_exist_and_return(cntO["cntData"],["self_bet",user,"detail",matchID,"BS","userBet"]);
        let betScore = chk_exist_and_return(cntO["cntData"],["self_bet",user,"detail",matchID,"Score","userBet"]);
        if(betAB === "A"){
            aoTr[i].getElementsByClassName("myCnt-select-A")[0].style.color = "indigo";
            aoTr[i].getElementsByClassName("myCnt-select-A")[0].classList.remove("bi-circle");
            aoTr[i].getElementsByClassName("myCnt-select-A")[0].classList.add("bi-check-circle");
        }else if(betAB === "B"){
            aoTr[i].getElementsByClassName("myCnt-select-B")[0].style.color = "red";
            aoTr[i].getElementsByClassName("myCnt-select-B")[0].classList.remove("bi-circle");
            aoTr[i].getElementsByClassName("myCnt-select-B")[0].classList.add("bi-check-circle");
        }else{}

        console.log(matchID,aoTr[i].childNodes[3].innerText,betBS)
        if(betBS === "big"){
            aoTr[i].getElementsByClassName("myCnt-select-big")[0].style.color = "black";
            aoTr[i].getElementsByClassName("myCnt-select-big")[0].classList.remove("w3-small");
            aoTr[i].getElementsByClassName("myCnt-select-small")[0].style.color = "lightgray";
            aoTr[i].getElementsByClassName("myCnt-select-small")[0].classList.add("w3-small");
        }else if(betBS === "small") {
            aoTr[i].getElementsByClassName("myCnt-select-small")[0].style.color = "black";
            aoTr[i].getElementsByClassName("myCnt-select-small")[0].classList.remove("w3-small");
            aoTr[i].getElementsByClassName("myCnt-select-big")[0].style.color = "lightgray";
            aoTr[i].getElementsByClassName("myCnt-select-big")[0].classList.add("w3-small");
        }else{}

        if(betScore !== null){
            if(betScore === "") betScore = "-:-";
            aoTr[i].getElementsByClassName("myCnt-bet-score")[0].childNodes[0].nodeValue = betScore;
        }
    }

    // assign behaviors
    for(let i=1;i<aoTr.length;i++){
        let matchID = aoTr[i].childNodes[0].innerText;
        aoTr[i].getElementsByClassName("myCnt-select-A")[0].addEventListener("click",function(){
            if(this.classList.contains("bi-check-circle")){
                // disable selection of A
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_AB":""}],dsp_matches_vs_self_bet)
            }else{
                let value = prompt("Enter your bet value (integer number, please)","10");
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_AB":"A","bet_AB_v":value}],dsp_matches_vs_self_bet)
            }
        });
        aoTr[i].getElementsByClassName("myCnt-select-B")[0].addEventListener("click",function(){
            if(this.classList.contains("bi-check-circle")){
                // disable selection of B
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_AB":""}],dsp_matches_vs_self_bet)
            }else{
                let value = prompt("Enter your bet value (integer number, please)","10");
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_AB":"B","bet_AB_v":value}],dsp_matches_vs_self_bet)
            }
        });
        aoTr[i].getElementsByClassName("myCnt-select-big")[0].addEventListener("click",function(){
            if(this.style.color === "black"){
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_BS":""}],dsp_matches_vs_self_bet)
            }else{
                let value = prompt("Enter your bet value (integer number, please)","20");
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_BS":"big","bet_BS_v":value}],dsp_matches_vs_self_bet)
            }
        });
        aoTr[i].getElementsByClassName("myCnt-select-small")[0].addEventListener("click",function(){
            if(this.style.color === "black"){
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_BS":""}],dsp_matches_vs_self_bet)
            }else{
                let value = prompt("Enter your bet value (integer number, please)","20");
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_BS":"small","bet_BS_v":value}],dsp_matches_vs_self_bet)
            }
        });
        aoTr[i].getElementsByClassName("myCnt-input-bet-score")[0].addEventListener("change",function(){
            if(this.value.search(/^\d+:\d+$/) > -1){
                let value = prompt("Enter your bet value (integer number, please)","10");
                my_ajax_get("src_modules/worldcup/rtn_data_n_reg_bet_single_element.php",[{"match_id":matchID,"bet_score":this.value,"bet_score_v":value}],dsp_matches_vs_self_bet)
            }
        });
    }


    return 1;
}

function chk_exist_and_return(tgtO,aoLvl){
    if(tgtO === undefined) return null;
    if(tgtO === null) return null;
    if(aoLvl.length === 0) return tgtO;
    let fE = aoLvl.shift();
    if(tgtO.hasOwnProperty(fE)){
        return chk_exist_and_return(tgtO[fE],aoLvl)
    }else{
        return null;
    }
    return null;
}

function dsp_mod_bet_form_from_mod_button(){
    let sf = "src_modules/worldcup/rtn_data_n_reg_bet.php";
    let id = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{id:id}],function(rtnO){
        console.log(rtnO)
        let tgtForm  = my_gen_form(rtnO,function(tgtForm,rtnO){
            console.log(rtnO);
            if(rtnO["reg_bet_status"].search(/^NG:/) > -1) alert(rtnO["reg_bet_status"])
            tgtForm.remove();
            my_ajax_get("./src_modules/worldcup/rtn_matches_vs_self_bet.php",[{}],dsp_matches_vs_self_bet)
        });
        // => modify the form (add more button to display the def_bet_score)
        for(let tmpv of tgtForm.getElementsByTagName("form")[0].childNodes){
            if(tmpv.innerText === "bet_score"){
                let aBtn = my_create("i",undefined,["bi-info-circle-fill","w3-button","w3-round-xlarge"])
                aBtn.addEventListener("click",function(e){
                    let theForm = e.target.parentNode.parentNode;
                    let theMatchID = theForm["match_id"].value;
                    dsp_bet_score_tbl_as_info(theMatchID)
                    // console.log(theForm,theMatchID)
                });
                tmpv.appendChild(aBtn)
            }
        }
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function cal_simple_result_match_from_score(scoreStr){
    // return simple result (as string) from score string A:B
    if(scoreStr === undefined) return "";
    if(scoreStr.search(/:/) === -1) return scoreStr;
    let tmpa = scoreStr.split(":")
    if(tmpa[0] > tmpa[1]) return "Awin";
    if(tmpa[0] < tmpa[1]) return "Bwin";
    return "draw";
}

function dsp_bet_score_tbl_as_info(matchID){
    let sf = "src_modules/worldcup/rtn_data_as_info_for_user.php";
    let id = matchID;
    my_ajax_get(sf,[{id:id}],function(rtnO){
        let tgtForm  = my_gen_bet_score_tbl_as_info(rtnO);
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function my_gen_bet_score_tbl_as_info(cntData){
    //
    if(!cntData.hasOwnProperty("def_bet_score")) return; //
    console.log(cntData)
    let eTop = my_create("div",undefined,[],{"padding":0});
    let eBtnClose = my_create("span","&times;",["w3-button","w3-display-topright"],{},{"onclick":"this.parentNode.remove()"})
    // form content
    let eForm = my_create("form",undefined,["w3-container","w3-padding-16"],{},{"method":"post"});
    let eRef = my_create("div",undefined,[],{});
    // => ref
    eRef.appendChild(my_create("label","Match-ID:"));
    eRef.appendChild(my_create("span",cntData["match_info"][1][0],[],{},{}))

    // => ref about match
    eRef.appendChild(my_create("div",cntData["match_info"][1][2],[],{},{}))
    let d = new Date(cntData["match_info"][1][1] * 1000);
    eRef.appendChild(my_create("div",d.toLocaleString("en-US",{dateStyle:"medium",timeStyle:"short"})));

    eRef.appendChild(my_create("span",cntData["match_info"][1][3],["w3-card-2","w3-indigo","w3-large"],{},{}))
    eRef.appendChild(my_create("span","vs",["w3-lightgrey"],{"margin-left":"3px","margin-right":"3px"},{}))
    eRef.appendChild(my_create("span",cntData["match_info"][1][4],["w3-card-2","w3-indigo","w3-large"],{},{}))

    // => def_AB and def_BS bet info
    eRef.appendChild(my_create("br"));
    eRef.appendChild(my_create("label","Kèo AB:",[],{"margin-right":"5px","padding-top":"20px"}));
    eRef.appendChild(my_create("span",cntData["match_info"][1][5],[],{"padding":"3px","border-bottom":"2px solid red"},{}))
    
    eRef.appendChild(my_create("br"));
    eRef.appendChild(my_create("label","Kèo Tài/Xỉu:",[],{"margin-right":"5px","padding-top":"20px"}));
    eRef.appendChild(my_create("span",cntData["match_info"][1][6],[],{"padding":"3px","border-bottom":"2px solid red"},{}))

    eRef.appendChild(my_create("br"));
    eRef.appendChild(my_create("label","Kèo Tỉ số:",[],{"margin-top":"20px"}));
    // => table of valid def-bet-scores
    let eTblTop = my_create("div",undefined);
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-bordered","w3-border-red"]);
    let eTbd = my_create("tbody",undefined,["w3-small"]);
    let trData = [];
    trData.push("A-B"); for(let i=0;i<11;i++){ trData.push(i) }
    eTbd.appendChild(my_add_row(trData,"th",{"padding":0,"width":"8.33%"}));
    for(let i=0;i<11;i++){
        let tr = my_create("tr",undefined);
        tr.appendChild(my_create("th",i,[],{"padding":0}))
        for(let j=0;j<11;j++){
            let td = my_create("td",my_create("input",undefined,["w3-round","w3-card-2"],{"width":"100%"},{"readonly":true,"type":"text","name":"score="+i+":"+j}),[],{"padding":0});
            td.childNodes[0].style.backgroundColor = "lightgray";
            if(Object.keys(cntData).length > 0){
                if(cntData["def_bet_score"].hasOwnProperty(i+":"+j)){
                    if(cntData["def_bet_score"][i+":"+j] !== undefined
                    && cntData["def_bet_score"][i+":"+j] !== ""
                    && cntData["def_bet_score"][i+":"+j] !== "null"
                    ){
                        td.childNodes[0].value = cntData["def_bet_score"][i+":"+j];
                        td.childNodes[0].style.backgroundColor = "orange";
                    }else{}
                }else{}
            }
            td.addEventListener("change",function(e){
                if(e.target.value === ""){
                    e.target.style.backgroundColor = "lightgray";
                }else{
                    e.target.style.backgroundColor = "orange";
                }
            })
            // => init it
            tr.appendChild(td)
        }
        eTbd.appendChild(tr)
    }


    // submisson behavior
    // eForm.setAttribute("action",cntData["formAction"]);
    // prevent default submit behavaior and redirect it to the submit-button
    eForm.addEventListener("submit",function(event){
        event.preventDefault(); 
    })

    eTbl.appendChild(eTbd);
    eTblTop.appendChild(eTbl);
    eForm.appendChild(eRef);
    eForm.appendChild(eTblTop);
    eTop.appendChild(eBtnClose);
    eTop.appendChild(eForm);
    // return my_create("div",my_create("div",eTop,["w3-modal-content","w3-round-xlarge"],{"position":"fixed","top":0,"right":0,"width":"35%"}),["w3-modal"],{},{});
    return my_create("div",eTop,["w3-light-grey","w3-card-2","w3-round-xlarge"],{"padding":0,"position":"fixed","top":0,"right":0,"width":"35%","z-index":9});
}

// ============================================
///////////////////////////////////////////////
function dsp_bet_results_vs_matches(cntO){
    console.log(cntO)
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"]["all_matches"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative","overflow-y":"visible","overflow-x":"visible"},{"id":"tbl_matches_all_bets"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable"],{"min-width":"100%"});
    let eTbd = my_create("tbody",undefined,["w3-small"],{"min-width":"100%"});

    // register matches internally
    let hoMatches = {};
    for(let i=1;i<cntO["cntData"]["all_matches"].length;i++){
        let id = cntO["cntData"]["all_matches"][i][0];
        if(!hoMatches.hasOwnProperty(id)) hoMatches[id] = {};
        for(let j=1;j<cntO["cntData"]["all_matches"][0].length;j++){
            hoMatches[id][cntO["cntData"]["all_matches"][0][j]] = cntO["cntData"]["all_matches"][i][j];
        }
    }
    // console.log(hoMatches)

    if(Object.keys(hoMatches).length === 0) return;

    // header
    let thData = [];
    thData.push("User","Match","TeamA","TeamB","Score");
    thData.push("A_B pts","B_S pts","Score pts");
    thData.push("All");
    eTbd.appendChild(my_add_row(thData,"th",{"padding":"2px"}));

    // content
    console.log(cntO["cntData"]["all_bets"])
    for(let user in cntO["cntData"]["all_bets"]){
        if(user === "") continue;
        for(let matchId in cntO["cntData"]["all_bets"][user]["detail"]){
            let pts_AB = "-"; if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("AB")) pts_AB = cntO["cntData"]["all_bets"][user]["detail"][matchId]["AB"][["points"]];
            let pts_BS = "-"; if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("BS")) pts_BS = cntO["cntData"]["all_bets"][user]["detail"][matchId]["BS"][["points"]];
            let pts_score = "-"; if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("Score")) pts_score = cntO["cntData"]["all_bets"][user]["detail"][matchId]["Score"][["points"]];
            let sum = 0;
            if(Number.isInteger(pts_AB)) sum+=pts_AB;
            if(Number.isInteger(pts_BS)) sum+=pts_BS;
            if(Number.isInteger(pts_score)) sum+=pts_score;
            // console.log(pts_AB,pts_BS,pts_score,matchId,hoMatches[matchId])
            let tdData = [
                user,
                matchId,
                hoMatches[matchId]['teamA'],
                hoMatches[matchId]['teamB'],
                hoMatches[matchId]["score"],
                pts_AB,
                pts_BS,
                pts_score,
                sum,
            ]
            let eTr = my_add_row(tdData,"td",{"padding":"2px"})
            eTr.classList.add("myCnt-item-match-user-bets");
            eTbd.appendChild(eTr);
        }
    }
    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    mainSide.appendChild(eTop);
    
    // => give more info to the bet info (each cell)
    let aoTr = tbl_matches_all_bets.getElementsByClassName("myCnt-item-match-user-bets");
    for(let i=0;i<aoTr.length;i++){
        let user = aoTr[i].getElementsByTagName("td")[0].innerText;
        let matchId = aoTr[i].getElementsByTagName("td")[1].innerText;
        let td_AB = aoTr[i].getElementsByTagName("td")[5];
        let td_BS = aoTr[i].getElementsByTagName("td")[6];
        let td_Score = aoTr[i].getElementsByTagName("td")[7];

        if(!cntO["cntData"]["all_bets"].hasOwnProperty(user)) continue;
        if(!cntO["cntData"]["all_bets"][user].hasOwnProperty("detail")) continue;
        if(!cntO["cntData"]["all_bets"][user]["detail"].hasOwnProperty(matchId)) continue;

        if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("AB")){
            if(cntO["cntData"]["all_bets"][user]["detail"][matchId]["AB"]["status"] === "OK"){
                td_AB.classList.add("w3-hover-indigo");
                td_AB.classList.add("my-tooltip");
                td_AB.appendChild(my_create("div",gen_bet_tbl(cntO["cntData"]["all_bets"][user]["detail"][matchId]["AB"]),["my-tooltip-content"]))
            }else{}
        }
        if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("BS")){
            if(cntO["cntData"]["all_bets"][user]["detail"][matchId]["BS"]["status"] === "OK"){
                td_BS.classList.add("w3-hover-indigo");
                td_BS.classList.add("my-tooltip");
                td_BS.appendChild(my_create("div",gen_bet_tbl(cntO["cntData"]["all_bets"][user]["detail"][matchId]["BS"]),["my-tooltip-content"]))
            }else{}
        }
        if(cntO["cntData"]["all_bets"][user]["detail"][matchId].hasOwnProperty("Score")){
            // console.log(matchId,user,cntO["cntData"]["all_bets"][user]["detail"][matchId]["Score"])
            if(cntO["cntData"]["all_bets"][user]["detail"][matchId]["Score"]["status"] === "OK"){
                td_Score.classList.add("w3-hover-indigo");
                td_Score.classList.add("my-tooltip");
                td_Score.appendChild(my_create("div",gen_bet_tbl(cntO["cntData"]["all_bets"][user]["detail"][matchId]["Score"]),["my-tooltip-content"]))
            }else{}
        }

    }
    return 1;
}

function gen_bet_tbl(inf){
    // console.log(inf)
    if(inf["status"] !== "OK") return null;
    let eTop = my_create("div",undefined,[])
    let eTbl = my_create("table",undefined,["w3-small"],{"width":"100%"})
    let eTbd = my_create("tbody",undefined,[])
    let defBet = "n/a";
    if(typeof(inf["defBet"]) === "object"){
        defBet = inf["defBet"][inf["score"]];
    }else{
        defBet = inf["defBet"];
    }
    let tr = my_create("tr",undefined); tr.appendChild(my_create("th","score",["w3-black"],{"padding":0}))    ; tr.appendChild(my_create("td",inf["score"],["w3-black"],{"padding":0}))  ; eTbd.appendChild(tr);
        tr = my_create("tr",undefined); tr.appendChild(my_create("th","defBet",["w3-black"],{"padding":0}))   ; tr.appendChild(my_create("td",defBet,["w3-black"],{"padding":0}))                  ; eTbd.appendChild(tr);
        tr = my_create("tr",undefined); tr.appendChild(my_create("th","userBet",["w3-black"],{"padding":0}))  ; tr.appendChild(my_create("td",inf["userBet"],["w3-black"],{"padding":0}))      ; eTbd.appendChild(tr);
        tr = my_create("tr",undefined); tr.appendChild(my_create("th","value",["w3-black"],{"padding":0}))    ; tr.appendChild(my_create("td",inf["userBetValue"],["w3-black"],{"padding":0})) ; eTbd.appendChild(tr);
        tr = my_create("tr",undefined); tr.appendChild(my_create("th","points",["w3-black"],{"padding":0}))   ; tr.appendChild(my_create("td",inf["points"],["w3-black"],{"padding":0}))       ; eTbd.appendChild(tr);
    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);

    // some latest format
    return eTop;
}

// ============================================
///////////////////////////////////////////////
function dsp_users_points(cntO){
    console.log(cntO)
    if(Object.keys(cntO).length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_matches_all_bets"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable"],{"min-width":"100%"});
    let eTbd = my_create("tbody",undefined,["w3-small"],{"min-width":"100%"});

    // header
    let thData = ["user","#matches","A_B bet","B_S bet","Score bet","Total earn pts"];
    eTbd.appendChild(my_add_row(thData,"th",{"padding":"2px"}));

    // content
    for(let user in cntO["cntData"]){
        if(user === "") continue;
        let tdData = [
            user,
            Object.keys(cntO["cntData"][user]["detail"]).length,
            cntO["cntData"][user]["totalAB"],
            cntO["cntData"][user]["totalBS"],
            cntO["cntData"][user]["totalScore"],
            cntO["cntData"][user]["points"]
        ];
        // =>
        eTbd.appendChild(my_add_row(tdData,"td",{"padding":"2px"}));
    }

    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    mainSide.appendChild(eTop);
    return 1;
}

///////////////////////////
function dsp_upload_file_and_action(){
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    // => components
    let eTop = my_create("div",undefined,["w3-responsive","w3-border-blue","w3-light-grey","w3-round","w3-card-2"],{"position":"relative","margin-top":"32px","padding":"10px"},{});
    let eForm = my_create("form",undefined,[],{"min-width":"100%"});
    eForm.appendChild(my_create("label","Select file (must be .csv, none-empty):",[],{},{"for":"upfile"}))
    eForm.appendChild(my_create("input",undefined,["w3-input"],{},{"type":"file","name":"upfile"}))
    eForm.appendChild(my_create("label","Select mode:",[],{},{"for":"mode"}))

    let eSlt = my_create("select",undefined,["w3-select"],{},{"type":"select","name":"mode"});
    eSlt.appendChild(my_create("option","For matches",[],{},{"value":"matches"}))
    eSlt.appendChild(my_create("option","For bet score table",[],{},{"value":"betScore"}))
    eForm.appendChild(eSlt)

    eForm.appendChild(my_create("input",undefined,["w3-button","w3-input","w3-indigo"],{"margin-top":"20px"},{"type":"submit","name":"submit"}))

    // => action
    eForm.setAttribute("action","index.php");
    eForm.setAttribute("method","POST");
    eForm.setAttribute("enctype","multipart/form-data");

    // prevent default submit behavaior and redirect it to the submit-button
    eForm.addEventListener("submit",function(event){
        event.preventDefault(); 
        my_ajax_formData("src_modules/worldcup/upload_file_and_action.php",eForm,function(rtnO){
            // func_act_after_submit(eTop.parentNode.parentNode,rtnO);
            dsp_matches_w_adding(rtnO);
            dsp_notification("Swept " + rtnO["reg_from_file_status"].length + " items!","Info")
            console.log(rtnO)
        })
        // event.target.parentNode.parentNode.parentNode.remove();// don't auto close form because OTP need sendingOTP to standstill
    })

    // => some help? in markdeep
    let eHelp = my_create("div",undefined,["w3-card-2","w3-light-grey"],{"margin-top":"20px"});
    eHelp.appendChild(my_create("div","Help",["w3-center","w3-yellow"]));
    my_ajax_get("src_modules/worldcup/get_help_on_upload_file",[{}],function(rtnO){
        console.log(rtnO);
        for(let keyw in rtnO){
            let ePart = my_create("div",undefined,["w3-card-2"],{},{"id":keyw});
            ePart.innerHTML = window.markdeep.format(rtnO[keyw]);
            eHelp.appendChild(ePart)
        }
    })

    // => layout
    eTop.appendChild(eForm);
    mainSide.appendChild(eTop);
    mainSide.appendChild(eHelp);
    return 1;
}

////
function my_ajax_formData(svrSrc,form,fnc){
    // using fromData ?!
    let xmlhttp = new XMLHttpRequest();
    let formData = new FormData();
    let fileHolder = [];
    for(let tmpv of form.childNodes){
        if(tmpv.getAttribute("name") === null) continue;
        if(tmpv.type === "file"){
            fileHolder.push(tmpv.files[0])
        }else{
            formData.append(tmpv.name,tmpv.value)
        }
    }
    // console.log(fileHolder)
    formData.append('upfile',fileHolder[0])

    xmlhttp.addEventListener('error', (event) => {
        alert('Oops! Something went wrong.');
      });

    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                let objData = {};
                try {objData = JSON.parse(this.responseText);}
                catch(err){ 
                    console.log(this.responseText)
                    console.log(err)
                    dsp_notification(err,"Error");
                    dsp_notification(this.responseText,"Error");
                    // console.log(this.responseText);
                    return;
                }
                if(fnc === undefined) return;
                fnc(objData);return;

            }else if(this.status === 500){
                console.log("dbg:: caught the state=" + this.readyState + " status="+this.status + " response=" + this.responseText)
                return;
            }
        }
    }
    xmlhttp.open("POST",svrSrc,true);
    console.log(formData.keys())
    xmlhttp.send(formData);
}