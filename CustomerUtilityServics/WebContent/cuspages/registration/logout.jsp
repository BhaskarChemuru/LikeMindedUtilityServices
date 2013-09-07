<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<%@ taglib prefix="wrapper" uri="../../cus/registration/wrapperTags" %>
<%@ page buffer="none" errorPage="/eca/error.jsp" session="false" %>
<%
response.setHeader("Cache-Control","no-store");  
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma","no-cache");  
response.setDateHeader ("Expires", -1);  
%>
<jsp:useBean
	class="com.fpl.ima.eca.viewbean.MessageBean"
	id="viewBean"
	scope="request" />
<HTML>
<wrapper:head appId="ECA_residential">
	<HEAD>
	
<META NAME="WT.CurrentPage" CONTENT="ConfirmationLogOutPage">
<META NAME="WT.ti" CONTENT="Confirmation Log Out Page">
<META http-equiv="Content-Type" content="text/html; charset=Windows-1252">
<META content="text/html; charset=windows-1252" http-equiv="Content-Type">
<META content="IBM WebSphere Page Designer V3.0.2 for Windows" name="GENERATOR">
<TITLE>FPL Confirmation Log Out Page</TITLE>
	
	</HEAD>
</wrapper:head>
<wrapper:body appId="ECA_residential"><br></wrapper:body>
	<BODY>
	<TABLE
		CELLSPACING="0"
		CELLPADDING="0"
		BORDER="0"
		WIDTH="630">
		<TR>
			<TD>
			<TABLE
				WIDTH="405"
				CELLSPACING="0"
				CELLPADDING="0"
				BORDER="0">
				<TR>
					<TD HEIGHT="7"></TD>
				</TR>
				<TR>
					<TD>
					<TABLE
						CELLSPACING="0"
						CELLPADDING="0"
						BORDER="0">
						<TR>
							<TD>
							<H5>FPL Customer Logout</H5>
							</TD>
						</TR>
					</TABLE>
					</TD>
				</TR>
				<TR>
					<TD ALIGN="LEFT"><BR>
					Please click on the logout button.</TD>
				</TR>
			</TABLE>
			<TABLE WIDTH="405">
				<TR>
					<TD></TD>
				</TR>
				<TR>
					<TD>
					<HR>
					</TD>
				</TR>
				<TR>
					<TD>
					<FORM
						METHOD="POST"
						ACTION="../../cus/registration/EcaController"><INPUT
						TYPE="hidden"
						NAME="command"
						VALUE="logout">
					<TABLE
						WIDTH="50%"
						BORDER="0">
						<TR>
							<TD></TD>
							<TD ALIGN="LEFT"><jsp:getProperty
								name="viewBean"
								property="message" /></TD>
						</TR>
						<TR>
							<TD></TD>
							<TD ALIGN="LEFT"><INPUT
								TYPE="submit"
								NAME="logout"
								VALUE="Logout"></TD>
						</TR>
					</TABLE>
					<TABLE
						WIDTH="50%"
						BORDER="0">
						<TR>
							<TD NOWRAP>Don't want to logout?</TD>
						</TR>
					</TABLE>
					</FORM>
					</TD>
				</TR>
				<TR>
					<TD>
					<HR>
					</TD>
				</TR>
			</TABLE>
			</TD>
		</TR>
	</TABLE>
	</BODY>
<wrapper:body appId="ECA_residential" templateType="body2"><br></wrapper:body>
</HTML>
