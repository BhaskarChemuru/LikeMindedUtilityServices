
<div id="login">
<div class="formHeader">Login</div>
<script src="scripts/dataValidation.js" type="text/javascript"></script>
<script>
function validateLoginForm(loginForm)
{
  var userId    = $('#username').val();
  var passwordVal    = $('#cpassword').val();
  //alert("userId: "+userId);
  userId = trimspaces(userId);
  //document.forgotpassword.userIdHiden.value = userId;

  	if(!validateEmail(userId))
	{
	  document.loginForm.username.focus();
	  return false;
	}

	if (!isEmailAddr(userId))
	{
	  alert('Please enter valid User ID (Your register email id)');
	  document.loginForm.username.focus();
	  return false;
	}

	  if(passwordVal == "")
		{
		  alert("Password must be at least 6 letters and numbers.");
	         document.loginForm.cpassword.focus();
	         document.loginForm.cpassword.select();
		  return false;
		}
	  if(!checkfor6(passwordVal))
		{
		  alert("Password must be at least 6 letters and numbers.");
	         document.loginForm.cpassword.focus();
	         document.loginForm.cpassword.select();
		  return false;
		}	

		return true;
}
</script>
<div id="loginForm">
<form method="post" name="loginForm" action="loginProcesses.do">
<input type="hidden" name="p" value="process">
<input type="hidden" name="action" value="login">
<div class="label"><label for="cusername">Username*</label></div>
<div class="input"><input id="cusername" name="username" minlength="2" type="text" /></div>
<div class="label"><label for="cpassword">Password*</label></div>
<div class="input"><input id="cpassword" type="password" name="cpassword" /></div>
<div class="buttonrow">

<div style="float:right;"><button class="button-sm" onclick="javascript:return validateLoginForm(this);" >Submit</button></div>
<div style="float:right;"><button class="button-sm" type="button" onClick="btnClick('registration.do')">Registration</button></div>
<div class="buttonrow">
<div id="forgotPwd" onClick="btnClick('forgotUserId.jsp')"><u>Forgot User ID?</u></div> &nbsp; &nbsp;
<div id="forgotPwd" onClick="btnClick('forgotPassword.jsp')"><u>Forgot Password?</u></div>
</div>
</form>
</div>
</div>

