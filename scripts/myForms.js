"use strict";
const DBG=1;

var leftAside = document.getElementsByClassName("leftAside")[0];
var formList = document.getElementsByTagName('form');

////////////////////////////////////////////////////////////////////////////////////////
// scroll-down affect to aside navigator
window.onscroll = function(){
  // var currentScrollPos = window.pageYOffset;
  // if(currentScrollPos > 120){
  //   leftAside.style.top = 0;
  // }else{
  //   leftAside.style.top="120px";
  // }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    leftAside.style.top="0";
  } else {
    leftAside.style.top="143px";
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//for all form tags, get all the h* to be shown as brief information when hover-ing
//reset the aside leftAside
if(leftAside && leftAside.innerHTML){
  var sweepID = leftAside.firstElementChild;
  var nextID = sweepID;
  while(nextID !== null){
    nextID = sweepID.nextElementSibling;
    if(sweepID.nodeName === "A" ||
       sweepID.nodeName === "a"){
      leftAside.removeChild(sweepID)
    }else{
    }
    sweepID = nextID;
  }
}else{
  var newID = document.createElement("H2");
  newID.textContent = "Markers";
  leftAside.appendChild(newID);
}

//get info from all form, and add to leftAside
for(var i=0;i<= formList.length-1;i++){
  var theStr = "";
  var tgtForm = formList[i]; //travelling the DOM
  var tmpID = tgtForm;
  while(tmpID !== null){
    if(tmpID.nodeName === "H2" ||
       tmpID.nodeName === "h2"){
        theStr = theStr.concat(tmpID.textContent,"\n");
    }else if(tmpID.nodeName === "H3" ||
             tmpID.nodeName === "h3"){
      theStr = theStr.concat("  ",tmpID.textContent,"<br>");
    }else{
    }
    tmpID = tmpID.previousElementSibling;
  }
  if(theStr === "") {theStr = "No brief info.";}

  if(theStr){
    var newID = document.createElement("A");
    if(tgtForm.parentElement.id){
      newID.setAttribute("href","#".concat(tgtForm.parentElement.id));
    }else if(tgtForm.id){
      newID.setAttribute("href","#".concat(tgtForm.id));
    }else{
      tgtForm.setAttribute("id","myNewID".concat(i));
      newID.setAttribute("href","#"+tgtForm.id);
    }

    newID.textContent = newID.getAttribute("href");

    var childExplanation = document.createElement("span");
    childExplanation.setAttribute("class","markerBriefInfo");
    childExplanation.textContent = theStr;
    
    newID.appendChild(childExplanation);

    leftAside.appendChild(newID);
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//form 8, handle the custom error validation
// There are many ways to pick a DOM node; here we get the form itself and the text
// input box, as well as the span element into which we will place the error message.
var form8 = formList[7];
var tgtInput8 = document.getElementById('f8s1_01');
var outError8 = tgtInput8.nextElementSibling;
outError8.innerHTML = "";

for(var i=0; i<= formList.length-1; i++){
    if(formList[i].getAttribute("action") == "#form8"){
        form8 = formList[i];
    }
}

tgtInput8.addEventListener("input",
  function(event){
  // Each time the user types something, we check if the
  // text field is valid.
    if (tgtInput8.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      outError8.innerHTML = ""; // Reset the content of the message
      outError8.className = "error"; // Reset the visual state of the message
    }
  }
, false);

form8.addEventListener("submit",
  function (event) {
  // Each time the user tries to send the data, we check
  // if the text field is valid.
  if (!tgtInput8.validity.valid) {
    // If the field is not valid, we display a custom
    // error message.
    outError8.innerHTML = "Tôi muốn a-zA-Z thêm - và _, darling!";
    outError8.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);

////////////////////////////////////////////////////////////////////////////////////////
//form 9, use pure JavaScript to handle the form (input text widget) validation
// page self-validation requires a lot of JavaScript code, here is example
// dont hesitate to use others' code with free license
var form9 = formList[8];
var tgtInput9 = document.getElementById('f9s1_01');

// The following is a trick to reach the next sibling Element node in the DOM
// This is dangerous because you can easily build an infinite loop.
// In modern browsers, you should prefer using element.nextElementSibling
var outError9 = tgtInput9;
while ((outError9 = outError9.nextSibling).nodeType != 1);
// Simplify by this following
outError9 = tgtInput9.nextElementSibling;

outError9.innerHTML = ""; //reset the error's content

// specifically get the form by it's action
for(var i=0; i<= formList.length-1; i++){
    if(formList[i].getAttribute("action") == "#form9"){
        form9 = formList[i];
    }
}

//As per the HTML5 specification, using pattern to validate the input text
//var tgtRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //for an email
var tgtRegExp9 = /^[a-zA-Z_-]+$/; //for this example

// Many legacy browsers do not support the addEventListener method.
// Here is a simple way to handle this; it's far from the only one.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);

    // A callback that returns `false` stops the callback chain
    // and interrupts the execution of the event callback.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to 
// explicitly set the valid/invalid class on our email field
addEvent(window, "load", function () {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  var test = tgtInput9.value.length === 0 || tgtRegExp9.test(tgtInput9.value);

  tgtInput9.className = test ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
addEvent(tgtInput9, "input", function () {
  var test = tgtInput9.value.length === 0 || tgtRegExp9.test(tgtInput9.value);
  if (test) {
    tgtInput9.className = "valid";
    outError9.innerHTML = "";
    outError9.className = "error";
  } else {
    tgtInput9.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
addEvent(form9, "submit", function () {
  var test = tgtInput9.value.length === 0 || tgtRegExp9.test(tgtInput9.value);

  if (!test) {
    tgtInput9.className = "invalid";
    outError9.innerHTML = "Tôi muốn a-zA-Z thêm - và _, darling!";
    outError9.className = "error active";

    // Some legacy browsers do not support the event.preventDefault() method
    return false;
  } else {
    tgtInput9.className = "valid";
    outError9.innerHTML = "";
    outError9.className = "error";
  }
});

