function dsp_mod_user_info(){
    let sf = "src_modules/login/rtn_data_mod_user_info_form.php";
    let sf2 = "src_modules/login/chk_and_rtn_login_user_info_sqlite.php";
    my_ajax_get(sf,[{}],function(rtnO){
        let tgtForm  = my_gen_form(rtnO,act_after_mod_user_submission);
        // => display the form
        if(tgtForm !== null){
            body.appendChild(tgtForm);
            tgtForm.style.display = "block";
        }

        // => addEvent for validation/ action-on-change inputs
        // ==== for imput email
        if(document.getElementsByName("login_email").length > 0){
            document.getElementsByName("login_email")[0].addEventListener("change",function(event){
                // reset all fields
                for(let tmpv of tgtForm.getElementsByTagName("input")) { if(tmpv.name === "login_email") continue; tmpv.value = ""; }
                for(let tmpv of tgtForm.getElementsByTagName("select")) { tmpv.value = "User"}
                
                // validate
                if(!is_Renesas_email(document.getElementsByName("login_email")[0].value))  return;

                // sending and receiving data
                console.log("sending out ...: " + document.getElementsByName("login_email")[0].value)
                my_ajax_get(sf2,[{"login_email":document.getElementsByName("login_email")[0].value}],function(rtnO){
                    let tgtEs = [];
                    for(let tmpv of tgtForm.getElementsByTagName("input")) {tgtEs.push(tmpv)}
                    for(let tmpv of tgtForm.getElementsByTagName("select")) {tgtEs.push(tmpv)}
                    for(let tmpv of tgtEs){
                        console.log(tmpv,tmpv.name)
                        if(rtnO["user_info"].hasOwnProperty(tmpv.name)){
                            tmpv.value = rtnO["user_info"][tmpv.name];
                        }
                    }
                });
            });
        }

        // => update content of the form regarding the database
        my_ajax_get(sf2,[{"login_email":document.getElementsByName("login_email")[0].value}],function(rtnO){
            console.log(rtnO)
            for(let tmpv of tgtForm.getElementsByTagName("input")){
                if(rtnO["user_info"].hasOwnProperty(tmpv.name)){
                    tmpv.value = rtnO["user_info"][tmpv.name];
                }
            }
        });
    });
    return;
}

function act_after_mod_user_submission(tgtE,rtnO){
    console.log(rtnO)
    if(typeof(rtnO["reg_user_status"]) === "string"){
        tgtE.getElementsByClassName("form_return_info")[0].style.color = 'red';
        tgtE.getElementsByClassName("form_return_info")[0].innerText = rtnO["reg_user_status"];
    }else{
        upd_user_info();//update the 
        dsp_notification("User info updated: rtnCode='"+rtnO["reg_user_status"]["info"]["exec_msg"]+"'","Info");
        tgtE.remove();//close the form
    }
    return 1;
}