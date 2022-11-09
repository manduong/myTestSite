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