
var submitCounter = 0;
var errorCheck;
function validateAccountSSNData(custReg)
{
  var acctNum    = $('#accountNum').val();
  var ssnVal     = document.custReg.ssn.value;
  acctNum = trimspaces(acctNum);
  document.custReg.accountNum.value = acctNum;
  ssnVal = trimspaces(document.custReg.ssn.value);
  document.custReg.ssn.value = ssnVal;  
  if(!checkForNumbersOnly(acctNum))
  {
  	 if (errorCheck == 1)
	  alert("Please enter your Account Number."); 
         else
	  alert("Please use numbers only in the Account Number."); 
	  document.custReg.accountNum.focus();
	  document.custReg.accountNum.select();
	  return false;
  }
  if(!checkForNumbersOnly(ssnVal))
  {
  	 if (errorCheck == 1)
	  alert("Please enter your last 4 digits of your SSN."); 
         else
	  alert("Please use numbers only in the SSN."); 
	  document.custReg.ssn.focus();
	  document.custReg.ssn.select();
	  return false;
  }
  //var actNum = $('#account').val();
	//var ssnForValidation = $('#account').val();

$.ajax({
	type: "POST",
	url: "validateAccount.do",
	data: "accountNum="+acctNum + "&ssnVal="+ssnVal,
	success:function(e){
	if (e == "success")
	{
		$('#moreFields').removeClass("disableField");
		$('#lookUpFields').addClass("disableField");
		$('#accountNum').attr("disabled","disabled");
		$('#ssn').attr("disabled","disabled");
		//document.cusReg.moreFields.enable();
	}
	alert(e);},
	error:function(er){alert("error:"+er);}
	});
  
  return true;

}
function validateUserData(custReg)
{
//  var uid    = document.custReg.userid.value;
  var pw     = document.custReg.password.value;
  var pw1    = document.custReg.password2.value;
  var cfn    = document.custReg.firstName.value;
  var cln    = document.custReg.lastName.value;
  var email  = document.custReg.emailAddress.value;
  var pInfo  = document.custReg.phraseIdentifier.value;
  var phrase = document.custReg.phrase.value;
  var phrase2 = document.custReg.phrase2.value;
  //uid = trimspaces(document.custReg.userid.value);
  //document.custReg.userid.value = uid;
  pw = trimspaces(document.custReg.password.value);
  document.custReg.password.value = pw;
  pw1 = trimspaces(document.custReg.password2.value);
  document.custReg.password2.value = pw1;
  email = trimspaces(document.custReg.emailAddress.value.toLowerCase());
  document.custReg.emailAddress.value = email;
  var email2   = document.custReg.emailAddress2.value;
  var email2   = trimspaces(document.custReg.emailAddress2.value.toLowerCase());
  document.custReg.emailAddress2.value = email2;
  cfn = trimspaces(document.custReg.firstName.value);
  document.custReg.firstName.value = cfn;
  cln = trimspaces(document.custReg.lastName.value);
  document.custReg.lastName.value = cln;
  phrase = trimspaces(document.custReg.phrase.value);
  document.custReg.phrase.value = phrase;
  phrase2 = trimspaces(document.custReg.phrase2.value);
  document.custReg.phrase2.value = phrase2;
  var ckterms = document.custReg.termsAndConditions.checked;
  var ckRadio = false;
    if(!checkForSpecialChars(cfn))
	{
	  if (errorCheck == 1)
	  alert("Please enter your First Name.");
         else
	  alert("Please use letters only for your First Name.");
	  document.custReg.firstName.focus();
 	  document.custReg.firstName.select();
	  return false;
	}
  if(!checkForSpecialChars(cln))
	{
         if (errorCheck == 1)
	  alert("Please enter your Last Name.");
         else
	  alert("Please use letters only for your Last Name.");
	  document.custReg.lastName.focus();
 	  document.custReg.lastName.select();
	  return false;
	}
    if(!validateEmail(email))
	{
	  document.custReg.emailAddress.focus();
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
	  alert("Please re-enter your E-mail Address.");
	  document.custReg.emailAddress2.focus();
	  return false;
	}
  if(!validateEmail2(email, email2))
	{
	  alert("E-mail Addresses do not match. Please try again.");
	  document.custReg.emailAddress2.focus();
	  return false;
	}
  
  if(pw == "")
	{
	  alert("Password must be at least 6 letters and numbers.");
         document.custReg.password.focus();
         document.custReg.password.select();
	  return false;
	}
  if(!checkfor6(pw))
	{
	  alert("Password must be at least 6 letters and numbers.");
         document.custReg.password.focus();
         document.custReg.password.select();
	  return false;
	}
  if(!checkForChars(pw))
	{
	  if (errorCheck == 1)
	  alert("Password must be at least 6 letters and numbers.");
	  else
	  alert("Please use letters, numbers and no spaces in the Password.");
	  document.custReg.password.focus();
      document.custReg.password.select();
	  return false;
	}	
  if(!checkForAlphaAndNumOnly(pw))
	{
         if (errorCheck == 1)
	  alert("Password must contain at least 1 letter and cannot be less than 6 characters.");
	  else
	  alert("Password must contain at least 1 number and cannot be less than 6 characters.");
         document.custReg.password.focus();
         document.custReg.password.select();
	  return false;
	}
  if(pw1 == "")
	{
	  alert("Please re-enter your Password .");
         document.custReg.password2.focus();
         document.custReg.password2.select();
	  return false;
	}
  if(!validatepswd(pw,pw1))
	{
	  alert("Passwords do not match. Please try again.");
	  document.custReg.password2.focus();
	  document.custReg.password2.select();
	  return false;
	}
  var drop = document.custReg.phraseIdentifier.selectedIndex;
  var dropdwn = document.custReg.phraseIdentifier.options[drop].value;
  var pInfo = dropdwn;
  if(pInfo == "")
	{
	  alert("Please select a Secret Question.");
	  document.custReg.phraseIdentifier.focus();
	  return false;
	}
  if(!checkForCharsSecurity(phrase))
	{
         if (errorCheck == 1)
	  alert("Please enter your Secret Answer."); 
         else
	  alert("Please use letters and numbers only in the Secret Answer."); 
	  document.custReg.phrase.focus();
	  document.custReg.phrase.select();
	  return false;
	}
  if(!checkForCharsSecurity(phrase2))
	{
         if (errorCheck == 1)
	  alert("Please re-enter your Secret Answer."); 
         else
	  alert("Please use letters and numbers only in the Secret Answer."); 
	  document.custReg.phrase2.focus();
	  document.custReg.phrase2.select();
	  return false;
	}
  if(phrase2 == "")
	{
	  alert("Please complete all required fields.");
	  document.custReg.phrase2.focus();
	  document.custReg.phrase2.select();
	  return false;
	}
  if(!validatephrase(phrase,phrase2))
	{
	  alert("Secret Answers do not match. Please try again.");
	  document.custReg.phrase2.focus();
	  document.custReg.phrase2.select();
	  return false;
	}
  if (ckterms != true)
	{
      // document.custReg.termsAndConditions.focus();
	  alert("The Terms and Conditions checkbox must be checked before continuing.");
	  document.custReg.termsAndConditions.focus();
	  window.scroll(0,window.screen.availHeight);
 
	  return false;
	}
  if (submitCounter != 0)
	{
//	  alert("This request for deleting that account number is already \n" + " received and  we are in process to delete that account.");
	  return false;
	}
  submitCounter++;
	document.custReg.action = "registerCustomer.do";
	document.custReg.submit();
  return true;
}

function validateEmail2(email, email2)
{
  if (email == email2)
	{
	  return true;
	}
  return false;
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
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf(".@") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("..") >0)
	{
	  alert ('Please verify the E-mail Address.');
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
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  return true;
}

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
          if (charCount == 0){
            errorCheck = 1;
          }
          else{
             errorCheck = 2;
          }  
           
	  return false;
	}
}
function checkForNumbersOnly(txtFld)
{
  var numValid = "1234567890";
  var numCount = 0;
  var charCount = 0;
  var temp;
  for (var i=0; i<txtFld.length; i++)
		{
		  temp = "" + txtFld.substring(i, i+1);
		  if (numValid.indexOf(temp) > "-1")
		  numCount ++;
		  else 
		  charCount ++;
		}
	//alert("numCount:"+numCount);
  if ( charCount > 0)
  
	{
	  errorCheck = 2;
	  return false;
	}
  else
	{           
	 	 if (numCount == 0){
            errorCheck = 1;
            return false;
        }
	 
	  
	}
	return true;
}

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
function checkfor6(parm1)
{
  if (parm1.length < 6)
	{
	  return false;
	}
  else
  return true;
}
function validatepswd(p1, p2)
{
  if (p1 == p2)

	{
	  return true;
	}
  else
  return false;
}
function validatephrase(phrase, phrase2)
{
  if (phrase == phrase2)
	{
	  return true;
	}
  else
  return false;
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
function resetForm()
{
  var cntr = 0;// cntr represents the number of fields to be cleared on the form
  for (cntr=0;cntr<11;cntr++)
	{
	  document.custReg.elements[cntr].value = "";
	}
  document.custReg.phraseIdentifier.selectedIndex     = 0;
}
