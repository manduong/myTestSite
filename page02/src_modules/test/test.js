
function dsp_test_menu(cntD){
    if(typeof(cntD) !== "object") return;
    if(cntD.length === 0) return;
    let eMenuTop = my_create("div",undefined,["w3-container","w3-small","w3-light-green","w3-hover-shadow","w3-round"],{"position":"fixed","left":0,"top":"60px","max-height":"400px","min-width":"150px"})
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