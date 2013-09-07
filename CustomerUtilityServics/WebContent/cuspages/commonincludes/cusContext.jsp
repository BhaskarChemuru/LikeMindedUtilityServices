<%
    String strContextRoot = null;
    // Root of the path to be formed obtained from the request
    strContextRoot = request.getContextPath();
    System.err.println("strContextRoot: "+strContextRoot);
    // set context root in a request attribute
    request.setAttribute("strContextRoot",strContextRoot);
  	
    String wsContextRoot =config.getServletContext().getInitParameter("webServerContext");
    request.setAttribute("wsContextRoot", wsContextRoot);
    
    // To set the Context Root, if the function returns null
    if(wsContextRoot == null) {
        wsContextRoot = "";
    } else {
        wsContextRoot = wsContextRoot.trim();
    }
    if(strContextRoot == null) {
        strContextRoot = "";
    } else {
        wsContextRoot = strContextRoot.trim();
        
    }    
%>