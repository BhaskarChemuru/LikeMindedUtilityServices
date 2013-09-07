// Constants
RESIDENTIAL_NAME_ZIP="RES_NMZIP";
RESIDENTIAL_PHONE_ZIP="RES_PHZIP";
BUSINESS_NAME_ZIP="BUS_NMZIP";
BUSINESS_PHONE_ZIP="BUS_PHZIP";

//firstInit="";

//searchURL='/CustomerSearchStandAlone/SearchCustomerIntegrated?jsonRequest=';
searchURL='/eca/EcaController?command=accountSearch&jsonRequest=';

accountWasSelected=false;
	
/*
	Return the appropriate constant based on the selection made from the radio buttons and 
	dropdown.
*/
function evalSelection(){
	var resObj = document.getElementById('residentialSearch');
	var busObj = document.getElementById('businessSearch');
	var res = resObj.checked;
	var bus = busObj.checked;
	
	var returnValue="";
	
	if (res){
		resObj.value="R";
		busObj.value="";		
	}
	else
	if (bus){
		busObj.value="C";
		resObj.value="";
	}

	var selection = document.getElementById('searchOptions').selectedIndex;

	//Search Option: Residential Name & Zip
	if (selection==0 && res) {
		returnValue=RESIDENTIAL_NAME_ZIP;
	}
	else	
	//Search Option: Business Name & Zip
	if (selection==0 && bus) {
		returnValue=BUSINESS_NAME_ZIP;
	}
	else
	
	//Search Option: Residential Telephone & Zip
	if (selection==1 && res) {
		returnValue=RESIDENTIAL_PHONE_ZIP;
	}
	else	
	//Search Option: Business Telephone & Zip
	if (selection==1 && bus) {
		returnValue=BUSINESS_PHONE_ZIP;
	}	
	
	return returnValue;
}	


function validateField(field) {
	var code='';
	//If InValid
	invalidField(field, code);

	//If Valid
	validField(field);
}

function resetOptions() {
	document.getElementById('searchOptions').selectedIndex=0;
	clearValues();	
	setSearchOptions();	
}

function selectBoxChange(){
	clearValues();	
	setSearchOptions();	
}

function setSearchOptions() {
	resetMessages();
	
	var resObj = document.getElementById('residentialSearch');
	var busObj = document.getElementById('businessSearch');
	var res = resObj.checked;
	var bus = busObj.checked;
	
	if (res){
		resObj.value="R";
		busObj.value="";		
	}
	else
	if (bus){
		busObj.value="C";
		resObj.value="";
	}
	
	var selection = document.getElementById('searchOptions').selectedIndex;

	
	//Search Option: Residential Name & Zip
	if (selection==0 && res) {
		document.getElementById('searchResidentialName').style.display = "block";
		document.getElementById('searchBusinessName').style.display = "none";
		document.getElementById('searchZipSpan').style.display = "block";
		document.getElementById('searchPhoneSpan').style.display = "none";
		document.getElementById('searchAccountStatus').style.display = "none";
		document.getElementById('searchSSN').style.display = "block";
		changeSSNLabel("Last 4 SSN/SIN: (optional)");
	}
	else	
	//Search Option: Business Name & Zip
	if (selection==0 && bus) {
		document.getElementById('searchResidentialName').style.display = "none";
		document.getElementById('searchBusinessName').style.display = "block";
		
		document.getElementById('searchZipSpan').style.display = "block";
		document.getElementById('searchPhoneSpan').style.display = "none";
		document.getElementById('searchAccountStatus').style.display = "block";
		document.getElementById('searchSSN').style.display = "block";
		changeSSNLabel("Last 4 TIN:");		
	}
	else
	
	//Search Option: Residential Telephone & Zip
	if (selection==1 && res) {
		document.getElementById('searchResidentialName').style.display = "none";
		document.getElementById('searchBusinessName').style.display = "none";		
		document.getElementById('searchZipSpan').style.display = "block";
		document.getElementById('searchPhoneSpan').style.display = "block";
		document.getElementById('searchAccountStatus').style.display = "none";
		document.getElementById('searchSSN').style.display = "block";
		changeSSNLabel("Last 4 SSN/SIN: (optional)");
	}
	else	
	//Search Option: Business Telephone & Zip
	if (selection==1 && bus) {
		document.getElementById('searchResidentialName').style.display = "none";
		document.getElementById('searchBusinessName').style.display = "none";		
		document.getElementById('searchZipSpan').style.display = "block";
		document.getElementById('searchPhoneSpan').style.display = "block";
		document.getElementById('searchAccountStatus').style.display = "block";
		document.getElementById('searchSSN').style.display = "block";
		changeSSNLabel("Last 4 TIN: (Optional)");		
	}	
		
	//Change Search Option Dropdown Text
	if (res) {
		document.getElementById('searchOptions').options[0].text="Name & Zip Code";		
	}
	if (bus) {
		document.getElementById('searchOptions').options[0].text="Business Name & Zip Code";		
	}	
	
	//clearValues();	
}

function showResults() {    
	if (!validateInputs()){
		return;
	}
	
	enableSearchButton(false);
	setSearchButtonMessage(true);	
	
	jq14('#lookUpFields *').each(function(){
    	jq14(this).addClass("blocked");
    	jq14(this).attr("readonly","readonly");
    });
    //jq14('#lookUpFields').append('<span id="loadingImage"  style="diplay:block;margin:auto;padding-left:15px"><img src="images/loading.gif" /></span>');
	//gather the info for all fields with class of type searchField use the id as the index
	var accountSearch={};
	
	jq14(".searchField").each(function(i){
		accountSearch[jq14(this).attr("id")]=jq14(this).val();
	});
	if(firstSearch){
	//initialize a table that will search for acct using the accountSearch dictionary
	jq14("#acctSearchTable").jqGrid({						
		   	url:searchURL+ JSON.stringify(accountSearch),
			datatype: "json",
		   	colNames:['encodedAccountNumber','id','accountNumber','Customer Name','Service Address'],
		   	colModel:[
			   	{name:'encodedAccountNumber',index:'encodedAccountNumber',width:50, hidden:true},
		  	 	{name:'id',index:'id',width:50, hidden:true},
		  	 	{name:'accountNumber',index:'accountNumber',width:50, hidden:true},
		   		{name:'custName',index:'custName', width:50},
		   		{name:'address',index:'address', width:90}	
		   	],
		   	cache:false,
		   	jsonReader: {repeatitems: false},
		   	width: '650',
		    //caption:'Results <span style="font-size: 9px"> (click row to select)</span>',
		    
		    onSelectRow:function(id){			    
				var selRow = jq14(this).jqGrid('getRowData',id);
				jq14("#acctFound").val(selRow.id);
				window.parent.jq14("#account").removeData("validations");
				window.parent.resetField('account');
								
				if (window.parent.document.getElementById('account')){ 
					window.parent.document.getElementById('account').value=selRow.accountNumber;
					window.parent.document.getElementById('secretAccount').value=selRow.encodedAccountNumber;
					window.parent.document.getElementById('accountFlag').value="Encrypted";
					window.parent.jq14("#account").one('focus',function(){jq14(this).select()});
				}
				// enable button
				enableAccountDoneButton(true);
				accountWasSelected=true;
			},
			loadComplete: function(request){
				enableAccountDoneButton(false);
			
				jq14('#lookUpFields *').each(function(){
			    	jq14(this).removeClass("blocked");
			    	jq14(this).attr("readonly","");
			    });
			   jq14('#loadingImage').empty();
	
				tester="loadComplete";
				var myrequest  = JSON.parse(request.responseText);
				var disableNextButton=myrequest.moreAvailable;

				if (disableNextButton=="N"){
					disableJQGridNextButton(true);
				}else{
					disableJQGridNextButton(false);
				}
				
				if(myrequest.records >0){
					jq14('#searchTable,#results,#gotResults').slideDown();
					document.getElementById('noResults').style.display = "none";
				}else{
					jq14('#results,#noResults').slideDown();
					if(myrequest.error){
						jq14("#noResultsImage,#resultLink").hide();
						jq14('#noResultsError').show();
					}else{
						jq14("#noResultsImage,#resultLink").show();
						jq14('#noResultsError').hide();
					}
					document.getElementById('acctFound').style.display = "none";
					document.getElementById('gotResults').style.display = "none";
				}
					document.getElementById('lookUpFields').style.display = "none";
			},
			onPaging: function(pgButton){					
				var urlParam=searchURL+ JSON.stringify(accountSearch)+'&pageIndicator=true';
			    jq14("#acctSearchTable").setGridParam({url: urlParam, datatype: 'json'});			
				resetParentAccountInfo();
				accountWasSelected=false;
			},
			
			pager : '#gridpager',
			height:200,
		    rowNum:100,
		    recordtext: '',
		    pgtext: 'More Results',
		    viewrecords: false,		   
		    rowList: ''
		});			
	}	
	else{
		//jq14("#acctSearchTable").trigger("reloadGrid");
		jq14('#acctSearchTable').jqGrid('setGridParam',{url:searchURL+ JSON.stringify(accountSearch)}).trigger("reloadGrid"); 
		//gridReload();
	}	

	firstSearch=false;
	disableJQgridPagerMisc();	
	document.getElementById("searchStatus").value="pagingAttempt";
}

function selectedRadio(){
var selectedRadio = jq14('#searchType input:radio:checked').val();
	
}
function resetParentAccountInfo(){
	if (window.parent.document.getElementById('account')!=null){
		window.parent.document.getElementById('account').value="";
	}
	
	if (window.parent.document.getElementById('secretAccount')!=null){	
		window.parent.document.getElementById('secretAccount').value="";
	}
	
	if (window.parent.document.getElementById('accountFlag')!=null){
		window.parent.document.getElementById('accountFlag').value="";			    	
	}
}

function gridReload(){ 
	var accountSearch={};
	
	jq14(".searchField").each(function(i){
		accountSearch[jq14(this).attr("id")]=jq14(this).val();
	});

	var urlParam=searchURL+ JSON.stringify(accountSearch);
	jq14("#acctSearchTable").jqGrid('setGridParam', 'url', urlParam);
} 

function showLookupFields() {
	//window.location.reload();
	//jq14("#acctSearchTable").jqGrid
	//jq14("#acctSearchTable").clearGridData();
	//jq14('#acctSearchTable').setGridParam({url:searchURL});
    //jq14('#acctSearchTable').trigger("GridUnload");
    //jq14('#acctSearchTable').jqGrid('setGridParam',{url:searchURL}).trigger("reloadGrid"); 
	//document.getElementById('lookUpFields').style.display = "none";
	resetMessages();
	setSearchButtonMessage(false);
	enableSearchButton(true);
	document.getElementById('lookUpFields').style.display = "block";
	document.getElementById('results').style.display = "none";
	//document.getElementById("firstInitialSearch").value=firstInit;
}

/*
* Disable some options for the pager under JQGrid.
*/
function disableJQgridPagerMisc(){
	document.getElementById('first').style.display = "none";
	document.getElementById('prev').style.display = "none";
	document.getElementById('last').style.display = "none";
}


function disableJQGridNextButton(disable){
	if (disable){
		document.getElementById('gridpager_center').style.display = "none";
	}
	else{
		document.getElementById('gridpager_center').style.display = "block";
	}
}

function whyNoResults () {
	var element = document.getElementById('noResultsHelpDisplay').style.display;
	var selection=evalSelection();
	var ssnBox = document.getElementById('ssnSearch');	
	var code= 'RNameCity';
	var additionalResidentialSsnMsg="";
	
	if (ssnBox){
		if (ssnBox.value.length>0){
			additionalResidentialSsnMsg="<br><br>Please verify that the last 4 digits of your SSN/SIN are correct or that you have previously provided this information for your account. If not sure, you can revise your search.";
		}
	}
	

	if (element == 'none') {		
		if (selection==RESIDENTIAL_NAME_ZIP){
			code="Make sure that your first initial and last name are the same as those used on the account. Check the spelling. Names are not case sensitive. <br><br> Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address."+additionalResidentialSsnMsg;			
		}
		else
		if (selection==RESIDENTIAL_PHONE_ZIP){
			code="Make sure to use the telephone number on record for this account. If you have recently changed your phone number, our records may still have the old number. <br><br>Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address zip code."+additionalResidentialSsnMsg;			
		}
		else
		if (selection==BUSINESS_NAME_ZIP){
			code="Make sure your business name is the one used on the account. Check the spelling. You can also try omitting smaller words from your name like: at, by, of and the. <br><br>Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address zip code.";			
		}
		else
		if (selection==BUSINESS_PHONE_ZIP){
			code="Make sure to use the telephone number on record for this account. If you have recently changed your phone number, our records may still have the old number. <br><br>Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address zip code.";					
		}
				
		fieldFocus('noResults',code); }
	else {
		hideHelp('noResultsHelpDisplay'); }
}

function changeSSNLabel(message){
	var ssnLabel = document.getElementById("ssnLabel");
	if (ssnLabel != null){
		ssnLabel.innerHTML=message;
	}
}
function doneButtonMsgEvent(mouseOn){
	if (mouseOn){
		fieldFocus('doneButton', 'Clicking Done will close the Search window and return with the account number of a selected row.');
	}
	else{
		resetField('doneButton');
	}
}

function setSearchButtonMessage(boolFlag){
	if (boolFlag){
		document.getElementById("searchMessage").innerHTML="<b style='color:black;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please wait while we search our records</b>" ;		
	}
	else{
		document.getElementById("searchMessage").innerHTML="" ;		
	}
}

function enableSearchButton(boolFlag){
	var searchButtonObj = document.getElementById("searchButtonImage");
	
	//alert(searchButtonObj.src);
	// alert( <%=System.getProperty("external.appServer")%> );
	
	if (boolFlag){
		searchButtonObj.style.cursor = 'pointer';
		jq14('#searchButtonImage').toggleClass('greyButton greyButton_OFF').removeAttr("disabled");	

	}
	else{
		searchButtonObj.style.cursor = 'Wait';
		jq14('#searchButtonImage').toggleClass('greyButton_OFF greyButton').attr("disabled","disabled");		
	}
	
	//alert(searchButtonObj.src);
}

function enableAccountDoneButton(boolFlag){
	var searchButtonObj = document.getElementById("doneBtn");
	//var linkUrl = document.getElementById("testing");
	
	//alert(searchButtonObj.src);
	// alert( <%=System.getProperty("external.appServer")%> );
	
	if (boolFlag){
		//searchButtonObj.src=externalServer+"/fplcommon/wrapper/1024images/appBtn_done.gif";		
		jq14('#doneBtn').removeClass('blueButton_OFF').addClass('blueButton').removeAttr("disabled");	
		//linkUrl.disabled=true;
	}
	else{
		//searchButtonObj.src=externalServer+"/fplcommon/wrapper/1024images/appBtn_done_OFF.gif";			
		jq14('#doneBtn').removeClass('blueButton').addClass('blueButton_OFF').attr("disabled","disabled");	
		//linkUrl.disabled=true;
	}
	
	//alert(searchButtonObj.src);
}

/*
  Close child select window if an account was selected from the result box/grid.
*/
function closeWithSelectedAccount(){
	if (accountWasSelected){
	
		lookupCmplt(selectedRadio(),  evalSelection());
		window.parent.Shadowbox.close();
	}
}

/*
*****************************************************************************************************************************************
*****************************************************************************************************************************************
***************************           The following block provides validation for search                      ***************************
*****************************************************************************************************************************************
*****************************************************************************************************************************************
*/
function validateInputs(){
	var firstInitial = document.getElementById("firstInitialSearch");
	var lastName = document.getElementById("lastNameSearch");
	var businessName = document.getElementById("businessNameSearch");
	var zipCode = document.getElementById("zipSearch");
	var ssn = document.getElementById("ssnSearch");
	var phone = document.getElementById("phoneSearch");
	
	var validInputs=true;
	
	/*
	if (firstInitial.value.length>1){
		invalidField('firstInitialSearch','ouch, error');
	}*/
	
	var selection=evalSelection();
	
	//alert(evalSelection());
	if (selection==RESIDENTIAL_NAME_ZIP) {
		var correctFirstInitial=false;
		var correctLastName=false;
		var correctName=false;
		
		correctFirstInitial=validateFirstInitial();
		if (correctFirstInitial){
			correctLastName=validateLastName();
		}
		else{
			resetField('lastNameSearch');
		}
		
		correctName=correctFirstInitial&&correctLastName;		
		
		validInputs= correctName & validateZipCode() & validateSsn();
	}
	else	
	//Search Option: Business Name & Zip
	if (selection==BUSINESS_NAME_ZIP) {
		validInputs= validateBusinessName() & validateZipCode() & validateBusinessSsn();
	}
	else	
	//Search Option: Residential Telephone & Zip
	if (selection==RESIDENTIAL_PHONE_ZIP) {
		validInputs=validatePhone() & validateZipCode() & validateSsn();	
	}
	else	
	//Search Option: Business Telephone & Zip
	if (selection==BUSINESS_PHONE_ZIP) {
		validInputs= validatePhone() & validateZipCode() & validateSsn();	
	}		

	return validInputs;
}

function validateFirstInitial(){
	var firstInitial = document.getElementById("firstInitialSearch");
	
	if ( firstInitial.value.search( /(^[A-Za-z]{1}$)/ ) != -1 ){
		validField('firstInitialSearch','test');
		return true;
	}
	else{	
		//invalidField('firstInitialSearch','Enter the first letter of your first name as it appears on your electric bill.');
		invalidField('firstInitialSearch',getErrorMessage('firstInitialSearch'));			
		return false;
	}	
}

function validateLastName(){	
	var lastName = document.getElementById("lastNameSearch");
	
	if ( lastName.value.search( /(^[A-Za-z]{1}[A-Za-z\-\']{1,55}$)/ ) != -1 ){
		validField('lastNameSearch');
		return true;
	}
	else{
		//invalidField('lastNameSearch','Please enter letters for your last name; apostrophe or hyphen is also acceptable.');
		invalidField('lastNameSearch',getErrorMessage('lastNameSearch'));			
		return false;				
	}
}

function validateBusinessName(){
	var businessName = document.getElementById("businessNameSearch");
	if ( businessName.value.search( /(^[A-Za-z/-/'\s]{1,56}$)/ ) != -1 ){
		validField('businessNameSearch');
		return true;
	}
	else{
		//invalidField('businessNameSearch','Enter your business name. You can enter as many characters from the beginning of your customer name as needed to find a match to our records.');	
		invalidField('businessNameSearch',getErrorMessage('businessNameSearch'));			
		return false;
	}
}

function validateZipCode(){
	var zipCode = document.getElementById("zipSearch");
	
	if ( zipCode.value.search( /(^[0-9]{5}$)/ ) != -1 ){
		validField('zipSearch');	
		return true;
	}	
	else{		
		//invalidField('zipSearch',getErrorMessage('zipSearch'));
		invalidField('zipSearch',getErrorMessage('zipSearch'));					
		return false;				
	}
}

function validateSsn(){
	var ssn = document.getElementById("ssnSearch");
	
	if (ssn.value.length>0){
		if ( ssn.value.search( /(^[0-9]{4}$)/ ) != -1 ){
			validField('ssnSearch');
			return true;
		}	
		else{
			//invalidField('ssnSearch',"Please enter the last 4 digits only, including zeroes.");
			invalidField('ssnSearch',getErrorMessage('ssnSearch'));			
			return false;
		}
	}	
	else{
		resetField('ssnSearch');
		return true;
	}
}

function validateBusinessSsn(){
	var ssn = document.getElementById("ssnSearch");	

	if ( ssn.value.search( /(^[0-9]{4}$)/ ) != -1 ){
		validField('ssnSearch');		
		return true;
	}	
	else{
		//invalidField('ssnSearch',"In order to perform an accurate business search, you must enter the last 4 digits of the Tax ID number associated with the account.");
		invalidField('ssnSearch',getErrorMessage('tinreqSearch'));					
		return false;
	}

}

function validatePhone(){
	var phone = document.getElementById("phoneSearch");
	//if ( phone.value.search( /^[/(][0-9]{3}[/)][0-9]{3}[/-][0-9]{4}$/ ) != -1 ){
	if ( phone.value.search( /^[0-9]{10}$/ ) != -1 ){
		validField('phoneSearch');
		return true;
	}
	else{
		//invalidField('phoneSearch','Enter the area code and phone number on record for your account. Please enter all ten digits only. Do not use hyphens or parentheses.');	
		invalidField('phoneSearch',getErrorMessage('phoneSearch'));							
		return false;
	}
}

function resetMessages(){
	resetField('firstInitialSearch');
	resetField('lastNameSearch');	
	resetField('businessNameSearch');
	resetField('zipSearch');
	resetField('ssnSearch');
	resetField('phoneSearch');
	hideHelp('noResultsHelpDisplay');	
}

function clearValues(){
	var firstInitial = document.getElementById("firstInitialSearch");
	var lastName = document.getElementById("lastNameSearch");
	var businessName = document.getElementById("businessNameSearch");
	var zipCode = document.getElementById("zipSearch");
	var ssn = document.getElementById("ssnSearch");
	var phone = document.getElementById("phoneSearch");
	setSearchButtonMessage(false);
	
	if (firstInitial!=null){
		firstInitial.value="";
	}
	
	if (lastName!=null){
		lastName.value="";	
	}
	
	if (businessName!=null){
		businessName.value="";			
	}

	if (zipCode!=null){
		zipCode.value="";	
	}
	
	if (ssn!=null){
		ssn.value="";	
	}
	
	if (phone!=null){
		phone.value="";	
	}
}

function getErrorMessage(id){	
	var message=registration_errors[id]; 
	return message;
}

function getMessage(id){	
	var message=registration_help[id]; 
	return message;
}