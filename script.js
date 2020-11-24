"use strict"
var headerCol = document.getElementsByClassName("header")[0];
var middleCol = document.getElementsByClassName("middle")[0];
var leftCol = document.getElementsByClassName("left")[0];
var rightCol = document.getElementsByClassName("right")[0];

function createButton(btnID, textInside, clickAction, show) {
  var btnNode = document.createElement("button");
  var btnTextNode = document.createTextNode(textInside);
  btnNode.appendChild(btnTextNode);
  btnNode.setAttribute("id", btnID);
  btnNode.setAttribute("onclick", clickAction);
  if (show == false){
	//alert("HIDE BUTTON");
    btnNode.style.display = "none";
  } else if (show == "newLine"){
	//alert("SHOW BUTTON");
	btnNode.style.display = "block";
  }
  return btnNode;
}

function createForm(formID, show) {
  var formNode = document.createElement("div");
  formNode.setAttribute("id", formID);
  if (show == true){
    formNode.style.display = "block";
  } else {
	formNode.style.display = "none";
  }
  return formNode;
}

function formAddElement(formID, elemID, elemType, defaultVal, label){
  var currForm = document.getElementById(formID);
  var formElemNode = document.createElement("input");
  formElemNode.setAttribute("id", elemID);
  formElemNode.setAttribute("type", elemType);
  formElemNode.setAttribute("name", elemID);
  formElemNode.setAttribute("value", defaultVal);

  if (label != false){
    var formElemLabelNode = document.createElement("label");
    formElemLabelNode.setAttribute("for", elemID);
    formElemLabelNode.innerHTML = label;
    currForm.appendChild(formElemLabelNode);
  }
  currForm.appendChild(formElemNode);
  //<label for="uName">User Name:</label><br>
  //<input type="text" id="uName" name="uName" value="Alice"><br>
  return formElemNode
}

function displayWelcomePage() {
  //document.getElementsByClassName("header")[0].style.display = "block";
  var loginBtn = createButton("loginBtn", "Login", 'hideWelcomePage();displayLoginPage()', "newLine");
  var browseBtn = createButton("browseFreelyBtn", "Browse Freely", 'hideWelcomePage();displayTOS()', "newLine");
  //var loginBtnNode = document.createElement("BUTTON");
  //var loginTextNode = document.createTextNode("Login");
  //loginBtnNode.appendChild(loginTextNode);
  //var middleCol = document.getElementsByClassName("middle")[0];
  middleCol.appendChild(loginBtn);
  middleCol.appendChild(browseBtn);
}

function hideWelcomePage() {
  var loginBtn = document.getElementById('loginBtn')
  //loginBtn.style.size = 20;
  loginBtn.style.display = "none";
  var browseBtn = document.getElementById('browseFreelyBtn')
  browseBtn.style.display = "none";
  headerCol.style.display = "none";
  //document.getElementsByTagName("h1").style.display = "none";
}

function displayLoginPage() {
  headerCol.innerText = "Please Login:" ;
  headerCol.style.display = "block";
  //hideWelcomePage();
  //document.getElementById("loginForm").style.display = "block";
  var newLoginForm = createForm("loginForm", true);
  middleCol.appendChild(newLoginForm);
  /* adding labels and text boxes to the login form*/
  var uNameBox = formAddElement("loginForm", "uName", "text", "Alice", "User Name: ")
  uNameBox.autocomplete = true;
  //newLoginForm.appendChild("BR");
  formAddElement("loginForm", "pass", "password", "letMeIn!", "Password: ")

  var submitBtn = formAddElement("loginForm", "submitBtn", "submit", "LetMeIn!!!", false)
  submitBtn.setAttribute("onclick", 'displayUserAccount()');
  //var loginBtn = document.getElementById('loginBtn')
  //loginBtn.style.display = "block";

}

function displayUserAccount() {
  document.getElementById("loginForm").style.display = "none";
  //document.getElementById("welcomeHeader").innerHTML = "Welcome Back "+document.forms["loginForm"].elements["uName"].value;
  headerCol.innerText = "Welcome Back "+document.getElementById("uName").value;
  headerCol.style.display = "block";
}

function displayTOS() {
  //hideWelcomePage();
  headerCol.innerText = "Terms of Use:";
  headerCol.style.display = "block";

  //var terms = '<h1 id="terms" name="terms">"terms, terms,....., blah"</h1>';
  var termsNode = document.createElement("div");
  termsNode.setAttribute("id", "tosArea");
  middleCol.appendChild(termsNode);

  var agreeBtn = createButton("acceptBtn", "Accept", 'hideTOSPage();displayMapPage()', false);
  var termsTextNode = document.createElement("textarea");

  termsNode.appendChild(termsTextNode);
  termsNode.appendChild(agreeBtn);
  termsTextNode.readOnly = true;
  termsTextNode.style.resize = "none";
  termsTextNode.setAttribute("id", "tosText");
  termsTextNode.setAttribute("rows", "40vw");
  termsTextNode.setAttribute("cols", "160vw");
  termsTextNode.setAttribute("overflow-y", "scroll");
  termsTextNode.addEventListener("scroll", function() {
    //check if user has scrolled to the bottom of the T.O.S. before enabling the accept button
    var scrolledToBtm = (termsTextNode.scrollTop + termsTextNode.offsetHeight) > termsTextNode.scrollHeight;
    if (scrolledToBtm == true){
	  acceptBtn.style.display = "block"
    }
  });
  termsTextNode.innerHTML = "<pre>These are our terms of service.......<br>These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......These are our terms of service.......</pre>";

}

function hideTOSPage() {
  headerCol.style.display = "none";
  document.getElementById("tosArea").style.display = "none";
}

function displayMapPage() {
  headerCol.innerText = "Select Your Location: ";
  headerCol.style.display = "block";

  /*var locationSearchNode = document.createElement("div");
  locationSearchNode.setAttribute("id", "locationSearchArea");
  middleCol.appendChild(locationSearchNode);
  */

  var addressSearchForm = createForm("addressForm", true)
  middleCol.appendChild(addressSearchForm);
  /* adding address entry field and auto. location detect button to the addressForm*/
  var addressEntryBox = formAddElement("addressForm", "addressEntryBox", "text", "", false)
  addressEntryBox.setAttribute("class", "searchBox");
  addressEntryBox.placeholder = "Enter Delivery Address...";
  addressEntryBox.autocomplete = true;

  var gpsBtn = formAddElement("addressForm", "gpsBtn", "submit", "Use GPS", false)
  gpsBtn.setAttribute("onclick", 'displayMap();');
}

function displayMap() {
  var addressEntryBox = document.getElementById("addressEntryBox");
  addressEntryBox.setAttribute("value", "66 Chancellor\'s Circle Winnipeg, MB R3T 2N2");
  var mapImgNode = document.createElement("img");
  mapImgNode.setAttribute("src", "map.png");
  mapImgNode.setAttribute("alt", "University of Manitoba on Map of Winnipeg");
  var addressSearchForm = document.getElementById("addressForm");
  addressSearchForm.appendChild(mapImgNode);

  var submitBtn = formAddElement("addressForm", "submitBtn", "submit", "Continue", false)
  submitBtn.setAttribute("onclick", 'hideMapPage();displaySearchModeSelPage()');
}

function hideMapPage() {
  headerCol.style.display = "none";
  document.getElementById("addressForm").style.display = "none";
}

function displaySearchModeSelPage() {
  headerCol.innerText = "Preferred Search Mode: ";
  headerCol.style.display = "block";

  var discoverBtn = createButton("discoverBtn", "Discover", 'hideSearchModeSelPage();displayDiscoverPage()', "newLine")
  var findSpecificBtn = createButton("findSpecificBtn", "Find Something Specific", 'hideSearchModeSelPage();displayMealTargetCustPage()', "newLine")
  middleCol.appendChild(discoverBtn);
  middleCol.appendChild(findSpecificBtn);
}

function hideSearchModeSelPage() {
  headerCol.style.display = "none";
  document.getElementById("discoverBtn").style.display = "none";
  document.getElementById("findSpecificBtn").style.display = "none";
}

function displayDiscoverPage() {
  headerCol.innerText = "Welcome to Discovery Mode: ";
  headerCol.style.display = "block";
  var offersList = ["50% off!", "20% off!", "10% off!", "5% off!"];

  leftCol.style.visibility = "visible"
  var offersNode = document.createElement("div");
  offersNode.setAttribute("id", "offersArea");
  leftCol.appendChild(offersNode);

  for(var i = 0; i < offersList.length; i++)
  {
    var offerElemnt = document.createElement("img");
    offerElemnt.setAttribute("src", "map.png");
    offersNode.appendChild(offerElemnt);

    var offerElemntBtn = createButton("offerElemntBtn" + i, offersList[i], displayMap(), "newLine")
    offersNode.appendChild(offerElemntBtn);
  }


  rightCol.style.visibility = "visible"
}

function displayMealTargetCustPage() {
  headerCol.innerText = "Adjust You Targets/Preferences: ";
  headerCol.style.display = "block";
  leftCol.style.visibility = "visible"
  leftCol.innerHTML = "<u><b>Meal Manager</b></u>";
  rightCol.style.visibility = "visible"

  var allergyForm = createForm("allergyForm", true);
  middleCol.appendChild(allergyForm);
  /* adding labels and check boxes to the allergy form*/
  var allergyTitleNode = document.createElement("h4");
  allergyTitleNode.innerHTML = "<b>Select Any Allegies That Apply </b>"
  allergyForm.appendChild(allergyTitleNode);

  var allergies = ["soybeans", "peanuts", "tree nuts", "wheat", "shellfish", "milk", "eggs"]
  //var i;
  //var len = allergies.length;
  for (var i=0; i<allergies.length; i++){
	allergies[i] = formAddElement("allergyForm", allergies[i]+"ChkBox", "checkbox", allergies[i], allergies[i])
  }

  //var submitBtn = formAddElement("loginForm", "submitBtn", "submit", "LetMeIn!!!", false)
  //submitBtn.setAttribute("onclick", 'displayUserAccount()');
}
