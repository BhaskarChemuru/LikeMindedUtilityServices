// csrFunctions.js

// newFunction

function trim (strInput) {
  var strOutput = lTrim(strInput);
  strOutput = rTrim(strOutput);
  return strOutput;
}

/* ***********************************************************
ltrim (strInput)
**************************************************************
Input parameters:   strInput - input string
Return Type:        String
Return Values:      String
Description:        Eliminates spaces of left sides of the
                    input string.
Comments:           None
Dependencies:       None
************************************************************** */
function lTrim (strInput) {
  var strOutput, iIndex;
  var strOutput = "";
  var iMax = strInput.length;
  for (iIndex=0; iIndex<iMax; iIndex++) {
    if (strInput.charAt(iIndex) != " ") {
        break;
    }
  }
  strOutput = strInput.substring(iIndex)
  return strOutput;
}

/* ***********************************************************
rtrim (strInput)
**************************************************************
Input parameters:   strInput - input string
Return Type:        String
Return Values:      String
Description:        Eliminates spaces of right sides of the
                    input string.
Comments:           None
Dependencies:       None
************************************************************** */
function rTrim (strInput) {
  var iIndex;
  var strOutput = "";
  var iMax = strInput.length;
  for (iIndex=iMax; iIndex>0; iIndex--) {
    if (strInput.charAt(iIndex-1) != " ") {
        break;
    }
  }
  strOutput = strInput.substring(0, iIndex);
  return strOutput;
}
/* ***********************************************************
checkForSpaces (txtfld)
**************************************************************
Input parameters:   txtfld - input string
Return Type:        boolean
Return Values:      
Description:        checks whether the input string include spaces
Comments:           None
Dependencies:       None
************************************************************** */
function checkForSpaces(txtfld) 
{
	var len = txtfld.length;
	for(var i=0; i<len; i++)
	{
		if(txtfld.charAt(i) == " ")
		{
			return false;
		}
	}
	return true;
}
/* ***********************************************************
checkfornumeric (param)
**************************************************************
Input parameters:   param - input string
Return Type:        boolean
Return Values:      
Description:        checks whether the input string is numeric
Comments:           None
Dependencies:       None
************************************************************** */
function checkfornumeric(param) {
	var len = param.length;
	var flag;
	for(var i=0; i<len; i++) { 
		if((param.charAt(i) !=" ") && (param.charAt(i)>=0 && param.charAt(i)<=9) ) {
			flag = true;	
			} else {
			 flag = false;
			 break;
			}
	}
	return flag;
}
/* ***********************************************************
checkLoginForm ()
**************************************************************
Input parameters:   
Return Type:        
Return Values:      
Description:        validates the login page
Comments:           None
Dependencies:       None
************************************************************** */

function checkLoginForm() {
	if(document.getElementById('iloginId').value=="") {
		alert("Please enter a Login ID");
		document.getElementById('iloginId').focus();
		return false;
	}
	if(document.getElementById('iPassword').value=="") {
		alert("Please enter a Password");
		document.getElementById('iPassword').focus();
		return false;
	}
	return true;
}
/* ***********************************************************
validateParams(str)
**************************************************************
Input parameters:  String str 
Return Type:        
Return Values:      
Description:        validates the account number field
Comments:           None
Dependencies:       None
************************************************************** */
function validateParams(str) {
	var billNo = trim(document.getElementById('ibillAccountNo').value);
	var currentTimeStamp =  new Date().getTime();
	if(billNo==""){
		alert("Please enter a Bill Account Number");
		document.getElementById('ibillAccountNo').focus();
		document.getElementById('ibillAccountNo').select();
		return false;
	}
	
	if(!checkForSpaces(billNo)){
		alert("Please do not include spaces in Bill Account Number");
		document.getElementById('ibillAccountNo').focus();
		document.getElementById('ibillAccountNo').select();
		return false;
	}
	if(!checkfornumeric(billNo)){
		alert("Please enter only the numeric value for Bill Account Number");
		document.getElementById('ibillAccountNo').focus();
		document.getElementById('ibillAccountNo').select();
		return false;
	}
	
	if(document.getElementById('selectType').value=="") {
		alert("Please select a CSR Type");
		document.getElementById('selectType').focus();
		
		return false;
	}
	
	var len = billNo.length;
	var len2 = 10-len;
	var zero = '0';
	while(len2>1) {
		zero = zero+'0';
		len2--;
	}
	if(len<10) {
		billNo = zero+billNo;
	}
	document.getElementById('ibillAccountNo').value = billNo;
	var type = document.getElementById('selectType').value;
	var loginId = document.getElementById('loginId').value;
	var url = str+"/"+"launchBmap.do?bill_acc_no="+billNo+"&csr_type="+type+"&loginId="+loginId+"&timestamp="+currentTimeStamp;

	showModalDialog(url,window,"resizable:yes;status:no;scroll:yes;dialogHeight:1024px;dialogWidth:1280px");	
	var xMLHttprequestObject;
	if(window.XMLHttpRequest){
	    	//xMLHttprequestObject =  window.XMLHttpRequest;
	    	// code for IE7+, Firefox, Chrome, Opera, Safari
            xMLHttprequestObject = new XMLHttpRequest();  
	}
	else if(window.ActiveXObject){
		xMLHttprequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		xMLHttprequestObject = false;
 	}
	xMLHttprequestObject.open("POST",str+"/sessionManager.do?dispatchMethodname=cleanSessionData");
	xMLHttprequestObject.onreadystatechange = function ()
		{
			if(xMLHttprequestObject.readyState == 4 && xMLHttprequestObject.status == 200){		
				
			}
		}
	xMLHttprequestObject.send(null);
	document.getElementById('ibillAccountNo').value="";
	return false;
}

var gValue="false";
// Function to prevent from going back after session timeout.
function stopBack(event,enable){

	if(event=="onClick"){
		gValue='true';
	}
	if(gValue=="true"){
		if(event=="onUnload"){
			gValue="false";
		}
		if(enable=="true")
			window.location="logout.do";	

	}
	else
		window.location=location.href;
}