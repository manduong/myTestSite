let aoMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let flgStop = false;//stop signal caused by clicking Updating again
let flgUpdHistory = false;//on the go downloading and saving data
let flgSumNow = false;//on the go updating the table
let hrefIssue = "http://172.29.143.22:8080/";

function myTest(){
    // generate a holder for testing returned info
    let eTop = null;
    if(document.getElementById("test_holder")) test_holder.remove();
    eTop = my_create("div",
        my_create("span","X",["w3-padding","w3-large","w3-button","w3-display-topright","w3-round"],{},{"onclick":"this.parentNode.remove()"}),
        ["w3-khaki"],
        {"padding":0,"position":"fixed","bottom":0,"left":0,"height":"30%","width":"100%","overflow":"auto","font-size":"9px"},
        {id:"test_holder"}
        );
    body.appendChild(eTop);

    dsp_notification("Just a testing notification");

    // mainSide.appendChild(gen_item_w_person());
    // retrieve_user_action();
    // check cookies
    // let ca = document.cookie.split(';');
    // for(let i = 0; i < ca.length; i++) {
    //     let c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //         c = c.substring(1);
    //     }
    //     console.log(i, c)
    // }

    // dsp_user_info_from_email("man.duong.ym@renesas.com");

    // init_user();
    // calc_score_of_user(retrieve_user_action())

    //
    // retrieve_sum_by_recent_updated();
   // my_create_running_line();

//       my_ajax_get("src_modules/test/rtn_server_vars.php",[{}],function(rtnO){
//     for(let tmpv in rtnO["SESSION"]){
//         eTop.innerHTML += tmpv + " : " + rtnO["SESSION"][tmpv] + "<br>";
//     }
//    })

    // my_ajax_get("src_modules/test/database.php",[{}],function(rtnO){
    //     let noFmtE = my_create("pre",JSON.stringify(rtnO,undefined,2),["w3-small"]);
    //     eTop.appendChild(noFmtE);
    //     // for(let tmpv in rtnO){
    //     //     eTop.innerHTML += tmpv + " : " + rtnO[tmpv] + "<br>";
    //     // }
    // })

    my_ajax_get("src_modules/test/rtn_server_vars.php",[{}],function(rtnO){
        let noFmtE = my_create("pre",JSON.stringify(rtnO,undefined,2).replace(/\\n/g,"<br>"),["w3-small"]);

        eTop.appendChild(noFmtE);
        // for(let tmpv in rtnO){
        //     eTop.innerHTML += tmpv + " : " + rtnO[tmpv] + "<br>";
        // }
    })
}

function my_onload(){
    console.log("on loading ...")
    //init_user();
    // retrieve_sum_by_recent_updated();
    dsp_menu();
}

//////////////////////////////////////// show/hide/toggle the top components (this page
function show_left(){
    leftSide.classList.add("w3-show");
    mainSide.style.marginLeft = "250px";
}
function hide_left(){
    leftSide.classList.remove("w3-show");
    mainSide.classList.add("my-show-right-slowly")
    mainSide.style.marginLeft = "0";
    // setTimeout(function(){
    //     mainSide.style.marginLeft = "0";
    //     mainSide.classList.remove("my-show-right-slowly")
    // },1800)
}
function toggle_left(){
    if(leftSide.classList.contains("w3-show")){
        hide_left();
    }else{
        show_left();
    }
}
function toggle_nextEle(clickedEle){
    if(clickedEle === undefined) return 0;
    let tgtEle = clickedEle.nextElementSibling;
    if(tgtEle === undefined) return 0;
    if(tgtEle === null) return 0;
    if(tgtEle.classList.contains("w3-show")){
        tgtEle.classList.remove("w3-show");
    }else{
        tgtEle.classList.add("w3-show");
    }
}

function my_create(tag,innerHTML,aoClass,hoStyle,hoAttr){
    let aE = undefined;
    if(tag === undefined){
        aE = document.createElement("div");
    }else{
        aE = document.createElement(tag);
    }
    if(innerHTML !== undefined){
        if(typeof(innerHTML) === "object"){
            aE.appendChild(innerHTML);
        }else{
            aE.innerHTML = innerHTML;
        }
    }else{}
    if(aoClass !== undefined){
        for(let tmpClass of aoClass){
            aE.classList.add(tmpClass);
        }
    }
    if(hoStyle !== undefined){
        for(let tmpS in hoStyle){
            aE.style[tmpS] = hoStyle[tmpS];
        }
    }
    if(hoAttr !== undefined){
        for(let tmpAtt in hoAttr){
            aE.setAttribute(tmpAtt,hoAttr[tmpAtt]);
        }
    }
    return aE;
}

function my_add_row(aoData,type,oComStyle){
    if(aoData === undefined) return null;
    if(typeof(aoData) !== "object") return null;
    if(aoData.length === 0) return null;

    let tr = document.createElement("tr");
    if(type === undefined) type = "td";
    for(let tmpV of aoData){
        let td = document.createElement(type);
        td.innerHTML = tmpV;
        if(oComStyle !== undefined){
            for(let keyw in oComStyle){
                td.style[keyw] = oComStyle[keyw];
            }
        }
        tr.appendChild(td)
    }
    return tr;
}

function my_URLencode(oD){
    if(oD === undefined) return "";
    if(oD.length === 0) return "";
    let oStr = "";
    for(let comp of oD){
        for(let key in comp){
            if(oStr !== "") oStr += "&";
            oStr+=encodeURIComponent(key)+"="+encodeURIComponent(comp[key]);
        }
    }
    return oStr;
}

function dsp_notification(msg,type){
    if(type === undefined) type = "Warning";
    if(msg === undefined) msg = "Unknown message";
    if(Object.getPrototypeOf(Object.getPrototypeOf(msg)).constructor === Error) msg = msg.message
    let bgcolor = "yellow";
    if(type === "Error"){
        bgcolor = "darksalmon";
    }else if(type === "Warning"){
        bgcolor = "yellow";
    }else if(type === "Info"){
        bgcolor = "palegreen";
    }else{}
    let eTop = my_create("div",msg,["my-notification"],{"backgroundColor":bgcolor},{})
    // document.getElementsByTagName("body")[0].appendChild(eTop);
    document.getElementById("notificationHolder").appendChild(eTop);
    setTimeout(function(){eTop.remove()},2200);
    my_create_running_line();//a little animation
}

function my_datetime(objDate){
    // out string for date-time as my format
    // return objDate.toLocaleString("en-US",{"dateStyle":"medium","timeStyle":"short","hour12":false});
    return objDate.toLocaleString("en-US",{
        hourCycle: 'h23',
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function my_datetime_fr_epoch(epochStr){
    if(epochStr === undefined) return "-";
    if(!String(epochStr).match(/^\d+$/)) return epochStr;
    let objDate = new Date()
    objDate.setTime(Number(epochStr)*1000);
    // out string for date-time as my format
    // return objDate.toLocaleString("en-US",{"dateStyle":"medium","timeStyle":"short","hour12":false});
    return objDate.toLocaleString("en-US",{
        hourCycle: 'h23',
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function my_return_date(diffDays){
    let d = new Date();
    d.setDate(d.getDate() + diffDays);
    let aoM = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    return d.getFullYear() + "-" + aoM[d.getMonth()] + "-" + d.getDate();
}

function my_create_running_line(){
    // create a wrapper of the line
    let eTop = my_create("div",undefined,["w3-container"]);
    let eLine = my_create("div",undefined,["running_line"]);
    let eDot1 = my_create("div",undefined,["running_dot","running_dot1"]);
    let eDot2 = my_create("div",undefined,["running_dot","running_dot2"]);
    let eDot3 = my_create("div",undefined,["running_dot","running_dot3"]);
    let eDot4 = my_create("div",undefined,["running_dot","running_dot4"]);
    let eDot5 = my_create("div",undefined,["running_dot","running_dot5"]);

    eLine.appendChild(eDot1);
    eLine.appendChild(eDot2);
    eLine.appendChild(eDot3);
    eLine.appendChild(eDot4);
    eLine.appendChild(eDot5);
    eTop.appendChild(eLine);

    // self destruction after sometime
    setTimeout(function(){
        eTop.remove()
    },4500);

    // append to the body
    body.appendChild(eTop)
    return;
}

////
function my_ajax_get(svrSrc,hoVar,fnc){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                let objData = {};
                try {objData = JSON.parse(this.responseText);}
                catch(err){ 
                    console.log(err)
                    console.log(this.responseText);
                    // dsp_notification(err,"Error");
                    // dsp_notification(this.responseText,"Error");
                    // return;
                    objData = this.responseText;
                }
                if(fnc === undefined) return;
                try {fnc(objData)}
                catch(err){
                    dsp_notification("Err:"+fnc+":"+err,"Error");
                    console.log("ERROR when executing fnc: error=", err)
                }
                return;

            }else if(this.status === 500){
                console.log("dbg:: caught the state=" + this.readyState + " status="+this.status)
                // let objData = {};
                // try {objData = JSON.parse(this.responseText);}
                // catch(err){
                //     console.log(err);
                //     console.log(this.responseText);
                //     dsp_notification(err,"Error");
                //     dsp_notification(this.responseText,"Error");
                //     return;
                // }
                // // console.log("dbg:",objData)
                // if(fnc === undefined) return;
                // fnc(objData);return;
            }
        }
    }
    let rq = my_URLencode(hoVar);
    xmlhttp.open("GET",svrSrc+"?"+rq,true);
    xmlhttp.send();
}

////
function my_ajax_post_form(svrSrc,form,fnc){
    //https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
    let xmlhttp = new XMLHttpRequest();
    let urlEncodedDataPairs = [];
    for(let ele of form.elements){
        urlEncodedDataPairs.push(`${encodeURIComponent(ele.name)}=${encodeURIComponent(ele.value)}`)
    }
    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behavior of browser form submissions.
    const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
    // console.log(urlEncodedData)

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
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(urlEncodedData);
}

function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

function my_gen_form(cntData,func_act_after_submit){
    // console.log(cntData)
    if(!cntData.hasOwnProperty("cntData")) return; //
    if(!cntData.hasOwnProperty("formAction")) cntData["formAction"] = ""; //
    // console.log(cntData)
    let eTop = my_create("div",undefined,["w3-container"]);
    let eBtnClose = my_create("span","&times;",["w3-button","w3-display-topright"],{},{"onclick":"this.parentNode.parentNode.parentNode.remove()"})
    // form content
    let eForm = my_create("form",undefined,["w3-container","w3-padding-16"],{},{"method":"post"});
    for(let formItem of cntData["cntData"]){
        let mainItem = null;
        let lblItem = null;
        if(!formItem.hasOwnProperty("type")) {
            if(formItem.hasOwnProperty("label")){
                lblItem = my_create("label",formItem["label"]);
                eForm.appendChild(lblItem);
            }
            continue;
        }else{
            if(formItem["type"] === "submit"){
                mainItem =  my_create("button",formItem["label"],["w3-button","w3-block","w3-round","w3-indigo","w3-margin-top"]);
                eForm.appendChild(mainItem);
            }else if(formItem["type"] === "checkbox"){
                mainItem =  my_create("input",formItem["label"],["w3-check"]);
                lblItem = my_create("label",formItem["label"])
                eForm.appendChild(mainItem);
                eForm.appendChild(lblItem);
            }else if(formItem["type"] === "select"){
                if(!formItem.hasOwnProperty("options")) continue;
                mainItem =  my_create("select",undefined,["w3-input"]);
                lblItem = my_create("label",formItem["label"]);
                eForm.appendChild(lblItem);
                eForm.appendChild(mainItem);
                for(let tmpv of formItem["options"]){
                    mainItem.appendChild(my_create("option",tmpv,[],{},{"value":tmpv}))
                }
            }else{
                mainItem =  my_create("input",undefined,["w3-input"]);
                lblItem = my_create("label",formItem["label"]);
                eForm.appendChild(lblItem);
                eForm.appendChild(mainItem);
            }
        }
        for(let tmpv in formItem){
            if(tmpv === "label") continue;//for common element, label is a seperated ele
            if(tmpv === "options") continue;//for select, ignore
            if(tmpv === "display") continue;//for select, ignore
            if(tmpv === "value"){
                mainItem[tmpv] = formItem[tmpv];
            }else{
                mainItem.setAttribute(tmpv,formItem[tmpv]);
            }
        }
        if(formItem.hasOwnProperty("display") && formItem["display"] === "none"){
            if(lblItem !== null) lblItem.style.display = "none";
            if(mainItem !== null) mainItem.style.display = "none";
        }
    }
    eForm.setAttribute("action",cntData["formAction"]);

    // preserve a holder for information
    eForm.appendChild(my_create("div","This holds some info.",["w3-light-grey","w3-margin-top","w3-center","form_return_info"],{"width":"100%"},{}));

    // prevent default submit behavaior and redirect it to the submit-button
    eForm.addEventListener("submit",function(event){
        event.preventDefault(); 
        my_ajax_post_form(cntData["formAction"],eForm,function(rtnO){
            func_act_after_submit(eTop.parentNode.parentNode,rtnO);
            // console.log(rtnO)
        })
        // event.target.parentNode.parentNode.parentNode.remove();// don't auto close form because OTP need sendingOTP to standstill
    })

    eTop.appendChild(eBtnClose)
    eTop.appendChild(eForm);
    return my_create("div",my_create("div",eTop,["w3-modal-content"]),["w3-modal"],{},{});
}

///////////////////////////////
function upUserDisplay(oData){
    if(document.getElementById("userDisplay") === null) return;

    let eName = userDisplay.getElementsByTagName("span")[0];
    let eEmail = userDisplay.getElementsByTagName("span")[1];
    let eTitle = userDisplay.getElementsByTagName("span")[2];
    let eShield = userDisplay.getElementsByTagName("i")[0];
    let eMoreInfo = userDisplay.getElementsByTagName("span")[3];

    if(oData.hasOwnProperty("login_email")) eEmail.innerText = oData["login_email"];
    if(oData.hasOwnProperty("user_name")) eName.innerText = oData["user_name"];
    if(oData.hasOwnProperty("role")) eTitle.innerText = oData["role"];
    if(oData.hasOwnProperty("shielded") && oData["shielded"] === "yes"){
        eShield.classList.remove("bi-shield-x");
        eShield.classList.remove("my-login-tick-ng");
        eShield.classList.add("bi-shield-check");
        eShield.classList.add("my-login-tick-ok");
    }
    if(oData.hasOwnProperty("modify_on")) eMoreInfo.innerText = new Date(Number(oData["modify_on"]) *1000);
}

function upd_user_info(){
    let sf = "src_modules/login/chk_and_rtn_login_user_info_sqlite.php";
    my_ajax_get(sf,[{}],function(rtnO){
        upUserDisplay(rtnO["user_info"]);
        // console.log(rtnO)
        upd_login_logout_buttons();
    })
};

function upd_login_logout_buttons(){
    if(userDisplay.getElementsByTagName("span")[1].innerText === "Somebody@nowhere.com"){
        btn_logout.style.display = 'none';
        if(document.getElementById("btn_login_otp") !== null) btn_login_otp.style.display = 'block';
        if(document.getElementById("btn_login") !== null) btn_login.style.display = 'block';
    }else{
        btn_logout.style.display = 'block';
        if(document.getElementById("btn_login_otp") !== null) btn_login_otp.style.display = 'none';
        if(document.getElementById("btn_login") !== null) btn_login.style.display = 'none';
    }
}

///////////////////////////////////////////////////////////////////
function update_history_data(){
    if(flgStop === true){
        dsp_notification("Stopping state, cannot do this.","Error")
        return;//stop interfereing
    }

    // => control the flag of stopping
    let tgtClkE = null;
    for(let tmpE of myMenu2.getElementsByTagName("div")){
        if(tmpE.getAttribute("onclick") === "update_history_data()"){
            tgtClkE = tmpE;
        }
    }
    if(tgtClkE !== null){
        if(tgtClkE.getElementsByTagName("i")[0].classList.contains("bi-cloud-download") && flgUpdHistory === false){
            //at the state of standingby
            tgtClkE.getElementsByTagName("i")[0].classList.remove("bi-cloud-download");
            tgtClkE.getElementsByTagName("i")[0].classList.add("bi-cloud-download-fill");
            tgtClkE.getElementsByTagName("i")[0].classList.add("w3-animate-fading");
            tgtClkE.classList.add("w3-border");
            tgtClkE.classList.add("w3-border-red");
        }else{
            // at the state of executing => cannot do this again, wait until the button returning its standby state
            dsp_notification("Updating is on the go, cannot do this again.","Warn")
            return;
        }
    }

    // => AJAX to send request updating data
    let xmlhttp = new XMLHttpRequest();
    // =>
    xmlhttp.open("GET","get_issues.php?opMode=upHistory",true);
    // let eProgressTop = my_create("i",undefined,["bi","bi-hourglass-split","w3-spin","w3-xxlarge"],{"position":"fixed","top":"5px","left":"5px"},{"id":"my_progress"})
    // document.getElementsByTagName("body")[0].appendChild(eProgressTop);

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // =>
            let objData = {};
            try {objData = JSON.parse(this.responseText);}
            catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
            // 
            // while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
            // while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
            // hide_left();//if any
            // show_left();
            if(objData["outObj"]["result"] === "done"){
                dsp_notification("Finished updating data.","Info")
            }else{
                dsp_notification("Problem Status: " + objData["outObj"]["result"],"Warn")
            }
            flgUpdHistory = false;
            // reset status of the button
            tgtClkE.getElementsByTagName("i")[0].classList.remove("bi-cloud-download-fill");
            tgtClkE.getElementsByTagName("i")[0].classList.remove("w3-animate-fading");
            tgtClkE.getElementsByTagName("i")[0].classList.add("bi-cloud-download");
            tgtClkE.classList.remove("w3-border");
            tgtClkE.classList.remove("w3-border-red");
        }else{}
    }

    xmlhttp.send();
    flgUpdHistory = true;
    return;
}

///////////////////////////////////////////////////////////////////
function retrieve_Redmine_API_key_info(tgtE){
    // => AJAX to get info
    let xmlhttp = new XMLHttpRequest();
    // =>
    xmlhttp.open("GET","get_issues.php?childURL="+encodeURIComponent("users/current.json")+"&opMode=org"+"&apiKey="+tgtE.value,true);
    // let eProgressTop = my_create("i",undefined,["bi","bi-hourglass-split","w3-spin","w3-xxlarge"],{"position":"fixed","top":"5px","left":"5px"},{"id":"my_progress"})
    // document.getElementsByTagName("body")[0].appendChild(eProgressTop);

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // =>
            let objData = {};
            try {objData = JSON.parse(this.responseText);}
            catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
            // 
            while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
            while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
            // hide_left();//if any
            show_left();
            console.log("dbg:", objData)
            dsp_notification("Finished retrieving user data.","Info")
        }else{}
    }

    xmlhttp.send();
    return;
}

///////////////////////////////////////////////////////////////////
function retrieve_sum_by_recent_updated(){
    if(flgStop === true || flgSumNow === true){
        dsp_notification("Stopping or SumNow state, cannot do this.","Error")
        return;//stop interfereing
    }

   // => AJAX to get info
    let xmlhttp = new XMLHttpRequest();
    // =>
    xmlhttp.open("GET","get_sum_recent_updated.php",true);
    // let eProgressTop = my_create("i",undefined,["bi","bi-hourglass-split","w3-spin","w3-xxlarge"],{"position":"fixed","top":"5px","left":"5px"},{"id":"my_progress"})
    // document.getElementsByTagName("body")[0].appendChild(eProgressTop);

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // =>
            let objData = {};
            try {objData = JSON.parse(this.responseText);}
            catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
            // 
            while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
            while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
            // hide_left();//if any
            show_left();
            // console.log("dbg:", objData)
            let allData = {};
            mainSide.appendChild(gen_init_sum_info());
            if(document.getElementById("sum_status") !== undefined){
                document.getElementById("sum_status").innerText = "Total: " + objData["total_count"];
                document.getElementById("sum_status").innerText += " /Current-Offset: " + objData["offset"];
                document.getElementById("sum_status").innerText += " /Updated on: " + my_datetime_fr_epoch(objData["regTime"]);
            }
            update_sum_data(objData['outObj'],allData);
            update_sum_info_to_tbody(mainSide.getElementsByTagName("tbody")[0],allData);
            update_charts_after_sort(mainSide.getElementsByTagName("tbody")[0]);
            dsp_notification("Finished loading and displaying data.","Info")
            flgStop = false;//reset this flag to allow other action
            hide_left();
        }else{}
    }

    xmlhttp.send();
    flgStop = true;//stop other action
    return;
}

///////////////////////////////////////////////////////////////////
function retrieve_sum_by_get_all_issues_now(){
    if(flgStop === true){
        dsp_notification("Stopping state, cannot do this.","Error")
        return;//stop interfereing
    }

    // => control the flag of stopping
    let tgtClkE = null;
    for(let tmpE of myMenu2.getElementsByTagName("div")){
        if(tmpE.getAttribute("onclick") === "retrieve_sum_by_get_all_issues_now()"){
            tgtClkE = tmpE;
        }
    }
    if(tgtClkE !== null){
        if(tgtClkE.getElementsByTagName("i")[0].classList.contains("bi-cloud-haze2")){
            //at the state of standingby
            tgtClkE.getElementsByTagName("i")[0].classList.remove("bi-cloud-haze2");
            tgtClkE.getElementsByTagName("i")[0].classList.add("bi-cloud-haze2-fill");
            tgtClkE.getElementsByTagName("i")[0].classList.add("w3-animate-fading");
            tgtClkE.classList.add("w3-border");
            tgtClkE.classList.add("w3-border-red");
        }else{
            // at the state of executing
            tgtClkE.getElementsByTagName("i")[0].classList.remove("w3-animate-fading");
            tgtClkE.getElementsByTagName("i")[0].classList.remove("bi-cloud-haze2-fill");
            tgtClkE.classList.remove("w3-border");
            tgtClkE.classList.remove("w3-border-red");
            tgtClkE.getElementsByTagName("i")[0].classList.add("bi-cloud-haze2");
            flgStop = true;
            return;
        }
    }

    // => AJAX to get info
    let xmlhttp = new XMLHttpRequest();
    // =>
    xmlhttp.open("GET","get_issues.php?lastIndex=0",true);
    // let eProgressTop = my_create("i",undefined,["bi","bi-hourglass-split","w3-spin","w3-xxlarge"],{"position":"fixed","top":"5px","left":"5px"},{"id":"my_progress"})
    // document.getElementsByTagName("body")[0].appendChild(eProgressTop);

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // =>
            let objData = {};
            try {objData = JSON.parse(this.responseText);}
            catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
            // 
            while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
            while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
            // hide_left();//if any
            show_left();
            // console.log("dbg:", objData)
            let allData = {};
            if(objData.hasOwnProperty("total_count")){
                let aoRegFrTo = [];
                let interval = 100;
                if(objData["total_count"]) interval = Number(objData["total_count"]/100).toFixed(0);
                if(interval < 1) interval = objData["total_count"];
                console.log("dbg: inteval="+interval)
                for(i=-1;i<=objData['total_count'];i+=Number(interval)){
                    let frItem = i+1;
                    let toItem = i+Number(interval);
                    if(objData['total_count'] - i < interval) toItem = objData['total_count'];
                    aoRegFrTo.push([frItem,toItem]);
                } 
                console.log(aoRegFrTo)
                // => gen and display the results
                mainSide.appendChild(gen_init_sum_info());
                if(document.getElementById("sum_status") !== undefined){
                    document.getElementById("sum_status").innerText = "Total: " + objData["total_count"];
                    document.getElementById("sum_status").innerText += " /Current-Offset: " + objData["offset"];
                    document.getElementById("sum_status").innerText += " /Updated on: " + my_datetime_fr_epoch(objData["regTime"]);
                }
                // console.log(aoRegFrTo)
                // => update the results
                // get_n_dsp_sum_issues_partly([[0,124],[125,249]],mainSide,allData);//testing
                get_n_dsp_sum_issues_partly(aoRegFrTo,mainSide,allData);

                // =>
                // update_sum_info_to_tbody(mainSide,allData);
            }else{}
            // => remove loading
            // if(document.getElementById("my_progress") !== undefined) document.getElementById("my_progress").remove();
            dsp_notification("Finished loading first data, proceeding to all data...","Info")
        }else{}
    }

    xmlhttp.send();
    flgSumNow = true;
    return;
}

function get_n_dsp_sum_issues_partly(aoRegFrTo,tgtE,allData){
    // partly (from->to offset) get and display sum of issues
    // depend on array of reg. from-to, will gradually call the ajax to server
    if(aoRegFrTo === undefined) return;
    if(aoRegFrTo.length === 0) return;
    let thisFrTo = aoRegFrTo.shift();
    let frItem = thisFrTo[0];
    let toItem = thisFrTo[1];

    // => AJAX to get info
    let xmlhttp = new XMLHttpRequest();
    // =>
    xmlhttp.open("GET","get_issues.php?offset="+frItem+"&lastIndex=" + toItem,true);
    // => percentage information
    let eProgressTop = my_create("div",undefined,[],{"position":"fixed","top":"5px","left":"162px"},{"id":"my_progress"});
    eProgressTop.appendChild(my_create("i",undefined,["bi","bi-hourglass-split","w3-spin"],{"position":"absolute","top":"28px","left":"30px"},{}))
    eProgressTop.appendChild(my_create("span",(100 - aoRegFrTo.length)  +"%",[],{"position":"absolute","top":"-5px","left":"-2px"}))
    document.getElementsByTagName("body")[0].appendChild(eProgressTop);

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // =>
            let objData = {};
            try {objData = JSON.parse(this.responseText);}
            catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
            // 
            // while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
            // while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
            // hide_left();//if any
            // console.log(objData)
            // => remove loading
            if(document.getElementById("my_progress") !== null) document.getElementById("my_progress").remove();
            // => update the display element
            if(objData.hasOwnProperty("outObj") && Object.keys(objData["outObj"]).length > 0){
                update_sum_data(objData['outObj'], allData);
                if(tgtE !== undefined){ // don't do this, the table will be messed up
                    // delete all and create newly
                    let aoTr = tgtE.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
                    while(aoTr.length > 1) {aoTr[aoTr.length-1].remove();}
                    // update_sum_info_to_tbody(tgtE.getElementsByTagName("tbody")[0],objData["outObj"]);
                    if(document.getElementById("sum_status") !== undefined){
                        document.getElementById("sum_status").innerText = "Total: " + objData["total_count"];
                        document.getElementById("sum_status").innerText += " /Current-Offset: " + objData["offset"];
                        document.getElementById("sum_status").innerText += " /Updated on: " + my_datetime_fr_epoch(objData["regTime"]);
                    }
                    update_sum_info_to_tbody(tgtE.getElementsByTagName("tbody")[0],allData);
                }
            }
            // => recursively untill all are loaded
            if(aoRegFrTo.length > 0){
                dsp_notification("Partly finished loading data (+1%), proceeding next ...","Info")
                if(flgStop === true){
                    dsp_notification("Stop-signal encountered, stop the progress!!!","Warn")
                    update_charts_after_sort(tgtE.getElementsByTagName("tbody")[0]);
                    flgStop = false;//reset the flag of stopping
                    flgSumNow = false;
                    hide_left();
                }else{
                    get_n_dsp_sum_issues_partly(aoRegFrTo,tgtE,allData);
                }
            }else{
                // the job is finishing
                if(document.getElementById("sum_status") !== undefined){
                    document.getElementById("sum_status").innerText = "Total: " + objData["total_count"];
                    document.getElementById("sum_status").innerText += " /Current-Offset: " + objData["offset"];
                    document.getElementById("sum_status").innerText += " /Updated on: " + my_datetime_fr_epoch(objData["regTime"]);
                }
                update_sum_info_to_tbody(tgtE.getElementsByTagName("tbody")[0],allData);
                dsp_notification("Finished loading all data, enjoy!","Info")
                // making charts
                update_charts_after_sort(tgtE.getElementsByTagName("tbody")[0]);
                // // updating the icon of the button
                let tgtClkE = null;
                for(let tmpE of myMenu2.getElementsByTagName("div")){
                    if(tmpE.getAttribute("onclick") === "retrieve_sum_by_get_all_issues_now()"){
                        tgtClkE = tmpE;
                    }
                }
                if(tgtClkE !== null){
                    tgtClkE.getElementsByTagName("i")[0].classList.remove("w3-animate-fading");
                    tgtClkE.getElementsByTagName("i")[0].classList.remove("bi-cloud-haze2-fill");
                    tgtClkE.classList.remove("w3-border");
                    tgtClkE.classList.remove("w3-border-red");
                    tgtClkE.getElementsByTagName("i")[0].classList.add("bi-cloud-haze2");
                }else{}
                // reset the flag of stopping if needed ???
                flgStop = false;
                flgSumNow = false;
                hide_left();
            }
        }else{}
    }
    xmlhttp.send();
    return;
}

function gen_init_sum_info(){
    let eTop = my_create("div",undefined,["w3-block"]);// top
    eTop.appendChild(my_create("div","status:....",["w3-block","w3-tiny"],{},{"id":"sum_status"}));// status

    let eTbl = my_create("table",undefined,["w3-table-all","w3-centered","w3-hoverable","w3-bordered","w3-animate-top"],{"width":"100%"});
    let eTbd = my_create("tbody"); eTbl.appendChild(eTbd);
    eTbd.appendChild(my_add_row(["Asset Group","<i class='bi bi-pie-chart'></i>","#emptyMAC","#MAC<31","#MAC=31-90","#MAC>90","#Total"],"th",{"padding":0,"border":"1px gray solid","font-family":"monospace"}));
    // making it the sticky thing
    eTbd.getElementsByTagName("tr")[0].style.position = "sticky";
    eTbd.getElementsByTagName("tr")[0].style.top = "0";
    // eTbd.getElementsByTagName("tr")[0].style.boxShadow = "0 2px 2px -1px rgba(0, 0, 0, 0.4)";
    // making it sorting headers
    for(let tmpE of eTbd.getElementsByTagName("th")){
        if(tmpE.innerHTML.indexOf("bi-pie-chart") > -1) continue;//
        tmpE.innerHTML = tmpE.innerHTML+"<i class=\"bi bi-shuffle\"></i>";
        tmpE.setAttribute("onclick","sortTblByHeader(this);update_charts_after_sort(this.parentNode.parentNode)");
    }
    // =>
    eTop.appendChild(eTbl);
    return eTop;
}

function update_sum_data(thisData,allData){
    for(let prjN in thisData){
        if(!allData.hasOwnProperty(prjN)){
            allData[prjN] = [];
            allData[prjN]["total"] = thisData[prjN]["total"];
            allData[prjN]["emptyMAC"] = thisData[prjN]["emptyMAC"];
            allData[prjN]["MAC<31"] = thisData[prjN]["MAC<31"];
            allData[prjN]["MAC=31-90"] = thisData[prjN]["MAC=31-90"];
            allData[prjN]["MAC>90"] = thisData[prjN]["MAC>90"];
            allData[prjN]["id"] = thisData[prjN]["id"];
        }else{
            allData[prjN]["total"] += thisData[prjN]["total"];
            allData[prjN]["emptyMAC"] += thisData[prjN]["emptyMAC"];
            allData[prjN]["MAC<31"] += thisData[prjN]["MAC<31"];
            allData[prjN]["MAC=31-90"] += thisData[prjN]["MAC=31-90"];
            allData[prjN]["MAC>90"] += thisData[prjN]["MAC>90"];
        }
    }
}


function rtn_number_with_link(num,link){
    if(num > 0){
        return "<a target='_blank_' href='"+link+"'>"+num+"</a>";
    }else{
        return num;
    }
}

function update_sum_info_to_tbody(tgtE,data){
    let aoTr = tgtE.getElementsByTagName("tr");
    if(aoTr.length === 1){
        console.log("update table newly")
        // => sorting data
        let tmpD = Object.keys(data);
        tmpD.sort(function(a,b){
            let x = data[a]["MAC>90"];
            let y = data[b]["MAC>90"];
            return y-x;
        });
        // append newly
        for(let prjN of tmpD){
            // data
            let prjID = data[prjN]["id"];
            // let href4 = hrefIssue + "/projects/"+prjID+"/issues?" + encodeURIComponent("utf8=✓&set_filter=1&f[]=cf_12&op[cf_12]=>=&v[cf_12][]=")+my_return_date(-90);
            let href3 = hrefIssue + "/projects/"+prjID+"/issues?" + my_URLencode(
                [
                    {"utf8":"✓"},
                    {"set_filter":"1"},
                    {"f[]":"cf_12"},
                    {"op[cf_12]":"><"},
                    {"v[cf_12][]": my_return_date(-91)},
                    {"v[cf_12][]": my_return_date(-30)},
                ]
            );
            let href4 = hrefIssue + "/projects/"+prjID+"/issues?" + my_URLencode(
                [
                    {"utf8":"✓"},
                    {"set_filter":"1"},
                    {"f[]":"cf_12"},
                    {"op[cf_12]":"<t-"},
                    {"v[cf_12][]": 90},
                ]
            );

            // console.log(prjN,prjID,href3)
            tgtE.appendChild(my_add_row([
                prjN,
                "<div></div>",
                data[prjN]["emptyMAC"],
                data[prjN]["MAC<31"],
                rtn_number_with_link(data[prjN]["MAC=31-90"],href3),
                rtn_number_with_link(data[prjN]["MAC>90"],href4),
                data[prjN]["total"]
            ],"td",{"padding":0,"border":"1px gray solid"}
            ))
            // console.log("add new", prjN)
            //formating
            update_format_sum_row(tgtE.getElementsByTagName("tr")[tgtE.getElementsByTagName("tr").length - 1]);
        }
    }else{
        console.log("update table additionally -> disabled")
    }
}

function update_format_sum_row(tgtTR){
    let aoD = tgtTR.getElementsByTagName("th")
    if(aoD.length === 0) aoD = tgtTR.getElementsByTagName("td")
    // => background color
    aoD[aoD.length-2].style.backgroundColor = "RGB(253, 83, 126)";//MAC>90 red like
    aoD[aoD.length-3].style.backgroundColor = "RGB(19, 182, 236)";//MAC=31-90 blue like
    aoD[aoD.length-4].style.backgroundColor = "RGB(153, 255, 187)";//MAC<31 green like
    aoD[aoD.length-5].style.backgroundColor = "RGB(253, 211, 83)";//empty MAC yellow like
    // => add a chart
    aoD[1].style.width = "80px";
    aoD[1].classList.add("my-cnt-canvas-top");
    // aoD[1].getElementsByTagName("div")[0].appendChild(gen_pie_chart(undefined,aoD[2].innerText,aoD[3].innerText,aoD[4].innerText,aoD[5].innerText));
}

function update_charts_after_sort(tgtTbl){
    console.log("dbg:: update charts after sort")
    let i = 0;
    for(let eTd of tgtTbl.getElementsByClassName("my-cnt-canvas-top")){
        i+=1;
        let eTop = eTd.getElementsByTagName("div")[0];
        setTimeout(function(){gen_pie_chart(eTop,
            eTd.nextElementSibling.innerText,
            eTd.nextElementSibling.nextElementSibling.innerText,
            eTd.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            eTd.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            );
        },50*i);
    }

    return 0;
}

function gen_pie_chart(tgtE,num_emptyMAC,num_MAC31,num_MAC90,num_MACover){
    let aPieTop = null;
    let eCanvas = null;
    if(tgtE === undefined){
        aPieTop = my_create("div",undefined,["w3-white","w3-card-4","w3-border"],{"width":"100%","float":"left"});
        eCanvas = my_create("canvas");
        eCanvas.height = "80px";
        eCanvas.width = "80px";
        aPieTop.appendChild(eCanvas);
    }else{
        aPieTop = tgtE;
        if(aPieTop.getElementsByTagName("canvas").length > 0){
            eCanvas = aPieTop.getElementsByTagName("canvas")[0];
        }else{
            eCanvas = my_create("canvas");
            eCanvas.height = "80px";
            eCanvas.width = "80px";
            aPieTop.appendChild(eCanvas);
        }
    }
    const chartData = {
        labels: [
            'empty',
            '<31',
            '31-90',
            '>90'
          ],
          datasets: [{
            label: '',
            data: [num_emptyMAC,num_MAC31,num_MAC90,num_MACover],
            backgroundColor: [
                "RGB(253, 211, 83)",
                "RGB(153, 255, 187)",
                "RGB(19, 182, 236)",
                "RGB(253, 83, 126)",
            ],
            hoverOffset: 4
          }]
    };
    let chartConfig = {
        type:'pie',
        data: chartData,
        options: {
            plugins : {
                legend : {
                    display : false,
                },
                tooltip: {
                    enabled : true
                }
            }
        }
    };
    let theChart = new Chart(eCanvas,chartConfig);
    // =>
    return aPieTop;
}

function sortTblByHeader(thTgt){
    let trHead = thTgt.parentNode.getElementsByTagName("th");
    let tgtTbl = thTgt.parentNode.parentNode;
    let indexTH = -1;

    let iDir = thTgt.getElementsByTagName("i")[0];// <i> element for direction

    let current_sort_direction = "";
    if(iDir.classList.contains("bi-shuffle")){
        iDir.classList.remove("bi-shuffle");
        iDir.classList.add("bi-sort-down-alt");
        current_sort_direction = "down";
    }else if(iDir.classList.contains("bi-sort-down")){
        iDir.classList.remove("bi-sort-down");
        iDir.classList.add("bi-sort-down-alt");
        current_sort_direction = "down";
    }else if(iDir.classList.contains("bi-sort-down-alt")){
        iDir.classList.remove("bi-sort-down-alt");
        iDir.classList.add("bi-sort-down");
        current_sort_direction = "up";
    }else{
        return 0;
    }

    // get index of header => get the target content to be compared
    for(let i=0;i<trHead.length;i++){
        if(thTgt === trHead[i]){
            indexTH = i;
        }
    }
    // console.log(tgtTbl.childNodes.length)
    // => arrange table again by indicating array
    let aoTr = tgtTbl.getElementsByTagName("tr");
    let orgAoTr = new Array();
    for(i=0;i<aoTr.length;i++){
        orgAoTr.push(aoTr[i].cloneNode(true));
    }
    //notice: canvas "content" is not part of the DOM and can't be copied by DOM method. However, it's quite easy to call clonedCanvas.getContext('2d').drawImage(originalCanvas, 0,0) which will draw the original canvas on the cloned one.

    // => control the array
    let tmpA = new Array();
    for(let i=1;i<aoTr.length;i++){
        let tmpO = new Object();
        tmpO["index"] = i;
        tmpO["org"] = aoTr[i].getElementsByTagName("td")[indexTH].innerText;
        tmpO["strMod"] = tmpO["org"].replace(/\s+/,"");
        let tmpO2 = /^[-\.\d]+/.exec(aoTr[i].getElementsByTagName("td")[indexTH].innerText);
        if(tmpO2 !== null){
            if(tmpO2[0] === "-") {
                tmpO["tgtNum"] = null;
            }else{
                tmpO["tgtNum"] = tmpO2[0];
            }
        }else{
            tmpO["tgtNum"] = null;
        }
        // tmpO["epoch"] = new Date(tmpO["org"]).getTime();
        // tmpO["epoch"] = new Date(tmpO["org"]).valueOf();
        // if(!/^[-\.\d+]$/.test(tmpO["tgtNum"])){ //number takes precedence
        //     if(/^\d+$/.test(tmpO["epoch"])) {tmpO["tgtNum"] = tmpO["epoch"]}
        // }
        // =>
        tmpA.push(tmpO);
    }
    // => sorting: sort the indicating array
    if(current_sort_direction === "up"){
        tmpA.sort(function(a,b){
            if(b.tgtNum === null && a.tgtNum === null){
                x = a.strMod.toUpperCase();
                y = b.strMod.toUpperCase();
                if(x < y) { return 1; }
                if(x > y) { return -1; }
                return 0;
            }else{
                return b.tgtNum - a.tgtNum;
            }
        });
    }else{
        tmpA.sort(function(a,b){
            if(b.tgtNum === null && a.tgtNum === null){
                x = a.strMod.toUpperCase();
                y = b.strMod.toUpperCase();
                if(x < y) { return -1; }
                if(x > y) { return 1; }
                return 0;
            }else{
                return a.tgtNum - b.tgtNum
            }
        });
    }
    // console.log("index",indexTH, tmpA)

    // remove orginal table
    // while(tgtTbl.childNodes.length > 2){ tgtTbl.lastChild.remove();   }
    while(tgtTbl.getElementsByTagName("tr").length > 1){ tgtTbl.getElementsByTagName("tr")[tgtTbl.getElementsByTagName("tr").length-1].remove()}
    // replace by copied elements
    for(let i=1;i<orgAoTr.length;i++){
        let tgtI = tmpA[i-1]["index"];
        // console.log(i, tgtI, tmpA[i-1]["tgtNum"][0], tmpA[i-1]["srvN"], aoTr[tgtI])
        tgtTbl.appendChild(orgAoTr[tgtI]);
    }
    // update the status show-off
    // update the icons of other header to be shuffer
    for(let tmpe of aoTr[0].getElementsByTagName("th")){
        if(tmpe === thTgt) continue;
        if(tmpe.getElementsByTagName("i").length > 0){
            let iDir = tmpe.getElementsByTagName("i")[0];
            if(iDir.classList.contains("bi-shuffle")){
                // keep it
            }else if(iDir.classList.contains("bi-sort-down")){
                iDir.classList.remove("bi-sort-down");
                iDir.classList.add("bi-shuffle");
            }else if(iDir.classList.contains("bi-sort-down-alt")){
                iDir.classList.remove("bi-sort-down-alt");
                iDir.classList.add("bi-shuffle");
            }else{
            }
        }
    }
}

///////
function is_Renesas_email(inS){
    if(inS === undefined) return false;
    if(inS === null) return false;
    if(inS === "") return false;
    if(inS.search(/^\w+\.\w+\.\w+@renesas.com$/) > -1) return true;
    dsp_notification("Not a Renesas email.","Error");
    return false;
}


////// TODO
