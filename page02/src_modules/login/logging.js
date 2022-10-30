function dsp_login_form(byOTP){
    if(byOTP === undefined || byOTP === "" || byOTP === false || byOTP === 0){
        byOTP = "";
    }else{
        byOTP = "OTP";
    }
    let tgtSrc = "./src_modules/login/rtn_data_login_form.php";
    my_ajax_get(tgtSrc,[{"mode":byOTP}],function(rtnO){
        let tgtForm = gen_login_form(rtnO);
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }
    });
}

function my_submit_login(){
    //
}

function my_logout(){
    my_ajax_get("./src_modules/login/logout.php",[{}],function(rtnO){
        console.log();
        location.reload();
    });
}

function gen_login_form(cntData){
    if(!cntData.hasOwnProperty("cntData")) return; //
    if(!cntData.hasOwnProperty("formAction")) cntData["formAction"] = ""; //
    let eTop = my_create("div",undefined,["w3-container"]);
    let eBtnClose = my_create("span","&times;",["w3-button","w3-display-topright"],{},{"onclick":"id_login_form.remove()"})
    // form content
    let eForm = my_create("form",undefined,["w3-container","w3-padding-16"],{},{"method":"post"});
    for(let formItem of cntData["cntData"]){
        let mainItem = null;
        if(!formItem.hasOwnProperty("type")) {
            if(formItem.hasOwnProperty("label")) eForm.appendChild(my_create("label",formItem["label"]));
            continue;
        }else{
            if(formItem["type"] === "submit"){
                mainItem =  my_create("button",formItem["label"],["w3-button","w3-block","w3-round","w3-indigo","w3-margin-top"]);
                eForm.appendChild(mainItem);
            }else if(formItem["type"] === "checkbox"){
                mainItem =  my_create("input",formItem["label"],["w3-check"]);
                eForm.appendChild(mainItem);
                eForm.appendChild(my_create("label",formItem["label"]));
            }else{
                mainItem =  my_create("input",undefined,["w3-input"]);
                eForm.appendChild(my_create("label",formItem["label"]));
                eForm.appendChild(mainItem);
            }
        }
        for(let tmpv in formItem){
            if(tmpv === "label") continue;
            mainItem.setAttribute(tmpv,formItem[tmpv]);
        }
    }
    eForm.setAttribute("action",cntData["formAction"]);

    // preserve a holder for information
    eForm.appendChild(my_create("div","This holding some info.",["w3-light-grey","w3-margin-top","w3-center"],{"width":"100%"},{id:"form_return_info"}));

    // prevent default submit behavaior and redirect it to the submit-button
    eForm.addEventListener("submit",function(event){
        event.preventDefault(); 
        my_ajax_post_form(cntData["formAction"],eForm,function(rtnO){
            act_after_login_submission(eTop.parentNode.parentNode,rtnO);
        })
    })

    eTop.appendChild(eBtnClose)
    eTop.appendChild(eForm);
    return my_create("div",my_create("div",eTop,["w3-modal-content"]),["w3-modal"],{},{id:"id_login_form"});
}

function act_after_login_submission(tgtE,rtnO){
    // this is called after login clicking, received data/status from server
    if(rtnO.hasOwnProperty("OTP")){
        // the form is in OTP method
        if(rtnO["OTP"].search(/^NG/)>-1){
            if(document.getElementById("form_return_info") !== null){
                form_return_info.style.color = "red";
                form_return_info.innerText = rtnO["OTP"];
            }else{}
        }else if(rtnO["OTP"] === "Sent"){
            if(document.getElementById("form_return_info") !== null){
                form_return_info.style.color = "initial";
                form_return_info.innerText = "OTP sent, 5min retention from " + (new Date()).toString();
            }else{}
        }else if(rtnO["OTP"] === "OK"){
            if(document.getElementById("form_return_info") !== null){
                form_return_info.style.color = "initial";
                form_return_info.innerText = "Logged-in by OTP OK at " + (new Date()).toString();
            }else{}
            // update the header of user
            upUserDisplay(rtnO["user_info"]);

            // close form
            tgtE.remove();
        }else{
            // unknown return message
        }
    }else{
        // login by password
    }
    console.log(rtnO)
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