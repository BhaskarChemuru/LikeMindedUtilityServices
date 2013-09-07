<jsp:include flush="true" page="pageheader.jsp"/>
<%@ page import="com.mss.cus.xml.jaxb.*" %>


<!--  <div class="pageHeader"><label>Account Summary </label>
    <span class="selectspan"><select name="accountnumlist" id="accountnumlist" >
								<option value="123455677" selected>123455677</option>
								<option value="5662626262">5662626262</option>
					</select></span>
					 <label for="AccessCode" class="selectlabel"> Select Account:</label>
</div>-->

<%
	AccountSummary acctSum = (AccountSummary)request.getAttribute("accountSummaryObj");
	int numberOfServices = (acctSum.getServices()).getService().size();
	System.err.println("Payment Amount from jsp:"+acctSum.getPayments().getLastPaymentAmount());
	double pastDueAmount = (acctSum.getCurrentBill()).getPastDueAmount();
%>
<body>
<div>
<jsp:include flush="true" page="username.jsp"/>    
<jsp:include flush="true" page="menuheader.jsp"/>
</div>
</div>
<div id="Wrap">
<form action="#" name="acctSumForm">
  <!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6"> Account Summary</h1>
    </div>
    
    <div class="clear"></div>
    <div class="crvBdrSection rtMargin22 noTopMar width250px minHt150 left botMargin10">
      <!-- Content inside STARTS -->
      <div class="btPad25 borderBottom botMargin10">
        <div class="left">
          <h2 class="bold">My Bills</h2>
        </div>
        <div class="right iconBtnbg"> <a href="#" class="dialogLink padding3" title="View My Bills"><span class="billsIcon"></span></a> </div>
      </div>
      <div>
        <p class="left bigTxt bold tpPad5">Total Balance: $ <%=(acctSum.getCurrentBill()).getTotalAmountDue()%></p>
        <button value="" type="button" class="navBtn right">Pay Now</button>
      </div>
      <div class="clear width250px">
      <p> Current Bill Amount:&nbsp; <%=(acctSum.getCurrentBill()).getCurrentAmountDue()%></p>
          	<% 
             		if((acctSum.getCurrentBill()).getCurrentAmountDue() != 0){
             	%>
             	<p>Payment Due date:&nbsp; <%=(acctSum.getCurrentBill()).getCurrentDueDate()%><br /></p>
             	<% } if (pastDueAmount != 0) {%>
                 <p>Past due amount:&nbsp;$<%=(acctSum.getCurrentBill()).getPastDueAmount() %><br /></p>
                 <% } %>
                <p>Current Bill date:&nbsp;<%=(acctSum.getCurrentBill()).getBillPrintDate()%> <br /> </p>               
      </div>
    </div>
    <div class="crvBdrSection noTopMar rtMargin22 width250px minHt150 left">
      <!-- Content inside STARTS -->
      <div class="btPad25 borderBottom botMargin10">
        <div class="left">
          <h2 class="bold">My Payments</h2>
        </div>
        <div class="right iconBtnbg"> <a href="../cus/getPaymentHistory.do?accountNumber=<%=(String)(request.getSession()).getAttribute("accountNumSessVal")%>" class="dialogLink padding3" title="View Payment History"><span class="historyIcon"></span></a> </div>
      </div>
      <div class="clear width250px">
              	<p>Last payment received:&nbsp;<%=(acctSum.getPayments()).getLastPaymentDate()%> </p>
               	<p>Last payment amount:&nbsp;$<%= acctSum.getPayments().getLastPaymentAmount()%> </p>
                <p>Late fee date:&nbsp;<%=(acctSum.getCollections()).getLateFeeDate()%></p>   
				<p>&nbsp;</p>
		</div>
        <p class="topMargin20"><a href="paymentMethods.html">Manage Payment Methods</a></p>
      </div>
    <div class="crvBdrSection noTopMar width250px minHt150">
      <!-- Content inside STARTS -->
      <div class="btPad25 borderBottom botMargin10">
        <div class="left">
          <h2 class="bold">Offers</h2>
        </div>
      </div>
      <div class="clear width250px">
        <p><a href="#">StepUp Auto Pay</a></p>
        <%
        	if ("Y".equalsIgnoreCase(acctSum.getEligibileIndicators().getEBillEligibleInd())) {
        %>
        <p><a href="eBillEnrollment.html">Enroll in eBill</a></p>
        <%}
    	if ("Y".equalsIgnoreCase(acctSum.getEligibileIndicators().getBudgetEligibleInd())) {
        %>
        <p><a href="budgetBilling.html">Enroll in Budget Billing</a></p>
        <%} %>
        <p>&nbsp;</p>
      </div>
    </div>
  
    <div class="clear"></div>
    <div class="crvBdrSection">
      <!-- Content inside STARTS -->
      <div class="btPad25 borderBottom botMargin10 clear">
        <div class="left">
          <h2 class="bold">My Usage</h2>
        </div>
        <div class="right"> <a href="#" class="dialogLink grynavBtn padding3" title="Refresh"><span class="refreshIcon"></span></a> <a href="#" class="dialogLink grynavBtn padding3" title="View Usage Details"><span class="detailsIcon"></span></a> </div>
      </div>
      <div class="clear" id="chartContainer">
 	</div>
 
    <!--Dependants-info form end here-->
    </div>
  <!-- END of Main Content Section -->
    
                  <input type="hidden" name="accountNumberHidden" value="<%=acctSum.getAccountInfo().getAccountNumber()%>">
                <input type="hidden" name="numberOfServicesHidden" value=<%=numberOfServices%>>
</div>
 </form>   
  
  <!-- END of Main Content Section -->
<jsp:include flush="true" page="pagefooter.html"/>

                <script type="text/javascript"><!--        

                function callUderConstruction()
                {
					alert("Sorry, page is under construction.");
					return false;
                }
				//servesCount = $('#numberOfServicesHidden').val();
               /* servesCount = document.accthistoryform.numberOfServicesHidden.value;
				alert(servesCount);
				if (servesCount > 1 )
					{

							$(document).ready(function() {
			                    $("div#tabs").tabs();
			
			                    for(count=1; count < servesCount; count++){
			
			                        var num_tabs = $("div#tabs ul li").length + 1;
			
			                        $("div#tabs ul").append(
			                            "<li><a href='javascript:callConsumptionGraph("+ num_tabs + ");'> Service " + num_tabs + "</a></li>"
			                        );
			                	$("div#tabs").append(
			                            "<div id='tab" + num_tabs + "'> Service " + num_tabs + "</div>"
			                        );
			                        $("div#tabs").tabs("refresh");
			                    }                    
			                });
					} */
					$(document).ready(function(){
              			  callConsumptionGraph("1");
					});
                function callConsumptionGraph(serviceNumber)
                {
					
                	var accountNumVal=document.acctSumForm.accountNumberHidden.value;
                	//alert("accountNumVal..."+accountNumVal);
                	$.ajax({
                		type: "POST",
                		url: "getJSonGraphData.do",
                		data: "accountNumber="+accountNumVal + "&serviceNumber="+serviceNumber,
                		dataType: 'text',
                		success:function(e){
                			rtnStr = e;
                			chkVal = "null";
                			//document.accthistoryform.jsonstrdata.value=rtnStr;
                		if (rtnStr.trim() == chkVal)
                		{
                		
                		}
                		else
                			{
                				//var objJSON = { 'chart': { 'caption' : 'Monthly Consumption Data', 'xAxisName' : 'Month', 'yAxisName' : 'Consumption'},'data' : 	[{ 'lable': 'Apr-2013' , 'value' : '20.9' },{ 'lable': 'Mar-2013' , 'value' : '32.0' },{ 'lable': 'Feb-2013' , 'value' : '31.3' },{ 'lable': 'Jan-2013' , 'value' : '40.0' },{ 'lable': 'Dec-2012' , 'value' : '23.0' },{ 'lable': 'May-2012' , 'value' : '1.7' },{ 'lable': 'Apr-2012' , 'value' : '4.5' },{ 'lable': 'Mar-2012' , 'value' : '17.9' },{ 'lable': 'Feb-2012' , 'value' : '28.8' },{ 'lable': 'Jan-2012' , 'value' : '27.7' },{ 'lable': 'Dec-2011' , 'value' : '17.0' },{ 'lable': 'Aug-2011' , 'value' : '1.1' }] };

                				/*var objJSON1 = {
                					    "chart": {
                					        "caption": "Monthly Consumption Data",
                					        "xAxisName": "Month",
                					        "yAxisName": "Consumption"
                					    },
                					    "data": [
                					        { "lable": "Apr-2013", "value": "20.9"  }
                					    ]
                					}; */
                				var myChart = FusionCharts.render( "scripts/Column3D.swf", "myChartId",
                					  "100%", "450", "0" );
                				myChart.setJSONData(rtnStr);
                				myChart.render("chartContainer");
      							
                			/*var myChart = new FusionCharts({
  								"swfUrl" : "scripts/Column3D.swf",
  											"width" : "700",
  											"height" : "300",
  											"renderAt" : "chartContainer",
  											"id" : "Consumption Grpah",
  											"dataFormat" : "json",
  											"wmode" : "transparent",
  											"dataSource" : rtnStr
  											}).render(); */
                			}
                			 
                			},
                		error:function(er){alert("error:"+er);}
                		});					
  /*    				var myChart = new FusionCharts( "scripts/Column3D.swf", 
                   "myChartId", "700", "300", "0" );
				    myChart.setJSONData (
				    		{ 
				    		    "chart": { 
				    		          "caption" : "Weekly Sales Summary" ,
				    		          "xAxisName" : "Week",
				    		          "yAxisName" : "Sales",
				    		          "numberPrefix" : "$"
				    		    },
				    		        
				    		    "data" : 
				    		     [
				    		          { "label" : "Week 1", "value" : "14400" },
				    		          { "label" : "Week 2", "value" : "19600" },
				    		          { "label" : "Week 3", "value" : "24000" },
				    		          { "label" : "Week 4", "value" : "15700" }
				    		     ]
				    		});
				      myChart.render("chartContainer");
                 */
            }
      
    // -->     
    </script>
    