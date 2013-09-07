
function hideAllErrors(){

document.getElementById("firstNameError").style.display = "none";
document.getElementById("lastNameError").style.display = "none";
document.getElementById("emailAddressError").style.display = "none";
document.getElementById("emailAddress2Error").style.display = "none";
document.getElementById("useridError").style.display = "none";
document.getElementById("passwordError").style.display = "none";
document.getElementById("password2Error").style.display = "none";
document.getElementById("phraseIdentifierError").style.display = "none";
document.getElementById("phraseError").style.display = "none";
document.getElementById("phrase2Error").style.display = "none";
document.getElementById("termsAndConditionsError").style.display = "none";

}

var errors = [];
function submitForm(){
	hideAllErrors();
	errors = [];
	if (!checkSelect (document.custReg.phraseIdentifier.value)) {
		errors[errors.length] = ["phraseIdentifierError", "phraseIdentifier"];
		document.getElementById("phraseIdentifierError").innerHTML = "You must choose a secret question.<br />";
		document.custReg.phraseIdentifier.focus();
	}

	if (!checkCheckBox (document.custReg.termsAndConditions.value)) {
		errors[errors.length] = ["termsAndConditionsError", "termsAndConditions"];
		document.getElementById("termsAndConditionsError").innerHTML = "Please check the box to indicate you have accepted FPL's Terms and Conditions.<br/>";
		document.custReg.termsAndConditions.focus();
	}

	if (!(document.custReg.phrase.value == document.custReg.phrase2.value))	{
		errors[errors.length] = ["phrase2Error", "phrase2"];
		document.getElementById("phrase2Error").innerHTML = "Answers must match.<br/>";
		document.custReg.phrase2.focus();
	}

	if (!checkAlphanumericRequired (document.custReg.phrase.value)) {
		errors[errors.length] = ["phraseError", "phrase"];
		document.getElementById("phraseError").innerHTML = "Please type the answer to your secret question.<br/>";
		document.custReg.phrase.focus();
	}

	if (!(document.custReg.password.value == document.custReg.password2.value)){
		errors[errors.length] = ["password2Error", "password2"];
		document.getElementById("password2Error").innerHTML = "Passwords must match.<br/>";
		document.custReg.password2.focus();
	}

	if (!checkAlphanumericRequired (document.custReg.password.value)) {
		errors[errors.length] = ["passwordError", "password"];
		document.getElementById("passwordError").innerHTML = "Password cannot contain special characters.<br/>";
		document.custReg.password.focus();
	}
	
	if(!validate.isAlphanumeric(document.custReg.password.value))
	{
		errors[errors.length] = ["passwordError", "password"];
		if (errorCheck == 1){
			document.getElementById("passwordError").innerHTML = "Password must contain at least 1 letter.<br/>";
		} else {
			document.getElementById("passwordError").innerHTML = "Password must contain at least 1 number.<br/>";
		}     
		document.custReg.password.focus();    
	}
	
	if (!validateUserIdPwLength825 (document.custReg.password.value)) {
		errors[errors.length] = ["passwordError", "password"];
		document.getElementById("passwordError").innerHTML = "Password must be 8-25 characters.<br/>";
		document.custReg.password.focus();
	}
	
	
	if (!checkAlphanumericRequired (document.custReg.userid.value)) {
		errors[errors.length] = ["useridError", "userid"];
		document.getElementById("useridError").innerHTML = "User ID cannot contain special characters.";
		document.custReg.userid.focus();
	}

	if (!validateUserIdPwLength625 (document.custReg.userid.value)) {
		errors[errors.length] = ["useridError", "userid"];
		document.getElementById("useridError").innerHTML = "User ID must be 6-25 characters.<br/>";
		document.custReg.userid.focus();
	}

	if (!(document.custReg.emailAddress.value == document.custReg.emailAddress2.value)){
		errors[errors.length] = ["emailAddress2Error", "emailAddress2"];
		document.getElementById("emailAddress2Error").innerHTML = "email address must match.<br/>";
		document.custReg.emailAddress2.focus();
	}

	if (!isEmailAddr (document.custReg.emailAddress.value)){
		errors[errors.length] = ["emailAddressError", "emailAddress"];
		document.getElementById("emailAddressError").innerHTML = "Please enter a valid email address.<br/>";
		document.custReg.emailAddress.focus();
	}

	if (!checkForName (document.custReg.lastName.value)) {
		errors[errors.length] = ["lastNameError", "lastName"];
		document.getElementById("lastNameError").innerHTML = "Please enter your last name.<br/>";
		document.custReg.lastName.focus();
	}

	if (!checkForName (document.custReg.firstName.value)) {
		errors[errors.length] = ["firstNameError", "firstName"];
		document.getElementById("firstNameError").innerHTML = "Please enter your first name.<br/>";
		document.custReg.firstName.focus();
	}

	if (errors.length > 0) {
			reportErrors(errors);
			return false;
	}
}

function validateUserIdPwLength625(fieldValue){
	if ((fieldValue.length < 6) || (fieldValue.length > 25))
	{
	  return false;
	}
	return true;
}
function stripwww()
{
  var inputField = document.custReg.emailAddress.value.toLowerCase();
  while (inputField.indexOf("www.") != -1)
	{
	  inputField = (inputField.substring(0,inputField.indexOf("www.")) + inputField.substring(inputField.indexOf("www.")+4) );
	}
  document.custReg.emailAddress.value =  inputField;
}

function stripwww2()
{
  var inputField = document.custReg.emailAddress2.value.toLowerCase();
  while (inputField.indexOf("www.") != -1)
	{
	  inputField = (inputField.substring(0,inputField.indexOf("www.")) + inputField.substring(inputField.indexOf("www.")+4) );
	}
  document.custReg.emailAddress2.value =  inputField;
}
function trimspaces(field)
{
  var x
  var precount = 0;
  var postcount = 0;
  var retfield = ""
  for (x=0;x<field.length;x++)
	{
	  if (field.charAt(x) == " " )
	  precount++;
	  else
	  break;
	}
  for ( x=field.length; x>0; x-- )
	{
	  if (field.charAt(x-1) == " " )
	  postcount++;
	  else
	  break;
	}
  if (field.length == precount)
  retfield = "";
  else
  retfield = field.substring(precount,(field.length-postcount));
  return retfield;
}