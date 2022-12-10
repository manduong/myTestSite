function dsp_login_form(byOTP){
    if(byOTP === undefined || byOTP === "" || byOTP === false || byOTP === 0){
        byOTP = "";
    }else{
        byOTP = "OTP";
    }
    let tgtSrc = "./src_modules/login/rtn_data_login_form.php";
    my_ajax_get(tgtSrc,[{"mode":byOTP}],function(rtnO){
        // let tgtForm = gen_login_form(rtnO);
        let tgtForm  = my_gen_form(rtnO,act_after_login_submission);
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
}

function my_logout(){
    my_ajax_get("./src_modules/login/logout.php",[{}],function(rtnO){
        location.reload();
    });
}

function act_after_login_submission(tgtE,rtnO){
    // this is called after login clicking, received data/status from server
    console.log(rtnO)
    let form_return_info = null;
    if(tgtE.getElementsByClassName("form_return_info").length > 0){
        form_return_info = tgtE.getElementsByClassName("form_return_info")[0];
    }
    if(rtnO.hasOwnProperty("OTP")){
        // the form is in OTP method
        if(rtnO["OTP"].search(/^NG/)>-1){
            if(form_return_info !== null){
                form_return_info.style.color = "red";
                form_return_info.innerText = rtnO["OTP"];
            }else{}
        }else if(rtnO["OTP"] === "Sent"){
            if(form_return_info !== null){
                form_return_info.style.color = "initial";
                form_return_info.innerText = "OTP sent, 5min retention from " + (new Date()).toString();
            }else{}
        }else if(rtnO["OTP"] === "OK"){
            if(form_return_info !== null){
                form_return_info.style.color = "initial";
                form_return_info.innerText = "Logged-in by OTP OK at " + (new Date()).toString();
            }else{}
            // update the header of user
            // upUserDisplay(rtnO["user_info"]);
            upd_user_info();
            // close form
            tgtE.remove();
            // => reload the page
            console.log(rtnO)
            if(rtnO.hasOwnProperty("user_info") 
            && rtnO["user_info"].hasOwnProperty("login_email")
            && rtnO["user_info"]["login_email"] !== null 
            && rtnO["user_info"]["login_email"] !== ""
            ) location.reload();
        }else{
            // unknown return message
        }
    }else{
        // login by password
        // console.log(rtnO)
        if(rtnO["rtnCode"] === "NG: status='NotRegYet'"){
            if(form_return_info !== null) {
                form_return_info.style.color = "red";
                form_return_info.innerText = rtnO["rtnCode"];
            }
            // => enable the premitive for sign-ing up
            let ePsw2 = null;
            let eBtn = null;
            for(let tmpv of (tgtE.getElementsByTagName("button"))){
                if(tmpv.type === "submit") eBtn = tmpv;
            }
            for(let tmpv of (tgtE.getElementsByTagName("input"))){
                if(tmpv.name === "login_password_repeated") ePsw2 = tmpv;
            }
            ePsw2.previousSibling.style.display = "block";
            ePsw2.style.display = "block";
            ePsw2.disabled = false;
            eBtn.innerText = "SignUp";

            // =>
        }else if(rtnO["rtnCode"].search(/^OK/) > -1){
            dsp_notification("Login succeeeded.")
            tgtE.remove();
            // upd_user_info();//manual load user-info
            location.reload();
        }else{
            if(form_return_info !== null) {
                form_return_info.style.color = "red";
                form_return_info.innerText = rtnO["rtnCode"];
            }
        }
    }
}

function act_on_change_email_input(e){
    let form = e.parentNode;
    let submitBtn = null;
    for(let tmpv of (form.getElementsByTagName("input"),form.getElementsByTagName("button"))){
        if(tmpv.type === "submit"){
            submitBtn = tmpv;
        }
    }
    e.value = e.value.trim();
    e.style.color = "initial";
    if(!e.value.match(/^\w+\.\w+\.\w+@renesas.com$/)){
        e.style.color = 'red';
        submitBtn.disabled = true;
    }else{
        submitBtn.disabled = false;
    }
}

function act_on_change_password_input(e){
    let form = e.parentNode;
    let submitBtn = null;
    for(let tmpv of (form.getElementsByTagName("input"),form.getElementsByTagName("button"))){
        if(tmpv.type === "submit"){
            submitBtn = tmpv;
        }
    }
    if(e.value === ""){
        submitBtn.disabled = true;
    }else{
        submitBtn.disabled = false;
    }
}

function act_on_change_password_repeated_input(e){
    let form = e.parentNode;
    let submitBtn = null;
    for(let tmpv of (form.getElementsByTagName("input"),form.getElementsByTagName("button"))){
        if(tmpv.type === "submit"){
            submitBtn = tmpv;
        }
    }
    if(e.value === ""){
        submitBtn.disabled = true;
    }else{
        submitBtn.disabled = false;
    }
}

function act_on_change_OTP_input(e){
    let form = e.parentNode;
    let submitBtn = null;
    for(let tmpv of (form.getElementsByTagName("input"),form.getElementsByTagName("button"))){
        if(tmpv.type === "submit"){
            submitBtn = tmpv;
        }
    }

    e.value = e.value.trim();
    // change the button submit
    if(e.value === ""){
        submitBtn.innerText = "Get OTP";
    }else{
        submitBtn.innerText = "Submit OTP";
    }
}

///////////////////////////
function dsp_users_info(cntO){
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_users_admin"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-small"],{"min-width":"100%"});
    let eTbd = my_create("tbody",undefined,[],{"min-width":"100%"});
    let eAdd = my_create("div","Add new",["w3-btn","w3-card-2","w3-border","w3-hover-indigo"],{"width":"100%"});
    eAdd.addEventListener("click",dsp_add_new_user_form);

    // reg columns
    let regCols = [];
    for(let i=0;i<cntO["cntData"][0].length;i++){
        if(0
        // || cntO["cntData"][0][i] === "modify_on"
        // || cntO["cntData"][0][i] === "modify_by"
        || cntO["cntData"][0][i] === "register_on"
        || cntO["cntData"][0][i] === "register_by"
        ) continue;
        regCols.push(i);
    }
    // header
    let thData = [];
    for(let i of regCols) { thData.push(cntO["cntData"][0][i]); }
    eTbd.appendChild(my_add_row(thData,"th"));

    // content
    for(let j=1;j<cntO["cntData"].length;j++){
        let tdData = [];
        for(let i of regCols) { 
            if(thData[i] === "modify_on"){
                let d = new Date(cntO["cntData"][j][i] * 1000);
                tdData.push(d.toLocaleString("en-US",{dateStyle:"short",timeStyle:"short"})); 
            }else{
                tdData.push(cntO["cntData"][j][i]); 
            }
        }
        // => add some more buttons
        tdData.push("<i class='bi bi-bandaid w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        tdData.push("<i class='bi bi-trash w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        // =>
        eTbd.appendChild(my_add_row(tdData,"td"));
    }

    for(let tmpe of eTbd.getElementsByClassName("bi-bandaid")){
        tmpe.addEventListener("click",dsp_mod_user_form_from_mod_button);
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-trash")){
        tmpe.addEventListener("click",dsp_del_user_from_del_button);
    }
    // layout-ing
    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    eTop.appendChild(eAdd)
    mainSide.appendChild(eTop);

    // for sorting
    // RESERVED

    return 1;
}

function dsp_add_new_user_form(){
    let sf = "src_modules/login/rtn_data_n_reg_user_info.php";
    my_ajax_get(sf,[{}],function(rtnO){
        console.log(rtnO)
        let tgtForm  = my_gen_form(rtnO,function(tgtForm,rtnO){
            tgtForm.remove();
            console.log(rtnO);
            my_ajax_get("./src_modules/login/rtn_users_info.php",[{}],dsp_users_info);
        });
        // => display the form
        if(tgtForm !== null && tgtForm !== undefined){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function dsp_mod_user_form_from_mod_button(){
    let sf = "src_modules/login/rtn_data_n_reg_user_info.php";
    let user = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{user:user}],function(rtnO){
        let tgtForm  = my_gen_form(rtnO,function(tgtForm,rtnO){
            tgtForm.remove();
            console.log(rtnO);
            my_ajax_get("./src_modules/login/rtn_users_info.php",[{}],dsp_users_info);
        });
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
    return;
}

function dsp_del_user_from_del_button(){
    let sf = "src_modules/login/del_user.php";
    let user = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{user:user}],function(rtnO){
        console.log(rtnO)
        my_ajax_get("./src_modules/login/rtn_users_info.php",[{}],dsp_users_info);
    });
    return;
}
