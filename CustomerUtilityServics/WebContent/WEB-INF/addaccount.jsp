<jsp:include flush="true" page="pageheader.jsp"/>
<body>
<jsp:include flush="true" page="username.jsp"/>    
<jsp:include flush="true" page="menuheader.jsp"/>
  <div id="Wrap">

<!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">Add Account</h1>
    </div>
   <div class="crvBdrSection clear">
		<!-- Content inside STARTS -->
		<div style="color:green" class="clear botMargin30 hide" id="message">
			<p>Successfully verified User ID</p>
		</div>
		<form method="post" name ="addAcctForm" action="addAccountProcess.do">
		<div id="step1">
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
					<h2 class="bold">Step 1:</h2>
				</div>
			</div>
		
			<div class="clear botMargin10">
				<p>Please provide the below details</p>
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
            <input type="hidden" name="acctNumToAdd" value="">
            <input type="hidden" name="serviceAddrToadd" value="">
             <input type="hidden" name="ssnHidden" value="">
     
			<div>
				<button class="navBtn" type="button" value="" id="verifyAccount">Continue</button>
			</div>
			<div class="left clear" style="color:red" id="successMessage1" >${dispmessage}</div>
			<div class="left clear" style="color:green" class="clear botMargin30 hide" id="message"></div>
		</div>
		<div id="step2" class="hide">
		<br/>
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
					
					<h2 class="bold">Step 2:</h2>
				</div>
			</div>
		
        		<div class="left clear">
				<label for="serviceaddress"><b>If the below service address is correct, please click 'Add Account' button to add the above account to your profile.</b></label></div>
        		<div class="left clear" id="serviceAddr">* </div>
        	<div class="left clear">
        		<p></p><br/>
				<button class="navBtn" type="submit" value="" id="activateButton">Add Account</button>
			</div>
        </div>
    </form>
  </div>
  </div>
  </div>
    <script>
	$("#message").hide();
	$("#step1").show();
	$("#step2").hide();

	$("#verifyAccount").click(function () {
		validateAccountSSNData('addAcctForm');
	});	  

    
	var submitCounter = 0;
	var errorCheck;
	function validateAccountSSNData(addAcctForm)
	{
	  var acctNum    = $('#accountNum').val();
	  //alert("acctNum: "+acctNum);
	  var ssnVal     = document.addAcctForm.ssn.value;
	  acctNum = trimspaces(acctNum);
	  document.addAcctForm.accountNum.value = acctNum;
	  ssnVal = trimspaces(document.addAcctForm.ssn.value);
	  document.addAcctForm.acctNumToAdd.value = acctNum;
	  document.addAcctForm.ssnHidden.value = ssnVal;  
	  document.addAcctForm.ssn.value = ssnVal;  
	  if(!checkForNumbersOnly(acctNum))
	  {
	  	 if (errorCheck == 1)
		  alert("Please enter your Account Number."); 
	         else
		  alert("Please use numbers only in the Account Number."); 
		  document.addAcctForm.accountNum.focus();
		  document.addAcctForm.accountNum.select();
		  return false;
	  }
	  if(!checkForNumbersOnly(ssnVal))
	  {
	  	 if (errorCheck == 1)
		  alert("Please enter your last 4 digits of your SSN."); 
	         else
		  alert("Please use numbers only in the SSN."); 
		  document.addAcctForm.ssn.focus();
		  document.addAcctForm.ssn.select();
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
			$("#message").text("Account Number/SSN was not found.");		
		}
		else
			{
				//alert(e);
				//$('#moreFields').removeClass("disableField");
				document.addAcctForm.serviceAddrToadd.value = rtnStr.trim();
				$("#step2").show();
				$("#verifyAccount").hide();
				$("#successMessage1").hide();
				//$('#lookUpFields').removeattr("disabled");
				$('#accountNum').attr("disabled","disabled");
				$('#ssn').attr("disabled","disabled");
				//document.cusReg.moreFields.enable();
				$("#message").show();
				$("#message").text("Account Number/SSN has been successfully verified.");		
	            innerHTMLStr="<lable>* "+rtnStr.trim()+"</label>";
	            document.getElementById('serviceAddr').innerHTML=innerHTMLStr; 
			} 
		},
		error:function(er){alert("error:"+er);}
		});
	  
	  return true;

	}
		
 </script>

  <jsp:include flush="true" page="pagefooter.html"/>

