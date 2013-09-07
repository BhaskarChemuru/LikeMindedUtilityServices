<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file = "/cuspages/commonincludes/cusContext.jsp"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>
	Customer Utility Services - Login 
</title>

<link href="<%=wsContextRoot%>/cuspages/loginStyle/style_option2.css" rel="stylesheet" type="text/css" />
</head>

<body onunload="stopBack('onUnload','false');">
<form>

<table width="100%" border="0" cellpadding="0" cellspacing="0" >
  <tr>
    <td colspan="3" ><table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="bottom">
        	<img src="<%=wsContextRoot%>/cuspages/loginImages/main.jpg" width="489" height="516" class="padding" /></td>
        <td valign="bottom" class="tablewidth"><table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td align="left" class="padding116"><table width="100%" border="0" cellpadding="0" cellspacing="0">

              <tr>
                <td class="dotted"></td>
                <td class="padding10">
                	Customer Utility Services
                </td>
                <td align="center" vAlign="bottom" class="register1" >Not Registered yet? <br>
	                	<a href="<%=wsContextRoot%>/registration.jsp" > <b>Register for Online Access</b></a>
                	</td>
                <!-- <td class="padding10" align="right"><table>
                <tr><td>
	                Not Registered yet? </td></tr>
         			<tr><td>
	                	<a href="<%=wsContextRoot%>/registration.jsp"> <b>Register for Online Access</b></a>
                	</td></tr>
                	<table>
                </td>
                
              </tr> -->
              
              <tr>
                <td colspan="3" >&nbsp;</td>
              </tr>
              <tr>
                <td colspan="3" >&nbsp;</td>
              </tr>
              <tr>
                <td colspan="3" class="padding33" ><table width="95%" border="0" cellpadding="0" cellspacing="4" class="table_bor">
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td colspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td><img src="<%=wsContextRoot%>/cuspages/loginImages/Login_icon.gif" width="16" height="15" /></td>
                    <td colspan="3" align="left"><img src="<%=wsContextRoot%>/cuspages/loginImages/Login_info.gif" width="114" height="10" /></td>
                  </tr>
                  
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td colspan="3" align="left" class="errorDescription">
                    	<logic:present name="loginErrorMessage" scope="request">
                    		<bean:write name="loginErrorMessage"/>
                    	</logic:present>
                    	<html:errors bundle="ErrorMessages"/>
                    </td>
                  </tr>                 
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td colspan="2" align="left">&nbsp;<html:errors/></td>
                  </tr>
					
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Login ID:</td>
                    <td colspan="2" align="left"><label>
                      <input type="text" property="strLoginId" maxlength="10" value="" styleId="iloginId"/>
                    </label></td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td align="left">&nbsp;</td>
                    <td align="left">&nbsp;</td>
                  </tr>
                  <tr>
                    <td width="25">&nbsp;</td>
                    <td width="25">&nbsp;</td>
                    <td width="80">
                    	Password:</td>
                    <td width="130" align="left">
                    	<input type="password" property="strPassword" maxlength="10" value="" styleId="iPassword"/></td>
                    <td width="250" align="left">
                    <input type="submit" property="Save"  styleId="Save" value="Login" styleClass="Button" onclick="stopBack('onClick','false'); return checkLoginForm(); "/>
                    </td>
                    <tr>
                    <td width="25">&nbsp;</td>
                    <td width="25">&nbsp;</td>
                    <td width="25">&nbsp;</td>
                    <td width="130" align="left" class="register2">Forgot
                    	<a href="<%=wsContextRoot%>/forgotUserID.do" style="color: #6b87a9"> Login ID</a> or <a style="color: #6b87a9" href="<%=wsContextRoot%>/forgotPassword.do"> Password </a> </td>
                    </tr>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td colspan="2">&nbsp;</td>
                  </tr>
                </table></td>
                </tr>
            </table></td>
          </tr>
          <tr>
            <td align="center"><table border="0" cellspacing="15" cellpadding="0">
              <tr>
                <td><img src="<%=wsContextRoot%>/cuspages/loginImages/Nav_img.gif" width="122" height="97" /></td>
                <td><img src="<%=wsContextRoot%>/cuspages/loginImages/Nav_img1.gif" width="122" height="97" /></td>
                <td><img src="<%=wsContextRoot%>/cuspages/loginImages/Nav_img2.gif" width="122" height="97" /></td>
                <td><img src="<%=wsContextRoot%>/cuspages/loginImages/Nav_img3.gif" width="122" height="97" /></td>
              </tr>
            </table></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td class="tablebottom">
        	<img src="<%=wsContextRoot%>/cuspages/loginImages/main1.jpg" width="399" height="24" /></td>
        <td class="tablebottom">&nbsp;</td>
      </tr>
      <tr>
        <td height="114" align="center" class="padding">&nbsp;</td>
        <td class="padding1">
        	<bean:message key="csr.label.login.decleration" bundle="CSRApplicationResources" /></td>
      </tr>
    </table></td>
  </tr>
  
  <tr>
  	<td width="2%" height="25" align="right" class="Footer">&nbsp;</td>
    <td height="19" colspan="3" class="Footer"><%@ include file="/cuspages/commonincludes/footer.jsp"%></td>
  </tr>
</table>

</html:form>
</body>
</html:html>
