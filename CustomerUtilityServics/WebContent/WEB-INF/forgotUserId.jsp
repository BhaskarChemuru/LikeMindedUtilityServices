<jsp:include flush="true" page="pageheader.jsp"/>
<title>MCUS - Forgot User Name</title>
<body>
<jsp:include flush="true" page="loginheader.jsp"/>
<jsp:include flush="true" page="menuheader.jsp"/>

<div id="Wrap">   <!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">Forgot User ID</h1>
    </div>
    <div class="crvBdrSection clear">
		<div class="clear botMargin30 hide" id="message">
			<p style="color:green">Successfully verified Account Number/SSN </p>
		</div>
				<div class="clear botMargin30 hide" id="message2">
			<p style="color:red">Account Number or SSN not found</p>
		</div>
		
      <!-- Content inside STARTS -->
		<form name="forgotid" action="#" method="post">
		<div class="botMargin20" id="step1">
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
				  <h2 class="bold">Find User ID</h2>
				</div>
			</div>
			<div class="left">
				<label class="rtMargin10" for="accountNo"> Account Number* </label>
				<input type="text" name="accountNum" value="" class="width200px" id="accountNum"/>
				<label class="rtMargin10" for="ssnTin"> Last 4 digits of SSN/TIN* </label>
				<input type="password" name="ssn" value="" class="width200px" id="ssn" maxlength="4"/>
			</div>
			<div class="clear">
				<button class="navBtn" type="button" value="" id="verifyAccount">Continue</button>
			</div>
		</div>
		<div id="step2">
			<div class="btPad25 borderBottom botMargin10 clear">
				<div class="left">
					<h2 class="bold">Find User ID(s)</h2>
				</div>
			</div>
			<div class="clear botMargin10">
				<p>There may be mulitple User ID's associated with your Account Number, please select the User ID which you want to see in full:</p>
			</div>
			   <div class="label" id="writeUserids">
            </div>
			<div class="topMargin10">
				<button class="navBtn" type="button" value="" id="verifyEmail">Continue</button>
			</div>
		</div>
		</form>
    </div>
  </div>
</div>
<!-- END of Main Content Section -->
<!-- 
    <div class="formHeader">Forgot UserID</div>
    <div class="form">
        <form method="post" name="forgotid" action="javascript:getUserId(this);" >
            <input type="hidden" name="action" value="forgotid">
            <div class="sectionHeader">Find UserID</div>
            <div class="label"><label for="accountnumber">Account Number*</label></div>
            <div class="input"><input id="accountNum" name="accountNum" type="text" /></div>
            <div class="label"><label for="lastdigits">Last 4 digits of SSN / SIN / TIN *</label></div>
            <div class="input"><input id="ssn" type="password" name="ssn" maxlength="4" /></div>
            <div class="buttonrow">
            <div class="errorMessage" id="errorMsg" >Invalid Account Number or SSN</div>
            <div class="successMessage" id="successMessage" >Successfully verified Account Number or SSN</div>
                <div><button class="button-lg" type="submit" >Continue</button></div>
            </div>
        </form>
    </div>
    <div id="displayid" class="form" >
            <input type="hidden" name="action" value="forgotp">
            <div class="sectionHeader">Find User ID(s)</div>
            <div class="label"><label for="userid_emailaddress">There may be multiple User ID's associated with your Account Number, please select the User ID which you want to see in full.</label></div>
            <div class="label" id="writeUserids">
            </div>
            <div><button class="button-lg" onClick="javascript:displayComplete(); return false;" type="submit" >Continue</button></div>
    </div>
</div> -->
 <script type="text/javascript"> <!-- DEV Team may code for Data mapping and move the script to JS -->
	$("#step1").show();
	$("#step2").hide();
	//$("#message").show();
    $("#verifyAccount").click(function () {
    	getUserId();
      });  
    
    $("#verifyEmail").click(function () {
        $("#message").show();
        displayComplete();
    });
    </script>
   <script>
    var submitCounter = 0;
    var errorCheck;

    function displayComplete()
    {
		//alert("User ID is: "+emailc);
		
		var userIdlist = document.getElementsByName('useridRadio');
		alert("Selected User ID: "+$('[name=useridRadio]:checked').val());
		return true;
        }
        
    function getUserId()
    {
      var acctNum    = $('#accountNum').val();
      //alert("acctNum: "+acctNum);
      var ssnVal     = $('#ssn').val();
      //alert("ssnVal: "+ssnVal);
      acctNum = trimspaces(acctNum);
      document.forgotid.accountNum.value = acctNum;
      ssnVal = trimspaces(document.forgotid.ssn.value);
      document.forgotid.ssn.value = ssnVal;  
      if(!checkForNumbersOnly(acctNum))
      {
      	 if (errorCheck == 1)
    	  alert("Please enter your Account Number."); 
             else
    	  alert("Please use numbers only in the Account Number."); 
    	  document.forgotid.accountNum.focus();
    	  document.forgotid.accountNum.select();
    	  return false;
      }
      if(!checkForNumbersOnly(ssnVal))
      {
      	 if (errorCheck == 1)
    	  alert("Please enter your last 4 digits of your SSN."); 
             else
    	  alert("Please use numbers only in the SSN."); 
    	  document.forgotid.ssn.focus();
    	  document.forgotid.ssn.select();
    	  return false;
      }
             
    $.ajax({
    	type: "POST",
    	url: "getuserid.do",
    	data: "accountNum="+acctNum + "&ssnVal="+ssnVal,
    	success:function(e){
    	if (e.length > 4)
    	{
    		
    	      $("#message").show();
    	      $("#message2").hide();
    			$("#step1").hide();
    			$("#step2").show();
            var innerHTMLStr="<p class='clear'>";
            //var a = e;
            var a = e.split("|") // Delimiter is a string
            for (var i = 0; i < a.length; i++)
            {
            	//alert(a[i]);
            	if(a[i].length > 1)
                {
        			
                        
            			var emailstr = a[i].replace(a[i].substring(2,5),"***");
            			innerHTMLStr = innerHTMLStr+"<input type='radio' class='dialogLink'  onClick='javascript:displayComplete('"+a[i]+"');' name='useridRadio' value='" +a[i] +"'/> <label for='emailId1' class='inline'>   " +emailstr+"</label></p>";
                }
			            	
            }
            //innerHTMLStr+"</dl>";
            document.getElementById('writeUserids').innerHTML=innerHTMLStr; 
    	} else {
    	      	$("#message2").show();
    	      	$("#message").hide();
    	      	$("#accountNum").val('');
    	      	$("#ssn").val('');
    			$("#step1").show();
    			$("#step2").hide();
        	
        	}
    	},
    	error:function(er){alert("error:"+er);}
    	});

      return true;

    }

    </script>

  <jsp:include flush="true" page="pagefooter.html"/>