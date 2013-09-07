//----------------------------- Function to toggle Top tabs----------
function TogalTab(tab)
{
switch(tab) {
				case 'ActiveTab1':
					document.getElementById('ActiveTab1').className='Tab_CustInfo_Active';
					document.getElementById('ActiveTab2').className='Tab_AdvScrip_1';
					document.getElementById('TitleCI').style.display='inline';
					document.getElementById('DataCI').style.display='inline';
					document.getElementById('TitleAS').style.display='none';
					document.getElementById('DataAS').style.display='none';
					break;		
				
				case 'ActiveTab2':

					document.getElementById('ActiveTab1').className='Tab_CustInfo_1';
					document.getElementById('ActiveTab2').className='Tab_AdvScript_Active';
					document.getElementById('TitleCI').style.display='none';
					document.getElementById('DataCI').style.display='none';
					document.getElementById('TitleAS').style.display='inline';
					document.getElementById('DataAS').style.display='inline';
					break;
				}
}

// --------------------------------Function top toggle between english and Spanish---------
function showLanguage(Language)
{
switch(Language) {
				case 'Rdo1':
				document.getElementById('EnglishR1').style.display='inline';
				document.getElementById('SpanishR2').style.display='none';
				
				break;
				
				case 'Rdo2':
				//alert(scrtype_val);
				document.getElementById('EnglishR1').style.display='none';
				document.getElementById('SpanishR2').style.display='inline';
				
				break;
				}

}


//---------------------------------------------------------------------

function ShowDebit(Row)
{

switch(Row) {
				case 'Row1':
				//alert ("Act1");
				//alert(scrtype_val);
				
				document.getElementById('SummryTblR1').style.display='inline';
				document.getElementById('SummryTblR2').style.display='none';
				document.getElementById('BilledTblR1').style.display='inline';
				document.getElementById('BilledTblR2').style.display='none';
				break;
				
				case 'Row2':
				//alert(scrtype_val);
				
				document.getElementById('SummryTblR1').style.display='none';
				document.getElementById('SummryTblR2').style.display='inline';
				document.getElementById('BilledTblR1').style.display='none';
				document.getElementById('BilledTblR2').style.display='inline';
				break;
				}
}

//---------------------------------------------------------------------
function togleView(view, httpURL,billAccountNum){

	switch(view) {
		case 'Graph':
				document.getElementById('TabGraphView').className='BgTabSelect';
				document.getElementById('TabTableView').className='BgTab';
				document.getElementById('GraphViewEmptyRow').style.display='inline';
				document.getElementById('GraphViewErrorRow').style.display='inline';
				document.getElementById('GraphView').style.display='inline';
				
				/** this is to control energy view tab selected option by checking the cell count.
				* Not a great way...but solved the issue.
				*/
				var table = document.getElementById("energyTabSelOption");
				
				for (var i = 0, row; row = table.rows[i]; i++) {
   					for (var j = 0, col; col = row.cells[j]; j++) {
   					   if ( j == 3)
   					   document.getElementById('TabEnergyView').className='BgTab';
  					 }  
				}
				/***************/
				document.getElementById('GraphImage').style.display='inline';
				document.getElementById('TableView').style.display='none';
				break;

		case 'Table':
				/** this is to control energy view tab selected option by checking the cell count.
				* Not a great way...but solved the issue.
  			    */
				
				var table = document.getElementById("energyTabSelOption");
				
				for (var i = 0, row; row = table.rows[i]; i++) {
   					for (var j = 0, col; col = row.cells[j]; j++) {
   					   if ( j == 3)
   					   document.getElementById('TabEnergyView').className='BgTab';
  					 }  
				}
				/***************/
				
				
				//alert(document.getElementById('TabEnergyView'));
				document.getElementById('TabGraphView').className='BgTab';
				document.getElementById('TabTableView').className='BgTabSelect';
				
				document.getElementById('GraphViewEmptyRow').style.display='none';
				document.getElementById('GraphViewErrorRow').style.display='none';
				document.getElementById('GraphView').style.display='none';
				document.getElementById('GraphImage').style.display='none';
				document.getElementById('TableView').style.display='inline';
				break;
		case 'EnergyDashboard':
				document.getElementById('TabGraphView').className='BgTab';
				document.getElementById('TabTableView').className='BgTab';
				document.getElementById('TabEnergyView').className='BgTabSelect';
				document.getElementById('GraphViewEmptyRow').style.display='none';
				document.getElementById('GraphViewErrorRow').style.display='none';
				document.getElementById('GraphView').style.display='none';
				document.getElementById('GraphImage').style.display='none';
				document.getElementById('TableView').style.display='none';
				//alert(httpURL);
				window.open(httpURL+'/REA/ReaController?command=EmpAccount&billAccountNumber='+billAccountNum,'mywindow','resizable=yes,scrollbars=yes,width=800,height=600,left=140,top=80');
				break;

	}
}


//---------------------------- function for customerRead.html popup ------------------------------------------

	var deg2rad = Math.PI * 2 / 360;
	var dialState = new Array();
	dialState[0] = 0;
	dialState[1] = 0;
	dialState[2] = 0;
	dialState[3] = 0;
	dialState[4] = 0;
	var arrTxtVal = new Array();
	arrTxtVal[0] = 00;
	arrTxtVal[1] = 00;
	arrTxtVal[2] = 00;
	arrTxtVal[3] = 00;
	arrTxtVal[4] = 00;
	var prevTxtVal=new Array();
	prevTxtVal[0]=0;
	prevTxtVal[1]=0;
	prevTxtVal[2]=0;
	prevTxtVal[3]=0;
	prevTxtVal[4]=0;
					
	function rotate(handImage,dialNumber,Click,flag){
		var rotating=document.getElementById(handImage);

		if (Click==0)
		{
			if(dialNumber==1 || dialNumber==3)
			{ 
				dialState[dialNumber] = dialState[dialNumber]-36;
				arrTxtVal[dialNumber]=arrTxtVal[dialNumber]+1;											 
				if (arrTxtVal[dialNumber] == 10)
				{
					arrTxtVal[dialNumber]=0;
				}
			}
			else
			{
				dialState[dialNumber] = dialState[dialNumber]-36;
				arrTxtVal[dialNumber]=arrTxtVal[dialNumber]-1;											 
				if (arrTxtVal[dialNumber] == -1)
					{
						arrTxtVal[dialNumber]=9;
					}
			}
		}
		else
		{
			if(dialNumber==1 || dialNumber==3)
			{
				dialState[dialNumber] = dialState[dialNumber]+36;
				arrTxtVal[dialNumber]=arrTxtVal[dialNumber]-1;
				if (arrTxtVal[dialNumber] == -1)
					{
						arrTxtVal[dialNumber]=9;
					}
			}
			
			else
			{
				dialState[dialNumber] = dialState[dialNumber]+36;
				 //deg=dialState[dialNumber];
				arrTxtVal[dialNumber]=arrTxtVal[dialNumber]+1;
				if (arrTxtVal[dialNumber] == 10)
					{
						arrTxtVal[dialNumber]=0;
					}
			}
		}
		var y=arrTxtVal[dialNumber];
		if(flag)
		{
			document.getElementById('Txtdial'+dialNumber).value=y;
		}
		else
			document.getElementById('Txtdial'+dialNumber).value='';
		prevTxtVal[dialNumber]=y;
		deg=dialState[dialNumber];
		var rad = deg * deg2rad;
		var costheta = Math.cos(rad);
			
		var sintheta = Math.sin(rad);
		rotating.filters.item(0).M11 = costheta;
		rotating.filters.item(0).M12 = -sintheta;
		rotating.filters.item(0).M21 = sintheta;
		rotating.filters.item(0).M22 = costheta;
			 
	}
	
	var noOfClicks=new Array();
	noOfClicks[0]=0;
	noOfClicks[1]=0;
	noOfClicks[2]=0;
	noOfClicks[3]=0;
	noOfClicks[4]=0;
	function rotateOnClick(handImage,dialNumber,Click,flag){
	var rotating=document.getElementById(handImage);
	if (Click==0)
		{
			if(dialNumber==1 || dialNumber==3)
			{
				noOfClicks[dialNumber]++;
				dialState[dialNumber] = dialState[dialNumber]-18;
				if(noOfClicks[dialNumber]==2 || noOfClicks[dialNumber]==0)
				{
					arrTxtVal[dialNumber]=arrTxtVal[dialNumber]+1;										 
					if (arrTxtVal[dialNumber] == 10)
					{
						arrTxtVal[dialNumber]=0;
					}
					noOfClicks[dialNumber]=0;
				}
			}
			else
			{
					noOfClicks[dialNumber]--;
				
				dialState[dialNumber] = dialState[dialNumber]-18;
				if(noOfClicks[dialNumber]==-1)
				{
					arrTxtVal[dialNumber]=arrTxtVal[dialNumber]-1;											 
					if (arrTxtVal[dialNumber] == -1)
					{
						arrTxtVal[dialNumber]=9;
					}
				}
				if(noOfClicks[dialNumber]==-2)
				{
					noOfClicks[dialNumber]=0;
				}
				
			}
		}
		else
		{
			
			if(dialNumber==1 || dialNumber==3)
			{
					noOfClicks[dialNumber]--;
				
				dialState[dialNumber] = dialState[dialNumber]+18;
				 //deg=dialState[dialNumber];
				if(noOfClicks[dialNumber]==-1)
				{
					arrTxtVal[dialNumber]=arrTxtVal[dialNumber]-1;
					if (arrTxtVal[dialNumber] == -1)
					{
						arrTxtVal[dialNumber]=9;
					}
				}
				if(noOfClicks[dialNumber]==-2)
				{
					noOfClicks[dialNumber]=0;
				}
				
			}
			
			else
			{
					noOfClicks[dialNumber]++;
				
				dialState[dialNumber] = dialState[dialNumber]+18;
				 //deg=dialState[dialNumber];
				if(noOfClicks[dialNumber]==2 || noOfClicks[dialNumber]==0)
				{
					arrTxtVal[dialNumber]=parseInt(arrTxtVal[dialNumber])+1;
					if (arrTxtVal[dialNumber] == 10)
					{
						arrTxtVal[dialNumber]=0;
					}
					noOfClicks[dialNumber]=0;
				}
			}
		}
		var y=arrTxtVal[dialNumber];
		if(flag)
		{
			document.getElementById('Txtdial'+dialNumber).value=y;
		}
		else
			document.getElementById('Txtdial'+dialNumber).value='';
		prevTxtVal[dialNumber]=y;
		deg=dialState[dialNumber];
		var rad = deg * deg2rad;
		var costheta = Math.cos(rad);
			
		var sintheta = Math.sin(rad);
		rotating.filters.item(0).M11 = costheta;
		rotating.filters.item(0).M12 = -sintheta;
		rotating.filters.item(0).M21 = sintheta;
		rotating.filters.item(0).M22 = costheta;
			 
	}
	
	function rotateFromText(handImage, dialNumber, Click, txtValue,flag){
		var cnt;
        if(txtValue.charCodeAt(0)<48 || txtValue.charCodeAt(0)>57){
	        cnt= '0';
	        txtValue='0';
        } else {
  	        cnt=txtValue;
        }
		if(cnt.charCodeAt(0)>47 && cnt.charCodeAt(0)<58){
			if(prevTxtVal[dialNumber]>cnt){
				cnt=10-(prevTxtVal[dialNumber]-cnt);
			}else if(prevTxtVal[dialNumber]==cnt){
				if(flag==true){
					document.getElementById('Txtdial'+dialNumber).value=cnt;
				}
				else{
					document.getElementById('Txtdial'+dialNumber).value='';
				}
				cnt=0;
			}else{
				cnt=cnt-prevTxtVal[dialNumber];
			}
			prevTxtVal[dialNumber]=txtValue;
			for(var i=0;i<cnt;i++){
				rotate(handImage,dialNumber,Click,flag);
			}
			if(noOfClicks[dialNumber]==1) {
				if(dialNumber==1 || dialNumber==3){
					rotateOnClick(handImage,dialNumber,1,flag);
				}
				else{
					rotateOnClick(handImage,dialNumber,0,flag);
				}
			}else if( noOfClicks[dialNumber]==-1){
				if(dialNumber==1 || dialNumber==3){
					rotateOnClick(handImage,dialNumber,0,flag);				
				}else{
					rotateOnClick(handImage,dialNumber,1,flag);
				}
			}
		}
	}
	function setTxtVal(txtVal){
		var inputVal= "";
		var i=0;
		var j=0;
		var flag;
		var txtCtr=document.getElementById("txtCR");
		len=txtVal.length;
			for(i=0;i<len;i++){
				if(txtVal.charCodeAt(i)>47 && txtVal.charCodeAt(i)<58){
					inputVal = txtVal.charAt(i);
					flag=true;
					switch(i){
						case 0:{
							rotateFromText('dialOne',0,1,inputVal,flag);
							break;
						}
						case 1:{
							rotateFromText('dialTwo',1,0,inputVal,flag);
							break;
						}
						case 2:{
							rotateFromText('dialThree',2,1,inputVal,flag);
							break;
						}
						case 3:{
							rotateFromText('dialFour',3,0,inputVal,flag);
							break;
						}
						case 4:{
							rotateFromText('dialFive',4,1,inputVal,flag);
							break;
						}
					}
				}else{
					//alert(txtVal.charAt(i));
					subStringPart1=txtVal.substring(0,i);
					subStringPart2=txtVal.substring(i+1,len);
					//alert("part1: "+subStringPart1+"  part2:"+subStringPart2+"  Index: "+i+"  Actual: "+txtCtr.value+"  len: "+len);
					i--;
					len--;
					txtCtr.value=subStringPart1+subStringPart2;
					txtVal=txtCtr.value;
					//alert("Please enter numeric value only");
					inputVal='0';
					flag=false;
				}
			}
			for(j=i;j<5;j++){
					switch(j){
					
						case 0:{
							rotateFromText('dialOne',0,1,'0',false,'set');
							break;
						}
						case 1:{
							rotateFromText('dialTwo',1,0,'0',false,'set');
							break;
						}
						case 2:{
							rotateFromText('dialThree',2,1,'0',false,'set');
							break;
						}
						case 3:{
							rotateFromText('dialFour',3,0,'0',false,'set');
							break;
						}
						case 4:{
							rotateFromText('dialFive',4,1,'0',false,'set');
							break;
						}
					}	
			}

	}
function AddTxt()
{
	//temp variable
	var n="";
	for(var m=0; m<=4; m++)
	{
		n=n+document.getElementById('Txtdial'+m).value
	}
	document.getElementById('TxtCR').value=n;

}

function calcKWH()
{
	var currentReading=document.getElementById('TxtCR').value; 
	if(currentReading.length < 5){
		document.getElementById('txtCKWH').value='';	
	}else{
		document.getElementById('txtCKWH').value=document.getElementById('TxtCR').value - document.getElementById('TxtPR').innerHTML;
	}
	
}

//------------------------------- Stop Watch ------------------------------------------------------------------

var ms = 0;
var state = 0;
var timerID = 0;

// start timer

function start_watch() {      
  
            
            if (state == 0) {
				state = 1;
				then = new Date();
				then.setTime(then.getTime() - ms);
			}
               
        // run and display timer        

                showTimer()
                
       // set the button's label to "stop"     
		 
		        document.forms['frm'].general.value = "Stop"   
				document.getElementById('reset').disabled=true;
				document.getElementById('btnCalculate').disabled=true;
				
				// assign the stop function reference to the button's onClick event handler     
              	document.forms['frm'].general.onclick = stop

}

// set button to initial settings

function stop() {       
		stoppedTime = timerID;
        // set the button's label to "start"    
        document.forms['frm'].general.value = "Start"       
        // stop timer   
 		state = 0;
		now = new Date();
		ms = now.getTime() - then.getTime();
		document.getElementById('reset').disabled=false;
		document.getElementById('btnCalculate').disabled=false;
        // assign the start_watch function reference to the button's onClick event handler    
        document.forms['frm'].general.onclick = start_watch		
	
}

// stop timer
function showTimer() {  
	
		
		// Call the function recursively
		setTimeout("showTimer();", 50);
		if (state == 1)  {
			now = new Date();
			ms = now.getTime() - then.getTime();
   		}
		
        // assign difference in seconds to local variable       
                var result = ms / 1000; 

        // is result is not positive    

                if (result < 1)         

        // attach an initial "0" to beginning           

                result = "" + result;           

        // convert result to string     

                result = result.toString();      

        // if result is integer 

                if (result.indexOf(".") == -1)          

        // attach ".00" to end          

                result += ".00"; 

        // is result contains only one digit after decimal point        

                if (result.length - result.indexOf(".") <= 2)           

        // add a second digit after point               

                result += "0";   

        // place result in text field   

                document.forms['frm'].display.value = result;        

}

function reset_watch(){
	state = 0;
	ms = 0;
	document.getElementById("display").value = "";
	document.getElementById('btnCalculate').disabled=true;
}

//-------------------- Load Analysis Calculations --------------------------------------------------------------
function calculateTotal()
{
	var n="";
	var volts=document.getElementById('txtVolt').value;
	var amps=document.getElementById('txtAmps').value;
	if(!isNaN(volts) && !isNaN(amps) && volts.charCodeAt(0)>47 && volts.charCodeAt(0)<58 && amps.charCodeAt(0)>47 && amps.charCodeAt(0)<58){
		n=document.getElementById('txtVolt').value * document.getElementById('txtAmps').value;
	}else{
		if(volts!="" || amps!=""){
			alert("Please enter integers only");
		}
		if(isNaN(volts) || volts.charCodeAt(0)<48 || volts.charCodeAt(0)>57){
			document.getElementById('txtVolt').value="";
			document.getElementById('txtVolt').focus();
		}
		if(isNaN(amps) || amps.charCodeAt(0)<48 || amps.charCodeAt(0)>57){
			document.getElementById('txtAmps').value="";
			document.getElementById('txtAmps').focus();
		}			
	}
	document.getElementById('txtWatts').value=n;
}

function setDecimalValues(){
	totalKWH=document.forms[0].totalKWH
	avgKWHPerDay=document.forms[0].avgKWHPerDay;
	avgKWHPerDay1=document.forms[0].avgKWHPerDay1;
	initialBillKWHPerDay=document.forms[0].initialBillKWHPerDay;
	rebillForKWHPerDay=document.forms[0].rebillForKWHPerDay;
	rebillForKWHPerDay1=document.forms[0].rebillForKWHPerDay1;
	esimatedBillAmount=estimatedBillAmount=document.forms[0].esimatedBillAmount;
	objControl=totalKWH;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(0);
	}
	objControl=avgKWHPerDay;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(2);
	}
	objControl=avgKWHPerDay1;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(2);
	}
	objControl=initialBillKWHPerDay;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(0);
	}
	objControl=rebillForKWHPerDay;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(0);
	}
	objControl=rebillForKWHPerDay1;
	if(objControl.value.length>0){
		var values=objControl.value;
		objControl.value=(parseFloat(values)).toFixed(0);
	}
	objControl=esimatedBillAmount;
	if(objControl.value.length>0){
		var values=objControl.value.split("$");
		objControl.value="$"+(parseFloat(values[1])).toFixed(2);
	}
	
}
function calcLoadTest()
{
	document.getElementById('txtconst2').value=document.getElementById('txtconst1').value * document.getElementById('selmetKH').value
	document.getElementById('txtTotal').value=document.getElementById('display').value / document.getElementById('selRev').value
	document.getElementById('txtTotal').value=document.getElementById('txtconst2').value / document.getElementById('txtTotal').value
	document.getElementById('txtTotal').value=(parseFloat(document.getElementById('txtTotal').value)).toFixed(3);
	document.getElementById('txtTotalDollars').value=document.getElementById('txtTotal').value / 1000;
	document.getElementById('txtTotalDollars').value=document.getElementById('txtTotalDollars').value * rate;
	var num=document.getElementById('txtTotalDollars').value;
	document.getElementById('txtTotalDollars').value=(parseFloat(num)).toFixed(2);
}

//----------------------------------------------------------------------------------------------------------------

function getXMLHttpRequestObject(){

      	if(window.XMLHttpRequest){
            // code for IE7+, Firefox, Chrome, Opera, Safari
            return new XMLHttpRequest();    
            }
            else if(window.ActiveXObject){
                  return new ActiveXObject("Microsoft.XMLHTTP");
            }else{
                  return false;
            }
}

//----------------- Links Drop down in tabs ----------------------------------------------------------------------
function GoToLink(){
	var elem = document.getElementById("linkSelect");
	var selectedURL = elem.options[elem.selectedIndex].value;
	if(elem.selectedIndex != 0){
		window.parent.open(selectedURL,'BMAP','scrollbars=yes,resizable=yes,width:800;height:600;');
	}
}
//---------------- Proration Screen calculations -----------------------------------------------------------------

function getDiffInDays() {
	var arrDate1Component = document.getElementById("dateSelect")[document.getElementById("dateSelect").selectedIndex].value.split("/");
    var arrDate2Component = document.getElementById("tstBox12").value.split("/");
    var d1=new Date(arrDate1Component[2],arrDate1Component[0]-1,arrDate1Component[1]);
    var d2=new Date(arrDate2Component[2],arrDate2Component[0]-1,arrDate2Component[1]);
	var date1_ms=d1.getTime();
	var date2_ms=d2.getTime();
    return (Math.round((date2_ms-date1_ms)/(1000*60*60*24)));    
}
function convertMonth(month) {
	var arrMonth = new Array();
	arrMonth[1] = 'Jan';
	arrMonth[2] = 'Feb';
	arrMonth[3] = 'Mar';
	arrMonth[4] = 'Apr';
	arrMonth[5] = 'May';
	arrMonth[6] = 'Jun';
	arrMonth[7] = 'Jul';
	arrMonth[8] = 'Aug';
	arrMonth[9] = 'Sep';
	arrMonth[10] = 'Oct';
	arrMonth[11] = 'Nov';
	arrMonth[12] = 'Dec';
	return arrMonth[month];
}

function calcProration(){

	var returnvalue = new Array("","","","","","","","","","");

	var currentReading=document.getElementById('TxtCR'); 
	returnvalue[0] = currentReading;
	if(currentReading.value.length<5){
		alert("Please enter five digits for current meter reading");
		currentReading.focus();
	}else{
		returnvalue[1] = document.getElementById("dateSelect").value;
		if(document.getElementById('txtCKWH').value < 0){
			returnvalue[2] = 100000+parseInt(document.getElementById('txtCKWH').value);
		}else{
			returnvalue[2] = document.getElementById('txtCKWH').value;
		}
		returnvalue[3] = document.getElementById("dateSelect")[document.getElementById("dateSelect").selectedIndex].value;
		returnvalue[4] = document.getElementById("tstBox12").value;
		returnvalue[5] = getDiffInDays();
		returnvalue[6] = document.getElementById('hiddenDays').innerHTML		
		var month = convertMonth(document.getElementById("hiddenMonth").innerHTML);
		returnvalue[7] = month+" "+document.getElementById("hiddenYear").innerHTML;	
		returnvalue[8] = document.getElementById('hiddenKWH').innerHTML;	
		returnvalue[9] = rate;
		window.returnValue=returnvalue;
		window.close();
		

	}
}
