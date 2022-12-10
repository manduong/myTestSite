// to generate/display menu

////////////////////////////
function dsp_menu(){
    // display menu on top
    my_ajax_get("./src_modules/menu/menu.php",[{}],function(rtnO){
        if(!rtnO.hasOwnProperty("cntData")) return;
        for(let tmpv of rtnO["cntData"]){
            if(tmpv.hasOwnProperty("position") && tmpv["position"] === "rightright"){
                document.getElementById("myMenu2").insertBefore(gen_menu_item_on_top(tmpv),document.getElementById("myMenu2").childNodes[0]);
            }else{
                document.getElementById("myMenu2").appendChild(gen_menu_item_on_top(tmpv));
            }
        }
        if(rtnO.hasOwnProperty("testMenu")){
            dsp_menu_test(rtnO["testMenu"]);
        }
        // => 
        upd_user_info();
    });
}

function gen_menu_item_on_top(cntI){
    let eTop = my_create("div",undefined,["w3-bar-item", "w3-mobile","w3-round","w3-button","my-tooltip"]);
    if(cntI.hasOwnProperty("position")){
        if(cntI["position"].search("right") > -1) eTop.classList.add("w3-right");
    }
    if(cntI.hasOwnProperty("text")){
        if(cntI["text"] !== ""){
            // eTop.classList.add("w3-padding");
            eTop.style.height = "52px";
            eTop.style.lineHeight = "30px";
            eTop.innerText = cntI["text"];
        }
    }
    if(cntI.hasOwnProperty("icon") && cntI["icon"] !== ""){
        if(cntI["icon"].search(/^bi/) > -1){
            eTop.appendChild(my_create("i",undefined,[cntI["icon"],"w3-text-indigo","w3-xlarge"]));
        }else{
            eTop.appendChild(my_create("img",undefined,["w3-text-indigo","w3-xlarge"],{"padding":"4px"},{"src":cntI["icon"],"height":"36px"}));
        }
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

function toggle_top_menu_item(clkE){
    // toggle the leftSide, call back to change my-active of the clicked menu-item, and return: 0: same item was clicked, 1: different item was clicked
    if(clkE.classList.contains("my-active")){
        if(leftSide.style.display === "block" || leftSide.classList.contains("w3-show")){
            hide_left();
        }else{
            show_left();
        }
        return 0;
    }else{}

    // call-back to in-active other menu items
    for (let tmpe of document.querySelectorAll("#myMenu2 div")){
        if(tmpe.style.display === "none" || tmpe.classList.contains("w3-hide")) continue;
        if(tmpe !== clkE){
            tmpe.classList.remove("my-active");
        }else{
            tmpe.classList.add("my-active");
        }
    }

    hide_left();
    return 1;
}

function dsp_menu_admin(clkE){
    // display menu for admin tasks on the left, after clicking the admin-menu button on top
    if(document.getElementById("leftSide") === null) return;
    if(!toggle_top_menu_item(clkE)) return;

    while(leftSide.childNodes.length > 0) {
        leftSide.lastChild.remove();
    }

    // => ajax for info
    my_ajax_get("./src_modules/menu/rtn_data_menu_admin_on_left.php",[{}],function(rtnO){
        if(!rtnO.hasOwnProperty("cntData")) return;
        for(let tmpv of rtnO["cntData"]){
            leftSide.appendChild(gen_menu_item_on_left(tmpv));
        }
        // display
        show_left();
    });

    // => show the welcome part- page on the mainSide
    if(document.getElementById("mainSide") !== null){
        while(mainSide.childNodes.length>0){ mainSide.lastChild.remove(); }
        for (let clN of mainSide.classList){
            if(clN.search(/^bg/) > -1) mainSide.classList.remove(clN);
        }
    }
}

function dsp_menu_PVPI(clkE){
    // display menu for PVPI references on the left, after clicking the PVPI-menu button on top
    if(document.getElementById("leftSide") === null) return;
    if(!toggle_top_menu_item(clkE)) return;

    while(leftSide.childNodes.length > 0) {
        leftSide.lastChild.remove();
    }

    // => ajax for info to display the menu
    my_ajax_get("./src_modules/menu/rtn_data_menu_PVPI_on_left.php",[{}],function(rtnO){
        if(!rtnO.hasOwnProperty("cntData")) return;
        for(let tmpv of rtnO["cntData"]){
            leftSide.appendChild(gen_menu_item_on_left(tmpv));
        }
        // display
        show_left();
    });

    // => show the welcome part- page on the mainSide
    if(document.getElementById("mainSide") !== null){
        while(mainSide.childNodes.length>0){ mainSide.lastChild.remove(); }
        for (let clN of mainSide.classList){
            if(clN.search(/^bg/) > -1) mainSide.classList.remove(clN);
        }
        mainSide.classList.add("bgPVPI");
        mainSide.style.minHeight = "100%";
    }
}

function dsp_menu_worldcup(clkE){
    // display menu for wolrdcup game references on the left, after clicking the worldcup-menu button on top
    if(document.getElementById("leftSide") === null) return;
    if(!toggle_top_menu_item(clkE)) return;

    while(leftSide.childNodes.length > 0) {
        leftSide.lastChild.remove();
    }

    // => ajax for info to display the menu
    my_ajax_get("./src_modules/menu/rtn_data_menu_worldcup_on_left.php",[{}],function(rtnO){
        if(!rtnO.hasOwnProperty("cntData")) return;
        for(let tmpv of rtnO["cntData"]){
            leftSide.appendChild(gen_menu_item_on_left(tmpv));
        }
        // display
        show_left();
    });

    // => show the welcome part- page on the mainSide
    if(document.getElementById("mainSide") !== null){
        while(mainSide.childNodes.length>0){ mainSide.lastChild.remove(); }
        for (let clN of mainSide.classList){
            if(clN.search(/^bg/) > -1) mainSide.classList.remove(clN);
        }
        mainSide.classList.add("bgWorldCup2022");
        mainSide.style.minHeight = "100%";
    }
}

function gen_menu_item_on_left(cntI){
    if(!cntI.hasOwnProperty("text")) return null;
    let eTop = my_create("div",undefined,["w3-bar-item", "w3-mobile","w3-round","w3-button","my-tooltip"]);
    if(cntI["text"] !== "") eTop.appendChild(my_create("span",cntI["text"]));
    if(cntI.hasOwnProperty("tooltip")){
        if(cntI["tooltip"] !== "") eTop.appendChild(my_create("span",cntI["tooltip"],["my-tooltip-content"]));
    }

    // anything else is attribute
    for(let tmpv in cntI){
        if(tmpv === "text") continue;
        if(tmpv === "tooltip") continue;
        if(tmpv.search(/funcn/i) > -1) continue;
        eTop.setAttribute(tmpv,cntI[tmpv]);
    }
    
    // event listener
    if(cntI.hasOwnProperty("sFuncN") && cntI["sFuncN"] !== ""){
        eTop.addEventListener("click",function(){
            my_ajax_get(cntI["sFuncN"],[{}],function(rtnO){
                if(cntI.hasOwnProperty("cFuncN") && cntI["cFuncN"] !== ""){
                    console.log("Exe funcN='"+cntI["cFuncN"]+"'", rtnO)
                    executeFunctionByName(cntI["cFuncN"],window,rtnO)
                }else{
                    // display to the mainMenu by default
                    if(document.getElementById("mainSide") !== null){
                        let eTop = my_create("div",undefined,["w3-border","w3-round"],{})
                        eTop.innerHTML = rtnO;
                        mainSide.appendChild(eTop)
                    }
                }
            })
        });
    }else{
        eTop.addEventListener("click",function(){
            if(cntI.hasOwnProperty("cFuncN") && cntI["cFuncN"] !== ""){
                console.log("Exe funcN='"+cntI["cFuncN"]+"'")
                executeFunctionByName(cntI["cFuncN"],window,{})
            }else{
            }
        });
    }
    // =>
    return eTop;
}

function dsp_menu_test(cntD){
    if(typeof(cntD) !== "object") return;
    if(cntD.length === 0) return;
    let eMenuTop = my_create("div",undefined,["w3-container","w3-small","w3-light-green","w3-hover-shadow","w3-round"],{"position":"fixed","right":0, "top":"60px","max-height":"400px","min-width":"150px"})
    for(let tmpv of cntD){
        let eC = my_create("div",tmpv["text"],["w3-button","w3-block"],{"padding":"3px 0 0 0"})
        eC.addEventListener("click",function(){
            my_ajax_get(tmpv["Sfunc"],[{"command":tmpv["getCmd"]}],function(rtnO){
                let eTop = null;
                if(document.getElementById("test_holder")) test_holder.remove();
                eTop = my_create("div",
                    my_create("span","X",["w3-padding","w3-large","w3-button","w3-display-topright","w3-round"],{},{"onclick":"this.parentNode.remove()"}),
                    ["w3-khaki"],
                    {"padding":0,"position":"fixed","bottom":0,"left":0,"height":"30%","width":"100%","overflow":"auto","font-size":"9px"},
                    {id:"test_holder"}
                    );
                body.appendChild(eTop);
                let noFmtE = my_create("pre",JSON.stringify(rtnO,undefined,2).replace(/\\n/g,"<br>"),["w3-small"]);
                eTop.appendChild(noFmtE);
            });
        })
        eMenuTop.appendChild(eC)
    }
    eMenuTop.appendChild(gen_test_form());
    // =>
    body.appendChild(eMenuTop)
}

function gen_test_form(){
    // a simple testing form for user to input pre-defined command and execute, display the results in test_holder element
    let cntData = {
        "cntData": [
            {"label":"Input","type":"text","name":"input"},
            {"label":"Command","type":"text","name":"command"},
            {"label":"Submit","type":"submit"}
        ],
        "formAction":"src_modules/test/md_command.php",
    };
    let eTop = my_gen_form(cntData,function(tgtE,rtnO){
        let eTop = null;
        if(document.getElementById("test_holder")) test_holder.remove();
        eTop = my_create("div",
            my_create("span","X",["w3-padding","w3-large","w3-button","w3-display-topright","w3-round"],{},{"onclick":"this.parentNode.remove()"}),
            ["w3-khaki"],
            {"padding":0,"position":"fixed","bottom":0,"left":0,"height":"30%","width":"100%","overflow":"auto","font-size":"9px"},
            {id:"test_holder"}
            );
        body.appendChild(eTop);
        let noFmtE = my_create("pre",JSON.stringify(rtnO["cmdRtnCode"],undefined,2).replace(/\\n/g,"<br>"),["w3-small"]);
        eTop.appendChild(noFmtE);
    });
    eTop.classList.remove("w3-modal");

    eTop.childNodes[0].style.width = "200px";
    eTop.style.padding = 0;
    eTop.childNodes[0].style.padding = 0;
    eTop.childNodes[0].childNodes[0].style.padding = 0;

    return eTop;
}
