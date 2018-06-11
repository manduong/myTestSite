console.log("My script is going to be loaded");

var allForms = document.getElementsByTagName("form");

//declaration and trig the form validator
(function(){ //execute righ away
  var tgtFormName = "testForm1";
  var validator = new FormValidator(tgtFormName, [
  {
    name: 'requiredField',
    display: 'required text',
    rules: 'required'
  },
  {
    name: 'alphanumericField',
    display: 'AlphaNumeric',
    rules: 'alpha_numeric'
  },
  {
    name: 'passwordField',
    rules: 'required'
  },
  {
    name: 'passwordConfirmField',
    display: 'password confirmation',
    rules: 'required|matches[passwordField]'
  },
  {
    name: 'emailField',
    rules: 'valid_email',
    depends: function() {
        return Math.random() > .5;
    }
  },
  {
    name: 'minlengthField',
    display: 'min length field',
    rules: 'min_length[8]'
  },
  {
    name: 'mustCheckbox',
    display: 'The Must-Check Box',
    rules: 'required'
  }
], function(errors, event) {

    var [ errorBox, successBox ] = findResultBox(tgtFormName);

    if (errors.length > 0) {
        // Show the errors to the field holding them
        if(errorBox !== null){
          errorBox.innerHTML = "";
          for(var i = 0, errorLength=errors.length; i<errorLength; i++){
            errorBox.innerHTML += errors[i].message + "<br>";
          }
          successBox.style.display = "none";     
          errorBox.style.display = "block";     
        }else{
          alert("Detect error when validating the form, but cannot find the errorBox, form-name="+tgtFormName+" #error="+errors.length)
        }

      // The preventDefault() method cancels the event if it is cancelable, 
      //    meaning that the default action that belongs to the event will not occur.
      // For example, this can be useful when:
      //   Clicking on a "Submit" button, prevent it from submitting a form
      //   Clicking on a link, prevent the link from following the URL
      // Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.
      // Note: The preventDefault() method does not prevent further propagation of an event through the DOM. 
      //       Use the stopPropagation() method to handle this.  
      if (event && event.preventDefault) {
        event.preventDefault();
      } else if (event) {
        event.returnValue = false;
      }

    }else{
      if(successBox !== null){
        successBox.innerHTML = "Good to go, pro.";
        errorBox.style.display = "none";
        successBox.style.display = "block";     
      }else{
        //donothing
      }

      //due to no real submission, the preventDefault turn off to send over internet
      if (event && event.preventDefault) {
        event.preventDefault();
      } else if (event) {
        event.returnValue = false;
      }
      //remove above code if using to send over internet (using submit)
    }
  });
})();

function findResultBox(tgtFormName){
  var errorBox = null;
  var successBox = null;
  for(var i=0, tgtLength=allForms.length;i<tgtLength;i++){
    if( allForms[i].getAttribute("name") === tgtFormName){
      var theFatherDiv = allForms[i].parentNode;
      //sweep all child node to find the error div
      for(var j=0, tgtLength2 = theFatherDiv.childNodes.length;j<tgtLength2;j++){
        //
        if(theFatherDiv.childNodes[j].nodeName === "DIV"){
          if(      theFatherDiv.childNodes[j].getAttribute("class") === "errorBox"){
            errorBox = theFatherDiv.childNodes[j];
          }else if(theFatherDiv.childNodes[j].getAttribute("class") === "successBox"){
            successBox = theFatherDiv.childNodes[j];
          }else{
            //do nothing
          }
        }else{
          //do nothing
        }
      }
    }else{
      //donothing
    }
  }
  return [errorBox, successBox ];
}

function clearTheBoxes(tgtFormName){
  var [errorBox, successBox ] = findResultBox(tgtFormName);
  if(errorBox !== null){
    errorBox.innerHTML="If this displays, then document is broken";
    errorBox.style.display="none";
  }else{
    //do nothing
  }

  if(successBox !== null){
    successBox.innerHTML="If this displays, then document is broken";
    successBox.style.display="none";
  }else{
    //do nothing
  }
}