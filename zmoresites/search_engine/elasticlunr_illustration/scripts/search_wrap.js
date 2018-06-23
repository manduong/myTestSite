 console.log("start the script, go...")

 //some global variables control everything
 var myGlobObj = {};
 myGlobObj.database = {}; //database that the document is holding
 myGlobObj.searchReturnData = null; //returned searching items
 myGlobObj.maxItemDisplay = document.getElementById("formUsrChooseMaxItemPerPage").usrChooseMaxItemPerPage.value ; //maximum number of items to be displayed in 1 block
 myGlobObj.curBlockDisplay = 1; //current block of displaying items
 myGlobObj.searchReturnDisplay = document.getElementById("searchreturn"); //the field to display the result
 myGlobObj.usrChooseBlockToGoDisplay = document.getElementById("dispBlockToGo");
 myGlobObj.maxDispCharBody = 50; //maxinum number of characters the body should be firstly displayed to be short

//register the function
function myMain (database){
  //database is the one in the JSON Function Files
  myGlobObj.database = database; //load at first time

  //1st display, full database is printed out
  myDisplay(myGlobObj.searchReturnDisplay, 
            myGlobObj.database, 
            myGlobObj.searchReturnData,
            myGlobObj.maxItemDisplay,
            myGlobObj.curBlockDisplay);
            console.log("ALOHAAA")

  //register some functions vs. events
  // myUpdateDispBlockToGo(myGlobObj.usrChooseBlockToGoDisplay,
  //                       myGlobObj.curBlockDisplay, 
  //                       myGlobObj.maxItemDisplay,
  //                       totalItem);
}

//Sub-funtions used in myMain
function myDisplay(dispLoc, data, aoResult, maxDis, curBlock){
  var totalItem = 0;
  //clear the content of dispLoc (or displaying Location)
  if(dispLoc.hasChildNodes){
    while(dispLoc.firstChild){
      dispLoc.removeChild(dispLoc.firstChild)
    }
  }

  if(data.type === "simpleTest"){
    totalItem = myDispSimpleTest(dispLoc, data, aoResult, maxDis, curBlock);
  }else{
    totalItem = myDispTheData(dispLoc, data, aoResult, maxDis, curBlock);
  }

  //callback to dispBlockToGo
  myUpdateDispBlockToGo(
    myGlobObj.usrChooseBlockToGoDisplay,
    curBlock, 
    maxDis,
    totalItem);

}

//Simple Test
function myDispSimpleTest(dispLoc, data, aoResult, maxDis, curBlock){
  
  //this function is very close related to the database structure
  var realData = data.database;
  var maxNum = realData.length;//depend on the structure of data
  var totalItem = maxNum;

  if(aoResult === null){
    //very first time, all data should be printed out
  }else if(aoResult.length===0){
    //there is no returned items, no printout
    maxNum = 0;
  }else{
    //manipulate and print the returned items
    if(maxNum < maxDis*curBlock){
      //print until the end of maxNum
    }else{
      maxNum = maxDis*curBlock;
    }
  }

  //sweep the array of result
  for(var i=0+(curBlock-1)*maxDis;i<maxNum;i++){
    var theDoc = realData[i];
    //should have at least 4 following keywords: href, id, title, body
    var href = theDoc.href;
    var theId = theDoc.id;
    var title = theDoc.title;
    var brief = theDoc.body;

    //gen the Element
    var tgtEle = myCreateAnItemToDisplay(href, theId, title, brief);

    //put the the document
    dispLoc.appendChild(tgtEle);
  }

  return totalItem;
}

//Working with real data
function myDispTheData(dispLoc, data, aoResult, maxDis, curBlock){
    
  //this function is very close related to the database structure
  var realArrData = data.questions;
  var maxNum = realArrData.length;//depend on the structure of data
  var totalItem = maxNum;

  if(aoResult === null){
    //very first time, all data should be printed out
  }else if(aoResult.length === 0){
    //there is no returned items, no printout
    maxNum = 0;
  }else{
    //do the search
  }

  //manipulate and print the returned items
  if(maxNum < maxDis*curBlock){
    //print until the end of maxNum
  }else{
    maxNum = maxDis*curBlock;
  }

  //sweep the array of result
  for(var i=0+(curBlock-1)*maxDis;i<maxNum;i++){
    var theDoc = realArrData[i];
    //should have at least 4 following keywords: href, id, title, body
    var href = theDoc.href;
    var theId = theDoc.id;
    var title = theDoc.title;
    var brief = theDoc.body;

    //gen the Element
    var tgtEle = myCreateAnItemToDisplay(href, theId, title, brief);

    //put the the document
    dispLoc.appendChild(tgtEle);
  }

  return totalItem;
}

//////////////////////////////////////////
//Common used functions
function myCreateAnItemToDisplay(href, theId, title, body){
  var outEle = null;

  var tgtEle = document.createElement("li");
  tgtEle.setAttribute("id",theId);

  var eleTitle = document.createElement("h3");
  
  var eleLink = document.createElement("a");
  eleLink.setAttribute("href",href);
  eleLink.setAttribute("target","_blank");
  eleLink.innerHTML = title;
  eleTitle.appendChild(eleLink);

  //brief info should be manipulated to shorten the display
  var shortenBrief = myShortenContent(body,myGlobObj.maxDispCharBody);
  // var eleBrief = document.createElement("p");
  var eleBrief = document.createElement("div");
  eleBrief.setAttribute("class","itemBody");
  eleBrief.innerHTML = shortenBrief;

  tgtEle.appendChild(eleTitle);      
  tgtEle.appendChild(eleBrief);

  return tgtEle;
}

function myShortenContent(info,maxChar){
  var outInfo = info;

  return outInfo;
}

//
function myUpdateDispBlockToGo(dispLoc, curBlock, maxItemPerBlock, totalItem) {
  var topNum = 1;
  var botNum = 1;

  //clear all the dispLoc
  if(dispLoc.hasChildNodes){
    while(dispLoc.firstChild){
      dispLoc.removeChild(dispLoc.firstChild)
    }
  }else{}

  //
  if(totalItem === 0){
    //do nothing
  }else{
    topNum = Number.parseInt(totalItem/maxItemPerBlock);
    if(topNum===0){
      topNum = 1;
    }
    for (var i=1;i<=topNum;i++){
      console.log(i)
      var theEle = document.createElement("span");
      if(i === curBlock){
        theEle.setAttribute("class","blockToGo curBlock");
      }else{
        theEle.setAttribute("class","blockToGo");
      }
      theEle.setAttribute("onclick","myDisplay(myGlobObj.searchReturnDisplay, myGlobObj.database, myGlobObj.searchReturnData, myGlobObj.maxItemDisplay, " + i + ")");

      theEle.innerHTML = "page " + i;

      dispLoc.appendChild(theEle);

      var dummyEle = document.createElement("span");
      dummyEle.innerHTML = " ";
      dispLoc.appendChild(dummyEle);
    }
  }

  console.log("ALOHA")
  console.log(topNum)
}

console.log("end the script, done...")