
<%@ page import="java.io.*,java.util.*,java.lang.*" %>
<jsp:include flush="true" page="pageheader.jsp"/>
<body>
<jsp:include flush="true" page="username.jsp"/>    
<jsp:include flush="true" page="menuheader.jsp"/>
  
	<!--  <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.7/themes/redmond/jquery-ui.css" />-->
	<link rel="stylesheet" href="css/smoothness/jquery-ui-1.10.3.custom.css" />
	<link rel="stylesheet" href="css/smoothness/jquery-ui-1.10.3.custom.min.css" />
    <!--  <link rel="stylesheet" type="text/css" href="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-3.8.2/css/ui.jqgrid.css" /> -->
    <link rel="stylesheet" href="css/ui.jqgrid.css" />
    
    <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-3.8.2/js/i18n/grid.locale-en.js"></script>
    <script type="text/javascript" src="http://www.ok-soft-gmbh.com/jqGrid/jquery.jqGrid-3.8.2/js/jquery.jqGrid.min.js"></script>

  <div id="Wrap">

<!-- Main Section Begins --><!-- This will clear any floats from previous Section -->
  <div class="Main">
    <div>
      <h1 class="bold left btPad10 tpPad6">Select Account</h1>
    </div>
   <div class="crvBdrSection clear">
		<!-- Content inside STARTS -->
		<div style="color:green" class="clear botMargin30 hide" id="message">
		</div>
    
    <form method="post" name="selectaccount" >
	
    <table id="list"><tr><td>&nbsp;</td></tr></table>
		<div id="pager"> </div>

        </form>
	</div>
</div>
</div>

    <script type="text/javascript">

    function changeDefaultVal(value)
    {
    	//location.href="";
    	document.selectaccount.action="/cus/updateDefaultAcctStatus.do?acctNumberReq="+value;
    	document.selectaccount.submit();
    }
    function radio(value, options, rowObject){
		//alert("value"+value);
        var radioHtml = '<input type="radio" value=' + value + ' name="radioid" onclick="changeDefaultVal('+value+');"/>';
        return radioHtml;
    }

  //<![CDATA[
    jQuery(document).ready(function () {
       /* var mydata = [
            {id:"1", invdate:"2007-10-01",name:"test",  note:"note",  amount:"200.00",tax:"10.00",total:"210.00"},
            {id:"2", invdate:"2007-10-02",name:"test2", note:"note2", amount:"300.00",tax:"20.00",total:"320.00"},
            {id:"3", invdate:"2007-09-01",name:"test3", note:"note3", amount:"400.00",tax:"30.00",total:"430.00"},
            {id:"4", invdate:"2007-10-04",name:"test4", note:"note4", amount:"200.00",tax:"10.00",total:"210.00"},
            {id:"5", invdate:"2007-10-05",name:"test5", note:"note5", amount:"300.00",tax:"20.00",total:"320.00"},
            {id:"6", invdate:"2007-09-06",name:"test6", note:"note6", amount:"400.00",tax:"30.00",total:"430.00"},
            {id:"7", invdate:"2007-10-04",name:"test7", note:"note7", amount:"200.00",tax:"10.00",total:"210.00"},
            {id:"8", invdate:"2007-10-03",name:"test8", note:"note8", amount:"300.00",tax:"20.00",total:"320.00"},
            {id:"9", invdate:"2007-09-01",name:"test9", note:"note9", amount:"400.00",tax:"30.00",total:"430.00"},
            {id:"10",invdate:"2007-09-08",name:"test10",note:"note10",amount:"500.00",tax:"30.00",total:"530.00"},
            {id:"11",invdate:"2007-09-08",name:"test11",note:"note11",amount:"500.00",tax:"30.00",total:"530.00"},
            {id:"12",invdate:"2007-09-10",name:"test11",note:"note12",amount:"500.00",tax:"30.00",total:"530.00"}
        ]; */
        //,formatoptions:{baseLinkUrl:'/callAccountSumWithAccNum.do', addParam: '&action=edit', idName:'acctNumberReq'}
        var mydata =<%=request.getAttribute("accountSumData")%>;
		//alert(mydata);
        $("#list").jqGrid({
            datatype: "local",
            data: mydata,
            colNames:['Account Number','Service Address','Set Default'],
            colModel:[
                {name:'accountnumber',index:'accountnumber', width:250, height:200, align:'center', sorttype:'string',formatter:function (cellvalue, options, rowObject) {
                    return '<a href="' +
                    '/cus/callAccountSumWithAccNum.do' +
                    '?acctNumberReq=' + cellvalue + '">' + cellvalue + '</a>'}},
                {name:'serviceaddr',index:'serviceaddr', width:450, formatter:'string', align:"center"},
                {name:'accountnumber',index:'', width:175, formatter: radio, align:"center"},
                
            ],
            rowNum:10,
            rowList:[5,10,20],
            pager: '#pager',
            sortname: 'accountnumber',
            viewrecords: true,
            sortorder: "desc",
            caption:"Accounts List",
			//shrinkToFit: true,
			autowidth: "true",
			//width: "875",
        	height: "100%"
           
        }).jqGrid('navGrid','#pager',{add:false,edit:false,del:false});
    });
//]]>

    
    </script>

 <jsp:include flush="true" page="pagefooter.html"/>
