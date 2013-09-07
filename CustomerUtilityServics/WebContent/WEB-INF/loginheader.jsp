<div id="header-wrapper" class="clear">
    <div id="header">
      <div class="left tpPad5"><img width="255" height="65" src="resources/images/Milestone_Utility_ServicesFocus.png" alt="Milestone Utility Services"> </div>
      <div class="right">
        <form method="post" name="loginForm" action="loginProcesses.do">
          <div id="logoCustServ" class="right width175">
            <div class="group botMargin10"> <span class="userIcon"></span>
              <input type="text" name="username" id="username" placeholder="Username" class="last width142px text90"/>
            </div>
            <div class="group botMargin10"> <span class="pwIcon"></span>
              <input type="password" name="cpassword" id="cpassword" placeholder="Password" class="last width142px text90"/>
            </div>
            <div class="smallTxt btPad10 left"> Forgot <a href="javascript:btnClick('forgotUserId.jsp');" title="Forgot Username?">Username</a> or <a href="javascript:btnClick('forgotPassword.jsp');" title="Forgot Password?">Password</a> ? </div>
            <div>
              <button type="button" value="" class="funcBtn left dialogLink noBotMar" onclick="javascript:btnClick('registration.do');">New Customer</button>
              <button class="navBtn right last noMargin" type="submit" value="" id="loginBtn" ><span class="logIcon rtPad10"></span>Login&nbsp;</button>
            </div>
          </div>
<script>

$("#loginBtn").click(function () {

 //alert("inside");	
 var userId    = $('#username').val();
 //alert("userId:"+userId);
 var passwordVal    = $('#cpassword').val(); //$('#cpassword').val();
 //alert("userId: "+userId);
  userId = trimspaces(userId);
  //document.forgotpassword.userIdHiden.value = userId;

  	if(!validateEmail(userId))
	{
	  $('#username').focus();
	  return false;
	}

	if (!isEmailAddr(userId))
	{
	  alert('Please enter valid User ID (Your register email id)');
	  $('#username').focus();
	  return false; 
	}

	  if(passwordVal == "")
		{
		  alert("Please enter password.");
	         $('#cpassword').focus();
	         $('#cpassword').select();
		  return false;
		}
		//alert("passwordVal:"+passwordVal);
	  if(!checkfor6(passwordVal))
		{
		  alert("Password must be at least 6 letters and numbers.");
	         $('#cpassword').focus();
	         $('#cpassword').select();
		  return false;
		}	
		//alert("hi");
		//$('#loginForm').action="loginProcess.do";
		//$('#loginForm').submit();
		return true;
});
</script>

        </form>
      </div>
