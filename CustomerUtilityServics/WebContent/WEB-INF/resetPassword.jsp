<jsp:include flush="true" page="tempheader.jsp"/>
<div class="page">
    <script type="text/javascript">
 
    
    function resetPassword(resetpassword)
    {

		//alert("inside resetpassword");
		var oldpw    = document.resetpassword.oldpasswd.value;
    	var pw    = document.resetpassword.passwd.value;
    	var pw1    = document.resetpassword.password2.value;
    	//alert("inside resetpassword: oldpw"+oldpw);
    	//alert("inside resetpassword: pw2"+pw1);
    	  if(oldpw == "")
    		{
    		  alert("Password must be at least 6 letters and numbers.");
    	         document.resetpassword.oldpasswd.focus();
    	         document.resetpassword.oldpasswd.select();
    		  return false;
    		}
    	  if(!checkfor6(oldpw))
    		{
    		  alert("Password must be at least 6 letters and numbers.");
    	         document.resetpassword.oldpasswd.focus();
    	         document.resetpassword.oldpasswd.select();
    		  return false;
    		}
    	  if(!checkForChars(oldpw))
    		{
    		  if (errorCheck == 1)
    		  alert("Password must be at least 6 letters and numbers.");
    		  else
    		  alert("Please use letters, numbers and no spaces in the Password.");
    		  document.resetpassword.oldpasswd.focus();
    	      document.resetpassword.oldpasswd.select();
    		  return false;
    		}	
    	  if(!checkForAlphaAndNumOnly(oldpw))
    		{
    	         if (errorCheck == 1)
    		  alert("Password must contain at least 1 letter and cannot be less than 6 characters.");
    		  else
    		  alert("Password must contain at least 1 number and cannot be less than 6 characters.");
    	         document.resetpassword.oldpasswd.focus();
    	         document.resetpassword.oldpasswd.select();
    		  return false;
    		}

    	if(pw == "")
    		{
    		  alert("New Password must be at least 6 letters and numbers.");
    	         document.resetpassword.passwd.focus();
    	         document.resetpassword.passwd.select();
    		  return false;
    		}
    	  if(!checkfor6(pw))
    		{
    		  alert("New Password must be at least 6 letters and numbers.");
    	         document.resetpassword.passwd.focus();
    	         document.resetpassword.passwd.select();
    		  return false;
    		}
    	  if(!checkForChars(pw))
    		{
    		  if (errorCheck == 1)
    		  alert("New Password must be at least 6 letters and numbers.");
    		  else
    		  alert("Please use letters, numbers and no spaces in the New Password.");
    		  document.resetpassword.passwd.focus();
    	      document.resetpassword.passwd.select();
    		  return false;
    		}	
    	  if(!checkForAlphaAndNumOnly(pw))
    		{
    	         if (errorCheck == 1)
    		  alert("New Password must contain at least 1 letter and cannot be less than 6 characters.");
    		  else
    		  alert("New Password must contain at least 1 number and cannot be less than 6 characters.");
    	         document.resetpassword.passwd.focus();
    	         document.resetpassword.passwd.select();
    		  return false;
    		}
    	  if(pw1 == "")
    		{
    		  alert("Please re-enter your Password .");
    	         document.resetpassword.password2.focus();
    	         document.resetpassword.password2.select();
    		  return false;
    		}
    	  if(!validatepswd(pw,pw1))
    		{
    		  alert("Passwords do not match. Please try again.");
    		  document.resetpassword.password2.focus();
    		  document.resetpassword.password2.select();
    		  return false;
    		}


    	 // document.resetpassword.action = "updatePassword.do";
    	 // document.resetpassword.submit();
    	  return true;
    	
    }


    </script>

    <div class="formHeader">Reset Password</div>
    <form method="post" name="resetpassword" action="changePassword.do">
    <div class="form">
        
            <div class="sectionHeader">Reset Password</div>
        <div class="successMessage" id="successMessage1" >${dispmessage}</div>
        <div class="buttonrow">
   		<div class="label"><label for="userid_emailaddress">Please rest your password below.</label></div>
        <div class="label"><label for="passwd">Old Password *</label></div>
        <div class="input"><input id="password" type="password" name="oldpasswd"  /></div>
        <div class="label"><label for="passwd">New Password *</label></div>
        <div class="input"><input id="newpassword" type="password" name="passwd"  /></div>
        <div class="label"><label for="confirmpwd">Confirm Password *</label></div>
        <div class="input"><input id="password2" type="password" name="password2"  /></div>
        <div><button class="button-lg" type="submit" onclick="javascript:return resetPassword(this);" >Continue</button></div>
    </div>
    
		<input type="hidden" name="userIdHiden" value="<%=request.getSession().getAttribute("userNameSessVal")%>">
        </form>

</div>
<jsp:include flush="true" page="tempfooter.jsp"/>