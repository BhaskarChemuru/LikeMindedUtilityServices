//the following is jquery code.  Using jq14 instead of $ shortcut due to a conflict in jquery version used by the wrapper --%>

//assign actions to events when DOM is ready
jq14(document).ready(function(){
	
		 /*gives all inputs a help "bubble" ugh*/
	  	jq14('#custRegForm :input, #search').focus(function(){
	  		
	  		var code;
	  		var message = (registration_help[this.id])?registration_help[this.id][code]||registration_help[this.id]:null;
	  		fieldFocus(this.id,message);
	  		}).blur(function(){jq14("#"+this.id+"HelpDisplay").filter(".hint").hide()
	  	});
	  	
	  	jq14('#account').change(function(){
	  		jq14('#accountFlag').val("");
	  		jq14("#account").data("validations",["required","numeric","minLength","zero","server"]).data("validationDictionary","registration_errors");
	  		jq14('#secretAccount').val("");
	  	});
	  	
	  	setValidations();
	  	
	  	jq14('#closeAccountLookup').click(function(){
	  		 jq14.unblockUI();
	  		 jq14("#account").val(jq14("#acctFound").val());
	  	});
	  	
	  	jq14("#searchButton").click(function(){
	  		doAccountLookup();
	  	});
	  	
	  	jq14("#activateButton").live('click',function(){
	  		prepareForSubmission();
	  	});
	  	
	  	jq14("#search").hover(function(){
	  		var code;
	  		var message = (registration_help[this.id])?registration_help[this.id][code]||registration_help[this.id]:null;
	  		fieldFocus(this.id,message);
	  	},function(){
	  		jq14("#"+this.id+"HelpDisplay").hide();
	  	});
	  	
	  	jq14("#search").click(function(e){
	  		e.preventDefault();
	  		if (jq14("#search").attr("disabled") == "disabled"){
	  			return false;
	  		}
  			openAcctLookup();
  			return true;
	  	});
	  	
	  	jq14("#verifyButton").click(verifyUserDetails);
	  	
	  	jq14("#noAccountCheckbox").click(function(){
	  		if(this.checked){
		  		jq14("#lookUpFields").hide();
		  		jq14('#lookUpFields input').not("input:button").each(function(){
		  			jq14(this).val("");
		  		});
		  		enableForm();
		  		jq14('#topText').hide();
		  		jq14('#topText2').show();
		  		
	  		}else{
	  			jq14('#activate').attr("onfocus","this.blur()");
		  		jq14("#lookUpFields").show();
		  		jq14('#moreFields input, #moreFields select').each(function(){
		  			jq14(this).attr("disabled","disabled");
		  		});
		  		jq14('#moreFields').addClass("disableField");
		  		jq14('#activateButton').attr("disabled","disabled").addClass('blueButton_OFF').removeClass('blueButton');
		  		jq14('#topText2').hide();
		  		jq14('#topText').show();
	  		}
	  	});
	  	
	  	
	  	jq14("#doneButton").click(function(){
	  		jq14("#account").val(jq14("#acctFound").val());
	  		jq14.unblockUI();
	  	});
	  	
	  	jq14("#businessSearch").click(function(){
	   		jq14("#searchOptions option:eq(0)").replaceWith("<option value='1'>Business Name &amp; City</option>");
	   		jq14("#searchOptions option:eq(1)").replaceWith("<option value='1'>Business Name &amp; Zip Code</option>");
	  		});
	  	
	  	jq14("#residentialSearch").click(function(){
	   		jq14("#searchOptions option:eq(0)").replaceWith("<option value='1'>Name &amp; City</option>");
	   		jq14("#searchOptions option:eq(1)").replaceWith("<option value='1'>Name &amp; Zip Code</option>");
	  		});
	  		
	  	jq14("#searchOptions").change(function(){
	      		if(jq14("#searchOptions option:selected").val()==1){
	      			jq14("#searchResidentialName, #searchCitySpan").show();
	      			jq14("#searchResidentialPhone, #searchZipSpan").hide();
	      		}
	      		if(jq14("#searchOptions option:selected").val()==2){
	      			jq14("#searchResidentialName, #searchZipSpan").show();
	      			jq14("#searchResidentialPhone, #searchCitySpan").hide();
	      		}
	      		if(jq14("#searchOptions option:selected").val()==3){
	      			jq14("#searchResidentialName, #searchZipSpan").hide();
	      			jq14("#searchResidentialPhone, #searchCitySpan").show();
	      		}
	      		if(jq14("#searchOptions option:selected").val()==4){
	      			jq14("#searchResidentialName, #searchCitySpan").hide();
	      			jq14("#searchResidentialPhone, #searchZipSpan").show();
	      		}
	       });
    });

function requestTempEmail(){
	window.location.replace("/eca/EcaController?command=resolveUserIdCheckTempUser&requestTempEmail=Y&userid="+jq14("#emailAddress").val());
	
}   

function prepareForSubmission(){
	validField('termsAndConditions');
	if(validateFields('moreFields')){
		var userInfo = {"userid" : jq14("#emailAddress").val(), "verifyId" : "true"};
		var toServer = JSON.stringify(userInfo);
	 	jq14.ajax({
	 		url: "/eca/EcaController?command=verify&jsonRequest="+ toServer,
	 		dataType:"json",
	 		error: function(data){
	 			window.location.replace("/eca/EcaController?command=error&head="+jq14("#head").html());
	 		},
	 		type: 'POST',
	 		success: function(data){
	 			if(data.jsonResponse){
	 				if (data.isTempUser){
	 					var message=(registration_errors['emailAddress'])?registration_errors['emailAddress']['emailAddressPending']||registration_errors['emailAddress']:null;
	 					invalidField('emailAddress',message);
	 					invalidField('activateButton',(registration_errors['activateButton'])?registration_errors['activateButton']:null);
	 					return false;
	 				}else if(data.userExists){
	 					var message=(registration_errors['emailAddress'])?registration_errors['emailAddress']['emailAddressExists']||registration_errors['emailAddress']:null;
						 invalidField('emailAddress',message);
						 invalidField('activateButton',(registration_errors['activateButton'])?registration_errors['activateButton']:null);
						 return false;
	 				}else{
	 					validField('emailAddress');
	 				}
					if(validateFields('lastFields')&& showEmailBillWarning()){
						validField('activateButton');
	 					showSubmitMessage();
	 					//for webtrends tracking to track the end of a registration
	 					var embTrack = (jq14('#embProgram').is(":checked")) ? 1 : 0;
	 					var regTypeTrack = (jq14("#noAccountCheckbox").is(":checked")) ? "ss" : "aa";
	 					trackRegCmplt(regTypeTrack,embTrack);
				    	window.setTimeout(jq14("#custRegForm").submit(), 2000);
				    	var i = 0;
	 				}else{
						invalidField('activateButton',(registration_errors['activateButton'])?registration_errors['activateButton']:null);
	 				}
	 			}
	 		}
		});	
	}else{
		if(!jq14("#password").data("isValid")){
			resetField('password2');
			jq14("#password2").val("");
		}
		if(!jq14("#phrase").data("isValid") ){
			resetField('phrase2');
			jq14("#phrase2").val("");
		}
		invalidField('activateButton',(registration_errors['activateButton'])?registration_errors['activateButton']:null);
	}
} 
function enableForm(){
	jq14('#moreFields').removeClass("disableField");
	jq14('#moreFields input, #moreFields select, #activateButton').each(function(){
		jq14(this).attr("disabled","");
	 });
	jq14('#activateButton').addClass('blueButton').removeClass('blueButton_OFF');
	jq14('#activate').removeAttr("onfocus");
}
function showSubmitMessage(){

	var message = "When your registration profile has been successfully created, you will be able to access your account.";
	if(jq14('#noAccountCheckbox').is(":checked")|| jq14("#startService").val()=='true'){
		message = "When your registration profile has been successfully created, you will be forwarded to our Start Service page.";
	}
		Shadowbox.open({
        player:     'html',					// html specified for hidden inline content.
        content:    '<div style="text-align:center;margin: 80px 20px">'+
        			'<h2 style="margin:20px 30px 5px">Please wait while we process your request..</h2>'+
        			'<br><span id="wait" style="padding-left: 20px "><img src="images/loadinfo.gif" /></span>'+
        			'<h2 style="margin:20px 30px 5px">'+message+'</h2></div>',
        height:     300,					// height can be edited.
        width:      760						// width can be edited - NOTE: should match width of DIV.
   	});
}
//if the emb offer is accepted shows a warning
function showEmailBillWarning(){
	var accepts = true;
	if(jq14('#embProgram').is(":checked")){
		accepts = confirm("I hereby authorize FPL to send my monthly electric bill to the email address that I have indicated in this application. I understand that I will now receive my FPL bill electronically via the Internet and not by U.S. Postal Service. This service will remain effect until FPL receives timely notification from me to cancel FPL E-mail Bill or until FPL notifies me of its termination. I further understand that FPL is not liable for any computer problems caused by my Internet Service Provider. In any instance whereby I cannot retrieve my electronic bill, it is my responsibility to contact FPL and make timely electric bill payments.");
		if(!accepts){
			$('#embProgram').attr('checked', false);
		}
	}
	return accepts;
} 
  
function setValidations(){
	
	jq14("#account").data("validations",["required","numeric","minLength","zero","server"]);
	jq14("#ssn").data("validations",["required","numeric","minLength","server"]);
	jq14("#firstName,#lastName").data("validations",["alpha","required"]);
	jq14("#password").data("validations",["required","minLengthPassword","alphaNumeric","strongPassword"]).change(function(){
		jq14("#password2").data("validations",["required","passwordConfirm"]).data("validationDictionary","registration_errors");
	});
	
	jq14("#emailAddress").data("validations",["required","email","domain","server"]).change(function(){
		jq14("#emailAddress2").data("validations",["required","emailConfirm"]).data("validationDictionary","registration_errors");
	});
	jq14("#phraseIdentifier").data("validations",["required","required"]);
	jq14("#phrase").data("validations",["required","alphaNumericAndSpaces","minLengthPhrase","phrase"]).change(function(){
		jq14("#phrase2").data("validations",["required","phraseConfirm"]).data("validationDictionary","registration_errors");
	});;
	
	jq14("#phrase2").change(function(){
		jq14("#phrase").data("validations",["required","alphaNumericAndSpaces","minLengthPhrase","phrase"]).data("validationDictionary","registration_errors");	
		//jq14(this).data("validations",["required","phraseConfirm"]).data("validationDictionary","registration_errors");
	});
	
	jq14("#termsAndConditions").data("validations",["checked"]); 
	// search here for anything that has a data type of validations and assign it a dictionary
	jq14('#custRegForm :input').each(function(){
		if(jq14(this).data("validations")){
			jq14(this).data("validationDictionary","registration_errors");
		}
	});
}

//searches for an account using an ajax request
function doAccountLookup(){
	//gather the info for all fields with class of type searchField use the id as the index
	var accountSearch={};
	jq14(".searchField").each(function(i){
		accountSearch[jq14(this).attr("id")]=jq14(this).val();
	});
	//initialize a table that will search for acct using the accountSearch dictionary
	jq14("#acctSearchTable").jqGrid({
		   	url:'/eca/EcaController?command=accountSearch&jsonRequest='+ JSON.stringify(accountSearch),
			datatype: "json",
		   	colNames:['id','Name','Address'],
		   	colModel:[
		  	 	{name:'id',index:'id',width:50, hidden:true},
		   		{name:'custName',index:'custName', width:50},
		   		{name:'address',index:'address', width:100}	
		   	],
		   	jsonReader: {repeatitems: false},
  				multiselect: false,
		   	width: '600',
		    caption:'Results <span style="font-size: 9px"> (click row to select)</span>',
		    onSelectRow:function(id){
				var selRow = jq14(this).jqGrid('getRowData',id);
				jq14("#acctFound").val(selRow.id);
			}
	});
	jq14('#searchTable,#results').slideDown();
}

function openPopup(url){
	window.open(url,"Terms_and_Conditions","scrollbars=1,menubar=0,resizable=1,width=500,height=600");
}

function validateAccountNumber(){
       var accountFlag=document.getElementById('accountFlag').value; // Encrypted
       var accountInput=document.getElementById('account');        
       var valid=false;
       
       if (accountFlag!=null){
             if (accountFlag=="Encrypted"){
                   // Validate encrypted account pattern *****99999
                   valid=validateAccount(accountInput,"Encrypted");
        }else{
                   // Regular validation
                   valid=validateAccount(accountInput,"");
             }
       }     
       else{
             throw "Error when validating account number, input accountFlag is null.";
       }
 }
     
 function validateAccount(obj, flag){
 
       var isValid=false;
       if (flag=="Encrypted"){       
       	isValid= (obj.value.search( /^[*]{5}[0-9]{5}$/ ) != -1);
       }else{
       	isValid= (obj.value.search( /^[0-9]{10}$/ ) != -1);
       }
       return isValid;
 }