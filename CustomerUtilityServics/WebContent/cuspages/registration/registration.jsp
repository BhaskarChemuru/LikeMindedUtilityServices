<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ include file = "/cuspages/commonincludes/cusContext.jsp"%><html>
<head>
	<TITLE>CUS Registration Page</TITLE> 

<!-- to use the latest jquery version needs to be here so that it is loaded before the old version used on wrappers-->
<script src="<%=wsContextRoot%>/cuspages/script/jquery.1.4.2.js" language="JavaScript" type="text/javascript"></script>
<script src="<%=wsContextRoot%>/cuspages/script/jquery.jqGrid.min.js" language="JavaScript" type="text/javascript"></script>
<script src="<%=wsContextRoot%>/cuspages/script/jquery.scrollTo-min.js" language="JavaScript" type="text/javascript"></script>

<script>
	function callEnable()
	{
		if($('#termsAndConditions').is(':checked'))
		    $('#activateButton').addClass('blueButton').removeClass('blueButton_OFF').removeAttr("disabled");
		    
		 else
		    $('#activateButton').addClass('blueButton_OFF').removeClass('blueButton').attr("disabled","disabled");
    	
   }

	
</script>


<script src="<%=wsContextRoot%>/cuspages/script/vtip_custom.js" language="JavaScript" type="text/javascript"></script>

<script src="<%=wsContextRoot%>/cuspages/script/dataValidation.js" language="JavaScript" type="text/javascript"></script>
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Cache-Control", "no-cache");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", -1);
%>

<LINK HREF="<%=wsContextRoot%>/cuspages/theme/print.css" REL="stylesheet" TYPE="text/css" MEDIA="print">

<link href="<%=wsContextRoot%>/cuspages/theme/thickbox.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/1024_navAPP.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/global.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/fplAPP.css" rel="stylesheet" type="text/css" media="screen" />
<link href="<%=wsContextRoot%>/cuspages/theme/app_styles.css" rel="stylesheet" type="text/css" media="screen" />

    
<style>
.buttonss {
	font: bold 13px "Helvetica Neue", Helvetica, Arial, clean, sans-serif !important;
	text-shadow: 0 -1px 1px rgba(0,0,0,0.25), -2px 0 1px rgba(0,0,0,0.25);
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-box-shadow: 0 1px 2px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.5);
	display: inline-block;
	color: white;
	padding: 5px 20px 5px;
	white-space: nowrap;
	text-decoration: none;
	cursor: pointer;
	background: #0068B5;
	border-style: none;
	text-align: center;
	overflow: visible;
}
 
.buttonss:hover,
.buttonss:focus {
	background-position: 0 -50px;
	color: white;
}
 
.buttonss:active {
	background-position: 0 -100px;
	-moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.7);
	-webkit-box-shadow: none;
}
</style>
</head>
<body>

<div id="app">

<!-- onSubmit="return submitForm();"-->
	<form name="custReg" id="custRegForm"  method="POST"  >
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
		
		<h1 id="head" class="leftFloat" >Activate Online Access</h1>
		<a href="#" target="_blank">
			<img class="appRtBtn" src="<%=wsContextRoot%>/cuspages/Images/appBtn_help.gif">
		</a>
		
		
		<div id="topText">
				<p>Activating your online access is simple and won't take more than a couple of minutes.  When you register below, you'll create a profile for your account number. Once you're done, you'll be able to:</p>
			
				<ul>
					<li>View Your Online Account</li>
					<li>Pay Your Bills</li>
					<li>View Your Billing History</li>
					<li>And Much More</li>
				</ul>
			</div>
		
		<br />
				
		<p style="color: red;float:none">
		<!-- space for error mesages -->
		</p>
		<h3 id="hrBottom">Please fill out the form below.</h3>
		<br />
		<div id="lookUpFields">
			<dl>
				<dt>
					<label class="title" for="account">Enter Account Number:</label>
				</dt>
				<dd>
					<input name="accountNum" id="accountNum" maxlength="10"  type="text" class="app_input_sm" style="margin-top:3px;"/>
					<span class="title">
						<a href="#" name="search" id="search" class="between">Find My Account</a>
						<!-- <input class="greyButton" type="button" name="search" id="search"  value="Search"/>-->
					</span>
					<span class="hint" id="accountHelpDisplay"> 
						<span id="accountMessageDisplay"></span> 
						<span id="accountPointer" class="hint-pointer">&nbsp;</span>
					</span> 
					<span class="hint" id="searchHelpDisplay"> 
						<span id="searchMessageDisplay"></span> 
						<span id="searchPointer" class="hint-pointer">&nbsp;</span>
					</span>
				</dd>
				<dt>
					<label class="title" for="ssn">Last 4 digits of SSN / SIN / TIN:</label>
				</dt>
				<dd>
					<input name="ssn" id="ssn" maxlength="4" type="password" class="app_input_sm"  />
					<div class="image" id="ssnImageDisplay"></div>
					<span class="hint" id="ssnHelpDisplay"  > 
						<span id="ssnMessageDisplay" ></span> 
						<span id="ssnPointer" class="hint-pointer">&nbsp;</span>
					</span> 
					
				</dd>
				<dd id="btnHr">
					<input type="button" onclick="javascript:validateAccountSSNData();" class="blueButton" name="verifyButton" id="verifyButton"  value="Continue"/>
					
				</dd>
			</dl>
		</div>
		<div id="moreFields" class="disableField">
			<dl>		
				<dt id="firstNameSection">
					<label class="title" for="firstName">First Name:</label>
				</dt>
				<dd>
					<input name="firstName" id="firstName" type="text"  size="35" maxlength="25"    class="app_input" />
 					<div class="image" id="firstNameImageDisplay"></div>
					<span class="hint" id="firstNameHelpDisplay">
					<span id="firstNameMessageDisplay"></span>
					<span id="firstNamePointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				
				<dt>
					<label class="title" for="lastName">Last Name:</label>
				</dt>
				<dd>
					<input name="lastName" id="lastName" type="text" size="35" maxlength="25" class="app_input"  />
					<div class="image" id="lastNameImageDisplay"></div>
					<span class="hint" id="lastNameHelpDisplay">
					<span id="lastNameMessageDisplay"></span>
					<span id="lastNamePointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				
				<dt>
					<label class="title" for="emailAddress">Enter your email address:</label>
				</dt>
				<dd>
					<input name="emailAddress" id="emailAddress" type="text" class="app_input"  value="" maxlength="64"/>
					<div class="image" id="emailAddressImageDisplay"></div>
					<span class="hint" id="emailAddressHelpDisplay">
					<span id="emailAddressMessageDisplay"></span>
					<span id="emailAddressPointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				<dt>
					<label class="title" for="emailAddress2">Re-Type your email address:</label>
				</dt>
				<dd>
					<input name="emailAddress2" id="emailAddress2" type="text" class="app_input" maxlength="64"/>
					<div class="image" id="emailAddress2ImageDisplay"></div>
					<span class="hint" id="emailAddress2HelpDisplay">
					<span id="emailAddress2MessageDisplay"></span>
					<span id="emailAddress2Pointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
			
				<dt>
					<label class="title" for="password">Password:</label>
				</dt>
				<dd>
					<input name="password" id="password" type="password"  size="35" maxlength="25"  class="app_input"  />
					<div class="image" id="passwordImageDisplay"></div>
					<span class="hint" id="passwordHelpDisplay">
					<span id="passwordMessageDisplay"></span>
					<span id="passwordPointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
			
				<dt>
					<label class="title" for="password2">Confirm Password:</label>
				</dt>
				<dd>
					<input name="password2" id="password2"  size="35" maxlength="25" type="password" class="app_input" />
					<div class="image" id="password2ImageDisplay"></div>
					<span class="hint" id="password2HelpDisplay">
					<span id="password2MessageDisplay"></span>
					<span id="password2Pointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				<dt>
					<label class="title" for="phrase">Choose a Security Question:</label>
				</dt>
				<dd>
					<select name="phraseIdentifier" id="phraseIdentifier"  style="margin-left:0px" />
								<option value selected></option>
								<option value="Make or model of your first car?">Make or model of
								your first car?</option>
								<option value="Middle name of your Father?">Middle name of your
								Father?</option>
								<option value="Middle name of your first child?">Middle name of
								your first child?</option>
								<option value="Name of street you grew up on?">Name of street you
								grew up on?</option>
								<option value="Name of your favorite teacher?">Name of your
								favorite teacher?</option>
								<option value="Name of your first employer?">Name of your first
								employer?</option>
								<option value="Name of your first school?">Name of your first
								school?</option>
								<option value="Your best friend in high school?">Your best friend
								in high school?</option>
								<option value="Your favorite childhood TV show?">Your favorite
								childhood TV show?</option>
								<option value="Your high school mascot?">Your high school mascot?</option>
					</select>
					<div class="image" id="phraseIdentifierImageDisplay"></div>
					<span class="hint" id="phraseIdentifierHelpDisplay">
					<span id="phraseIdentifierMessageDisplay"></span>
					<span id="phraseIdentifierPointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				<dt>
					<label class="title" for="phrase">Enter Security Answer:</label>
				</dt>
				<dd>
					<input name="phrase" id="phrase" type="password"  size="35" maxlength="25" class="app_input"  />
					<div class="image" id="phraseImageDisplay"></div>
					<span class="hint" id="phraseHelpDisplay">
					<span id="phraseMessageDisplay"></span>
					<span id="phrasePointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
				<dt>
					<label class="title" for="phrase2">Re-enter Security Answer:</label>
				</dt>
				<dd>
					<input name="phrase2" id="phrase2" type="password"  size="35" maxlength="25" class="app_input"  />
					<div class="image" id="phrase2ImageDisplay"></div>
					<span class="hint" id="phrase2HelpDisplay">
					<span id="phrase2MessageDisplay"></span>
					<span id="phrase2Pointer" class="hint-pointer">&nbsp;</span></span>
				</dd>
			</dl>
		</div>

	<!-- end new stuff -->
		<h3 class="blueText" id="hrTop">Accept Terms and Activate Registration</h3>
		<div id="lastFields">
			<br>
			<dl>
				<dt>
					<input type="checkbox" onclick="javascript:callEnable();" name="termsAndConditions" id="termsAndConditions" />
					<span>I have read and accepted the <a href="/legal_notice.shtml');">Terms and Conditions</a>.</span>
					<span class="image" id="termsAndConditionsImageDisplay"></span>
					<span class="errorTerms" id="termsAndConditionsErrorDisplay"></span>
					<span class="hint" id="termsAndConditionsHelpDisplay">
						<span id="termsAndConditionsMessageDisplay"></span>
						<span id="termsAndConditionsPointer" class="hint-pointer">&nbsp;</span>
					</span>
				</dt>
			</dl>
		</div>
 
		<div id="activateButtonField">
		   <dl>		
				<dd>
					<input type="button" class="blueButton_OFF" name="activateButton" id="activateButton"  onclick="javascript:validateUserData(this);" value="Activate Online Access" disabled="disabled" />
				</dd>
			</dl>		
		</div>
		</td></tr></table>
	</form>
</div>

</body>
  <tr>
  	<td width="2%" height="25" align="right" class="Footer">&nbsp;</td>
    <td height="19" colspan="3" class="Footer"><%@ include file="/cuspages/commonincludes/footer.jsp"%></td>
  </tr>
</html>