 console.log("start the script, go...")

 //some global variables control everything
 var myGlobObj = {};
 myGlobObj.database = {}; //database that the document is holding
 myGlobObj.searchReturnData = null; //returned searching items
 myGlobObj.maxItemDisplay = 10 ; //maximum number of items to be displayed in 1 block
 myGlobObj.curBlockDisplay = 1; //current block of displaying items
 myGlobObj.searchReturnDisplay = document.getElementById("searchreturn"); //the field to display the result
 myGlobObj.usrChooseBlockToGoDisplay = document.getElementById("dispBlockToGo");
 myGlobObj.maxDispCharBody = 50; //maxinum number of characters the body should be firstly displayed to be short
 myGlobObj.indexForSearch = null; //holding the index initialized by elasticlunr

//register the function
function myMain (database){
  //database is the one in the JSON Function Files
  myGlobObj.database = database; //load at first time

  myGlobObj.maxItemDisplay = document.getElementById("formUsrChooseMaxItemPerPage").usrChooseMaxItemPerPage.value ; //maximum number of items to be displayed in 1 block

  //1st display, full database is printed out
  myDisplay(myGlobObj.searchReturnDisplay, 
            myGlobObj.database, 
            myGlobObj.searchReturnData,
            myGlobObj.maxItemDisplay,
            myGlobObj.curBlockDisplay);
  
  //register some functions vs. events
  //+ register the event onchange for the formUserChooseMaxItemParPage
  //    update the current maxItemPerPage, reset the display to 1st block
  var theForm = document.getElementById("formUsrChooseMaxItemPerPage");
 if(theForm.getAttribute("onchange") === null){
    theForm.addEventListener("change", function(){
      myGlobObj.maxItemDisplay = document.getElementById('formUsrChooseMaxItemPerPage').usrChooseMaxItemPerPage.value;
      myDisplay(myGlobObj.searchReturnDisplay,
                myGlobObj.database,
                myGlobObj.searchReturnData,
                myGlobObj.maxItemDisplay, 1)})
  }else{
    //leave the event, the code may change from this first code
  }

  //+register the event click for the All button
  //   display all the items in database, clear the search bar and search result
  //     =>already registered in the document html

  //+register the event click for the Search button
  //   perform searching, display all the returned arrays
  //     =>already registered in the document html

  //+register the submitting activity for the form holding Search input text
  //   perform searching, display all the returned arrays, disable the submit action
  var theSearchForm = document.getElementById("searchbar");
  theSearchForm.addEventListener("submit",function(event){
    //perform search
    myPerformSearch();

    //prevent the submission
    if (event && event.preventDefault) {
      event.preventDefault();
    } else if (event) {
      event.returnValue = false;
    }
  }
  );

}

//Sub-funtions used in myMain
function myPerformAll(){
  var theSearchBar = document.getElementById("searchbar"); //as this document, it's a form without submit

  //reset the text
  theSearchBar.search.value = "";

  //reset some global and in-time variables
  myGlobObj.searchReturnData = null;
  myGlobObj.curBlockDisplay = 1; //current block of displaying items

  //call the display for all database
  myDisplay(myGlobObj.searchReturnDisplay, 
    myGlobObj.database, 
    myGlobObj.searchReturnData,
    myGlobObj.maxItemDisplay,
    myGlobObj.curBlockDisplay);
    
}

function myPerformSearch(){
  var theSearchBar = document.getElementById("searchbar"); //as this document, it's a form without submit
  var searchWord = theSearchBar.search.value;

  //perform the search to get the data (default search by Elasticlunr)
  if(myGlobObj.indexForSearch === null){
    //initialize index for searching by elasticlunr, it may take long (everytime)
    //  this only do the firsttime, the variable will take space as long as database, this may consume resource much
    myGlobObj.indexForSearch = elasticlunr(function() {
      this.addField('title');
      this.addField('body');
      this.addField('id');
      this.addField('href');
    });

    //add documents to the index from database, searching is based on title, body and return the id
    for (var i=0,maxLdatabase=myGlobObj.database.questions.length;i<maxLdatabase;i++){
      var docToBeAdd = {
        "id": myGlobObj.database.questions[i].question_id,
        "title": myGlobObj.database.questions[i].title,
        "body": myGlobObj.database.questions[i].body,
        "href": "#"
      };
      myGlobObj.indexForSearch.addDoc(docToBeAdd);
    }

    console.log("All index for search")
    console.log(myGlobObj.indexForSearch)

  }else{
    //only do when needed, here, from the 2nd time (already existed, the initialization is not needed any more)
  }

  //perform the search based on keyword, the keyword may be processed to give the customized search
  if(searchWord !== ""){
    console.log("doing the searching for "+searchWord+"... data returned")
    myGlobObj.searchReturnData = myGlobObj.indexForSearch.search(searchWord, {
      "fields": {
        "title": {"boost" : 3},
        "body":  {"boost" : 2},
        "href":  {"boost" : 1}
      }
    });
    console.log(myGlobObj.searchReturnData) 
  }else{
  }


  //reset some global and in-time variables
  myGlobObj.curBlockDisplay = 1; //current block of displaying items

  //call the display for all database
  myDisplay(myGlobObj.searchReturnDisplay, 
    myGlobObj.database, 
    myGlobObj.searchReturnData,
    myGlobObj.maxItemDisplay,
    myGlobObj.curBlockDisplay);

}

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
  console.log("call myUpdateDispBlockToGo with: curBlock=" + curBlock + " maxDis="+maxDis+" totalItem="+totalItem)
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
  if(aoResult === null){
    //very first time, all data should be printed out
  }else if(aoResult.length === 0){
    //there is no returned items, no printout
    maxNum = 0;
  }else{
    //do the search
    //update the realArrData
    realArrData = aoResult; //notice: the aoResult and database have different structure
  }

  var maxNum = realArrData.length;//depend on the structure of data
  var totalItem = maxNum;

  //manipulate and print the returned items
  if(maxNum < maxDis*curBlock){

    //print until the end of maxNum
  }else{
    maxNum = maxDis*curBlock;//starting from 0, so that the last will be -1
  }

  //sweep the array of result
  for(var i=0+(curBlock-1)*maxDis;i < maxNum;i++){
    console.log("curBlock="+curBlock+"maxnum="+maxNum+"i="+i+">>>>")
    var theDoc = realArrData[i];
    //should have at least 4 following keywords: href, id, title, body
    console.log(theDoc)
    //Notice: aoResult and database have different structure, need to seperated
    var href = null;
    var theId = null;
    var title = null;
    var brief = null;
    if(aoResult === null){
      href=theDoc.href;
      theId=theDoc.id;
      title=theDoc.title;
      brief=theDoc.body;
    }else{
      href=theDoc.doc.href;
      theId=theDoc.doc.id;
      title=theDoc.doc.title;
      brief=theDoc.doc.body;
    } 
    //gen the Element
    var tgtEle = myCreateAnItemToDisplay(href, theId, title, brief);

    //put the the document
    dispLoc.appendChild(tgtEle);
  }

  //update statistic as the first elementin dispLoc

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
  console.log("  >>>go curBlock="+curBlock+" maxItem/Block="+maxItemPerBlock+" total="+totalItem)
  var topNum = 1;

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
    var tmpNum = totalItem/maxItemPerBlock;
    topNum = Number.parseInt(tmpNum);
    if(tmpNum > topNum){ topNum += 1; }else{ }
    if(topNum===0){
      topNum = 1;
    }
    for (var i=1;i<=topNum;i++){
      var theEle = document.createElement("span");
      if(i === curBlock){
        theEle.setAttribute("class","blockToGo curBlock");
      }else{
        theEle.setAttribute("class","blockToGo");
      }
      // theEle.setAttribute("onclick","myDisplay(myGlobObj.searchReturnDisplay, myGlobObj.database, myGlobObj.searchReturnData, myGlobObj.maxItemDisplay, " + i + ")");
      //Notice: below is a very specific technique to pass some variable by value (not by reference) via "closure" feature of JavaScript
      //        see more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
      theEle.addEventListener("click",function(i){
        return function(){
          myDisplay(myGlobObj.searchReturnDisplay,
                    myGlobObj.database,
                    myGlobObj.searchReturnData,
                    myGlobObj.maxItemDisplay,
                    i);
        }}(i)
      );

      theEle.innerHTML = "page " + i;

      dispLoc.appendChild(theEle);

      var dummyEle = document.createElement("span");
      dummyEle.innerHTML = " ";
      dispLoc.appendChild(dummyEle);
    }
  }

  //update global variable
  myGlobObj.curBlockDisplay = curBlock;
}


console.log("end the script, done...")