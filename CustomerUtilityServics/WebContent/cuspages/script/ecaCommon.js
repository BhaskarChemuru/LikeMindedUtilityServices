var errorCheck;

function checkForBlanks(txt)
{
	return (txt != "");
}

function checkfor6(parm1)
{
	return (parm1.length >= 6);
}

function validatepswd(p1, p2)
{	
	return (p1 == p2);
}

function validatephrase(phrase, phrase2)
{
	return (phrase == phrase2);
}

function trimspaces(field)
{
	var x;
	var precount = 0;
	var postcount = 0;
	var retfield = "";

	for (x=0; x<field.length; x++)
	{
		if (field.charAt(x) == " ")
			precount++;
		else
			break;
	}

	for (x=field.length; x>0; x--)
	{
		if (field.charAt(x-1) == " ")
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

function checkForChars(txt)
{
	var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	var ok = "yes";
	var temp;

	if (txt.length == 0)
	{
		errorCheck = 1;
		return false;
	}

	for (var i=0; i<txt.length; i++)
	{
		temp = "" + txt.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}

	if (ok == "no")
	{
		errorCheck = 2;
		return false;
	}

	return true;
}

function checkForCharsSecurity(txt)
{
	var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890- ";
	var ok = "yes";
	var temp;

	if (txt.length == 0)
	{
		errorCheck = 1;
		return false;
	}

	for (var i=0; i<txt.length; i++)
	{
		temp = "" + txt.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}

	if (ok == "no")
	{
		errorCheck = 2;
		return false;
	}

	return true;
}

function checkForSpecialChars(txt)
{
	var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789- &.";
	var ok = "yes";
	var temp;

	if (txt.length == 0)
	{
		errorCheck = 1;
		return true;
	}

	for (var i=0; i<txt.length; i++)
	{
		temp = "" + txt.substring(i, i+1);
		if (valid.indexOf(temp) == "-1") ok = "no";
	}

	if (ok == "no")
	{
		errorCheck = 2;
		return false;
	}

	return true;
}

// Validate Email for ECA Application
function validateEmail(email)
{
	invalidChars = " /:,;";

	if (email.length == 0)
	{
		alert ("Please enter a valid E-mail address.");
		return false;
	}

	for (i=0; i< invalidChars.length; i++)
	{
		badChar = invalidChars.charAt(i);

		if (email.indexOf(badChar,0) > -1)
		{
			alert ("Please enter a valid E-mail address.");
			return false; 
		}
	}

	atPos = email.indexOf("@",1)

	if (atPos == -1)
	{
		alert ('The E-mail address is required to have an "@" and a ".". Please verify the E-mail address. Thanks!');
		return false; 
	}

	if (email.indexOf("@",atPos+1) > -1)
	{
		alert ('The E-mail address is required to have an "@" and a ".". Please verify the E-mail address. Thanks!');
		return false;
	}

	periodPos = email.indexOf(".",atPos);

	if (periodPos == -1)
	{
		alert ('The E-mail address is required to have an "@" and a ".". Please verify the E-mail address. Thanks!');
		return false;
	}

	if (periodPos+3 > email.length)
	{
		alert ('The E-mail address is required to have an "@" and a ".". Please verify the E-mail address. Thanks!');
		return false;
	}

	if (email.indexOf("@.") >0)
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}

	if (email.indexOf(".@") >0)
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}

	if (email.indexOf("..") >0)
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}

	if (email.indexOf(">") >0)
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}

	if (email.indexOf("<") >0)
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}

	if( (email.substring(0,1)) == ("."))
	{
		alert ('Please verify the E-mail address. Thanks!');
		return false;
	}
	
	return true ;
}