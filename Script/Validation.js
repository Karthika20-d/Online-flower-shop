var cardFlag=false;
var codeFlag=false;
var dateFlag=false;
var nameFlag=false;
var zipFlag=false;
var addressFlag=false;
var cityFlag=false;
var numberFlag=false;
var mailFlag=false;

function Validation(){
//validate whether the values are null
ValidateCard();
ValidateSecurityCode();
ValidateExpiryDate();
ValidateName() ;
ValidateZipCode();
ValidateAddress();
ValidateCity();
ValidatePhoneNo();
ValidateEmail();

if(cardFlag && codeFlag && dateFlag && nameFlag && zipFlag && addressFlag && cityFlag && numberFlag && mailFlag) {
alert("Payment successfull");
}
}

function ValidateCard() {
//validate card number
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardno = document.getElementById("card");
    if(!cardno.value.match(regex)){
	document.getElementById("validCard").innerHTML="Card number is invalid!";
	cardFlag=false;
				
    }
    else{
	document.getElementById("validCard").style.display="none";
	cardFlag=true;
	
}			
}
function ValidateSecurityCode(){
//validate security code
    var code = document.getElementById("code");
    var regex = /[0-9][0-9][0-9]/;
    if (!code.value.match(regex)) {
       document.getElementById("validCode").innerHTML="Security code is invalid!";
	codeFlag=false;
    }
    else{
	document.getElementById("validCode").style.display="none";
	codeFlag=true;
}
}
function ValidateExpiryDate(){
//validate expiry date
 var month = document.getElementById("month").selectedIndex;
    var year = document.getElementById("year").selectedIndex;
 	if (month=="0" || year=="0") {
	document.getElementById("validDate").innerHTML= "Enter expiry date"; 
	dateFlag=false;
    }
    else{
	document.getElementById("validDate").style.display="none";
	dateFlag=true;
}
}
function ValidateName() {
//validate name
    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.value.match(regex)) {
       document.getElementById("validName").innerHTML= "Name is invalid!"; 
	nameFlag=false;
    }
    else{
	document.getElementById("validName").style.display="none";
	nameFlag=true;
}
}

function ValidateZipCode() {
//validate zip code
    var zip = document.getElementById("zip");
    var regex = /[0-9]{6}/;
    if (!zip.value.match(regex)) {
       document.getElementById("validZip").innerHTML= "Zip code is invalid!"; 
	zipFlag=false;
    }
    else{
	document.getElementById("validZip").style.display="none";
	zipFlag=true;
}
}
function ValidateAddress() {
//validate address
    var address = document.getElementById("address");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!address.value.match(regex)) {
	document.getElementById("validAddress").innerHTML= "Enter valid address"; 
	addressFlag=false;
    }
    else{
	document.getElementById("validAddress").style.display="none";
	addressFlag=true;
}
}
function ValidateCity() {
    var city = document.getElementById("city");
    var regex = /^[A-Za-z]+$/;
    if (!city.value.match(regex)) {
       document.getElementById("validCity").innerHTML= "Enter valid city"; 
	cityFlag=false;
    }
    else{
	document.getElementById("validCity").style.display="none";
	cityFlag=true;
}
}
function ValidatePhoneNo() {
//validate phone number
    var number = document.getElementById("phone");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!number.value.match(regex)) {
       document.getElementById("validNumber").innerHTML= "Enter valid number"; 
	numberFlag=false;
    }
    else{
	document.getElementById("validNumber").style.display="none";
	numberFlag=true;
}
}

function ValidateEmail() {
//validate mail 
    var mail = document.getElementById("mail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.value.match(regex)) {
	document.getElementById("validMail").innerHTML= "Enter valid mail"; 
	mailFlag=false;
    }
    else{
	document.getElementById("validMail").style.display="none";
	mailFlag=true;
}
}