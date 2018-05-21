"use strict";
function myFnc3(){
    //example the script inside the external file
    myObjBG.alreadyGo = "myFn3"; myUpdateBGProg();
    document.getElementById("demo3").innerHTML = "Changed the Content 3";
}
function myFnc4(){
    //call this function will erase every thing
    myObjBG.alreadyGo = "myFn4"; myUpdateBGProg();
    document.write("<p style='display:block;float:left'>this line will delete all elements, cannot load</p>")
}
function myFnc5(){
    myObjBG.alreadyGo = "myFn5"; myUpdateBGProg();
    //call a window alert box
    window.alert("ALOHA")
}
function myFnc6(){
    //print out to the <F12>/debugger/console window
    myObjBG.alreadyGo = "myFn6"; myUpdateBGProg();
    console.log("This is a test log, aloha")
}

function myFnc7(){
    myObjBG.alreadyGo = "myFn7"; myUpdateBGProg();
    //var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
    //var myObj = JSON.parse(myJSON);

    //var myObj = {
    //    "name":"John",
    //    "age":30,
    //    "cars": [
    //       { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
    //        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
    //        { "name":"Fiat", "models":[ "500", "Panda" ] }
    //    ]
    //}

    var myObj = JSON.parse(document.getElementById("inputdata").innerHTML)

    var tmpvar = "";
    tmpvar = document.getElementById("demo7").innerHTML;
    tmpvar = tmpvar.concat(" >>> " , myObj.name);

    document.getElementById("demo7").innerHTML += " >>> ";
    var x = "";
    for (var i in myObj.cars){
        x += "<h1>" + myObj.cars[i].name + "</h1>";
        for (var j in myObj.cars[i].models) {
            x += myObj.cars[i].models[j];
        }
    }
    document.getElementById("demo7result").innerHTML += myObj.name +   " has these following cars " + x;
    
    window.alert(prompt("ALOHA DONE"))
}

//////// TO PLAY THIS GAME myFnc8, I think we need a global variable
var myObjFnc8 = new Object();

function myFnc8(){
    myObjBG.alreadyGo = "myFn8"; myUpdateBGProg();
    //this program is main program illustrating a game

    //initialization of variables
    var randomNumber = myRandom(100)+1;

    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');

    var guessCount = 1;
    var resetButton;

    //initialize the global object myObjFnc8 to pass to later function as references, so that functions can change the content of input argument(as object)
    myObjFnc8.randomNumber = randomNumber;
    myObjFnc8.guesses = guesses;
    myObjFnc8.lastResult = lastResult;
    myObjFnc8.lowOrHi = lowOrHi;
    myObjFnc8.guessSubmit = guessSubmit;
    myObjFnc8.guessField = guessField;
    myObjFnc8.guessCount = guessCount;
    myObjFnc8.resetButton = resetButton;

    //reset the game if user press this button when the game is on
    var tmpv = document.getElementsByClassName('resetButton');
    for(var i=0;i<tmpv.length;i++){
        tmpv[i].textContent = '';
    }
    resetGame();

    //assign event to specific function
    myObjFnc8.guessSubmit.addEventListener('click', checkGuess);

    //myObj.guessSubmit.addEventListener('click',function(){alert("ALOHA xyz")})
       
}

function checkGuess(){
    //alert("ALOHA 22222")
    //a function following myFnc8()
    var userGuess = Number(myObjFnc8.guessField.value)
    if(myObjFnc8.guessCount === 1){
        myObjFnc8.guesses.textContent = 'Previous guesses: ';
    }
    myObjFnc8.guesses.textContent += userGuess + ' ';

    if(userGuess === myObjFnc8.randomNumber){
        myObjFnc8.lastResult.textContent = "Congratulations! You got it right.";
        myObjFnc8.lastResult.style.backgroundColor = 'green';
        myObjFnc8.lowOrHi.textContent = '';
        setGameOver();
    }else if(myObjFnc8.guessCount === 10){
        myObjFnc8.lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }else{
        myObjFnc8.lastResult.textContent = 'Wrong!';
        myObjFnc8.lastResult.style.backgroundColor='red';
        if(userGuess < myObjFnc8.randomNumber) {
            myObjFnc8.lowOrHi.textContent = 'Last guess was too low!';
        }else if(userGuess > myObjFnc8.randomNumber){
            myObjFnc8.lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    myObjFnc8.guessCount++;
    myObjFnc8.guessField.value='';
    myObjFnc8.guessField.focus();
}

function setGameOver(){
    myObjFnc8.guessField.disabled = true;
    myObjFnc8.guessSubmit.disabled = true;
    myObjFnc8.resetButton = document.createElement('button');
    myObjFnc8.resetButton.textContent = 'Start new game';
    //document.body.appendChild(myObjFnc8.resetButton);
    document.querySelector('.resetButton').appendChild(myObjFnc8.resetButton);
    myObjFnc8.resetButton.addEventListener('click',resetGame);
}

function resetGame(){
    myObjFnc8.guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i=0;i<resetParas.length;i++){
        resetParas[i].textContent = '';
    }

    if(myObjFnc8.resetButton != null){
        myObjFnc8.resetButton.parentNode.removeChild(myObjFnc8.resetButton);
    }else{
    }

    myObjFnc8.guessField.disabled = false;
    myObjFnc8.guessSubmit.disabled = false;
    myObjFnc8.guessField.value = '';
    myObjFnc8.guessField.focus();

    myObjFnc8.lastResult.style.backgroundColor = 'white';

    myObjFnc8.randomNumber = myRandom(100) +1;
}

///////////////////////// From now is for myFnc9 ///////////////////
var myObjFnc9 = new Object();

function myFnc9(){
    myObjBG.alreadyGo = "myFn9"; myUpdateBGProg();
    //let users know the input
    var myFieldToAdd = document.getElementById('test09AddField');
    //  reset the field to add
    //console.log(myFieldToAdd.childNodes.length)
    while(myFieldToAdd.hasChildNodes()){
        myFieldToAdd.removeChild(myFieldToAdd.firstChild);
    }
    //  add the input text fields (for width x height of the target rectange)
    var textNode = document.createTextNode("Width*Heigh= ");
    myFieldToAdd.appendChild(textNode);
    
    var inputWidth = document.createElement('INPUT');
    inputWidth.type='text';
    inputWidth.value='10';
    inputWidth.id = 'inputWidth';
    inputWidth.style="width:20";
    myFieldToAdd.appendChild(inputWidth);

    textNode = document.createTextNode(" * ");
    myFieldToAdd.appendChild(textNode);

    var inputHeight = document.createElement('INPUT');
    inputHeight.type='text';
    inputHeight.value='10';
    inputHeight.id = 'inputHeight';
    inputHeight.style="width:20";
    myFieldToAdd.appendChild(inputHeight);
    inputHeight.addEventListener('',chknupNum);

    var submitButton = document.createElement('INPUT');
    submitButton.type='button';
    submitButton.id = 'SubmitButton';
    submitButton.value="Stop";
    myFieldToAdd.appendChild(submitButton);
    submitButton.addEventListener('click',startOrStop)

    var clearButton = document.createElement('INPUT');
    clearButton.type='button';
    clearButton.id = 'clearButton';
    clearButton.value="ClearAll";
    myFieldToAdd.appendChild(clearButton);
    clearButton.addEventListener('click',clearAllFieldFnc9);

    var myCanvas = document.getElementById('myTestCanvas');
    myCanvas.width=350;
    myCanvas.height=200;
    myCanvas.style = "border:1px solid #000000";
    //console.log(typeof myCanvas)

    myObjFnc9.inputHeight = inputHeight;
    myObjFnc9.inputWidth = inputWidth;
    myObjFnc9.startX = 0;
    myObjFnc9.startY = 0;
    myObjFnc9.theCanvas = myCanvas;
    myObjFnc9.submitButton = submitButton;

    //draw a canvas (default)
    var ctx = myCanvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,10,10);
    for (var i = 0; i < 100; i++) {
        ctx.beginPath();
        var tmpR = myRandom(255);
        var tmpG = myRandom(255);
        var tmpB = myRandom(255);
        ctx.fillStyle = 'rgba('+tmpR+','+tmpG+','+tmpB+',0.5)';
        ctx.arc(myRandom(myCanvas.width), myRandom(myCanvas.height), myRandom(20), 0, 2 * Math.PI);
        ctx.fill();
    }


    myObjFnc9.timeCnt =setInterval(updateRect,10);
    myObjFnc9.timeOut = setTimeout(stopGo,3000);
}

function startGo(){
    myObjFnc9.submitButton.value = 'Stop';
    myObjFnc9.timeCnt = setInterval(updateRect,10);
    myObjFnc9.timeOut = setTimeout(stopGo,3000);
}
function stopGo(){
    myObjFnc9.submitButton.value = "Start";
    clearInterval(myObjFnc9.timeCnt);
    clearTimeout(myObjFnc9.timeOut)
    delete(myObjFnc9.timeCnt);
    delete(myObjFnc9.timeOut);
}
function startOrStop(){
    //console.log(myObjFnc9.submitButton.value)
    if(myObjFnc9.submitButton.value === 'Stop'){
        stopGo();
    }else if(myObjFnc9.submitButton.value === 'Start'){
        startGo();
    }else{
        alert("OUT OF SCOPE");
    }
}

function chknupNum(){
    if(Number(myObjFnc9.inputHeight.value) === 0 ){
        myObjFnc9.inputHeight = 10;
    }
    if(Number(myObjFnc9.inputWidth.value) === 0 ){
        myObjFnc9.inputHeight = 10;
    }
}

function updateRect(){
    var theCanvas = myObjFnc9.theCanvas;
    var ctx = theCanvas.getContext('2d');
    
    //update the position
    myObjFnc9.startX += theCanvas.width/100;
    myObjFnc9.startY += theCanvas.height/100;
    //console.log(myObjFnc9.startX)
    if(myObjFnc9.startX >= theCanvas.width || myObjFnc9.startX < 0){
        myObjFnc9.startX = myObjFnc9.startY = 0;
        ctx.clearRect(0,0,theCanvas.width,theCanvas.height)
        for (var i = 0; i < 100; i++) {
            ctx.beginPath();
            var tmpR = myRandom(255);
            var tmpG = myRandom(255);
            var tmpB = myRandom(255);
            ctx.fillStyle = 'rgba('+tmpR+','+tmpG+','+tmpB+',0.5)';
            ctx.arc(myRandom(theCanvas.width), myRandom(theCanvas.height), myRandom(20), 0, 2 * Math.PI);
            ctx.fill();
        }
        //console.log("ALOHA")
    }

    //update Canvas

    var grd = ctx.createLinearGradient( Math.floor(0),
                                        Math.floor(0),
                                        Math.floor(theCanvas.width),
                                        Math.floor(theCanvas.height));
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,1,1);
    ctx.fillRect(   Math.floor(myObjFnc9.startX),
                    Math.floor(myObjFnc9.startY),
                    Math.floor(myObjFnc9.inputWidth.value),
                    Math.floor(myObjFnc9.inputHeight.value))
}

function clearAllFieldFnc9(){
    //stop the interval engine
    stopGo();
    //remove (exactly clear and reduce size) the canvas
    myObjFnc9.theCanvas.getContext('2d').clearRect(0,0,myObjFnc9.theCanvas.width,myObjFnc9.theCanvas.height);
    myObjFnc9.theCanvas.width=3; 
    myObjFnc9.theCanvas.height=3;
    myObjFnc9.theCanvas.height=3;
    myObjFnc9.theCanvas.style="";
    //remove all added fields
    var myFieldToAdd = document.getElementById('test09AddField');
    //console.log(myFieldToAdd.childNodes.length)
    while(myFieldToAdd.hasChildNodes()){
        myFieldToAdd.removeChild(myFieldToAdd.firstChild);
    }
}

////////////////////////////// EXTRA WORK
var myObjBG  = new Object();
//document.body.addEventListener('unload',myFirstLoad);
myObjBG.alreadyGo = "FirstLoad";
myObjBG.listBGColor = ['white','black','pink'];
myObjBG.currentBGColor = 'white';
myFirstLoad(); //every time re-load the page

function myFirstLoad(){
    myObjBG.alreadyGo = "FirstLoad";
    myUpdateBGProg();
    document.body.firstChild.style=
        "font-family:\"Courier New\";" +
        "font-style:italic;" +
        "font-size:0.7em;" +
        "position:fixed; top:0;right:0;"+
        "width:25%;" +
        "float:right;" +
        "text-align:right;" +
        "clear:right;" +
        "padding:8px;" +
        "margin-bottom:8px;" +
        "background-color: #33b5e5;" +
        "color: #ffffff;" +
        "display:inline" +
        "";
    //console.log(document.body.firstChild.style)
}

function myUpdateBGProg(){
    myObjBG.currentTime = Date();
    //console.log(document.body.firstChild.textContent);
    
    var textNode = document.createTextNode(myObjBG.alreadyGo + " @ " + myObjBG.currentTime);

    var tmpFncAndTodayDescriptToNode = function(node){
        var newNode = document.createElement('div');
        //newNode.appendChild(document.createElement('br')); //'div' itself creats a new line, dont need this br
        newNode.style = 'background:red;font-family:Arial;font-weight:bold;';
        switch (new Date().getDay()){
            case 6:
                newNode.appendChild(document.createTextNode("Today is Saturday"));
                break;
            case 0:
                newNode.appendChild(document.createTextNode("Today is Sunday"));
                break;
            default:
                newNode.appendChild(document.createTextNode("still waiting for weekend..."));
        }
        node.appendChild(newNode);
    }

    var myFirstNode;

    if(document.body.hasChildNodes){
        if(document.body.firstChild.id === "myLoadBG"){
            //do nothing, update only
            myFirstNode = document.body.firstChild;
            while(myFirstNode.hasChildNodes()){
                myFirstNode.removeChild(myFirstNode.firstChild);
            }
            tmpFncAndTodayDescriptToNode(myFirstNode);
            myFirstNode.appendChild(textNode);

        }else{
            //create new first node
            myObjBG.currentBGColor = "white";

            myFirstNode = document.createElement("DIV");
            myFirstNode.id = "myLoadBG";
            myFirstNode.className = "floatAlways";
            tmpFncAndTodayDescriptToNode(myFirstNode);
            myFirstNode.appendChild(textNode);
            document.body.insertBefore(myFirstNode,document.body.firstChild);
        }
    }else{
        alert("DONT KNOW WHY DOCUMENT HAS NOTHING")
    }

    //add a select section so that users can change the background and color of the whole web
    myFirstNode = document.getElementById("myLoadBG");
    var newDivSelect = document.createElement("div");
    newDivSelect.style = "Color:black";
    var theElement = document.createElement("label");
    theElement.setAttribute("for","bgSelect");
    theElement.appendChild(document.createTextNode("Select theme:"));
    newDivSelect.appendChild(theElement); //a label first
    
    theElement = document.createElement('select');
    theElement.id = "bgSelect";
    theElement.options.add(new Option(myObjBG.currentBGColor,0));
    for(var i=0;i<myObjBG.listBGColor.length;i++){
        if(myObjBG.currentBGColor === myObjBG.listBGColor[i]){
            //dont add
        }else{
            theElement.options.add(new Option(myObjBG.listBGColor[i],theElement.options.length));
        }
    }
    var theItem = document.create
    newDivSelect.appendChild(theElement); //a Select element

    myFirstNode.appendChild(newDivSelect);

    document.getElementById("bgSelect").addEventListener("change",
        function(){
            myUpdateBGColor(document.getElementById("bgSelect")[document.getElementById("bgSelect").selectedIndex].textContent);
        });
}

function myUpdateBGColor(theTheme){
    console.log(theTheme)
    var divBorder = "0.1em dotted yellow";
    var divMargin = "1em 0 1em 0";
    switch(theTheme){
        case "black":
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";
            divBorder = "0.1em dotted yellow";
            divMargin = "1em 0 1em 0";
            myObjBG.currentBGColor = theTheme;
        break;
        case "white":
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";
            divBorder = "";
            divMargin = "";
            myObjBG.currentBGColor = theTheme;
        break;
        case "pink":
            document.querySelector("body").style.backgroundColor = "pink";
            document.querySelector("body").style.color = "gray";
            divBorder = "0.1em dotted black";
            divMargin = "0.5em 0 0 0";
            myObjBG.currentBGColor = theTheme;
        break;
        default:
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").style.color = "black";
            divBorder = "";
            divMargin = "";
            myObjBG.currentBGColor = "white";
        break;
    }
    //console.log( document.querySelectorAll("body div .testblock").length);
    for(var i = 0; i < document.querySelectorAll("body div .testblock").length; i++){
        var testBlock = document.querySelectorAll("body div .testblock")[i];
        testBlock.style.border = divBorder;
        testBlock.style.margin = divMargin;
    }
}

///////////////////////// try Function 10, working with array and HTML list
function myFnc10(){
    myObjBG.alreadyGo = "myFn10"; myUpdateBGProg();
    var inString = prompt("input a string denoting the array, delimiter is ','")

    if(inString){

        inString = inString.replace(/^[\s\t]*/,"")
        inString = inString.replace(/[\s\t]*$/,"")

        //create some new buttons
        var myFieldToAdd = document.getElementById('test10AddField');
        //  reset the field to add
        while(myFieldToAdd.hasChildNodes()){
            myFieldToAdd.removeChild(myFieldToAdd.firstChild);
        }

        //initialize the unsorted - list
        var myHTMLList = document.createElement('ul');
        myHTMLList.textContent = "You've input the list:";
        myFieldToAdd.appendChild(myHTMLList);

        //manipulate the string and generate list
        var myArr = inString.split(',')
        for(var i=0;i<myArr.length;i++){
            myArr[i] = myArr[i].replace(/^[\s\t]*/,"");
            myArr[i] = myArr[i].replace(/[\s\t]*$/,"");
            console.log("'" + myArr[i] + "'")
            
            var myOutText = myArr[i][0].toUpperCase() + myArr[i].slice(1,myArr[i].length);

            var anItem = document.createElement("li");
            anItem.textContent = "'" + myOutText + "'";
            myHTMLList.appendChild(anItem);
        }
    }else{
        console.log("WARN::user input empty string, ignored")
    }
}

///////////////////////// try Function 11, generate a random funny story
function myFnc11(){
    myObjBG.alreadyGo = "myFn11"; myUpdateBGProg();
    //prepare field to add elements
    var myFieldToAdd = document.getElementById('test11AddField');
    //  reset the field to add
    while(myFieldToAdd.hasChildNodes()){
        myFieldToAdd.removeChild(myFieldToAdd.firstChild);
    }
    //create a label, input text field, some radios, a button and the field for adding story
    var myHTMLDiv = document.createElement("div"); //create a new division
    var myHTMLElem = document.createElement("label"); //creata a new label
    myHTMLElem.setAttribute("for","customname"); //add attribute 'for' to 'customname'
    myHTMLElem.appendChild(document.createTextNode("Enter a custome name:")); //add text node to label
    myHTMLElem.setAttribute("style", "font-weight:bold"); 
    myHTMLDiv.appendChild(myHTMLElem); //put the label into the div

    myHTMLElem = document.createElement("input");
    myHTMLElem.setAttribute("type","text");
    myHTMLElem.setAttribute("id","customname");
    myHTMLElem.setAttribute("placeholder","Type a name here ...");
    myHTMLDiv.appendChild(myHTMLElem);

    myFieldToAdd.appendChild(myHTMLDiv);

      //another div holding some radios
    myHTMLDiv = document.createElement("div");
    myHTMLElem = document.createElement("label");
    myHTMLElem.setAttribute("for","us");
    myHTMLElem.appendChild(document.createTextNode("US")); //add text node to label
    myHTMLDiv.appendChild(myHTMLElem); //put the label into the div

    myHTMLElem = document.createElement("input");
    myHTMLElem.setAttribute("type","radio");
    myHTMLElem.setAttribute("id","us");
    myHTMLElem.setAttribute("name","sius");
    myHTMLElem.setAttribute("value","us");
    myHTMLElem.setAttribute("checked","true");

    myHTMLDiv.appendChild(myHTMLElem);
    myHTMLElem = document.createElement("label");
    myHTMLElem.setAttribute("for","si");
    myHTMLElem.appendChild(document.createTextNode("SI"));
    myHTMLDiv.appendChild(myHTMLElem);

    myHTMLElem = document.createElement("input");
    myHTMLElem.setAttribute("type","radio");
    myHTMLElem.setAttribute("id","si");
    myHTMLElem.setAttribute("name","sius");
    myHTMLElem.setAttribute("value","si");
    myHTMLDiv.appendChild(myHTMLElem);

    myFieldToAdd.appendChild(myHTMLDiv);

      //another div holding button
    myHTMLDiv = document.createElement("div");
    myHTMLElem = document.createElement("button");
    myHTMLElem.setAttribute("class","randomize");
    myHTMLElem.appendChild(document.createTextNode("Generate random story"));
    myHTMLElem.addEventListener("click",myFnc11result)
    myHTMLDiv.appendChild(myHTMLElem);

    myFieldToAdd.appendChild(myHTMLDiv);

      //a <p> holding the story
    myHTMLElem = document.createElement("p");
    myHTMLElem.setAttribute("class","story");
        //some styles ^^
    myHTMLElem.setAttribute("style", 
        "background:#FFC125;" +
        "color:#5E2612;" +
        "padding:10px;" +
        "visibility:hidden;" +
        "width:75%;" +
        "");
    myHTMLDiv.appendChild(myHTMLElem);
    
}

function myFnc11result(){
    myObjBG.alreadyGo = "myFn11result"; myUpdateBGProg();
    var customName = document.getElementById("customname");
    var randomize = document.querySelector(".randonize");
    var story = document.querySelector(".story");

    var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    var insertY = ["the soup kitchen", "Disneyland", "the White House"];
    var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    var newStory = storyText.replace(/:insertx:/g,xItem);
    newStory = newStory.replace(/:inserty:/g,yItem);
    newStory = newStory.replace(/:insertz:/g,zItem);

    if(customName.value != ""){
        var name = customName.value;
        newStory = newStory.replace(/Bob/g,name);
    }

    if(document.getElementById("si").checked){
        var weight = Math.round(convertPoundUStoKg(300));
        newStory = newStory.replace(/300/,weight);
        newStory = newStory.replace(/pounds/,"kgs");

        var temp = Math.round(convertFtoC(94));
        newStory = newStory.replace(/94/,temp);
        newStory = newStory.replace(/farenheit/,"celcius");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';

}

function randomValueFromArray(array){
    return array[myRandom(array.length)];
}

function convertFtoC(tempF){
    return((tempF-32)*5/9);
}
function convertPoundUStoKg(PoundUS){
    return(PoundUS*0.45359237);
}

///////////////////////// Some re-usable functions /////////////////////
function myRandom(number){
    return Math.floor(Math.random()*number)
}