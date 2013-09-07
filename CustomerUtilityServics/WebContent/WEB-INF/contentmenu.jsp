<% 
  String route = request.getParameter("p");
  int menuType = 0;
  
  if (route != null){
%>
<div id="pagemenu">
<% 
		if("paymybill".equals(route) || "cdpayment".equals(route) || "electroniccheck".equals(route)){
%>
  <ul>
    <li onClick="menuItemClick('cdpayment')"><div class="pagemenuicon">.</div><div class="pagemenulabel">Credit/Debit Card Payment</div></li>
    <li onClick="menuItemClick('electroniccheck')"><div class="pagemenuicon">.</div><div class="pagemenulabel">Electronic Check</div></li>
    
  </ul>  
</div>
<%
		} else if("myaccount".equals(route) || "accthistory".equals(route) || "paymentopt".equals(route)){
%>
  <ul>
    <li onClick="menuItemClick('accthistory')"><div class="pagemenuicon">.</div><div class="pagemenulabel">Account History</div></li>
    <li onClick="menuItemClick('paymentopt')"><div class="pagemenuicon">.</div><div class="pagemenulabel">Payment Options</div></li>
  </ul>  
</div>
<%
		} else if("registration".equals(route) || "forgot".equals(route)){
%>
  <ul>
    <li onClick="menuItemClick()"><div class="pagemenuicon">.</div><div class="pagemenulabel">Home</div></li>
  </ul>  
</div>
<%
		} 
  }
%>
