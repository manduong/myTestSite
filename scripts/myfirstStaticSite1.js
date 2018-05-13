let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", function(event) {
    var clHex = event.target.value.replace(/[^0-9a-fA-F]/,"") ;
    var numR = "0x" + clHex.slice(0,2); //console.log(clHex)
    var numG = "0x" + clHex.slice(2,4);
    var numB = "0x" + clHex.slice(4,6);
    
    box.style.borderColor = event.target.value;
    box.style.color = event.target.value;
    box.style.backgroundColor = "rgb("+(0xff-numR)+","+(0xff-numG)+","+(0xff-numB)+")";
    //console.log("rgb("+(0xff-numR)+","+(0xff-numG)+","+(0xff-numB)+")")

}, false);

colorPicker.addEventListener("change", function(event) {
    output.innerText = "Color set to " + colorPicker.value + ".\n";
    output.innerText += "BackGround set to (#ffffff - " + colorPicker.value + ").";
}, false);