function dsp_simple_table_4_data_files(cntO){
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
    console.log(cntO)

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_matches_admin"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-small"],{"min-width":"100%","font-family":"Courier New"});
    let eTbd = my_create("tbody",undefined,[],{"min-width":"100%"});

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
    eTbd.appendChild(my_add_row(thData,"th"));

    // content
    for(let j=1;j<cntO["cntData"].length;j++){
        let tdData = [];
        for(let i of regCols) { tdData.push(cntO["cntData"][j][i]); }
        // => add some more buttons
        tdData.push("<i class='bi bi-trash w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        tdData.push("<i class='bi bi-bandaid w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        // =>
        eTbd.appendChild(my_add_row(tdData,"td"));
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-trash")){
        tmpe.addEventListener("click",dsp_del_file_from_del_button);
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-bandaid")){
        tmpe.addEventListener("click",dsp_chmod_file_from_mod_button);
    }

    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    mainSide.appendChild(eTop);
    return 1;
}

function dsp_del_file_from_del_button(){
    let sf = "src_modules/host_info/remove_file.php";
    let file = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{file:file}],function(rtnO){
        console.log(rtnO)
        my_ajax_get("./src_modules/host_info/list_data_files.php",[{}],dsp_simple_table_4_data_files);
    });
    return;
}

function dsp_chmod_file_from_mod_button(){
    let sf = "src_modules/host_info/chmod_file.php";
    let file = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    my_ajax_get(sf,[{file:file}],function(rtnO){
        console.log(rtnO)
        my_ajax_get("./src_modules/host_info/list_data_files.php",[{}],dsp_simple_table_4_data_files);
    });
    return;
}

///////////////
function dsp_simple_table_4_data_tables(cntO){
    if(cntO.length === 0) return;
    if(!cntO.hasOwnProperty("cntData")) return;
    if(cntO["cntData"].length === 0) return;
    if(document.getElementById("mainSide") === null) return;
    while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}

    let eTop = my_create("div",undefined,["w3-responsive"],{"position":"relative"},{"id":"tbl_matches_admin"});
    let eTbl = my_create("table",undefined,["w3-table-all","w3-hoverable","w3-small"],{"min-width":"100%","font-family":"Courier New"});
    let eTbd = my_create("tbody",undefined,[],{"min-width":"100%"});

    // reg columns
    let regCols = [];
    for(let i=0;i<cntO["cntData"][0].length;i++){
        regCols.push(i);
    }
    // header
    let thData = [];
    for(let i of regCols) { thData.push(cntO["cntData"][0][i]); }
    eTbd.appendChild(my_add_row(thData,"th"));

    // content
    for(let j=1;j<cntO["cntData"].length;j++){
        let tdData = [];
        for(let i of regCols) { tdData.push(cntO["cntData"][j][i]); }
        // => add some more buttons
        tdData.push("<i class='bi bi-trash w3-button w3-hover-orange w3-large w3-round' style='padding:0'></i>")
        // =>
        eTbd.appendChild(my_add_row(tdData,"td"));
    }
    for(let tmpe of eTbd.getElementsByClassName("bi-trash")){
        tmpe.addEventListener("click",dsp_del_table_from_del_button);
    }

    eTbl.appendChild(eTbd);
    eTop.appendChild(eTbl);
    mainSide.appendChild(eTop);
    return 1;
}

function dsp_del_table_from_del_button(){
    let sf = "src_modules/host_info/drop_table.php";
    let file = this.parentNode.parentNode.getElementsByTagName("td")[0].innerText;
    let tblName = this.parentNode.parentNode.getElementsByTagName("td")[1].innerText;
    my_ajax_get(sf,[{file:file,tblName:tblName}],function(rtnO){
        console.log(rtnO)
        my_ajax_get("./src_modules/host_info/list_data_tables.php",[{}],dsp_simple_table_4_data_tables);
    });
    return;
}

////////////////////
function dsp_host_info_w_interval(cntO){
    console.log(cntO)
    if(cntO.length === 0) return;

    // => decide where to go
    let eTop = null;
    if(document.getElementById('host-info-w-interval') === null){
        if(document.getElementById("mainSide") === null) return;
        while(mainSide.childNodes.length > 0) {mainSide.lastChild.remove()}
        eTop = my_create("div",undefined,["w3-small"],{},{id:"host-info-w-interval"})
        mainSide.appendChild(eTop);
    }else{
        eTop = document.getElementById('host-info-w-interval');
    }
    while(eTop.childNodes.length > 0){eTop.lastChild.remove()}

    console.log(eTop)
    // => components
    let eUpTime = my_create("div",Date().toLocaleString());
    eTop.appendChild(eUpTime)

    for(let infItem of cntO){
        let eITop = my_create("div",undefined,["w3-border-bottom"])
        eITop.appendChild(my_create("div",infItem[0],["w3-indigo","w3-text-white"],{"margin-top":"20px"}))

        if(Array.isArray(infItem[1])){
            for(let tmpv of infItem[1]){
                eITop.appendChild(my_create("div",tmpv,["w3-light-grey","w3-monospace"]))
            }
        }else{
            eITop.appendChild(my_create("div",infItem[1],["w3-light-grey","w3-monospace"]))
        }

        eTop.appendChild(eITop);
    }
    
    return 1;
}