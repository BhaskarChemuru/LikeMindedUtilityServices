<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ include file = "/cuspages/commonincludes/cusContext.jsp"%><html>
<html>
<head>
<title>CUS - Forgot Login ID</title>
<script src="<%=wsContextRoot%>/cuspages/script/jquery.1.4.2.js" language="JavaScript" type="text/javascript"></script>
<script src="<%=wsContextRoot%>/cuspages/script/jquery.jqGrid.min.js" language="JavaScript" type="text/javascript"></script>
<script src="<%=wsContextRoot%>/cuspages/script/jquery.scrollTo-min.js" language="JavaScript" type="text/javascript"></script>

<script>
    jq14 = $.noConflict(true);
</script>
<%response.setHeader("Cache-Control", "no-store");
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", -1);
%>

	<META NAME="WT.CurrentPage" CONTENT="ECAEnterAcctNoForgotUserID">
	<META NAME="WT.ti" CONTENT="ECA Enter Acct No Forgot UserID">
	<META name="GENERATOR"
		content="IBM WebSphere Page Designer V3.0.2 for Windows">
	<META http-equiv="Content-Style-Type" content="text/css">

<LINK HREF="<%=wsContextRoot%>/cuspages/theme/print.css" REL="stylesheet" TYPE="text/css" MEDIA="print">

<link href="<%=wsContextRoot%>/cuspages/theme/thickbox.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/1024_navAPP.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/global.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/fplAPP.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/app_styles.css" rel="stylesheet" type="text/css" media="screen" />
<script src="<%=wsContextRoot%>/cuspages/script/regExpressions.js" language="JavaScript" type="text/javascript"></script>
<script language="javascript" src="<%=wsContextRoot%>/cuspages/script/reg_messages.js"></script>
<script>
jq14(document).ready(function(){

			jq14('#account').focus();
 			jq14('#account').focus(function(){
  				fieldFocus('account','Enter your 10-digit account number. Use numbers only. Do not use hyphens.');
  					}).blur(function(){jq14("#accountHelpDisplay").filter(".hint").hide();});
  			disableSsn();
			
		
		
	jq14("#account").data("validations",["required","numeric","minLength","zero"]).data("validationDictionary","registration_errors");
	jq14("#ssn").change(function(){
		jq14(this).data("validations",["required","numeric","minLength"]).data("validationDictionary","registration_errors");
	});
 });

function disableSsn(){
	jq14('#ssnSection *').each(function(){
		jq14(this).addClass("blocked");
		jq14(this).attr("disabled","disabled");
	});
} 
function submitForm(){
	if(validateFields('resolveUserId')){
		resetField('ssn');
		resetField('account');
		document.resolveUserId.submit();	
	}
}

</script>
</head>
<body>
<div id="app">
	<form name="resolveUserId" id="resolveUserId" method="post" action="EcaController">
	<table width="100%" border=0>
		<tr height="40px"></tr>
			<tr>
    			<td colspan="2"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
      				<tr>
        				<!-- Empty left menu -->
					<td>
						<table width="230" border="0" cellspacing="0" cellpadding="0">
							<tr>
      								<td>&nbsp;</td>
    							</tr>
    									
							<tr>
      								<td>&nbsp;</td>
    							</tr>
						</table> 
					</td>
        
					<td class="centerContent" width="100%">
	
		<h1 id="head"> Forgot User ID</h1>

		<p>You will need your FPL account number and the last four digits of your Social Security (SSN), Social Insurance (SIN) or Tax ID (TIN) number to retrieve your User ID. You will also need to answer a security question in order to view your full User ID.</p>		
		
		
		<hr/>
		<dl id="accountSection">
			<dt>
				<label class="title" for="billAccount">FPL Account Number:</label>
			</dt>
			<dd style="font-weight: normal">(If you don't remember your account number, it can be found on your bill)</dd>
			<dd>
				<input class="app_input_sm" type="text" name="billAccount" id="account" maxlength="10" value="">
				<div class="image" id="accountImageDisplay"></div>
				<span class="hint" id="accountHelpDisplay">
					<span id="accountMessageDisplay"></span>
					<span id="accountPointer" class="hint-pointer">&nbsp;</span>
				</span>
			</dd>
		</dl>
		<dl id="ssnSection">
			<dt>
				<label class="title" for="ssn4" >Last 4 digits SSN/SIN/TIN:<\/label>
			</dt>
			<dd>
				<input type="password" name="ssn4" id="ssn" maxlength="4" class="app_input_sm"  >
				<div class="image" id="ssnImageDisplay"></div>
				<span class="hint" id="ssnHelpDisplay">
					<span id="ssnMessageDisplay"></span>
					<span id="ssnPointer" class="hint-pointer">&nbsp;</span>
				</span>
			</dd>
		</dl>
		<dl>
			<dt>
				<input type="button" id="submitButton" value=" Submit " style="display:none" onClick="submitForm()" class="blueButton"/>
			
				<input type="button" id="continueButton" value=" Continue " onClick="submitForm()" class="blueButton"/>
		
			</dt>
		</dl>
		<input TYPE="hidden" NAME="command" id="command" value="resolveUserIdCheckTempUser" />
		<input TYPE="hidden" NAME="billAccountValidated" id="billAccountValidated" value="" />
	</form>
</div>
</body>
 <tr>
  	<td width="1%" height="25" align="right" class="Footer">&nbsp;</td>
    <td height="19" colspan="3" class="Footer"><%@ include file="/cuspages/commonincludes/footer.jsp"%></td>
  </tr>
</html>