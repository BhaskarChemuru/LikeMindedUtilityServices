<jsp:include flush="true" page="pageheader.jsp"/>
<body>
<jsp:include flush="true" page="loginheader.jsp"/>
<jsp:include flush="true" page="menuheader.jsp"/>
  <div id="Wrap">

  <!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">Registration</h1>
    </div>
   <div class="crvBdrSection clear">
		<!-- Content inside STARTS -->
		<div style="color:green" class="clear botMargin30 hide" id="message">
			<p>Successfully verified User ID</p>
		</div>
		<form name="custReg" action="registerCustomer.do" method="post" onsubmit="return validateUserData('custReg');" >
		<div id="step1">
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
					<h2 class="bold">Step 1:</h2>
				</div>
			</div>
			<div class="clear botMargin10">
				<p>Please fill out the form below</p>
			</div>
			<div class="botMargin10 left">
				<label for="txtAccountNo">Account Number*</label>
				<input type="text" name="accountNum" id="accountNum" class="width200px" />
				<label class="rtMargin10">Last 4 digits of SSN/SIN/TIN* </label>
				<input type="password" name="ssn" id="ssn" maxlength="4" value="" class="width200px last"/>
			</div>
			<div class="clear"></div>
			 <input type="hidden" name="acctNumHidden" value="">
            <input type="hidden" name="ssnHidden" value="">
			<div>
				<button class="navBtn" type="button" value="" id="verifyAccount">Continue</button>
			</div>
		</div>
		<div id="step2" class="hide">
			<div style="color: red" id="successMessage1" >${dispmessage}</div><br>
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
					<h2 class="bold">Step 2:</h2>
				</div>
			</div>
			<div>
				<div class="left clear">
					<label for="txtfirstname">First Name*</label>
					<input type="text" name="firstName" id="firstName" class="width245px" />
				</div>
			</div>  
			<div>
				<div class="left clear">
					<label for="txtlastname">Last Name*</label>
					<p><input type="text" name="lastName" id="lastName" class="width245px" /></p>
				</div>
			</div>  
			<div>
				<div class="left clear">
					<label for="txtemailAddress">Enter your Email Address*</label>
					<p><input type="text" name="emailAddress" id="emailAddress" class="width245px" /></p>
				</div>
			</div>  
			<div>
				<div class="left clear">
					<label for="txtRetyemailAddress">Re-Type your Email Address*</label>
					<p><input type="text" name="emailAddress2" id="emailAddress2" class="width245px" /></p>
				</div>
			</div>  
			<div>
				<div class="left clear">
					<label for="txtPassword">Password*</label>
					<p><input type="password" name="passwd" id="passwd" class="width245px" /></p>
				</div>
			</div>
			<div>
				<div class="left clear">
					<label for="txtConfPassword">Confirm Password*</label>
					<p><input type="password" name="password2" id="password2" class="width245px" /></p>
				</div>
			</div>
			
  			 <div class="left clear"><label for="txtConfPassword">Choose a Security Question: *</label>
				<p>
					<select name="phraseIdentifier" class="width245px" id="phraseIdentifier"  style="margin-left:0px" >
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
					</select></p></div>
				
				<div class="left clear"><label for="phrase">Enter Security Answer: *</label>
				<p><input id="phrase" type="password" name="phrase"  size="35" maxlength="25" class="width245px" /></p></div>
				
				<div class="left clear"><label for="phrase2">Re-Enter Security Answer: *</label>
				<p><input id="phrase2" type="password" name="phrase2"  size="35" maxlength="25" class="width245px"  /></p></div> 
				
		<div class="clear"><h3 class="label" id="hrTop" >Accept Terms and Activate Registration</h3></div>
		<input type="hidden" name="serviceAddrToadd" value="">
		<div class="clear">
			<br>
			<dl>
				<dt>
					<input type="checkbox" onclick="javascript:callEnable();" name="termsAndConditions" id="termsAndConditions" />
					<span>I have read and accepted the <a href="/legal_notice.shtml');">Terms and Conditions</a>.</span>
				</dt>
			</dl>
		</div>
 			
			<div class="clear">
				<br>
				<button class="navBtn" type="submit" value="" id="registerCustomer" name="saveBtn">Save</button>
			</div>
			<div class="clear"></div>
		</div>
		</form>
    </div>
  </div>
  </div>
  <!-- END of Main Content Section -->

    <script>

	$("#message").hide();
	$("#step1").show();
	$("#step2").hide();

	$("#verifyAccount").click(function () {
		validateAccountSSNData();
	});	  

	/*$("#registerCustomer").click(function () {
		alert("hiiii");
		
		
		//validateUserData('custReg');
		/*$("#message").show();
		$("#message").text("Registration complete. Please confirm your email address by clicking the link provided in the email.");
		$("#step1").hide();
		$("#step2").hide();*/
	//});	 
    
	var submitCounter = 0;
	var errorCheck;
	function validateAccountSSNData(custReg)
	{
	  var acctNum    = $('#accountNum').val();
	  //alert("acctNum: "+acctNum);
	  var ssnVal     = document.custReg.ssn.value;
	  acctNum = trimspaces(acctNum);
	  document.custReg.accountNum.value = acctNum;
	  ssnVal = trimspaces(document.custReg.ssn.value);
	  document.custReg.acctNumHidden.value = acctNum;
	  document.custReg.ssnHidden.value = ssnVal;  
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
		//dataType: 'json',
		success:function(e){
			rtnStr = e;
			chkVal = "fail";
		if (rtnStr.trim() == chkVal)
		{
			$("#message").show();
			$("#message").text("Account Number/SSN was not found.");		}
		else
			{
			//alert(e);
			$("#message").show();
			$("#message").text("Account Number/SSN has been successfully verified.");
			$("#step1").hide();
			$("#step2").show();
			
			document.custReg.serviceAddrToadd.value = rtnStr.trim();
			} 
		},
		error:function(er){alert("error:"+er);}
		});
	  
	  return true;

	}
		
	function callEnable()
	{
		if($('#termsAndConditions').is(':checked'))
		    $('#saveBtn').removeAttr("disabled");
		    
		 else
		    $('#saveBtn').attr("disabled","disabled");
    	
   }

     
	  </script>

  <jsp:include flush="true" page="pagefooter.html"/>
