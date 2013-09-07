<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<HTML>
<%@ taglib prefix="wrapper" uri="../../cus/registration/wrapperTags" %>
<jsp:useBean
	class="com.fpl.ima.eca.viewbean.MessageBean"
	id="viewBean"
	scope="request" />
<%@ page buffer="none" errorPage="/eca/error.jsp" session="false" %>
<%@ include file="../../cus/registration/methods.jsp" %>
<%
response.setHeader("Cache-Control","no-store");  
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma","no-cache");  
response.setDateHeader ("Expires", -1);  
%>
<wrapper:head appId="ECA_residential">
	<HEAD>
	<META NAME="WT.CurrentPage" CONTENT="EcaPasswordChangePage">
	<META NAME="WT.ti" CONTENT="ECA Password Change Page"> 
	<TITLE>FPL ECA Password Change Page</TITLE>

<!-- Master stylesheet for FPL.com -->
<link href="<%=System.getProperty("external.appServer")%>/fplcommon/css/fpl.css" rel="stylesheet" type="text/css" media="screen" />
<!-- Master stylesheet for FPL.com -->	

	</HEAD>
</wrapper:head>
<wrapper:body appId="ECA_residential" templateType="body" attribute="onLoad='document.newPassword.newpassword1.focus();'"><br></wrapper:body>
	<BODY>
	<SCRIPT type="text/javascript" language="JAVASCRIPT">
function checkForBlanks(custTxt)
{
  if ((custTxt == ""))
	{
	  return false;
	}
  else
  return true;
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
function checkfor6(parm1)
{
  if (parm1.length < 6)
	{
	  return false;
	}
  else
  return true;
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
function validatepswd(p1, p2)
{
  if (p1 == p2)
	{
	  return true;
	}
  else
  return false;
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
function checkForAlphaAndNumOnly(txtFld)
{
  var charValid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numValid = "1234567890";
  var ok = "yes";
  var numCount = 0;
  var charCount = 0;
  var temp;
  var temp1;
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (charValid.indexOf(temp) > "-1")
	  charCount ++;
	}
  if (charCount > 0)
	{
	  for (var i=0; i<txtFld.length; i++)
		{
		  temp = "" + txtFld.substring(i, i+1);
		  if (numValid.indexOf(temp) > "-1")
		  numCount ++;
		}
	}
  if ( (charCount > 0) && (numCount > 0))
	{
	  return true;
	}
  else
	{
          if (charCount == 0){
            errorCheck = 1;
          }
          else{
             errorCheck = 2;
          }  
           
	  return false;
	}
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
var errorCheck;
function submitIt(newPassword)
{
  var npw1 = newPassword.newpassword1.value;
  var npw2 = newPassword.newpassword2.value;
  npw1 = trimspaces(newPassword.newpassword1.value);
  newPassword.newpassword1.value = npw1;
  npw2 = trimspaces(newPassword.newpassword2.value);
  newPassword.newpassword2.value = npw2;
  if(!checkForBlanks(npw1))
	{
	  alert("Please enter your New Password.");
	  newPassword.newpassword1.focus();
	  return false;
	}
  if(!checkfor6(npw1))
	{
	  alert("Password must be at least 6 letters and numbers.");
         newPassword.newpassword1.focus();
         newPassword.newpassword1.select();
	  return false;
	}
  if(!checkForAlphaAndNumOnly(npw1))
	{
	  if (errorCheck == 1)
	  alert("Password must contain at least 1 letter and cannot be less than 6 characters.");
	  else
	  alert("Password must contain at least 1 number and cannot be less than 6 characters.");
	  newPassword.newpassword1.focus();
	  newPassword.newpassword1.select();	
	  return false;
	}
  if(!checkForChars(npw1))
	{
	  if (errorCheck == 1)
	  alert("Password must be at least 6 letters and numbers.");
	  else
	  alert("Please use letters, numbers and no spaces in the Password.");
	  newPassword.newpassword1.focus();
	  newPassword.newpassword1.select();
	  return false;
	}	
  if(!checkForBlanks(npw2))
	{
	  alert("Please enter your password in the Retype New Password field.");
	  newPassword.newpassword2.focus();
	  return false;
	}
  if(!validatepswd(npw1,npw2))
	{
	  alert("New Passwords do not match. Please try again.");
	  newPassword.newpassword2.focus();
         newPassword.newpassword2.select();
	  return false;
	}
  return true;
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
function trimspaces(field)
{
  var x
  var precount = 0;
  var postcount = 0;
  var retfield = ""
  for (x=0;x<field.length;x++)
	{
	  if (field.charAt(x) == " " )
	  precount++;
	  else
	  break;
	}
  for ( x=field.length; x>0; x-- )
	{
	  if (field.charAt(x-1) == " " )
	  postcount++;
	  else
	  break;
	}
  if (field.length == precount)
  retfield = "";
  else
  retfield = field.substring(precount,(field.length-postcount));
  return retfield;
}
</SCRIPT>
	<SCRIPT
		type="text/javascript"
		language="JAVASCRIPT">
function checkForChars(txtFld)
{
  var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var ok = "yes";
  var temp;
  if (txtFld.length == 0)
	{
	  errorCheck = 1;
	  return false;
	}
  for (var i=0; i<txtFld.length; i++)
	{
	  temp = "" + txtFld.substring(i, i+1);
	  if (valid.indexOf(temp) == "-1") ok = "no";
	}
  if (ok == "no")
	{
	  errorCheck = 2;
	  return false;
	}
  return true;
}
</SCRIPT>

<!-- New Form Validation JavaScript from Web Services Team -- Fields have been named according to original .jsp file -->
<script language="javascript" src="<%=System.getProperty("external.appServer")%>/secure/scripts/validateApps.js"></script>
<script>

function hideAllErrors(){

document.getElementById("newpassword1Error").style.display = "none";
document.getElementById("newpassword2Error").style.display = "none";


}


function submitForm(){
hideAllErrors();

var errors = [];

if (!(document.newPassword.newpassword1.value == document.newPassword.newpassword2.value))
		{errors[errors.length] = ["newpassword2Error", "newpassword2"];
		document.getElementById("newpassword2Error").innerHTML = "Passwords must match.<br/>";
		document.newPassword.newpassword2.focus();}	
		
if (!checkAlphaNumNoSpaceRequired (document.newPassword.newpassword1.value)) 
		{errors[errors.length] = ["newpassword1Error", "newpassword1"];
		document.getElementById("newpassword1Error").innerHTML = "Password cannot contain special characters.<br/>";
		document.newPassword.newpassword1.focus();}	
		
if(!checkForAlphaAndNumOnly(document.newPassword.newpassword1.value))
	{
		errors[errors.length] = ["newpassword1Error", "newpassword1"];
		if (errorCheck == 1){
			document.getElementById("newpassword1Error").innerHTML = "Password must contain at least 1 letter.<br/>";
		} else {
			document.getElementById("newpassword1Error").innerHTML = "Password must contain at least 1 number.<br/>";
		}     
		document.newPassword.newpassword1.focus();    
	}			
if (!validateUserIdPwLength825 (document.newPassword.newpassword1.value)) 
		{errors[errors.length] = ["newpassword1Error", "newpassword1"];
		document.getElementById("newpassword1Error").innerHTML = "Password must be 8-25 characters.<br/>";
		document.newPassword.newpassword1.focus();}
					
	if (errors.length > 0) { 
			reportErrors(errors);
			return false;
		}

}

</script>
<!-- End Form Validation JavaScript from Web Services Team -->
<!-- Begin New HTML from Web Services -->
<table width="625" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><h1 align="center" style="width: 620px;"><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/lock.gif" width="11" height="19" alt="" /> Forgot Password</h1></td>
  </tr>
  <tr>
    <td><br><p>Please create your new password and then click Submit.</p><br></td>
  </tr>
  <tr>
    <td><p style="color: red;"><jsp:getProperty name="viewBean" property="message" /></p><br /></td>
  </tr>
  <tr>
    <td>
    <div align="center">
    <table width="585" border="0" cellspacing="0" cellpadding="0">
      <tr>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tl.gif" width="11" height="25" alt="" /></td>
    <td width="563"><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tcBG.gif" width="100%" height="25" alt="" /></td>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/gr_outline_tr.gif" width="11" height="25" alt="" /></td>
      </tr>
    </table>
    <table width="585" border="0" cellspacing="0" cellpadding="0">
  <tr align="center">
    <td colspan="3" class="bottomPortalTD_sides">
<div align="center">
<form name="newPassword" onSubmit="return submitForm();" method="post" action="../../cus/registration/EcaController">
<table width="450" border="0" cellspacing="0" cellpadding="0">
  <tr align="left">
    <td class="textPad30L" width="40%">New Password: </td>
    <td><input type="password" name="newpassword1" id="newpassword1" size="25" maxlength="25" style="border: 1px solid;border-color: #ADC3D6;;"><br />
    <span style="font-size:10px">(case sensitive)</span><br />
    <div class="error" id="newpassword1Error">Please enter your user ID.</div><br/></td>
  </tr>
  <tr align="left">
    <td class="textPad30L" width="40%">Confirm New Password: </td>
    <td><input type="password" name="newpassword2" id="newpassword2" size="25" maxlength="25" style="border: 1px solid;border-color: #ADC3D6;;"><br />
      <div class="error" id="newpassword2Error">Passwords must match.</div><br/></td>
  </tr>
  <tr align="center">
    <td colspan="2">    	
    <div style="padding-top:8px;"><input class="button" style="border:0px;" type="submit" a href="<%=System.getProperty("external.appServer")%>/residential/customer_service.shtml" onClick="return submitForm();" name="submit" value="Submit"></div></td>
    </tr>
</table>
	<INPUT type="hidden" name="command" value="resetpassword">
    <INPUT type="hidden" name="previousPage" value="newpassword">
    <INPUT type="hidden" name="userid" value="<%=viewBean.getResUserID()%>">
</form>
</div></td>
    </tr>
  <tr>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bl.gif" width="11" height="16" alt="" /></td>
    <td width="563"><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bcBG.gif" width="100%" height="16"></td>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_br.gif" width="11" height="16" alt="" /></td>
  </tr>
</table></div>
</td>
</tr>
</table> 

<!-- BEGIN Original JSP form -- Please remove after comversion is complete 	
  <TABLE
		cellspacing="0"
		cellpadding="0"
		border="0"
		width="630">
		<TBODY>
			<TR>
				<TD>
				<TABLE width="550">
					<TBODY>
						<TR>
							<TD>
							<H5>New Password</H5>
							</TD>
							<TD
								height="20"
								valign="middle"
								width="386"></TD>
						</TR>
					</TBODY>
				</TABLE>
				<TABLE
					width="550"
					cellpadding="1">
					<TBODY>
						<TR>
							<TD>
							<P>Passwords are case sensitive. Please use 6 or more letters and
							numbers without spaces, then click Submit.</P>
							</TD>
						</TR>
						<TR>
							<TD>
							<HR>
							<P style="color: red; font-size: 12pt; font-family: Arial"><jsp:getProperty name="viewBean" property="message" /></P>
							</TD>
						</TR>
						<TR>
							<TD>
							<FORM
								AUTOCOMPLETE ="OFF"
								onsubmit="return submitIt(this)"
								NAME="newPassword"
								method="POST"
								action="EcaController">
							<TABLE
								width="550"
								cellpadding="1">
								<TBODY>
									<TR>
										<TD
											align="right"
											valign="top"
											width="275"
											height="20"><B>New Password:</B></TD>
										<TD
											valign="top"
											align="left"
											width="275"
											height="20"><INPUT
											name="newpassword1"
											maxlength="25"
											type="password"
											size="20"
											align="TOP"
											ondragstart="return false"
											onselectstart="return false"></TD>
									</TR>
									<TR>
										<TD
											align="right"
											valign="top"
											width="275"
											height="20"><B>Retype New Password:</B></TD>
										<TD
											valign="top"
											align="left"
											width="275"
											height="20"><INPUT
											name="newpassword2"
											maxlength="25"
											type="password"
											size="20"
											align="TOP"
											ondragstart="return false"
											onselectstart="return false"></TD>
									</TR>
									<TR>
										<TD
											height="20"
											colspan="2"></TD>
									</TR>
									<TR>
										<TD
											align="center"
											valign="middle"
											colspan="2"><INPUT
											type="submit"
											name="Submit"
											value="Submit"></TD>
									</TR>
									<TR>
										<TD
											colspan="2"
											height="20"></TD>
									</TR>
								</TBODY>
							</TABLE>
							<INPUT
								type="hidden"
								name="command"
								value="resetpassword"><INPUT
								type="hidden"
								name="previousPage"
								value="newpassword"><INPUT
								type="hidden"
								name="userid"
								value="< remove %=viewBean.getResUserID()%>"></FORM>
							</TD>
						</TR>
					</TBODY>
				</TABLE>
				</TD>
				<TD valign="TOP">
				<TABLE
					cellspacing="0"
					cellpadding="0"
					border="0">
					<TBODY>
						<TR>
							<TD
								width="48"
								valign="TOP"></TD>
						</TR>
					</TBODY>
				</TABLE>
				</TD>
			</TR>
		</TBODY>
	</TABLE>
 END Original JSP form -- Please remove after comversion is complete -->    
	</BODY>
<wrapper:body appId="ECA_residential" templateType="body2"><br></wrapper:body>
</HTML>
