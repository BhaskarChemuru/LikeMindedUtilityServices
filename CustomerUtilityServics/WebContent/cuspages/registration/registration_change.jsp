<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<HTML>
<%@ taglib prefix="wrapper" uri="../../cus/registration/wrapperTags" %>
<jsp:useBean class="com.fpl.ima.eca.viewbean.RegistrationChangeBean"
	id="viewBean" scope="request" />
<%@ page buffer="none" errorPage="../../cus/registration/error.jsp" session="false" %>
<%@ include file="../../cus/registration/methods.jsp" %>
<%response.setHeader("Cache-Control", "no-store");
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", -1);
%>
<wrapper:head appId="ECA_residential">
	<HEAD>
	<META NAME="WT.CurrentPage" CONTENT="EcaRegistrationChangePage">
	<META NAME="WT.ti" CONTENT="ECA Registration Change Page">
	<TITLE>FPL ECA Registration Change Page</TITLE>

	<!-- Master stylesheet for FPL.com -->
	<link href="<%=System.getProperty("external.appServer")%>/fplcommon/css/fpl.css"
		rel="stylesheet" type="text/css" media="screen" />
	<!-- Master stylesheet for FPL.com -->
	</HEAD>
</wrapper:head>
<wrapper:body appId="ECA_residential" templateType="body"
	attribute="onLoad='document.custReg.password.focus();'">
	<br>
</wrapper:body>
<BODY>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
var submitCounter = 0;
var errorCheck;
function submitIt(custReg)
{
  var pswd   = custReg.password.value;
  var cfn    = custReg.firstName.value;
  var cln    = custReg.lastName.value;
  var email  = custReg.emailAddress.value;
  var pInfo  = custReg.phraseIdentifier.value;
  var phrase = custReg.phrase.value;
  var phrase2 = custReg.phrase2.value;
  pswd = trimspaces(custReg.password.value);
  custReg.password.value = pswd;
  email = trimspaces(custReg.emailAddress.value.toLowerCase());
  var email2   = document.custReg.emailAddress2.value;
  var email2   = trimspaces(document.custReg.emailAddress2.value.toLowerCase());
  document.custReg.emailAddress2.value = email2;
  custReg.emailAddress.value = email;
  cfn = trimspaces(custReg.firstName.value);
  custReg.firstName.value = cfn;
  cln = trimspaces(custReg.lastName.value);
  custReg.lastName.value = cln;
  phrase = trimspaces(custReg.phrase.value);
  custReg.phrase.value = phrase;
  phrase2 = trimspaces(custReg.phrase2.value);
  custReg.phrase2.value = phrase2;
  if(!checkfor6(pswd))
	{
	  alert("Password must be at least 6 letters and numbers.");
	  custReg.password.focus();
 	  custReg.password.select();
	  return false;
	}
  if(!checkForChars(pswd))
	{
	  if (errorCheck == 1)
	  alert("Password must be at least 6 letters and numbers.");
	  else
	  alert("Please use letters, numbers and no spaces in the Password.");
	  custReg.password.focus();
	  custReg.password.select();
	  return false;
	}
   if(!checkForSpecialChars(cfn))
	{
	  if (errorCheck == 1)
	  alert("Please enter your First Name.");
	  else
	  alert("Please use letters only for your First Name.");
	  custReg.firstName.focus();
	  custReg.firstName.select();
	  return false;
	}
  if(!checkForSpecialChars(cln))
	{
	  if (errorCheck == 1)
	  alert("Please enter your Last Name.");
	  else
	  alert("Please use letters only for your Last Name.");
	  custReg.lastName.focus();
	  custReg.lastName.select();
	  return false;
	}
  if(!validateEmail(email))
	{
	  custReg.emailAddress.focus();
 	  return false;
	}
  if (!isEmailAddr(email))
	{
	  alert('Please correct your E-mail Address.  The domain or provider name is missing between the "@" and "." (ex. "@aol." "@yahoo.")');
	  document.custReg.emailAddress.focus();
	  return false;
	}
  if((email2 == ""))
	{
	  alert("Please retype your E-mail Address.");
	  document.custReg.emailAddress2.focus();
	  return false;
	}
  if(!validateEmail2(email, email2))
	{
	  alert("E-mail Addresses do not match. Please try again.");
	  document.custReg.emailAddress2.focus();
	  return false;
	}
  var drop = document.custReg.phraseIdentifier.selectedIndex;
  var dropdwn = document.custReg.phraseIdentifier.options[drop].value;
  var pInfo = dropdwn;
  if(pInfo == "")
	{
	  alert("Please select a Security Question.");
	  document.custReg.phraseIdentifier.focus();
	  return false;
	}
  if(!checkForCharsSecurity(phrase))
	{
         if (errorCheck == 1)
	  alert("Please enter your Security Answer.");
         else
	  alert("Please use letters and numbers only in the Security Answer.");
	  custReg.phrase.focus();
	  custReg.phrase.select();
	  return false;
	}
  if(!checkForCharsSecurity(phrase2))
	{
         if (errorCheck == 1)
	  alert("Please retype your Security Answer.");
         else
	  alert("Please use letters and numbers only in the Security Answer.");
	  custReg.phrase2.focus();
	  custReg.phrase2.select();
	  return false;
	}
  if(!validatephrase(phrase,phrase2))
	{
	  alert("Security Answers do not match. Please try again.");
	  custReg.phrase2.focus();
	  custReg.phrase2.select();
	  return false;
	}
  if (submitCounter != 0)
	{
//	  alert("This request for deleting that account number is already \n" + " received and  we are in process to delete that account.");
	  return false;
	}
  submitCounter++;
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function validateEmail2(email, email2)
{
  if (email == email2)
	{
	  return true;
	}
  return false;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function stripwww()
{
  var inputField = document.custReg.emailAddress.value.toLowerCase();
  while (inputField.indexOf("www.") != -1)
	{
	  inputField = (inputField.substring(0,inputField.indexOf("www.")) + inputField.substring(inputField.indexOf("www.")+4) );
	}
  document.custReg.emailAddress.value =  inputField;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function stripwww2()
{
  var inputField = document.custReg.emailAddress2.value.toLowerCase();
  while (inputField.indexOf("www.") != -1)
	{
	  inputField = (inputField.substring(0,inputField.indexOf("www.")) + inputField.substring(inputField.indexOf("www.")+4) );
	}
  document.custReg.emailAddress2.value =  inputField;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function isEmailAddr(email)
{
  var result = false;
  var theStr = new String(email);
  var index = theStr.indexOf("@");
  if (index > 0)
	{
	  var pindex = theStr.indexOf(".",index);
	  if ((pindex > index+1) && (theStr.length > pindex+1))
	  result = true;
	}
  return result;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
// Validate Email for ECA Application
function validateEmail(email)
{
  invalidChars = " /:,;";
  if (email.length == 0)
	{
	  alert ("Please enter your E-mail Address.");
	  return false;
	}
  for (i=0; i< invalidChars.length; i++)
	{
	  badChar = invalidChars.charAt(i);
	  if (email.indexOf(badChar,0) > -1)
		{
		  alert ("Please enter a valid E-mail Address.");
		  return false;
		}
	}
  atPos = email.indexOf("@",1)
  if (atPos == -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("@",atPos+1) > -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  periodPos = email.indexOf(".",atPos);
  if (periodPos == -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (periodPos+3 > email.length)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("@.") >0)
	{
	  alert ('Please verify the E-mail Address. ');
	  return false;
	}
  if (email.indexOf(".@") >0)
	{
	  alert ('Please verify the E-mail Address.!');
	  return false;
	}
  if (email.indexOf("..") >0)
	{
	  alert ('Please verify the E-mail Address. ');
	  return false;
	}
  if (email.indexOf(">") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("<") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if( (email.substring(0,1)) == ("."))
	{
	  alert ('Please verify the E-mail Address. ');
	  return false;
	}
  return true ;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForChars(txtFld)
{
  var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var ok = "yes";
  var temp;
  if (txtFld.length == 0)
	{
	  errorCheck = 1;
	  return false;
	}
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (valid.indexOf(temp) == "-1") ok = "no";
	}
  if (ok == "no")
	{
	  errorCheck = 2;
	  return false;
	}
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForAlphaAndNumOnly(txtFld)
{
  var charValid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numValid = "1234567890";
  var ok = "yes";
  var numCount = 0;
  var charCount = 0;
  var temp;
  var temp1;
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (charValid.indexOf(temp) > "-1")
	  charCount ++;
	}
  if (charCount > 0)
	{
	  for (var i=0; i<txtFld.length; i++)
		{
		  temp = "" + txtFld.substring(i, i+1);
		  if (numValid.indexOf(temp) > "-1")
		  numCount ++;
		}
	}
  if ( (charCount > 0) && (numCount > 0))
	{
	  return true;
	}
  else
	{
	  return false;
	}
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForCharsSecurity(txtFld)
{
  var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- ";
  var ok = "yes";
  var temp;
  if (txtFld.length == 0)
	{
	  errorCheck = 1;
	  return false;
	}
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (valid.indexOf(temp) == "-1") ok = "no";
	}
  if (ok == "no")
	{
	  errorCheck = 2;
	  return false;
	}
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForSpecialChars(txtFld)
{
  var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ- &.";
  var ok = "yes";
  var temp;
  if (txtFld.length == 0)
	{
	  errorCheck = 1;
	  return false;
	}
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (valid.indexOf(temp) == "-1") ok = "no";

	}
  if (ok == "no")
	{
	  errorCheck = 2;
	  return false;
	}
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForBlanks(custTxt)
{
  if ((custTxt == ""))
	{
	  return false;
	}
  else
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkfor6(parm1)
{
  if (parm1.length < 6)
	{
	  return false;
	}
  else
  return true;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function validatepswd(p1, p2)
{
  if (p1 == p2)
	{
	  return true;
	}
  else
  return false;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function validatephrase(phrase, phrase2)
{
  if (phrase == phrase2)
	{
	  return true;
	}
  else
  return false;
}
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
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
</SCRIPT>
<SCRIPT type="text/javascript" language="JAVASCRIPT">
function resetForm()
{
  var cntr = 0;// cntr represents the number of fields to be cleared on the form
  for (cntr=0;cntr<8;cntr++)
	{
	  document.custReg.elements[cntr].value = "";
	}
  document.custReg.phraseIdentifier.selectedIndex     = 0;
}
</SCRIPT>

<!-- New Form Validation JavaScript from Web Services Team -- Fields have been named according to original .jsp file -->
<script language="javascript"
	src="<%=System.getProperty("external.appServer")%>/secure/scripts/validateApps.js"></script>

<script>

function hideAllErrors(){
document.getElementById("passwordError").style.display = "none";
document.getElementById("firstNameError").style.display = "none";
document.getElementById("lastNameError").style.display = "none";
document.getElementById("emailAddressError").style.display = "none";
document.getElementById("emailAddress2Error").style.display = "none";
document.getElementById("phraseIdentifierError").style.display = "none";
document.getElementById("phraseError").style.display = "none";
document.getElementById("phrase2Error").style.display = "none";
}


function submitForm(){
hideAllErrors();

var errors = [];

if (!checkAlphanumericRequired (document.custReg.phrase.value))
		{errors[errors.length] = ["phraseError", "phrase"];
		document.getElementById("phraseError").innerHTML = "Please type the answer to your secret question.<br/>";
		document.custReg.phrase.focus();}

if (!(document.custReg.phrase.value == document.custReg.phrase2.value))
		{errors[errors.length] = ["phrase2Error", "phrase2"];
		document.getElementById("phrase2Error").innerHTML = "Answers must match.<br/>";
		document.custReg.phrase2.focus();}

if (!checkSelect (document.custReg.phraseIdentifier.value))
		{errors[errors.length] = ["phraseIdentifierError", "phraseIdentifier"];
		document.getElementById("phraseIdentifierError").innerHTML = "You must choose a secret question.<br />";
		document.custReg.phraseIdentifier.focus();}

if (!isEmailAddr (document.custReg.emailAddress.value))
		{errors[errors.length] = ["emailAddressError", "emailAddress"];
		document.getElementById("emailAddressError").innerHTML = "Please enter a valid e-mail address.<br/>";
		document.custReg.emailAddress.focus();}

if (!(document.custReg.emailAddress.value == document.custReg.emailAddress2.value))
		{errors[errors.length] = ["emailAddress2Error", "emailAddress2"];
		document.getElementById("emailAddress2Error").innerHTML = "E-mail address must match.<br/>";
		document.custReg.emailAddress2.focus();}

if (!checkForName (document.custReg.lastName.value))
		{errors[errors.length] = ["lastNameError", "lastName"];
		document.getElementById("lastNameError").innerHTML = "Please enter your last name.<br/>";
		document.custReg.lastName.focus();}

if (!checkForName (document.custReg.firstName.value))
		{errors[errors.length] = ["firstNameError", "firstName"];
		document.getElementById("firstNameError").innerHTML = "Please enter your first name.<br/>";
		document.custReg.firstName.focus();}



if (!checkAlphaNumNoSpaceRequired (document.custReg.password.value))
		{errors[errors.length] = ["passwordError", "password"];
		document.getElementById("passwordError").innerHTML = "Password cannot contain special characters.<br/>";
		document.custReg.password.focus();}

if (!validateUserIdPwLength625 (document.custReg.password.value))
		{
		errors[errors.length] = ["passwordError", "password"];
		document.getElementById("passwordError").innerHTML = "Password must be 6-25 characters.<br/>";
		document.custReg.password.focus();}
	if (errors.length > 0) {
			reportErrors(errors);
			return false;
		}
}

function validateUserIdPwLength625(fieldValue)
{

  if ((fieldValue.length < 6) || (fieldValue.length > 25))
	{
	  return false;
	}
	return true;
}
function checkSelect() {
if (document.custReg.phraseIdentifier.selectedIndex == 0)
	{return false;} else {return true;} }

</script>
<!-- End Form Validation JavaScript from Web Services Team -->

<!-- Begin New HTML from Web Services -->
<table width="625" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td>
		<h1 align="center" style="width: 620px;"><img
			src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/lock.gif"
			width="11" height="19" alt="" /> Registration Information Update</h1>
		</td>
	</tr>

	<tr>
		<td><br />
		<p style="color: red"><jsp:getProperty name="viewBean"
			property="message" /></p>
		<br />
		</td>
	</tr>
	<tr>
		<td>
		<table width="625" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td width="11"><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tl.gif"
					width="11" height="25" alt="" /></td>
				<td width="603" height="25"><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tcBG.gif"
					width="100%" height="25" alt="" /></td>
				<td width="11"><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tr.gif"
					width="11" height="25" alt="" /></td>
			</tr>
			<tr>
				<td colspan="3" class="bottomPortalTD_pad1"><!-- begin main content table -->
				<div align="center">
				<form name="custReg" onSubmit="return submitForm();"
					action="../../cus/registration/EcaController" method="post">
				<table width="500" border="0" cellspacing="0" cellpadding="0">

					<tr align="left">
						<td colspan="2" class="textPad30L">Password: <span
							style="font-size: 10px">(case sensitive)</span><br>
						<input type="password" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;;" name="password"
							value="" size="35" maxlength="25" tabindex="1"><br />
						<div class="error" id="passwordError">Please enter your password.</div>
						<br />
						</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="textPad30L">First Name:<br>
						<input type="text" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;;" name="firstName"
							value="<%=viewBean.getFirstName()%>" size="35" maxlength="25"
							tabindex="2"><br />
						<div class="error" id="firstNameError">Please enter your first
						name.</div>
						<br />
						</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="textPad30L">Last Name:<br>
						<input type="text" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;;" name="lastName"
							value="<%=viewBean.getLastName()%>" size="35" maxlength="25"
							tabindex="3"><br />
						<div class="error" id="lastNameError">Please enter your last name.</div>
						<br />
						</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="textPad30L">E-mail Address:<br>
						<input type="text" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;;" name="emailAddress"
							value="<%=viewBean.getEmail()%>" onBlur="stripwww();" size="35"
							maxlength="64" tabindex="4"><br />
						<div class="error" id="emailAddressError">Please enter your email
						address.</div>
						<br />
						</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="textPad30L">Confirm E-mail Address:<br>
						<input type="text" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;;" name="emailAddress2"
							size="35" maxlength="64" tabindex="5" onBlur="stripwww2();"
							value="<%=viewBean.getEmail()%>"><br />
						<div class="error" id="emailAddress2Error">Please re-enter your
						email address.</div>
						<br />
						</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="h_Line">&nbsp;</td>
					</tr>
					<tr align="left">
						<td colspan="2">
						<p><strong>Security Information</strong></p>
						<br>
						</td>
					</tr>
					<tr align="left">
						<td class="textPad30L">Pick a Secret Question:<br>
						<table cellspacing=0 cellpadding=0 border="1" style="padding: 0; border: 1px solid #ADC3D6;;"><tr><td><select name="phraseIdentifier" tabindex="6">
							<%if (getParameter(request, "phraseIdentifier").trim().equals("")) {%>
							<option value="0" selected></option>
							<OPTION value="Make or model of your first car?">Make or model of
							your first car?</OPTION>
							<OPTION value="Middle name of your Father?">Middle name of your
							Father?</OPTION>
							<OPTION value="Middle name of your first child?">Middle name of
							your first child?</OPTION>
							<OPTION value="Name of street you grew up on?">Name of street you
							grew up on?</OPTION>
							<OPTION value="Name of your favorite teacher?">Name of your
							favorite teacher?</OPTION>
							<OPTION value="Name of your first employer?">Name of your first
							employer?</OPTION>
							<OPTION value="Name of your first school?">Name of your first
							school?</OPTION>
							<OPTION value="Your best friend in high school?">Your best friend
							in high school?</OPTION>
							<OPTION value="Your favorite childhood TV show?">Your favorite
							childhood TV show?</OPTION>
							<OPTION value="Your high school mascot?">Your high school mascot?</OPTION>
							<%} else {%>
							<OPTION value='<%=getParameter(request, "phraseIdentifier")%>'><%=getParameter(request, "phraseIdentifier")%></OPTION>
							<OPTION value="Make or model of your first car?">Make or model of
							your first car?</OPTION>
							<OPTION value="Middle name of your Father?">Middle name of your
							Father?</OPTION>
							<OPTION value="Middle name of your first child?">Middle name of
							your first child?</OPTION>
							<OPTION value="Name of street you grew up on?">Name of street you
							grew up on?</OPTION>
							<OPTION value="Name of your favorite teacher?">Name of your
							favorite teacher?</OPTION>
							<OPTION value="Name of your first employer?">Name of your first
							employer?</OPTION>
							<OPTION value="Name of your first school?">Name of your first
							school?</OPTION>
							<OPTION value="Your best friend in high school?">Your best friend
							in high school?</OPTION>
							<OPTION value="Your favorite childhood TV show?">Your favorite
							childhood TV show?</OPTION>
							<OPTION value="Your high school mascot?">Your high school mascot?</OPTION>
							<%}%>
						</SELECT></td></tr></table>
						<div class="error" id="phraseIdentifierError">Please select a
						question from this menu.</div>
						<br />
						</td>
						<td width="216"><BR>
						If you forget your password, we'll verify your
						identity with your secret question.</td>
					</tr>
					<tr align="left">
						<td class="textPad30L">Your Secret Answer: <span
							style="font-size: 10px"></span><br>
						<input type="password" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;" name="phrase"
							value='<%=getParameter(request, "phrase")%>' size="35"
							maxlength="25" tabindex="7"><br />
						<div class="error" id="phraseError">Please enter the answer to
						your secret question.</div>
						<br />
						</td>
						<td width="216"><BR>
						1-18 characters. Letters and/or numbers only; spaces ok.</td>
					</tr>
					<tr align="left">
						<td colspan="2" class="textPad30L">Confirm Secret Answer:<br>
						<input type="password" style="font-size: 12px;border: 1px solid;border-color: #ADC3D6;" name="phrase2"
							value='<%=getParameter(request, "phrase2")%>' size="35"
							maxlength="25" tabindex="8"><br />
						<div class="error" id="phrase2Error">Please re-enter the answer to
						your secret question.</div>
						<br />
						</td>
					</tr>
					<tr>
						<td colspan="2">
						<DIV align="center"><INPUT type="submit" name="submit"
							style="border: 0px" class="button" value="Submit"
							onClick="return submitForm();"> <INPUT type="hidden"
							name="command" value="changeregistration"></DIV>
						</td>
					</tr>
				</table>
				</form>
				</div>
				</td>
			</tr>
			<tr>
				<td><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bl.gif"
					width="11" height="16" alt="" /></td>
				<td width="603" height="16"><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bcBG.gif"
					width="100%" height="16"></td>
				<td><img
					src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_br.gif"
					width="11" height="16" alt="" /></td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</BODY>
<wrapper:body appId="ECA_residential" templateType="body2">
	<br>
</wrapper:body>
</HTML>
