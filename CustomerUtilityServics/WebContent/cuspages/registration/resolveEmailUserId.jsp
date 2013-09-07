<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<%@ taglib prefix="wrapper" uri="../../cus/registration/wrapperTags" %><%String applicationId="ECA_residential"+com.fpl.ima2.framework.webcentric.WrapperUtility.getId(request);%>
<jsp:useBean class="com.fpl.ima.eca.viewbean.MessageBean" id="viewBean"
	scope="request" />
<%@ page buffer="none" errorPage="/eca/error.jsp" session="false" %>
<%@ include file="../../cus/registration/methods.jsp" %>
<% 
response.setHeader("Cache-Control","no-store");  
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma","no-cache");  
response.setDateHeader ("Expires", -1);  
%>
<HTML>
<wrapper:head appId="ECA_residential">
	<HEAD>
	<META NAME="WT.CurrentPage" CONTENT="ECAResolveUserIDStep2"> 
	<META NAME="WT.ti" CONTENT="ECA UserID Resolution Page Step2">
	<META name="GENERATOR"
		content="IBM WebSphere Page Designer V3.0.2 for Windows">
	<META http-equiv="Content-Style-Type" content="text/css">

<!-- Master stylesheet for FPL.com -->
<link href="<%=System.getProperty("external.appServer")%>/fplcommon/css/fpl.css" rel="stylesheet" type="text/css" media="screen" />
<!-- Master stylesheet for FPL.com -->
    
	</HEAD>
</wrapper:head>
<wrapper:body appId="ECA_residential" templateType="body"
	attribute="onLoad='document.resolveEmailUserId.emailAddress.focus();'">
</wrapper:body>
	<BODY>

	<SCRIPT type="text/javascript" language="javascript">
function submitIt(resolveUserId)
{
  var email = trimspaces(resolveEmailUserId.emailAddress.value);
  if(!validateEmail(email))
	{
	  resolveEmailUserId.emailAddress.focus();
	  return false;
	}
  if (!isEmailAddr(email))
	{
	  alert('Please correct your E-mail Address.  The domain or provider name is missing between the "@" and "." (ex. "@aol." "@yahoo.")');
	  resolveEmailUserId.emailAddress.focus();
	  return false;
	}
  return true;
}
</SCRIPT>
	<SCRIPT type="text/javascript" language="javascript">
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
	<SCRIPT type="text/javascript" language="JAVASCRIPT">
function isEmailAddr(email)
{
  var result = false;
  var theStr = new String(email);
  var index = theStr.indexOf("@");
  if (index > 0)
	{
	  var pindex = theStr.indexOf(".",index);
	  if ((pindex > index+1) && (theStr.length > pindex+1))
	  result = true;
	}
  return result;
}
</SCRIPT>
	<SCRIPT type="text/javascript" language="JAVASCRIPT">
// Validate Email for ECA Application
function validateEmail(email)
{
  invalidChars = " /:,;";
  if (email.length == 0)
	{
	  alert ("Please enter your E-mail Address.");
	  return false;
	}
  for (i=0; i< invalidChars.length; i++)
	{
	  badChar = invalidChars.charAt(i);
	  if (email.indexOf(badChar,0) > -1)
		{
		  alert ("Please enter a valid E-mail Address.");
		  return false;
		}
	}
  atPos = email.indexOf("@",1)
  if (atPos == -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("@",atPos+1) > -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  periodPos = email.indexOf(".",atPos);
  if (periodPos == -1)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (periodPos+3 > email.length)
	{
	  alert ('The E-mail Address is required to have an "@" and a ".". Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("@.") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf(".@") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("..") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf(">") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if (email.indexOf("<") >0)
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  if( (email.substring(0,1)) == ("."))
	{
	  alert ('Please verify the E-mail Address.');
	  return false;
	}
  return true;
}
</SCRIPT>

<!-- New Form Validation JavaScript from Web Services Team -- Fields have been named according to original .jsp file -->
<script language="javascript" src="<%=System.getProperty("external.appServer")%>/secure/scripts/validateApps.js"></script>
<script>

function hideAllErrors(){

document.getElementById("emailAddressError").style.display = "none";
}


function submitForm(){
hideAllErrors();

var errors = [];

if (!isEmailAddr (document.resolveEmailUserId.emailAddress.value)) 
		{errors[errors.length] = ["emailAddressError", "emailAddress"];
		document.getElementById("emailAddressError").innerHTML = "Please enter a valid e-mail address.<br/>";
		document.resolveEmailUserId.emailAddress.focus();}	
							
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
    <td><h1 align="center" style="width: 620px;"><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/lock.gif" width="11" height="19" alt="" /> Forgot User ID</h1></td>
  </tr>
  <tr>
    <td><br><p>There is more than one user ID associated with the FPL account number you provided.&nbsp; Please<br>enter the e-mail address associated with your FPL account.</p><br />
    </td>
  </tr>
  <tr>
    <td><p><span style="color: red;"><jsp:getProperty name="viewBean" property="message"/></span></p><br /></td>
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
<form name="resolveEmailUserId" onSubmit="return submitForm();"	method="POST" action="../../cus/registration/EcaController">
<table width="450" border="0" cellspacing="0" cellpadding="0">
  <tr align="left">
    <td width="45%" id="textPad30L">E-mail Address:</td>
    <td>
      <input type="text" name="emailAddress" id="emailAddress" style="border: 1px solid;border-color: #ADC3D6;" size="25" maxlength="64"><br />
          <div class="error" id="emailAddressError">Please enter your email address.</div><br/></td>
  </tr>
  <tr align="center">
    <td colspan="2"><div style="padding-top:8px;"><input type="submit" a href="<%=System.getProperty("external.webServer")%>/residential/customer_service.shtml" onClick="return submitForm();" name="submit" value="Submit"></div></td>
    </tr>
</table><INPUT TYPE="hidden" NAME="command" VALUE="resolveUserIdCheckEmail">
</form>
</div></td>
    </tr>
  <tr>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bl.gif" width="11" height="16" alt="" /></td>
    <td width="563"><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_bcBG.gif" width="100%" height="16"></td>
    <td><img src="<%=System.getProperty("external.appServer")%>/fplcommon/wrapper/images/NT_outline_br.gif" width="11" height="16" alt="" /></td>
  </tr>
</table></div>    </td>
  </tr>
</table>

<!-- BEGIN Original JSP form -- Please remove after comversion is complete 
<TABLE cellspacing="0" cellpadding="0" border="0" width="630">
  <TBODY>
    <TR>
      <TD>
      <TABLE width="550" cellpadding="1">
        <TBODY>
          <TR>
            <TD><H5>Forgotten User ID - Step2</H5></TD> 
			<TD height="20" valign="middle" width="253"></TD>
          </TR>
        </TBODY>
      </TABLE>
      <TABLE width="550" cellpadding="1">
        <TBODY>
          <TR>
            <TD><P><SPAN >There is more than one User ID associated with the Bill Account Number you have entered.
							Please enter the E-mail Address which is associated with your Bill Account Number.</SPAN></P></TD>
          </TR>
          <TR>
            <TD><HR><P style="color: red;font-size : 12pt;font-family : Arial;"><jsp:getProperty name="viewBean" property="message"/></P><BR></TD>	
          </TR>
          <TR>
            <TD>
            <FORM AUTOCOMPLETE ="OFF" onSubmit="return submitIt(this)" method="POST" NAME="resolveEmailUserId" action="EcaController">
            <TABLE width="550" cellpadding="1">
              <TBODY>
                <TR>
                  <TD align="right" valign="top" width="275" height="20"><B>E-mail
										Address:</B></TD>
                  <TD valign="top" align="left" width="275" height="20"><INPUT 	name="emailAddress" maxlength="64" type="text"  size="34" align="TOP"></TD>
                  </TR>
                <TR>
                  <TD height="10" colspan="2"></TD>
                </TR>               
                <TR>
                  <TD align="right" valign="top" width="275" height="20">&nbsp;&nbsp;</TD>	
                  <TD valign="top" align="left" width="275" height="20"><INPUT type="submit" name="submit1" value="Submit" style="font-size : 12pt;font-family : Arial;"></TD>
                </TR>
                 <TR>
                  <TD height="20" colspan="2"></TD>
                </TR>
              </TBODY>
            </TABLE>
            <INPUT TYPE="hidden" NAME="command" VALUE="resolveUserIdCheckEmail">            
            </FORM>
            </TD>
          </TR>
        </TBODY>
      </TABLE>
      </TD>
      <TD valign="TOP">
      <TABLE cellspacing="0" cellpadding="0" border="0">
        <TBODY>
          <TR>
            <TD width="48" valign="TOP"></TD>
          </TR>
        </TBODY>
      </TABLE>
      </TD>
    </TR>
  </TBODY>
</TABLE>
 END Original JSP form -->	
	</BODY>
<wrapper:body appId="ECA_residential" templateType="body2"><br></wrapper:body>
</HTML>
