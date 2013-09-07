<jsp:include flush="true" page="pageheader.jsp"/>
<title>MCUS - Forgot User Password</title>
<body>
<jsp:include flush="true" page="loginheader.jsp"/>
<jsp:include flush="true" page="menuheader.jsp"/>

<div id="Wrap"> 
 <!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">Forgot Password</h1>
    </div>
    <div class="crvBdrSection clear">
		<div class="btPad25 borderBottom botMargin10 clear">
			<div class="left">
			  <h2 class="bold">Reset Password</h2>
			</div>
		</div>
		<div style="color:green" class="clear botMargin30 hide" id="message">
			<p>Successfully verified User ID</p>
		</div>
		<!-- Content inside STARTS -->
		<form method="post" name="forgotpassword" onsubmit="return resetPassword('forgotpassword');" action="updatePassword.do">
		<div id="step1">
		<div style="color: red" id="successMessage1" >${dispmessage}</div><br>
			<div class="clear botMargin10">
				<p>Please enter User ID below to reset password:</p>
			</div>
			<div class="clear botMargin10">
				<label class="rtMargin10"> User ID*</label>
				<input type="text" name="userId" id="userId" value="" class="last width200px"/>
			</div>
			<div>
				<button class="navBtn" type="button" value="" id="verifyUser">Continue</button>
			</div>
		</div>
		<div class="clear botMargin10" id="step2">
			<p class="botMargin10">Please answer below security phrase to rest your password:</p>
			<p class="botMargin10">Answer a Security Question:*</p>
			<div class="successMessage" id="writesecquestion">
					</div>
			<div class="clear botMargin10">
				<!--   <label class="rtMargin10"> Enter Security Answer*</label>-->
				<input type="password" name="phrase"  id="phrase" class="last width200px"/>
			</div>
			<div>
				<button class="navBtn" type="button" value="" id="verifySecQ" >Continue</button>
			</div>
		</div>
		<div id="step3">
			<p class="botMargin10"> Please enter your new password:</p>
			<div class="botMargin10 left">
				<label class="rtMargin10"> Password* </label>
				<input type="password" name="passwd" value="" id="passwd" class="width200px"/>
				<label class="rtMargin10"> Confirm Password* </label>
				<input type="password" name="password2" value="" id="password2" class="width200px last"/>
			</div>
			<div class="clear">
				<button class="navBtn" type="submit" value="" id="savePwd" >Continue</button>
			</div>
			<div class="clear"></div>
		</div>
			<input type="hidden" name="secQuestion" value="">
		<input type="hidden" name="secAnswer" value="">
		<input type="hidden" name="userIdHiden" value="">
		</form>
    </div>
  </div>
</div>
<!-- END of Main Content Section -->

    <script type="text/javascript">

    $("#step1").show();
	$("#step2").hide();
	$("#step3").hide();

    $("#verifyUser").click(function () {
    	getUserId('forgotpassword');
    	//verifySecurity();
        
    });  
    
    $("#verifySecQ").click(function () {
    	verifySecurity();
      
    });

    $("#savePwd").click(function () {

    	/*if (resetPassword('forgotpassword'))   
    		$("#forgotpassword").submit();
    	else 
        	return false;*/
    	/*        $("#message").show();
		$("#message").text("Password reset successfully. Please try to log back in with your new password.");
		$("#step1").hide();
		$("#step2").hide();
		$("#step3").hide();*/
    });	
    
    function verifySecurity()
    {
		//alert("User ID is: "+emailc);
		var phraseVal    = $('#phrase').val();
		
		//alert("phraseVal: "+phraseVal);
		var dPhareseVal = document.forgotpassword.secAnswer.value;
		//alert("dPhareseVal: "+dPhareseVal);
		   	  if(phraseVal == "")
    		{
    		  	alert("Please enter Security Answer.");
    	         document.forgotpassword.phrase.focus();
    	         document.forgotpassword.phrase.select();
    		  return false;
    		}
		if (phraseVal == dPhareseVal ) {

				$("#message").show();
				$("#message").text("Security phrase has been successfully verified.");
				$("#step1").hide();
				$("#step2").hide();
				$("#step3").show();
			
		}else {
			document.forgotpassword.phrase.value="";
			document.forgotpassword.phrase.focus();
	         document.forgotpassword.phrase.select();
				$("#message").show();
				//$("#message").style("color:red");
				$("#message").text("Invalid Security Answer.");
			}
        return false;
    }
    
    function resetPassword(forgotpassword)
    {

		//alert("inside resetpassword");
    	var pw    = document.forgotpassword.passwd.value;
    	var pw1    = document.forgotpassword.password2.value;
    	//alert("inside resetpassword: pw"+pw);
    	//alert("inside resetpassword: pw2"+pw1);
    	  if(pw == "")
    		{
    		  alert("Please enter password.");
    	         document.forgotpassword.passwd.focus();
    	         document.forgotpassword.passwd.select();
    		  return false;
    		}
    	  if(!checkfor6(pw))
    		{
    		  alert("Password must be at least 6 letters and numbers.");
    	         document.forgotpassword.passwd.focus();
    	         document.forgotpassword.passwd.select();
    		  return false;
    		}
    	  if(!checkForChars(pw))
    		{
    		  if (errorCheck == 1)
    		  alert("Password must be at least 6 letters and numbers.");
    		  else
    		  alert("Please use letters, numbers and no spaces in the Password.");
    		  document.forgotpassword.passwd.focus();
    	      document.forgotpassword.passwd.select();
    		  return false;
    		}	
    	  if(!checkForAlphaAndNumOnly(pw))
    		{
    	         if (errorCheck == 1)
    		  alert("Password must contain at least 1 letter and cannot be less than 6 characters.");
    		  else
    		  alert("Password must contain at least 1 number and cannot be less than 6 characters.");
    	         document.forgotpassword.passwd.focus();
    	         document.forgotpassword.passwd.select();
    		  return false;
    		}
    	  if(pw1 == "")
    		{
    		  alert("Please re-enter your Password .");
    	         document.forgotpassword.password2.focus();
    	         document.forgotpassword.password2.select();
    		  return false;
    		}
    	  if(!validatepswd(pw,pw1))
    		{
    		  alert("Passwords do not match. Please try again.");
    		  document.forgotpassword.password2.focus();
    		  document.forgotpassword.password2.select();
    		  return false;
    		}


    	 // document.forgotpassword.action = "updatePassword.do";
    	 // document.forgotpassword.submit();
    	  return true;
    	
    }


    function getUserId(forgotpassword)
    {
      var userId    = $('#userId').val();
      //alert("userId: "+userId);
      userId = trimspaces(userId);
      document.forgotpassword.userIdHiden.value = userId;

      if(!validateEmail(userId))
  	{
  	  document.forgotpassword.userId.focus();
  	  return false;
  	}
    if (!isEmailAddr(userId))
  	{
  	  alert('Please enter valid User ID (Your register email id)');
  	  document.forgotpassword.userId.focus();
  	  return false;
  	}
     $.ajax({
    	type: "POST",
    	url: "resetPassword.do",
    	data: "userId="+userId,
    	success:function(e){
    	if (e != 'nodata')
    	{
    		
    		$("#message").show();
    		$("#message").text("User Name has been successfully verified.");
    		$("#step1").hide();
    		$("#step3").hide();
    		$("#step2").show();            
            
    		//document.cusReg.moreFields.enable();
                var innerHTMLStr="<span>";
            var a = e.split("|"); // Delimiter is a string
            for (var i = 0; i < a.length; i++)
            {
            	//alert(a[i]);
            	//var emailstr = a[i].replace(a[i].substring(2,5),"***");
            	if (i ==0) {
					//alert ("hi:"+i);
           		 	document.forgotpassword.secQuestion.value = a[i];
            		 innerHTMLStr = innerHTMLStr+a[i];
            	}
            	else if( i==1)
            		document.forgotpassword.secAnswer.value = a[i];
        		                	                	
            	
			            	
            }
            innerHTMLStr+"<span>";
            document.getElementById('writesecquestion').innerHTML=innerHTMLStr;       

           
            
             		
    		
    	} else {
    		$("#message").show();
    		$("#message").text("User Name was not found.");
    		$("#step1").show();
    		$("#step3").hide();
    		$("#step2").hide();            
        	
        	}
    	},
    	error:function(er){alert("error:"+er);}
    	});

      return false;

    }

    </script>

  <jsp:include flush="true" page="pagefooter.html"/>