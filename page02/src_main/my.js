let thisUser = "Somebody@nowhere.com";
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

    my_ajax_get("src_modules/test/database.php",[{}],function(rtnO){
        let noFmtE = my_create("pre",JSON.stringify(rtnO,undefined,2),["w3-small"]);
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
    upd_user_info();
}

//////////////////////////////////////// show/hide/toggle the top components (this page
function show_left(){
    leftSide.classList.add("w3-show");
    mainSide.style.marginLeft = "250px";
}
function hide_left(){
    leftSide.classList.remove("w3-show");
    mainSide.classList.add("my-show-right-slowly")
    setTimeout(function(){
        mainSide.style.marginLeft = "0";
        mainSide.classList.remove("my-show-right-slowly")
    },1800)
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
    document.getElementsByTagName("body")[0].appendChild(eTop);
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
    let eLine = my_create("div",undefined,["line"]);
    let eDot1 = my_create("div",undefined,["dot","dot1"]);
    let eDot2 = my_create("div",undefined,["dot","dot2"]);
    let eDot3 = my_create("div",undefined,["dot","dot3"]);
    let eDot4 = my_create("div",undefined,["dot","dot4"]);
    let eDot5 = my_create("div",undefined,["dot","dot5"]);

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
                    dsp_notification(err,"Error");
                    // dsp_notification(this.responseText,"Error");
                    return;
                }
                if(fnc === undefined) return;
                fnc(objData);return;

            }else if(this.status === 500){
                console.log("dbg:: caught the state=" + this.readyState + " status="+this.status)
                let objData = {};
                try {objData = JSON.parse(this.responseText);}
                catch(err){
                    console.log(err);
                    console.log(this.responseText);
                    dsp_notification(err,"Error");
                    dsp_notification(this.responseText,"Error");
                    return;
                }
                // console.log("dbg:",objData)
                if(fnc === undefined) return;
                fnc(objData);return;
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
    console.log(urlEncodedData)

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

////////////////////////////
function gen_menu_item(cntI){
    let eTop = my_create("div",undefined,["w3-bar-item", "w3-mobile","w3-round","w3-button","my-tooltip"]);
    if(cntI.hasOwnProperty("position")){
        if(cntI["position"] === "right") eTop.classList.add("w3-right");
    }
    if(cntI.hasOwnProperty("text")){
        if(cntI["text"] !== ""){
            eTop.classList.add("w3-padding-16");
            eTop.innerText = cntI["text"];
        }
    }
    if(cntI.hasOwnProperty("icon")){
        if(cntI["icon"] !== "") eTop.appendChild(my_create("i",undefined,[cntI["icon"],"w3-text-indigo","w3-xlarge"]));
    }
    if(cntI.hasOwnProperty("tooltip")){
        if(cntI["tooltip"] !== "") eTop.appendChild(my_create("span",cntI["tooltip"],["my-tooltip-content"]));
    }

    // anything else is attribute
    for(let tmpv in cntI){
        if(tmpv === "position") continue;
        if(tmpv === "text") continue;
        if(tmpv === "icon") continue;
        if(tmpv === "tooltip") continue;
        eTop.setAttribute(tmpv,cntI[tmpv]);
    }
    return eTop;
}
function dsp_menu(){
    my_ajax_get("./src_modules/menu/menu.php",[{}],function(rtnO){
        if(!rtnO.hasOwnProperty("cntData")) return;
        for(let tmpv of rtnO["cntData"]){
            document.getElementById("myMenu2").appendChild(gen_menu_item(tmpv));
        }
    });
}

///////////////////////////////
function upUserDisplay(oData){
    if(document.getElementById("userDisplay") === null) return;
    console.log(oData)

    let eName = userDisplay.getElementsByTagName("span")[0];
    let eEmail = userDisplay.getElementsByTagName("span")[1];
    let eTitle = userDisplay.getElementsByTagName("span")[2];
    let eShield = userDisplay.getElementsByTagName("i")[0];
    let eMoreInfo = userDisplay.getElementsByTagName("span")[3];

    if(oData.hasOwnProperty("login_email")) eEmail.innerText = oData["login_email"];
    if(oData.hasOwnProperty("user_name")) eName.innerText = oData["user_name"];
    if(oData.hasOwnProperty("role")) eTitle.innerText = oData["role"];
    if(oData.hasOwnProperty("modify_on")) eMoreInfo.innerText = new Date(Number(oData["modify_on"]) *1000);
}

function upd_user_info(){
    my_ajax_get("src_modules/login/chk_and_rtn_login_user_info.php",[{}],function(rtnO){
        upUserDisplay(rtnO["user_info"]);
    })
};


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
        // // check and update the target prjN
        // for(let prjN in data){
        //     let tgtTr = undefined;
        //     for(let tmpTr of aoTr){
        //         if(tmpTr.getElementsByTagName("td").length > 0){
        //             if(tmpTr.getElementsByTagName("td")[0].innerText === prjN){
        //                 tgtTr = tmpTr;
        //             }
        //         }
        //     }
        //     if(tgtTr === undefined){
        //         // add new
        //         tgtE.appendChild(my_add_row([
        //             prjN,
        //             data[prjN]["emptyMAC"],
        //             data[prjN]["MAC<31"],
        //             data[prjN]["MAC=31-90"],
        //             data[prjN]["MAC>90"],
        //             data[prjN]["total"]
        //         ],"td",{"padding":0,"border":"1px gray solid"}
        //         ))
        //         // console.log("add new", prjN)
        //     }else{
        //         // updating
        //         tgtTr.getElementsByTagName("td")[1].innerText = Number(tgtTr.getElementsByTagName("td")[1].innerText) + Number(data[prjN]["emptyMAC"]);
        //         tgtTr.getElementsByTagName("td")[2].innerText = Number(tgtTr.getElementsByTagName("td")[2].innerText) + Number(data[prjN]["MAC<31"]);
        //         tgtTr.getElementsByTagName("td")[3].innerText = Number(tgtTr.getElementsByTagName("td")[3].innerText) + Number(data[prjN]["MAC=31-90"]);
        //         tgtTr.getElementsByTagName("td")[4].innerText = Number(tgtTr.getElementsByTagName("td")[4].innerText) + Number(data[prjN]["MAC>90"]);
        //         tgtTr.getElementsByTagName("td")[5].innerText = Number(tgtTr.getElementsByTagName("td")[5].innerText) + Number(data[prjN]["total"]);
        //         // console.log("updating", prjN,tgtTr)
        //     }
        // }
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

// ///////////////////////////////////////////////////////////////////
// function dsp_login(){
//     remove_effect();
//     hide_left();
//     while(leftSide.childNodes.length > 0){leftSide.lastChild.remove()}
//     leftSide.appendChild(gen_login_form());
//     show_left();
// }

// function dsp_add_item(){
//     remove_effect();
//     hide_left();
//     while(leftSide.childNodes.length > 0){leftSide.lastChild.remove()}
//     leftSide.appendChild(gen_add_item_form());
//     show_left();
// }

// function dsp_add_person(){
//     remove_effect();
//     hide_left();
//     while(leftSide.childNodes.length > 0){leftSide.lastChild.remove()}
//     leftSide.appendChild(gen_add_person_form());
//     show_left();
// }

// function dsp_user_action_on_item(clickedEle){
//     remove_effect();
//     hide_left();
//     while(leftSide.childNodes.length > 0){leftSide.lastChild.remove()}
//     leftSide.appendChild(gen_user_action_on_item(clickedEle));
//     show_left();
// }

// function gen_add_item_form(){
//     // => prepare time-tring for today 00:00
//     let nowStr = new Date();
//     // nowStr.setMinutes(nowStr.getMinutes() - nowStr.getTimezoneOffset());
//     nowStr.setMinutes(nowStr.getTimezoneOffset()+1);
//     // console.log(nowStr.toJSON().slice(0,16))
//     // =>
//     let eTop = my_create();
//     eTop.appendChild(my_create("p","Adding a new item to list of elearning/ survey.",[],{},{}))
//     eTop.appendChild(my_create("label","Subject:",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_subject","onchange":"update_item_info_in_adding_form(this.value,this.parentNode)"}))
//     eTop.appendChild(my_create("label","Start date",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_start","type":"datetime-local","value":nowStr.toJSON().slice(0,16)}))
//     eTop.appendChild(my_create("label","End date",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_end","type":"datetime-local"}))
//     eTop.appendChild(my_create("label","Link",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_link"}))
//     eTop.appendChild(my_create("label","More info",["w3-large"],{},{}))
//     eTop.appendChild(my_create("textarea",undefined,[],{"width":"100%","resize":"none"},{"name":"item_moreInfo","rows":9}))
//     //
//     eTop.appendChild(my_create("div","Import",["w3-button","w3-round","w3-indigo"],{"width":"100%"},{"onclick":"import_data_from_form(this.parentNode)"}));
//     return eTop;
// }

// function gen_user_action_on_item(clickedEle){
//     // console.log(clickedEle.parentNode.parentNode.getElementsByTagName("a")[0].innerText)
//     // let subject = clickedEle.parentNode.parentNode.getElementsByTagName("a")[0].innerText;
//     let reflink = clickedEle.parentNode.parentNode.getElementsByTagName("a")[0].href;
//     let subject = clickedEle.parentNode.parentNode.getElementsByTagName("a")[0].nextElementSibling.innerText;
//     let eTop = my_create();
//     eTop.appendChild(my_create("p","User input finished date for an item.",[],{},{}))
//     eTop.appendChild(my_create("label","Subject:",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_subject","readonly":true,"value":subject}))
//     eTop.appendChild(my_create("label","CheckLink (careful)!",["w3-block","w3-button"],{},{"onclick":"toggle_nextEle(this)"}))
//     eTop.appendChild(my_create("label",reflink,["w3-small","w3-block"],{"wordWrap":"break-word","display":"none"},{"name":"item_link","readonly":true}))
//     eTop.appendChild(my_create("label","More info:",["w3-large"],{},{}))
//     eTop.appendChild(my_create("textarea",undefined,[],{"width":"100%","resize":"none"},{"name":"item_moreInfo","rows":9,"readonly":true}))
//     eTop.appendChild(my_create("label","Your Finished date",["w3-large","w3-topbar"],{},{}))
//     eTop.appendChild(my_create("div","now?",["w3-button","w3-black","w3-round","w3-right"],{},{"onclick":"get_nowstr_to_next_input(this)"}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"item_finish","type":"datetime-local"}))
//     eTop.appendChild(my_create("div","Import",["w3-button","w3-round","w3-indigo"],{"width":"100%"},{"onclick":"import_user_action_on_item_form(this.parentNode)"}));
//     // =>
//     update_item_info_in_adding_form(subject,eTop)
//     return eTop;
// }
// function get_nowstr_to_next_input(thisEle){
//     let nowStr = new Date();
//     nowStr.setMinutes(nowStr.getMinutes() - nowStr.getTimezoneOffset());
//     // console.log(nowStr.toJSON().slice(0,16))
//     thisEle.nextElementSibling.setAttribute("value",nowStr.toJSON().slice(0,16))
//     return 0;
// }

// function import_login_or_OTP(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     let btnAction = "";
//     let btnOpacity = false;//control the enabling property
//     for(let tmpE of tgtForm.getElementsByTagName("div")){
//         if(tmpE.classList.contains("w3-button")){
//             btnAction = tmpE.innerText;
//             if(tmpE.classList.contains("w3-opacity")){
//                 btnOpacity = true;
//             }
//         }
//     }
//     if(btnOpacity === true){
//         dsp_notification("Email or OTP code not valid.","Error")
//         return 0;//if the button is disable, then don't do anything
//     }
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     // console.log(objData)

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // =>
//             let objData = [];
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // =>
//             // console.log(objData)
//             if(!objData.hasOwnProperty("OTP")){
//                 dsp_notification("Login FAILED","Error");
//             }else{
//                 if(objData["OTP"] === "OK"){
//                     dsp_user_info_from_email(objData["login_email"]);
//                     // => remove leftSide and update the content
//                     setCookie("userEmail",objData["login_email"],180);
//                     setCookie("userEmailOTP","OK",180);
//                     while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                     hide_left();
//                     // =>
//                     dsp_all_items("warn");
//                 }else if(objData["OTP"] === "Sent"){
//                     dsp_notification("OTP sent.")
//                 }else if(objData["OTP"] === "NG"){
//                     dsp_notification("OTP not matched.")
//                     setCookie("userEmail","Somebody@nowhere.com",-1);
//                     setCookie("userEmailOTP","NG",-1);
//                 }else{
//                     dsp_notification("Unknown OTP status: "+objData["OTP"])
//                     setCookie("userEmail","Somebody@nowhere.com",-1);
//                     setCookie("userEmailOTP","NG",-1);
//                 }
//             }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+objData[tmpv];
//     }
//     oStr = oStr.replace(/^&/,"");
//     xmlhttp.open("POST","login.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function import_data_from_form(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     if(Object.keys(objData).length > 0) {
//         objData["_type_"] = "item";
//         objData["_user_"] = thisUser;
//     }

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             if(this.responseText === "OK"){
//                 dsp_notification("Successfully registered the item: "+this.responseText,"Info")
//                 // => remove leftSide and update the content
//                 while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                 hide_left();
//                 // =>
//                 dsp_all_items("warn");
//             }else{
//                 dsp_notification("Fail registering the item: "+this.responseText,"Error")
//             }
//             // clear/reset current info
//             // for(let tmpE of tgtForm.childNodes){
//             //     if(tmpE.getAttribute("name") !== null){
//             //         tmpE.value = null;
//             //     }
//             // }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+objData[tmpv];
//     }
//     oStr = oStr.replace(/^&/,"");
//     xmlhttp.open("POST","register_item.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function import_user_action_on_item_form(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     if(Object.keys(objData).length > 0) {
//         objData["email"] = thisUser;
//     }

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             if(this.responseText === "OK"){
//                 dsp_notification("Successfully registered the item: "+this.responseText,"Info")
//                 // => remove leftSide and update the content
//                 while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                 hide_left();
//                 // =>
//                 dsp_all_items("warn");
//             }else{
//                 dsp_notification("Fail registering the item: "+this.responseText,"Error")
//             }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+encodeURIComponent(objData[tmpv]);
//     }
//     oStr = oStr.replace(/^&/,"");
//     // console.log(oStr)
//     xmlhttp.open("POST","register_user_action_on_item.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function gen_add_person_form(){
//     // form for adding or modifying a person account
//     let eTop = my_create();
//     eTop.appendChild(my_create("p","Adding a person to list of cooperation.",[],{},{}))
//     eTop.appendChild(my_create("label","Email:",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"person_email","type":"email","onchange":"update_user_info_in_adding_form(this.value,this.parentNode)"}))
//     eTop.appendChild(my_create("label","Last-Middle-First Name",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"person_name"}))
//     eTop.appendChild(my_create("label","Section",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"person_section"}))
//     eTop.appendChild(my_create("label","Group",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"person_group"}))
//     eTop.appendChild(my_create("label","More Info",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"person_moreInfo"}))
//     //
//     eTop.appendChild(my_create("div","Import",["w3-button","w3-round","w3-indigo"],{"width":"100%"},{"onclick":"import_user_info(this.parentNode)"}))     
//     eTop.appendChild(my_create("div","Delete",["w3-button","w3-round","w3-indigo"],{"width":"100%"},{"onclick":"delete_user_info(this.parentNode)"}))     
//     eTop.appendChild(my_create("div","Recover",["w3-button","w3-round","w3-indigo"],{"width":"100%"},{"onclick":"recover_user_info(this.parentNode)"}))
//     // => find and update if there existed the user
//     update_user_info_in_adding_form(thisUser,eTop);
//     return eTop;
// }

// function import_user_info(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     if(Object.keys(objData).length > 0) {
//         objData["_user_"] = thisUser;
//     }

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             if(this.responseText === "OK"){
//                 dsp_notification("Successfully registered the user: "+this.responseText,"Info")
//                 // // => remove leftSide and update the content
//                 // while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                 // hide_left();
//                 // // =>
//                 // dsp_all_items("warn");
//                 if(objData["person_email"] === thisUser){
//                     dsp_user_info_from_email(thisUser);
//                 }
//                 update_user_info_in_adding_form(objData["person_email"],leftSide.getElementsByTagName("div")[0]);
//             }else{
//                 dsp_notification("Fail registering the user: "+this.responseText,"Error")
//             }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+objData[tmpv];
//     }
//     oStr = oStr.replace(/^&/,"");
//     // console.log(oStr)
//     xmlhttp.open("POST","register_user_info.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function delete_user_info(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     if(Object.keys(objData).length > 0) {
//         if(objData["person_email"] === thisUser){
//             dsp_notification("You cannot delete yourself.","Error");
//             return 0;
//         }
//         objData["_user_"] = thisUser;
//         objData["_delete_"] = "yes";
//     }

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             if(this.responseText === "OK"){
//                 dsp_notification("Successfully deleted the user: "+this.responseText,"Info")
//                 // => remove leftSide and update the content
//                 while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                 hide_left();
//                 // // =>
//                 // dsp_all_items("warn");
//             }else{
//                 dsp_notification("Fail deleting the user: "+this.responseText,"Error")
//             }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+objData[tmpv];
//     }
//     oStr = oStr.replace(/^&/,"");
//     // console.log(oStr)
//     xmlhttp.open("POST","register_user_info.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function recover_user_info(tgtForm){
//     if(tgtForm === undefined) return;
//     // => retrieve the values from form inputs, text-area, select ...
//     let objData = {};
//     for(let tmpE of tgtForm.childNodes){
//         if(tmpE.getAttribute("name") !== null){
//             objData[tmpE.getAttribute("name")] = tmpE["value"]
//         }
//     }
//     if(Object.keys(objData).length > 0) {
//         if(objData["person_email"] === thisUser){
//             dsp_notification("You cannot recover yourself.","Error");
//             return 0;
//         }
//         objData["_user_"] = thisUser;
//         objData["_recover_"] = "yes";
//     }

//     // => sending over internet
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             if(this.responseText === "OK"){
//                 dsp_notification("Successfully recovered the user: "+this.responseText,"Info")
//                 // // => remove leftSide and update the content
//                 // while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//                 // hide_left();
//                 // // =>
//                 // dsp_all_items("warn");
//                 update_user_info_in_adding_form(objData["person_email"],leftSide.getElementsByTagName("div")[0]);
//             }else{
//                 dsp_notification("Fail recovering the user: "+this.responseText,"Error")
//             }
//         }else{}
//     }
//     let oStr = "";
//     for(let tmpv in objData){
//         oStr += "&"+tmpv+"="+objData[tmpv];
//     }
//     oStr = oStr.replace(/^&/,"");
//     // console.log(oStr)
//     xmlhttp.open("POST","register_user_info.php",true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xmlhttp.send(oStr);
//     return;
// }

// function gen_login_form(){
//     // form for login/changing login information
//     let eTop = my_create();
//     eTop.appendChild(my_create("p","Changing Login information.",[],{},{}))
//     eTop.appendChild(my_create("label","Email:",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"login_email","type":"email","onkeyup":"check_email_input(this)"}))
//     eTop.appendChild(my_create("label","OTPcode",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"name":"login_OTP","onkeyup":"check_OTP_input(this)"}))
//     //
//     eTop.appendChild(my_create("div","getOTP",["w3-button","w3-round","w3-indigo","w3-opacity"],{"width":"100%"},{"onclick":"import_login_or_OTP(this.parentNode)"}))
//     return eTop;
// }

// function gen_list_NY_members_for_item(objData){
//     // console.log("gen_list_NY_members_for_item")
//     let eTop = my_create("div",undefined,["w3-responsive"],{"height":"100vh"});
//     eTop.appendChild(my_create("p","List of Not-Finished-Yet persons.",[],{},{}))
//     eTop.appendChild(my_create("label","Subject",["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"readonly":true,"value":objData["subject"]}))
//     eTop.appendChild(my_create("label",objData["type"],["w3-large"],{},{}))
//     eTop.appendChild(my_create("input",undefined,["w3-input"],{},{"readonly":true,"value":objData["name"]}))
//     eTop.appendChild(my_create("label","List of NY:",["w3-large"],{},{}))
//     for(let email in objData["data"]){
//         let eDiv = my_create("div",undefined,["w3-container","w3-border-top"],{"paddingLeft":0});
//         let eName = my_create("div",objData["data"][email]["person_name"],[],{},{});
//         let eMoreInfo = my_create("div",objData["data"][email]["person_moreInfo"],["w3-small","w3-text-pink"],{"width":"100%","textAlign":"left"},{});
//         let eEmail = my_create("div",email,["w3-small","w3-text-purple"],{"width":"100%","textAlign":"right"},{});
//         eDiv.appendChild(eName);
//         eDiv.appendChild(eMoreInfo);
//         eDiv.appendChild(eEmail);
//         eTop.appendChild(eDiv);
//     }
//     //
//     return eTop;
// }

// function gen_sum_items_tbl(itemRef,sumSect,sumGroup){
//     // console.log("dbg:: gen_sum_items_tbl");
//     // => working on data
//     let iSubject = "an item subject";
//     let iRefLink = "an item subject";
//     let iStaDate = new Date(Date.now() - 2*24*3600*1000);
//     let iEndDate = new Date(Date.now() + 24*3600*1000);
//     let iFinDate = null;
//     let iFinLastModBy = "-";
//     let iFinLastModOn = "-";
//     let iLastUpdBy = undefined;
//     let iLastUpdOn = undefined;
//     // for some testing contextes
//     if(itemRef !== undefined){
//         iSubject = itemRef["item_subject"]; //"an item subject";
//         iRefLink = itemRef["item_link"]; //"an item subject";
//         iStaDate = new Date(itemRef["item_start"]); //new Date(Date.now() - 2*24*3600*1000);
//         iEndDate = new Date(itemRef["item_end"]); //new Date(Date.now() + 24*3600*1000);
//         iLastUpdBy = "-";if(itemRef.hasOwnProperty("_user_")) iLastUpdBy = itemRef["_user_"];
//         iLastUpdOn = "-";if(itemRef.hasOwnProperty("_modTime_")) iLastUpdOn = itemRef["_modTime_"];
//     }
//     let total_days =Number((iEndDate-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_days = Number((Date.now()-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_percent = Number(100*(Date.now()-iStaDate)/(iEndDate-iStaDate)).toFixed(1);
//     let now_diff_days_dsp = now_diff_days; if(now_diff_days - total_days > 0) now_diff_days_dsp = "Over " + Number(now_diff_days - total_days).toFixed(1);
//     let now_diff_percent_dsp = now_diff_percent;if(now_diff_percent - 100 > 0) now_diff_percent_dsp = "-";

//     let oBySects = {};
//     for(let sect in itemRef["sumBySect"]){
//         if(!oBySects.hasOwnProperty(sect)) oBySects[sect] = {};
//         oBySects[sect]["done"] = itemRef["sumBySect"][sect];
//         oBySects[sect]["all"] = sumSect[sect];
//     }
//     for(let sect in sumSect){
//         if(!oBySects.hasOwnProperty(sect)){
//             oBySects[sect] = {};
//             oBySects[sect]["done"] = 0;
//             oBySects[sect]["all"] = sumSect[sect];
//         }
//     }

//     let oByGroups = {};
//     for(let group in itemRef["sumByGroup"]){
//         if(!oByGroups.hasOwnProperty(group)) oByGroups[group] = {};
//         oByGroups[group]["done"] = itemRef["sumByGroup"][group];
//         oByGroups[group]["all"] = sumGroup[group];
//     }
//     for(let group in sumGroup){
//         if(!oByGroups.hasOwnProperty(group)){
//             oByGroups[group] = {};
//             oByGroups[group]["done"] = 0;
//             oByGroups[group]["all"] = sumGroup[group];
//         }
//     }
//     // console.log(oBySects,oByGroups);
 
//     // => working on generating element
//     // let eTop = my_create(undefined,undefined,["my-an-item","w3-padding-small","w3-animate-zoom","w3-col","l4","m6","s12"]);
//     let eTop = my_create(undefined,undefined,["my-an-item","w3-padding-small","w3-animate-zoom","my-div-for-sum-table"]);
//     let eTop2 = my_create(undefined,undefined,["w3-light-gray","w3-card-4","w3-round","w3-center"])
//     eTop.appendChild(eTop2)
//     // eTop2.appendChild(my_create("a",iSubject,["w3-block","w3-bottombar","w3-large","my-center"],{"width":"100%","minHeight":"72px"},{"href":iRefLink,"target":"_blank_"}))
//     let eTitle = my_create("div",undefined,["w3-bottombar"],{"position":"relative"});
//     eTitle.appendChild(my_create("a","ref: clickme.",["w3-block"],{"padding":0,"paddingTop":"4px","paddingLeft":"8px","text-align":"left"},{"href":iRefLink,"target":"_blank_"}))
//     eTitle.appendChild(my_create("div",iSubject,["w3-large","my-center"],{"width":"100%","minHeight":"72px"},{}))
//     eTitle.appendChild(my_create("div","<img src=''/>",["my-title-icon"],{},{}))
//     eTitle.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small","my-title-start"],{"font-family":"monospace"}))
//     eTitle.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small","my-title-end"],{"font-family":"monospace"}))
//     if(now_diff_days - total_days <= 0){
//         eTitle.getElementsByTagName("img")[0].src = ongoIcon;
//         eTitle.style.backgroundColor = "#191970";//MidnightBlue
//         eTitle.style.color = "white";
//     }else{
//         eTitle.getElementsByTagName("img")[0].src = pastIcon;
//     }

//     let eChild1 = my_create("div");//
//     eChild1.appendChild(my_create("div","ModBy:" + iLastUpdBy,["w3-small"],{"font-family":"monospace"}))
//     eChild1.appendChild(my_create("div","ModOn:" + my_datetime_fr_epoch(iLastUpdOn),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small"],{"font-family":"monospace"}))
//     let eChild2 = my_create("div",undefined,["w3-container"]);//
//     eChild2.appendChild(my_create("div",total_days+" day(s)"        ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_days_dsp+" day(s)" ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_percent_dsp + " %" ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))

//     let tblSect = my_create("table",undefined,["w3-table-all","w3-centered","w3-hoverable","w3-bordered","w3-animate-zoom"],{"width":"100%","fontSize":"8px"});
//     let tblSectTbd = my_create("tbody"); tblSect.appendChild(tblSectTbd);
//     let aoHeadSect = Object.keys(oBySects).sort();
//     let aoDoneSect = [];
//     let aoAllSect = [];
//     let aoPercSect = [];
//     for(let sect of aoHeadSect){
//         aoDoneSect.push(oBySects[sect]["done"]);
//         aoAllSect.push(oBySects[sect]["all"]);
//         let dspPerc = Number(100*Number(oBySects[sect]["done"])/Number(oBySects[sect]["all"])).toFixed(0);
//         // if(dspPerc === "100.0") dspPerc = "100";
//         if(dspPerc - 100 < 0) dspPerc = "0"+dspPerc;
//         aoPercSect.push(dspPerc);
//     }
//     tblSectTbd.appendChild(my_add_row(aoHeadSect,"th",{"padding":0,"border":"1px gray solid","font-family":"monospace"}));
//     tblSectTbd.appendChild(my_add_row(aoDoneSect,"td",{"padding":0,"border":"1px gray solid"}));
//     tblSectTbd.appendChild(my_add_row(aoAllSect,"td",{"padding":0,"border":"1px gray solid"}));
//     tblSectTbd.appendChild(my_add_row(aoPercSect,"td",{"padding":0,"border":"1px gray solid"}));

//     let tblGroup = my_create("table",undefined,["w3-table-all","w3-centered","w3-bordered","w3-hoverable","w3-animate-zoom","w3-margin-top"],{"width":"100%","fontSize":"8px"});
//     let tblGroupTbd = my_create("tbody");tblGroup.appendChild(tblGroupTbd);
//     let aoHeadGroup = Object.keys(oByGroups).sort();
//     let aoHeadGroupDsp = [];
//     let aoDoneGroup = [];
//     let aoAllGroup = [];
//     let aoPercGroup = [];
//     for(let group of aoHeadGroup){
//         let grpDsp = group.replace("Backend Design","BED");
//         grpDsp = grpDsp.replace("MiddleEnd Design","MED");
//         aoHeadGroupDsp.push(grpDsp);
//         aoDoneGroup.push(oByGroups[group]["done"]);
//         aoAllGroup.push(oByGroups[group]["all"]);
//         let dspPerc = Number(100*Number(oByGroups[group]["done"])/Number(oByGroups[group]["all"])).toFixed(0);
//         // if(dspPerc === "100.0") dspPerc = "100";
//         if(dspPerc - 100 < 0) dspPerc = "0"+dspPerc;
//         aoPercGroup.push(dspPerc);
//     }
//     tblGroupTbd.appendChild(my_add_row(aoHeadGroupDsp,"th",{"padding":0,"border":"1px gray solid","font-family":"monospace"}));
//     tblGroupTbd.appendChild(my_add_row(aoDoneGroup,"td",{"padding":0,"border":"1px gray solid"}));
//     tblGroupTbd.appendChild(my_add_row(aoAllGroup,"td",{"padding":0,"border":"1px gray solid"}));
//     tblGroupTbd.appendChild(my_add_row(aoPercGroup,"td",{"padding":0,"border":"1px gray solid"}));

//     // => modify the color for the 100% finished (to easily ignore)
//     let lastRow = tblSectTbd.getElementsByTagName("tr")[tblSectTbd.getElementsByTagName("tr").length-1];
//     for(let i=0;i<tblSectTbd.getElementsByTagName("th").length;i++){
//         if(Number(lastRow.getElementsByTagName("td")[i].innerText).toFixed(1) - 100 === 0){
//             for(let tmpR of tblSectTbd.getElementsByTagName("tr")){
//                 if(tmpR.getElementsByTagName("th").length !== 0){
//                     tmpR.getElementsByTagName("th")[i].style.color = "#ccc";
//                 }else{
//                     tmpR.getElementsByTagName("td")[i].style.color = "#ccc";
//                 }
//             }
//         }else{
//             // add behavior for clicking on header
//             let th = tblSectTbd.getElementsByTagName("th")[i];
//             th.classList.add("w3-hover-indigo")
//             th.setAttribute("onclick","dsp_ny_members_for_item('"+iSubject+"','section','"+aoHeadSect[i]+"')")
//         }
//     }

//     lastRow = tblGroupTbd.getElementsByTagName("tr")[tblGroupTbd.getElementsByTagName("tr").length-1];
//     for(let i=0;i<tblGroupTbd.getElementsByTagName("th").length;i++){
//         if(Number(lastRow.getElementsByTagName("td")[i].innerText).toFixed(1) - 100 === 0){
//             for(let tmpR of tblGroupTbd.getElementsByTagName("tr")){
//                 if(tmpR.getElementsByTagName("th").length !== 0){
//                     tmpR.getElementsByTagName("th")[i].style.color = "#ccc";
//                 }else{
//                     tmpR.getElementsByTagName("td")[i].style.color = "#ccc";
//                 }
//             }
//         }else{
//             // add behavior for clicking on header
//             let th = tblGroupTbd.getElementsByTagName("th")[i];
//             th.classList.add("w3-hover-indigo")
//             th.setAttribute("onclick","dsp_ny_members_for_item('"+iSubject+"','group','"+aoHeadGroup[i]+"')")
//         }
//     }
    
//     eTop2.appendChild(eTitle);
//     eTop2.appendChild(eChild1);
//     eTop2.appendChild(eChild2);
//     eTop2.appendChild(tblSect);
//     eTop2.appendChild(tblGroup);
//     return eTop;
// }

// function gen_sum_items_graph(itemRef,sumSect,sumGroup,userInfo){
//     // console.log("dbg:: gen_sum_items_tbl");
//     // => working on data
//     let iSubject = "an item subject";
//     let iRefLink = "an item subject";
//     let iStaDate = new Date(Date.now() - 2*24*3600*1000);
//     let iEndDate = new Date(Date.now() + 24*3600*1000);
//     let iLastUpdBy = undefined;
//     let iLastUpdOn = undefined;
//     // for some testing contextes
//     if(itemRef !== undefined){
//         iSubject = itemRef["item_subject"]; //"an item subject";
//         iRefLink = itemRef["item_link"]; //"an item subject";
//         iStaDate = new Date(itemRef["item_start"]); //new Date(Date.now() - 2*24*3600*1000);
//         iEndDate = new Date(itemRef["item_end"]); //new Date(Date.now() + 24*3600*1000);
//         iLastUpdBy = "-";if(itemRef.hasOwnProperty("_user_")) iLastUpdBy = itemRef["_user_"];
//         iLastUpdOn = "-";if(itemRef.hasOwnProperty("_modTime_")) iLastUpdOn = itemRef["_modTime_"];
//     }
//     let total_days =Number((iEndDate-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_days = Number((Date.now()-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_percent = Number(100*(Date.now()-iStaDate)/(iEndDate-iStaDate)).toFixed(1);
//     let now_diff_days_dsp = now_diff_days; if(now_diff_days - total_days > 0) now_diff_days_dsp = "Over " + Number(now_diff_days - total_days).toFixed(1);
//     let now_diff_percent_dsp = now_diff_percent;if(now_diff_percent - 100 > 0) now_diff_percent_dsp = "-";

//     if(now_diff_days - total_days > 0) {return null};//don't need to display the past

//     let oBySects = {};
//     for(let sect in itemRef["sumBySect"]){
//         // =>
//         if(!oBySects.hasOwnProperty("All")){
//             oBySects["All"] = {};
//             oBySects["All"]["done"] = 0;
//             oBySects["All"]["all"] = 0;
//         }
//         oBySects["All"]["done"] += itemRef["sumBySect"][sect];
//         oBySects["All"]["all"] += sumSect[sect];
//         // =>
//         if(!oBySects.hasOwnProperty(sect)) oBySects[sect] = {};
//         oBySects[sect]["done"] = itemRef["sumBySect"][sect];
//         oBySects[sect]["all"] = sumSect[sect];
//     }
//     for(let sect in sumSect){
//         if(!oBySects.hasOwnProperty(sect)){
//             // =>
//             if(!oBySects.hasOwnProperty("All")){
//                 oBySects["All"] = {};
//                 oBySects["All"]["done"] = 0;
//                 oBySects["All"]["all"] = 0;
//             }
//             oBySects["All"]["all"] += sumSect[sect];
//             // =>
//             oBySects[sect] = {};
//             oBySects[sect]["done"] = 0;
//             oBySects[sect]["all"] = sumSect[sect];
//         }
//     }

//     let oByGroups = {};
//     for(let group in itemRef["sumByGroup"]){
//         if(!oByGroups.hasOwnProperty(group)) oByGroups[group] = {};
//         oByGroups[group]["done"] = itemRef["sumByGroup"][group];
//         oByGroups[group]["all"] = sumGroup[group];
//     }
//     for(let group in sumGroup){
//         if(!oByGroups.hasOwnProperty(group)){
//             oByGroups[group] = {};
//             oByGroups[group]["done"] = 0;
//             oByGroups[group]["all"] = sumGroup[group];
//         }
//     }
//     // console.log(oBySects,oByGroups,userInfo);
 
//     // // => working on generating element
//     let eTop = my_create(undefined,undefined,["my-an-item","w3-padding-small","w3-animate-zoom","my-div-for-sum-table"]);
//     let eTop2 = my_create(undefined,undefined,["w3-light-gray","w3-card-4","w3-round","w3-center"])
//     eTop.appendChild(eTop2)
//     // eTop2.appendChild(my_create("a",iSubject,["w3-block","w3-bottombar","w3-large","my-center"],{"width":"100%","minHeight":"72px"},{"href":iRefLink,"target":"_blank_"}))
//     let eTitle = my_create("div",undefined,["w3-bottombar"],{"position":"relative"});
//     eTitle.appendChild(my_create("a","ref: clickme.",["w3-block"],{"padding":0,"paddingTop":"4px","paddingLeft":"8px","text-align":"left"},{"href":iRefLink,"target":"_blank_"}))
//     eTitle.appendChild(my_create("div",iSubject,["w3-large","my-center"],{"width":"100%","minHeight":"72px"},{}))
//     eTitle.appendChild(my_create("div","<img src=''/>",["my-title-icon"],{},{}))
//     eTitle.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small","my-title-start"],{"font-family":"monospace"}))
//     eTitle.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small","my-title-end"],{"font-family":"monospace"}))
//     if(now_diff_days - total_days <= 0){
//         eTitle.getElementsByTagName("img")[0].src = ongoIcon;
//         eTitle.style.backgroundColor = "#191970";//MidnightBlue
//         eTitle.style.color = "white";
//     }else{
//         eTitle.getElementsByTagName("img")[0].src = pastIcon;
//     }

//     let eChild1 = my_create("div");//
//     eChild1.appendChild(my_create("div","ModBy:" + iLastUpdBy,["w3-small"],{"font-family":"monospace"}))
//     eChild1.appendChild(my_create("div","ModOn:" + my_datetime_fr_epoch(iLastUpdOn),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small"],{"font-family":"monospace"}))
//     let eChild2 = my_create("div",undefined,["w3-container"]);//
//     eChild2.appendChild(my_create("div",total_days+" day(s)"        ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_days_dsp+" day(s)" ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_percent_dsp + " %" ,["my-center"],{"width":"33.33%","minHeight":"44px","float":"left"}))
   
//     eTop2.appendChild(eTitle);
//     eTop2.appendChild(eChild1);
//     eTop2.appendChild(eChild2);
//     // =>
//     if(userInfo[thisUser]["person_section"].hasOwnProperty("all")){
//         eTop2.appendChild(gen_pie_chart("33.33%","All",oBySects["All"]["all"],oBySects["All"]["done"]));
//         eTop2.appendChild(gen_pie_chart("33.33%",userInfo[thisUser]["person_section"],oBySects[userInfo[thisUser]["person_section"]]["all"],oBySects[userInfo[thisUser]["person_section"]]["done"],iSubject,"section"));
//         eTop2.appendChild(gen_pie_chart("33.33%",userInfo[thisUser]["person_group"],oByGroups[userInfo[thisUser]["person_group"]]["all"],oByGroups[userInfo[thisUser]["person_group"]]["done"],iSubject,"group"));
//     }
//     // =>
//     for(let sectN in oBySects){
//         if(sectN === "All") continue;
//         // if(sectN === userInfo[thisUser]["person_section"]) continue;
//         eTop2.appendChild(gen_pie_chart(
//             "25%",
//             sectN,
//             oBySects[sectN]["all"],
//             oBySects[sectN]["done"],
//             iSubject,"section"));
//     }
//     return eTop;
// }

// function gen_pie_chart(percent,title,numTotal,numDone,subject,sectOrGrp){
//     let aPieTop = my_create("div",undefined,["w3-white","w3-topbar","w3-border"],{"width":percent,"float":"left"});
//     let titleDsp = title;
//     titleDsp = titleDsp.replace(/Backend Design Division/,"BEDD");
//     titleDsp = titleDsp.replace(/Backend Design/,"BED");
//     titleDsp = titleDsp.replace(/MiddleEnd Design/,"MED");
//     let eTitle = my_create("p",titleDsp,[],{"padding":0});
//     if(title !== "All"){
//         eTitle.classList.add("w3-button");
//         eTitle.setAttribute("onclick","dsp_ny_members_for_item('"+subject+"','"+sectOrGrp+"','"+title   +"')")
//     }else{
//         eTitle.classList.add("w3-container");
//     }
//     let eInfo = my_create("div",undefined,[],{"padding":0,"margin":0})
//     let eInfo1 = my_create("span","All:"+numTotal,["w3-half","w3-small"])
//     let eInfo2 = my_create("span","NY:"+Number(numTotal-numDone),["w3-half","w3-small"],{"backgroundColor":"rgb(255, 99, 132)"})
//     eInfo.appendChild(eInfo1);
//     eInfo.appendChild(eInfo2);
//     let eCanvas = my_create("canvas");
//     const chartData = {
//         labels: [
//             'NotYet',
//             'Done'
//           ],
//           datasets: [{
//             label: 'My First Dataset',
//             data: [Number(numTotal-numDone).toFixed(0), numDone],
//             backgroundColor: [
//               'rgb(255, 99, 132)',
//               'rgb(54, 162, 235)',
//             ],
//             hoverOffset: 4
//           }]
//     };
//     let chartConfig = {
//         type:'pie',
//         data: chartData,
//         options: {
//             plugins : {
//                 legend : {
//                     display : false,
//                 },
//                 tooltip: {
//                     enabled : true
//                 }
//             }
//         }
//     };
//     let theChart = new Chart(eCanvas,chartConfig);
//     // =>
//     aPieTop.appendChild(eTitle);
//     aPieTop.appendChild(eInfo);
//     aPieTop.appendChild(eCanvas);
//     return aPieTop;
// }

// function gen_item_w_person(itemRef,personActionRef,mode){
//     // console.log("dbg:: gen_item_w_person");
//     if(mode === undefined) mode = "future_only";
//     // => working on data
//     let iSubject = "an item subject";
//     let iRefLink = "an item subject";
//     let iStaDate = new Date(Date.now() - 2*24*3600*1000);
//     let iEndDate = new Date(Date.now() + 24*3600*1000);
//     let iFinDate = null;
//     let iFinLastModBy = "-";
//     let iFinLastModOn = "-";
//     let iLastUpdBy = undefined;
//     let iLastUpdOn = undefined;
//     let stt = "NotYet";//NY, Done
//     // for some testing contextes
//     if(itemRef !== undefined){
//         iSubject = itemRef["item_subject"]; //"an item subject";
//         iRefLink = itemRef["item_link"]; //"an item subject";
//         iStaDate = new Date(itemRef["item_start"]); //new Date(Date.now() - 2*24*3600*1000);
//         iEndDate = new Date(itemRef["item_end"]); //new Date(Date.now() + 24*3600*1000);
//         iLastUpdBy = "-";if(itemRef.hasOwnProperty("_user_")) iLastUpdBy = itemRef["_user_"];
//         iLastUpdOn = "-";if(itemRef.hasOwnProperty("_modTime_")) iLastUpdOn = itemRef["_modTime_"];
//     }
//     if(iSubject === undefined) return null;//something wrong with the data, ignore to generate the element
//     if(personActionRef !== undefined){
//         for(let chkSubject in personActionRef){
//             if(chkSubject.replace(/[\s'"]/g,"") === iSubject.replace(/[\s'"]/g,"")){
//                 iFinDate = new Date(personActionRef[chkSubject]["fin_date"]);
//                 let dateOffset = "";
//                 if(personActionRef[chkSubject].hasOwnProperty("lastUpdBy")) iFinLastModBy = personActionRef[chkSubject]["lastUpdBy"];
//                 if(personActionRef[chkSubject].hasOwnProperty("lastUpdOn")) iFinLastModOn = personActionRef[chkSubject]["lastUpdOn"];
//                 if(personActionRef[chkSubject].hasOwnProperty("timeOffset"))   dateOffset = personActionRef[chkSubject]["timeOffset"];
//                 // console.log(chkSubject+ " vs "+iSubject, "matched", personActionRef[chkSubject],iFinDate)
//             }
//         }
//     }
//     let total_days =Number((iEndDate-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_days = Number((Date.now()-iStaDate)/(1000*3600*24)).toFixed(1);
//     let now_diff_percent = Number(100*(Date.now()-iStaDate)/(iEndDate-iStaDate)).toFixed(1);
//     let now_diff_days_dsp = "Past " + now_diff_days; if(now_diff_days - total_days > 0) now_diff_days_dsp = "Over " + Number(now_diff_days - total_days).toFixed(1);
//     let now_diff_percent_dsp = now_diff_percent;if(now_diff_percent - 100 > 0) now_diff_percent_dsp = "-";
//     let now_score = 0;
//     if(now_diff_percent <=30){
//         now_score = 3;
//     }else if(now_diff_percent <=60){
//         now_score = 2;
//     }else if(now_diff_percent <=100){
//         now_score = 1;
//     }else if(now_diff_percent > 100){
//         now_score = -1;
//     }else{}
//     if(iFinDate - iStaDate >= 0 && iEndDate - iFinDate >= 0){
//         stt = "Done";
//     }else if(iFinDate - iEndDate > 0) {
//         stt = "DoneLate";
//     }else{}
//     if(stt === "Done"){
//         // get score from the history
//         now_score = "0";
//         if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=30){
//             now_score = 3;
//         }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=60){
//             now_score = 2;
//         }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=100){
//             now_score = 1;
//         }else{}
//     }else if(stt === "DoneLate"){
//         now_score = 0.5;
//     }else{
//         // stt === NotYet
//         if(Date.now() - iEndDate <= 0) {
//             // now_score = 0; //only turn to 0 when calculating the real number
//         }else{}
//     }
//     // => scoring
//     if(stt === "Done" || now_diff_days - total_days > 0) theScore.innerText = Number(theScore.innerText)+now_score;
//     // console.log("stt="+stt+" now_score="+now_score+" score="+theScore.innerText)

//     if(stt === "NotYet") theWarn.innerText = Number(theWarn.innerText)+1
    
//     // scoping the displaying of items
//     if(mode === "future_only"){
//         if(now_diff_days - total_days > 0) return null;
//     }else if(mode === "warn"){
//         if(stt !== "NotYet") return null;
//     }else{}

//     // => working on generating element
//     let eTop = my_create(undefined,undefined,["w3-padding-small","w3-animate-zoom","w3-col","l3","m4","s6"]);
//     let eTop2 = my_create(undefined,undefined,["w3-light-gray","w3-card-4","w3-round","w3-center","w3-rightbar","w3-topbar"])
//     eTop.appendChild(eTop2)
//     // eTop2.appendChild(my_create("a",iSubject,["w3-block","w3-bottombar","w3-large","my-center"],{"width":"100%","minHeight":"72px"},{"href":iRefLink,"target":"_blank_"}))
//     let eTitle = my_create("div",undefined,["w3-bottombar"],{"position":"relative"});
//     eTitle.appendChild(my_create("a","ref: clickme.",["w3-block"],{"padding":0,"paddingTop":"4px","paddingLeft":"8px","text-align":"left"},{"href":iRefLink,"target":"_blank_"}))
//     eTitle.appendChild(my_create("div",iSubject,["w3-large","my-center"],{"width":"100%","minHeight":"72px"},{}))
//     eTitle.appendChild(my_create("div","<img src=''/>",["my-title-icon"],{},{}))
//     eTitle.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small","my-title-start"],{"font-family":"monospace"}))
//     eTitle.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small","my-title-end"],{"font-family":"monospace"}))
//     if(now_diff_days - total_days <= 0){
//         eTitle.getElementsByTagName("img")[0].src = ongoIcon;
//         eTitle.style.backgroundColor = "#191970";//MidnightBlue
//         eTitle.style.color = "white";
//     }else{
//         eTitle.getElementsByTagName("img")[0].src = pastIcon;
//     }
//     // let eChild1 = my_create("div");//
//     // eChild1.appendChild(my_create("div","ModBy:" + iLastUpdBy,["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","ModOn:" + my_datetime_fr_epoch(iLastUpdOn),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","Start:" + my_datetime(iStaDate),["w3-small"],{"font-family":"monospace"}))
//     // eChild1.appendChild(my_create("div","End  :" + my_datetime(iEndDate),["w3-small"],{"font-family":"monospace"}))
//     let eChild2 = my_create("div",undefined,["w3-container"]);//
//     eChild2.appendChild(my_create("div",total_days+" day(s)"        ,["my-center"] ,{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_days_dsp+" day(s)" ,["my-center"] ,{"width":"33.33%","minHeight":"44px","float":"left"}))
//     eChild2.appendChild(my_create("div",now_diff_percent_dsp + " %" ,["my-center"] ,{"width":"33.33%","minHeight":"44px","float":"left"}))
//     let eChild3 = my_create("div",undefined,["w3-topbar"]);//
//     if(stt === "Done"){
//         eChild3.appendChild(my_create("div",stt + "<span> on "+aoMonth[iFinDate.getMonth()]+"/"+iFinDate.getDate()+"</span>",["w3-show-inline-block","w3-padding"]))
//     }else if(stt === "DoneLate"){
//         eChild3.appendChild(my_create("div",stt + "<span> on "+aoMonth[iFinDate.getMonth()]+"/"+iFinDate.getDate()+"</span>",["w3-show-inline-block","w3-padding"]))
//     }else{
//         eChild3.appendChild(my_create("div",stt,["w3-button","w3-indigo","w3-shadow"],{},{"onclick":"dsp_user_action_on_item(this)"}))
//     }
//     eChild3.appendChild(my_create("div",now_score,["w3-container","w3-show-inline-block"],{"width":"16px"}))

//     // // => some colors for over-due
//     // if(now_diff_days - total_days < -1){
//     //     eTop2.classList.add("w3-border-light-green");
//     // }else if(now_diff_days - total_days < 0){
//     //     eTop2.classList.add("w3-border-khaki");
//     // }else{
//     //     if(! stt.match("Done")) eTop2.classList.add("w3-border-red");
//     // }
    
//     eTop2.appendChild(eTitle);
//     // eTop2.appendChild(eChild1);
//     eTop2.appendChild(eChild2);
//     eTop2.appendChild(eChild3);
//     return eTop;
// }

// function calc_score_of_user(listItemRef,personActionRef){
//     // console.log("dbg:: calc_score_of_user");
//     let totalScore = 0;
//     // => working on data
//     for(let itemRef of listItemRef){
//         // => working on data
//         let iSubject = "an item subject";
//         let iStaDate = new Date(Date.now() - 2*24*3600*1000);
//         let iEndDate = new Date(Date.now() + 24*3600*1000);
//         let iFinDate = null;
//         let stt = "NotYet";//NY, Done
//         // for some testing contextes
//         if(itemRef !== undefined){
//             iSubject = itemRef["item_subject"]; //"an item subject";
//             iStaDate = new Date(itemRef["item_start"]); //new Date(Date.now() - 2*24*3600*1000);
//             iEndDate = new Date(itemRef["item_end"]); //new Date(Date.now() + 24*3600*1000);
//         }
//         if(personActionRef !== undefined){
//             for(let chkSubject in personActionRef){
//                 if(chkSubject.replace(/[\s'"]/g,"") === iSubject.replace(/[\s'"]/g,"")){
//                     iFinDate = new Date(personActionRef[chkSubject]["fin_date"]);
//                     // console.log(chkSubject+ " vs "+iSubject, "matched", personActionRef[chkSubject],iFinDate)
//                 }
//             }
//         }
//         let total_days =Number((iEndDate-iStaDate)/(1000*3600*24)).toFixed(1);
//         let now_diff_days = Number((Date.now()-iStaDate)/(1000*3600*24)).toFixed(1);
//         let now_diff_percent = Number(100*(Date.now()-iStaDate)/(iEndDate-iStaDate)).toFixed(1);
//         let now_score = 0;
//         if(now_diff_percent <=30){
//             now_score = 3;
//         }else if(now_diff_percent <=60){
//             now_score = 2;
//         }else if(now_diff_percent <=100){
//             now_score = 1;
//         }else if(now_diff_percent > 100){
//             now_score = -1;
//         }else{}
//         if(iFinDate - iStaDate >= 0 && iEndDate - iFinDate >= 0){
//             stt = "Done";
//         }else if(iFinDate - iEndDate > 0) {
//             stt = "DoneLate";
//         }else{}
//         if(stt === "Done"){
//             // get score from the history
//             now_score = "0";
//             if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=30){
//                 now_score = 3;
//             }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=60){
//                 now_score = 2;
//             }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=100){
//                 now_score = 1;
//             }else{}
//         }else if(stt === "DoneLate"){
//             now_score = 0.5;
//         }else{
//             // stt === NotYet
//             if(Date.now() - iEndDate <= 0) {
//                 now_score = 0; //only turn to 0 when calculating the real number
//             }else{}
//         }
//         // => scoring
//         if(stt === "Done" || now_diff_days - total_days > 0) totalScore += now_score;
//         // =>
//     }
//     return totalScore;
// }

// function gen_tbl_scoring(listItemRef,personActionRef){
//     // console.log("dbg:: gen_tbl_scoring");
//     // => working on generating element
//     let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-small","w3-animate-zoom"],{"width":"100%"});
//     let eTbd = my_create("tbody");
//     eTbd.appendChild(my_add_row(["Subject","Status","Last Update On","Start Date","End Date","Finished on","Score"],"th"));
//     // => working on data
//     for(let itemRef of listItemRef){
//         // => working on data
//         let iSubject = "an item subject";
//         let iRefLink = "an item subject";
//         let iStaDate = new Date(Date.now() - 2*24*3600*1000);
//         let iEndDate = new Date(Date.now() + 24*3600*1000);
//         let iFinDate = null;
//         let iFinLastModBy = "-";
//         let iFinLastModOn = "-";
//         let stt = "NotYet";//NY, Done
//         // for some testing contextes
//         if(itemRef !== undefined){
//             iSubject = itemRef["item_subject"]; //"an item subject";
//             iRefLink = itemRef["item_link"]; //"an item subject";
//             iStaDate = new Date(itemRef["item_start"]); //new Date(Date.now() - 2*24*3600*1000);
//             iEndDate = new Date(itemRef["item_end"]); //new Date(Date.now() + 24*3600*1000);
//         }
//         if(personActionRef !== undefined){
//             for(let chkSubject in personActionRef){
//                 if(chkSubject.replace(/[\s'"]/g,"") === iSubject.replace(/[\s'"]/g,"")){
//                     iFinDate = new Date(personActionRef[chkSubject]["fin_date"]);
//                     let dateOffset = "";
//                     if(personActionRef[chkSubject].hasOwnProperty("lastUpdBy")) iFinLastModBy = personActionRef[chkSubject]["lastUpdBy"];
//                     if(personActionRef[chkSubject].hasOwnProperty("lastUpdOn")) iFinLastModOn = personActionRef[chkSubject]["lastUpdOn"];
//                     if(personActionRef[chkSubject].hasOwnProperty("timeOffset"))   dateOffset = personActionRef[chkSubject]["timeOffset"];
//                     // console.log(chkSubject+ " vs "+iSubject, "matched", personActionRef[chkSubject],iFinDate)
//                 }
//             }
//         }
//         let total_days =Number((iEndDate-iStaDate)/(1000*3600*24)).toFixed(1);
//         let now_diff_days = Number((Date.now()-iStaDate)/(1000*3600*24)).toFixed(1);
//         let now_diff_percent = Number(100*(Date.now()-iStaDate)/(iEndDate-iStaDate)).toFixed(1);
//         let now_score = 0;
//         if(now_diff_percent <=30){
//             now_score = 3;
//         }else if(now_diff_percent <=60){
//             now_score = 2;
//         }else if(now_diff_percent <=100){
//             now_score = 1;
//         }else if(now_diff_percent > 100){
//             now_score = -1;
//         }else{}
//         if(iFinDate - iStaDate >= 0 && iEndDate - iFinDate >= 0){
//             stt = "Done";
//         }else if(iFinDate - iEndDate > 0) {
//             stt = "DoneLate";
//         }else{}
//         if(stt === "Done"){
//             // get score from the history
//             now_score = "0";
//             if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=30){
//                 now_score = 3;
//             }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=60){
//                 now_score = 2;
//             }else if(Number(100*(iFinDate - iStaDate)/(iEndDate - iStaDate)) <=100){
//                 now_score = 1;
//             }else{}
//         }else if(stt === "DoneLate"){
//             now_score = 0.5;
//         }else{
//             // stt === NotYet
//             if(Date.now() - iEndDate <= 0) {
//                 now_score = 0; //only turn to 0 when calculating the real number
//             }else{}
//         }
//         // => scoring
//         if(stt === "Done" || now_diff_days - total_days > 0) theScore.innerText = Number(theScore.innerText)+now_score;
//         if(stt === "NotYet") theWarn.innerText = Number(theWarn.innerText)+1
//         // =>
//         eTbd.appendChild(my_add_row([iSubject,stt,my_datetime_fr_epoch(iFinLastModOn),my_datetime(iStaDate),my_datetime(iEndDate),my_datetime(iFinDate),now_score]));
//     }
//     eTbl.appendChild(eTbd); 
//     return eTbl;
// }

// function gen_people_accounts(objData,objDataItems){
//     let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-small","w3-animate-zoom"],{"width":"100%"});
//     let eTbd = my_create("tbody");
//     eTbd.appendChild(my_add_row(["Account","Name","Section","group","moreInfo","del?","lastModBy","lastModOn","score"],"th"));
//     for(let tmpE of eTbd.getElementsByTagName("tr")[eTbd.getElementsByTagName("tr").length-1].getElementsByTagName("th")){
//         tmpE.innerHTML = tmpE.innerHTML+"<i class=\"bi bi-shuffle\"></i>";
//         tmpE.setAttribute("onclick","sortTblByHeader(this)");
//     }
//     // => working on data
//     for(let email in objData){
//         let name = objData[email]["person_name"];
//         let sect = objData[email]["person_section"];
//         let group = objData[email]["person_group"];
//         let moreInfo = objData[email]["person_moreInfo"];
//         let flgDel = "-";if(objData[email].hasOwnProperty("_delete_")) flgDel = objData[email]["_delete_"];
//         let lastModBy = ""; if(objData[email].hasOwnProperty("_user_")) lastModBy = objData[email]["_user_"];
//         let lastModOn = objData[email]["_modTime_"];
//         let score = "-";
//         if(objDataItems !== undefined){
//             score = calc_score_of_user(objDataItems,retrieve_user_action(email))
//         }
//         eTbd.appendChild(my_add_row([email,name,sect,group,moreInfo,flgDel,lastModBy,my_datetime_fr_epoch(lastModOn),score]));
//     }
//     eTbl.appendChild(eTbd); 
//     //
//     return eTbl;
// }

// function dsp_all_items(mode){
//     // => AJAX to get info
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             remove_effect();
//             // =>
//             let objData = [];
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // 
//             while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//             while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//             hide_left();//if any
//             // reset warning and scoring
//             theWarn.innerText = 0;
//             theScore.innerText = 100;
//             // sorting by the end date
//             objData.sort(function(a,b){
//                 let x = new Date(a["item_end"]);
//                 let y = new Date(b["item_end"]);
//                 return y - x;
//             })
//             let personActionRef = retrieve_user_action();
//             for(let tmpO of objData){
//                 let aE = gen_item_w_person(tmpO,personActionRef,mode);
//                 if(aE !== null) mainSide.appendChild(aE);
//             }
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_items.php",true);
//     xmlhttp.send();
//     return;
// }

// function dsp_sum_all_items(type){
//     if(type === undefined) type = "tables";
//     if(type !== "tables" && type !== "graphs") type = "tables";
//     // => AJAX to get info
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             remove_effect();
//             // =>
//             let objData = {};
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // 
//             // console.log(objData)
//             while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//             // sorting by the end date
//             objData["data"].sort(function(a,b){
//                 let x = new Date(a["item_end"]);
//                 let y = new Date(b["item_end"]);
//                 return y - x;
//             })
//             for(let tmpO of objData["data"]){
//                 if(type === "tables"){
//                     let aE = null;
//                     aE = gen_sum_items_tbl(tmpO,objData["sumSect"],objData["sumGroup"]);
//                     if(aE !== null) mainSide.appendChild(aE);
//                 }else if(type === "graphs"){
//                     // retrieve user info to scope the instant charts (3 charts: 1 for all, 1 for section, 1 for group) displaying
//                     let xmlhttp = new XMLHttpRequest();
//                     xmlhttp.onreadystatechange = function(){
//                         if(this.readyState == 4 && this.status == 200){
//                             // =>
//                             let userData = {};
//                             try {userData = JSON.parse(this.responseText);}
//                             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//                             //
//                             if(Object.keys(userData).length > 0) {
//                                 // =>
//                                 let aE = null;
//                                 aE = gen_sum_items_graph(tmpO,objData["sumSect"],objData["sumGroup"],userData);
//                                 if(aE !== null) mainSide.appendChild(aE);
//                             }else{}
//                         }else{}
//                     }
//                     xmlhttp.open("GET","retrieve_users.php?q="+thisUser,true);
//                     xmlhttp.send();
//                 }else{}
//             }
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_items_for_graphs.php",true);
//     xmlhttp.send();
//     return;
// }

// function dsp_ny_members_for_item(subject,sectOrGrp,sectOrGrpName){
//     //
//     // console.log("dsp_NY: ",subject,sectOrGrp,sectOrGrpName);
//     // => AJAX to get info
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             remove_effect();
//             hide_left();
//             // =>
//             let objData = {};
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // 
//             // console.log(objData)
//             while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//             let aE = gen_list_NY_members_for_item(objData);
//             if(aE !== null) leftSide.appendChild(aE);
//             show_left();
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_NY_members_for_item.php?subject="+encodeURIComponent(subject)+"&type="+sectOrGrp+"&name="+sectOrGrpName,true);
//     xmlhttp.send();
//     return;
// }

// function dsp_tbl_scoring(){
//         //
//     // => AJAX to get info
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             remove_effect();
//             // =>
//             let objData = [];
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // 
//             while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//             // reset warning and scoring
//             theWarn.innerText = 0;
//             theScore.innerText = 100;
//             // sorting by the end date
//             objData.sort(function(a,b){
//                 let x = new Date(a["item_end"]);
//                 let y = new Date(b["item_end"]);
//                 return y - x;
//             })
//             let personActionRef = retrieve_user_action();
//             mainSide.appendChild(gen_tbl_scoring(objData,personActionRef));
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_items.php",true);
//     xmlhttp.send();
//     return;
// }

// function dsp_all_users(){
//     // => display all users and their scores => AJAX 2 times x number of users => will be a hard work
//     // => AJAX 1 to get list of items registered
//     let xmlhttp1 = new XMLHttpRequest();
//     xmlhttp1.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             remove_effect();
//             let objDataItems = [];
//             try {objDataItems = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             dsp_notification("Retrieved list of items: done","Info");
//             // => create a progress div
//             let eProgressTop = my_create("i",undefined,["bi","bi-hourglass-split","w3-spin","w3-xxlarge"],{"position":"fixed","top":"5px","left":"5px"},{"id":"my_progress"})
//             document.getElementsByTagName("body")[0].appendChild(eProgressTop);
//             // => AJAX 2 to get info of all users
//             let xmlhttp = new XMLHttpRequest();
//             xmlhttp.onreadystatechange = function(){
//                 if(this.readyState == 4 && this.status == 200){
//                     // =>
//                     let objDataUsers = {};
//                     try {objDataUsers = JSON.parse(this.responseText);}
//                     catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//                     dsp_notification("Retrieved list of users: done","Info");
//                     // 
//                     while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//                     // gen table of accounts
//                     mainSide.appendChild(gen_people_accounts(objDataUsers,objDataItems));
//                     //
//                     if(document.getElementById("my_progress") !== undefined) document.getElementById("my_progress").remove();
//                     dsp_notification("Generated table of users and scores.","Info")
//                 }else{}
//             }
//             xmlhttp.open("GET","retrieve_users.php",true);
//             xmlhttp.send();
//             dsp_notification("Will take time, please be patient ...", "Warn");
//         }
//     }
//     xmlhttp1.open("GET","retrieve_items.php",true);
//     xmlhttp1.send();
//     return;
// }

// function retrieve_user_action(tgtUser){
//     //
//     if(tgtUser === undefined) tgtUser = thisUser;
//     let objData = {};
//     // => AJAX to get info => NOT AJAX
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET","retrieve_user_action.php?q="+tgtUser,false);
//     // dsp_notification("Retrieving user action: sent.","Info");
//     xmlhttp.send();
//     // dsp_notification("Retrieving user action: received.");
//     try {objData = JSON.parse(xmlhttp.responseText);}
//     catch(err){ dsp_notification(err,"Error");dsp_notification(xmlhttp.responseText,"Error");return {};}
//     return objData;
// }

// // ====================================
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// function init_user(){
//     let user = getCookie("userEmail");
//     if (user === "")  user = "Somebody@nowhere.com";
//     dsp_user_info_from_email(user);
//     dsp_sum_all_items("graphs");
//     // dsp_all_items("all");
// }

// // function checkCookie() {
// //     let user = getCookie("userEmail");
// //     if (user != "") {
// //     } else {
// //         user = prompt("Hi! Who are you?! :", "");
// //         if (user != "" && user != null) {
// //             setCookie("userEmail", user, 1);
// //         } else {
// //             user = "Somebody@nowhere.com";
// //         }
// //     }
// //     // update wherever needed
// //     document.getElementById("userDisplay").innerHTML = user ;
// // }

// function dsp_user_info_from_email(email){
//     if(email === undefined) return 0;
//     if(email === "") return 0;
    
//     // AJAX retrieving info from list of registered users
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // =>
//             remove_effect();
//             let objData = {};
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             // 
//             while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//             //
//             if(Object.keys(objData).length > 0) {
//                 // update the user info
//                 // console.log(objData)
//                 let nameStr = objData[email]["person_name"];
//                 let title = "User-normal";if(objData[email].hasOwnProperty("person_title")) title = objData[email]["person_title"];
//                 let section = "Section";if(objData[email].hasOwnProperty("person_section")) section = objData[email]["person_section"];
//                 let group = "Group";if(objData[email].hasOwnProperty("person_group")) group = objData[email]["person_group"];
//                 let OTPTicker = getCookie("userEmailOTP");
//                 let eName = userDisplay.getElementsByTagName("span")[0];
//                 let eEmail = userDisplay.getElementsByTagName("span")[1];
//                 let eTitle = userDisplay.getElementsByTagName("span")[2];
//                 let eShield = userDisplay.getElementsByTagName("i")[0];
//                 let eSectGrp = userDisplay.getElementsByTagName("span")[3];
//                 // =>
//                 let fname = nameStr.split(/\s+/)[nameStr.split(/\s+/).length-1];
//                 let lname = nameStr.split(/\s+/)[0];
//                 // console.log("fname="+fname,"lname="+lname)
//                 let dspName =  "";
//                 if( lname !== undefined) dspName += lname;
//                 if( fname !== undefined && fname !== lname) dspName += " " + fname;
//                 // =>
//                 eName.innerText = dspName;
//                 eEmail.innerText = email;
//                 eTitle.innerText = title;
//                 if(title !== "Admin" && title !== "Moderator"){
//                     for(let tmpE of myMenu2.getElementsByTagName("div")){
//                         if(String(tmpE.getAttribute("onclick")).search(/dsp_add_item/)>-1) tmpE.style.display = "none";
//                         if(String(tmpE.getAttribute("onclick")).search(/dsp_all_users/)>-1) tmpE.style.display = "none";
//                     }
//                 }
//                 eSectGrp.innerText = section + "/" + group;
//                 if(OTPTicker === "OK"){
//                     if(eShield.classList.contains("my-login-tick-ng")){
//                         eShield.classList.remove("my-login-tick-ng");
//                         eShield.classList.remove("bi-shield-x");
//                         eShield.classList.add("my-login-tick-ok");
//                         eShield.classList.add("bi-shield-check");
//                     }
//                 }else{
//                     if(eShield.classList.contains("my-login-tick-ok")){
//                         eShield.classList.remove("my-login-tick-ok");
//                         eShield.classList.remove("bi-shield-check");
//                         eShield.classList.add("my-login-tick-ng");
//                         eShield.classList.add("bi-shield-x");
//                     }
//                 }
//                 thisUser = email;
//                 // =>
//                 dsp_all_items("all");
//             }else{
//                 // new account?!
//                 dsp_notification("New/Deleted account, please register first.")
//             }
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_users.php?q="+email,true);
//     xmlhttp.send();
//     return;
//     //
// }

// function update_user_info_in_adding_form(email,tgtForm){
//     if(tgtForm === undefined) tgtForm = gen_add_person_form();
//     if(email === undefined) email = thisUser;
//     // => change the way buttons' looks
//     let btnImport = null;
//     let btnDelete = null;
//     let btnRecover = null;
//     for(let tmpBtn of tgtForm.getElementsByTagName("div")){
//         if(!tmpBtn.classList.contains("w3-button")) continue;
//         tmpBtn.style.display = "none";
//         if(tmpBtn.getAttribute("onclick").match("import_user_info")){
//             btnImport = tmpBtn;
//         }else if(tmpBtn.getAttribute("onclick").match("delete_user_info")){
//             btnDelete = tmpBtn;
//         }else if(tmpBtn.getAttribute("onclick").match("recover_user_info")){
//             btnRecover = tmpBtn;
//         }else{}
//     }
//     // =>
//     if(email.search(/\S+@\S+\.com/)) return 0;
//     // AJAX getting info of the user
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // =>
//             remove_effect();
//             let objData = {};
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             //
//             if(Object.keys(objData).length > 0) {
//                 // console.log(objData)
//                 for(let eInp of tgtForm.getElementsByTagName("input")){
//                     for(let keyw in objData[email]){
//                         if(objData[email][keyw] === undefined) continue;
//                         if(eInp.name === keyw) eInp.value = objData[email][keyw];
//                     }
//                 }
//                 if(objData[email].hasOwnProperty("_delete_") && objData[email]["_delete_"]){
//                     dsp_notification("Account deleted, recover?!")
//                     btnRecover.style.display = "";
//                 }else{
//                     btnImport.style.display = ""; btnImport.innerText = "Modify";
//                     if(email !== thisUser) btnDelete.style.display = "";
//                 }
//             }else{
//                 // new account?!
//                 dsp_notification("User "+email+" not found, create new?!")
//                 // => update tgtForm the buttons
//                 btnImport.style.display = "";
//                 btnImport.innerText = "New";
//             }
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_users.php?q="+email,true);
//     xmlhttp.send();
//     return 1;
// }

// function update_item_info_in_adding_form(subject,tgtForm){
//     if(tgtForm === undefined) return 0;
//     if(subject === undefined) return 0;
//     if(subject === "") return 0;
//     // AJAX getting info of the user
//     let xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             // =>
//             remove_effect();
//             let objData = [];
//             try {objData = JSON.parse(this.responseText);}
//             catch(err){ dsp_notification(err,"Error");dsp_notification(this.responseText,"Error");return;}
//             //
//             // console.log(objData);
//             if(objData.length > 0) {
//                 for(let eInp of tgtForm.getElementsByTagName("input")){
//                     for(let keyw in objData[objData.length-1]){
//                         if(objData[objData.length-1][keyw] === undefined) continue;
//                         if(eInp.name === keyw) eInp.value = objData[objData.length-1][keyw];
//                     }
//                 }
//                 for(let eInp of tgtForm.getElementsByTagName("textarea")){
//                     for(let keyw in objData[objData.length-1]){
//                         if(objData[objData.length-1][keyw] === undefined) continue;
//                         if(eInp.name === keyw) eInp.value = objData[objData.length-1][keyw];
//                     }
//                 }
//             }else{
//                 // new account?!
//                 dsp_notification("item not found, make new.")
//             }
//         }else{}
//     }
//     xmlhttp.open("GET","retrieve_items.php?q="+encodeURIComponent(subject),true);
//     xmlhttp.send();
//     return 1;
// }

// function check_email_input(field){
//     if(field.value === undefined) return 0;
//     if(field.value === ""){
//         for(let tmpE of field.parentNode.getElementsByTagName("div")){
//             if(tmpE.classList.contains("w3-button")){
//                 if(!tmpE.classList.contains("w3-opacity")) tmpE.classList.add("w3-opacity")
//             }
//         }
//         return 0;
//     }else{}
//     if(! field.value.match(/.*@.*\.com/)) return 0;
//     for(let tmpE of field.parentNode.getElementsByTagName("div")){
//         if(tmpE.classList.contains("w3-button")){
//             if(tmpE.classList.contains("w3-opacity")) tmpE.classList.remove("w3-opacity");
//         }
//     }
//     return 1;
//     // console.log("got email: ", field.value)
// }

// function check_OTP_input(field){
//     if(field.value === undefined) return 0;
//     let flgChkEmail = 0;
//     for(let tmpE of field.parentNode.getElementsByTagName("input")){
//         if(tmpE.name === "login_email"){
//             flgChkEmail = check_email_input(tmpE);
//         }
//     }
//     if(flgChkEmail === 0) return 0;
//     if(field.value === ""){
//         for(let tmpE of field.parentNode.getElementsByTagName("div")){
//             if(tmpE.classList.contains("w3-button")){
//                 tmpE.innerText = "getOTP";
//             }
//         }
//         return 0;
//     }else{
//         for(let tmpE of field.parentNode.getElementsByTagName("div")){
//             if(tmpE.classList.contains("w3-button")){
//                 tmpE.innerText = "Login";
//             }
//         }
//         return 1;
//     }
//     // console.log("got OTP: ",field.value)
//     return 1;
// }

// function remove_effect(){
//     if(document.getElementById("effectDsp") !== null) document.getElementById("effectDsp").remove();
// }
// function clear_all(){
//     // => duel with leftSide
//     while(leftSide.childNodes.length > 0) {leftSide.lastChild.remove()}
//     hide_left();
//     // => remove child elements in mainSide
//     let max = mainSide.childNodes.length;
//     for(let i=max-1;i>=0;i--){
//         setTimeout(function(){
//             let leftP =  Math.random()*100;
//             let topP =  Math.random()*100;
//             mainSide.childNodes[i].style.position = "absolute";
//             mainSide.childNodes[i].style.left = leftP + "%";
//             mainSide.childNodes[i].style.top = topP + "%";
//             mainSide.childNodes[i].style.animationName = "my-left-out";
//             // mainSide.childNodes[i].style.animationName = "my-notifying";
//             mainSide.childNodes[i].style.animationDuration = "1s";
//             setTimeout(function(){
//                 mainSide.childNodes[i].remove();
//             },1000);
//         },200*(max-i))
//     }
//     // while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
//     // => make effect (snow flake)
//     if(document.getElementById("effectDsp") === null){
//         // => generate a snow flake?!
//         let snowDivTop = document.createElement("div");
//         snowDivTop.setAttribute("id","effectDsp");
//         // let snowDiv = document.createElement("div");
//         // snowDivTop.appendChild(snowDiv);
//         // snowDiv.classList.add("snowflake");
//         let snow_density = 300;
//         // =>//spawn the css for snow flakes, 200 means density of flakes
//         spawnSnowCSS(snow_density);
//         // =>//spawn the snow flake div.
//         snow_density -= 1;
//         for (let x = 0; x < snow_density; x++) {
//             let board = document.createElement('div');
//             board.className = "snowflake";
//             snowDivTop.appendChild(board);
//         }
//         document.getElementsByTagName("body")[0].insertBefore(snowDivTop,document.getElementsByTagName("body")[0].childNodes[0]);
//     }
// }

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


////// TODO
