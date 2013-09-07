<%
	String menu = request.getParameter("p");
	String route = request.getParameter("p");
	
	if(route != null)
	{ 
		route += ".jsp";
	} else {
		route = "login.jsp";
	}
	//out.println(route);
	if(!("login.jsp".equals(route.trim()))) { 
%>
<div id="contentmenu">
<jsp:include page="contentmenu.jsp" flush="true"/>
</div>
<div id="pagecontent">
<jsp:include page="<%=route%>" flush="true" />
</div>
<%	
	} else {
%>
<div id="dashcontent">
<jsp:include page="<%=route%>" flush="true" />
</div>
<%
	}
%>
