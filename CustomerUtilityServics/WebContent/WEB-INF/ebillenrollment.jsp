<jsp:include flush="true" page="pageheader.jsp"/>
<body>
<jsp:include flush="true" page="username.jsp"/>    
<jsp:include flush="true" page="menuheader.jsp"/>
  
<div id="Wrap">

  <!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">E-Bill Enrollment</h1>
    </div>
   
    <div class="crvBdrSection clear" id="successMessage1" hide >
      <!-- Content inside STARTS -->
    <form name="goacctSum" action="callAccountSumWithAccNum.do">
    <div style="color: green" id="smessgae">${dispmessage}</div><br/>
         <div class="clear">
        <button class="navBtn left" type="submit" id="accacct"  value="accacct">Goto AccountSummary</button>
      </div>
 	</form>
	</div>
   <form name="ebillenroll" action="ebillEnrollment.do" method="post" onsubmit="return verifyEmailAndSubmit();">
	 <input type="hidden" name="dispmessage" id="dispmessage" value="${dispmessage}"/>

    <div class="crvBdrSection clear" id="ebillcontent">
      <!-- Content inside STARTS -->
      <div class="btPad25 borderBottom botMargin10 clear">
        <div class="left">
          <h2 class="bold">Enrollment Details</h2>
        </div>
      </div>
      <div class="clear botMargin20">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
      </div>
    
      <div class="btPad25 borderBottom botMargin10 clear">
        <div class="left">
          <h2 class="bold">Please enter the following details</h2>
        </div>
      </div>
      <div class="clear botMargin20">
        <label class="left rtMargin10"> Account#: </label>
		<p class="bold"><%= (String)session.getAttribute("accountNumSessVal") %></p>
      </div>
      <div class="clear botMargin20">
        <label class="left rtMargin10"> Email Address: </label>
		<input type="text" name="emailaddr" id="emailaddr" value="<%= (String)session.getAttribute("userNameSessVal") %>"/>
      </div>
      <div class="clear botMargin20 hide">
        <label class="left rtMargin10"> Re-Email Address: </label>
		<input type="text" name="re_email_address" value="" />
      </div>
      <div class="btPad25 borderBottom botMargin10 clear">
        <div class="left">
          <h2 class="bold">Terms</h2>
        </div>
      </div>
      <input type="hidden" name="acctNumHidden" value="<%= (String)session.getAttribute("accountNumSessVal") %>"/>
      <div class="clear">
        <textarea style="height:100px" readonly>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</textarea>
      </div>
      <div class="clear">
        <button class="navBtn left" type="button" id="disAgreeBtn" value="DisAgree">I do not Accept.</button><button class="navBtn right" type="submit" value="Agree">I Accept.</button>
      </div>
      </form>
    </div>
  </div>
  <!-- END of Main Content Section -->
  <script>
  		$('#successMessage1').hide();
	//alert("dispmessage:"+$('#dispmessage').val());
  	  if($('#dispmessage').val() != "")
	  {
			$('#ebillcontent').hide();
			$('#successMessage1').show();
	  }
  
	$("#disAgreeBtn").click(function () {
		//		validateAccountSSNData();
		alert("hhh");
		$("#ebillenroll").attr('action', "callAccountSumWithAccNum.do");
		$("#ebillenroll").submit();
	});	 


	  
  function verifyEmailAndSubmit()
  {
    var userId    = $('#emailaddr').val();
    //alert("userId: "+userId);
    userId = trimspaces(userId);
   // document.forgotpassword.userIdHiden.value = userId;

    if(!validateEmail(userId))
	{
    	$('#emailaddr').focus();
    	$('#emailaddr').select();
	  return false;
	}
  if (!isEmailAddr(userId))
	{
	  alert('Please enter valid User ID (Your register email id)');
	  $('#emailaddr').focus();
	  	$('#emailaddr').select();
	  return false;
	}
	return true;
  }
  </script>
   <jsp:include flush="true" page="pagefooter.html"/>
  