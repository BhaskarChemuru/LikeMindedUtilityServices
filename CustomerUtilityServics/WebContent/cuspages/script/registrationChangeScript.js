  var formChanged;
 
 jq14(document).ready(function(){
    formChanged = false;
	jq14('#header').val(jq14('#head').text());
	setValidations();
   	jq14('#phraseIdentifier').val(jq14('#secQuestion').val());
   	jq14('#submitButton').click(function(){
   		resetField("submitSection");
   		prepareForSubmission();
   	});
   	jq14('#custRegUpdate :input').focus(function(){
 		var code;
  		var message = (registration_help[this.id])?registration_help[this.id][code]||registration_help[this.id]:null;
  		fieldFocus(this.id,message);
 		}).blur(function(){jq14("#"+this.id+"HelpDisplay").filter(".hint").hide()
 	});
 	
	jq14('#custRegUpdate :input').each(function (i) {
          jq14(this).data('initial_value', jq14(this).val());
     });
	if(jq14('#wrongPassword').val()== 'true'){
		if(jq14("#failedLoginAttempts").val()<5){
			message=(registration_errors['password'])?registration_errors['password']['strongPassword']||registration_errors['password']:null;
		}else{
			message=(registration_errors['password'])?registration_errors['password']['wrongPassword4']||registration_errors['password']:null;
		}
		formChanged = true;
		invalidField('password',message);
	}
	//detect changes on everything but the password
    jq14('#custRegUpdate :input').not('#password').change(function() {
          if (jq14.trim(jq14(this).val()) != jq14(this).data('initial_value')) {
          	formChanged=true;
          	var validation =jq14(this).data('validations');
          	if(validation && jq14.inArray("required",validation)<1){
          		validation.unshift("required");
          	}
          }
     }); 
  	 if(jq14("#giveUserIdFocus").val()=="Y"){
  	 	jq14("#emailAddress").focus();
  	 }else{
  	 	jq14("#password").focus();
  	 }
});

function setValidations(){
	
	jq14("#password").data("validations",["required"]);
	jq14("#firstName,#lastName").data("validations",["alpha"]);
	jq14("#emailAddress").data("validations",[]).change(setUserIdValidation);
	jq14("#phraseIdentifier").data("validations",[""]).change(function(){
		jq14('#phrase').data("validations",["required","alphaNumericAndSpaces","minLengthPhrase","phrase"]).data("validationDictionary","registration_errors");
		jq14("#phrase2").data("validations",["phraseConfirm"]).data("validationDictionary","registration_errors");
	});
	jq14("#phrase").change(function(){
		jq14(this).data("validations",["alphaNumericAndSpaces","minLengthPhrase","phrase"]).data("validationDictionary","registration_errors");
		jq14("#phrase2").data("validations",["required","phraseConfirm"]).data("validationDictionary","registration_errors");
	});
	jq14("#phrase2").change(function(){
		jq14("#phrase").data("validations",["phraseConfirm2","alphaNumericAndSpaces","minLengthPhrase","phrase"]).data("validationDictionary","registration_errors");	
		//jq14(this).data("validations",["required","phraseConfirm"]).data("validationDictionary","registration_errors");
	});
	jq14('#custRegUpdate :input').each(function(){
		if(jq14(this).data("validations")){
			jq14(this).data("validationDictionary","registration_errors");
		}
	});
}

function setUserIdValidation(){
	//add validations to the user id field on change
	jq14("#emailAddress").data("validations",["email","domain","server"]);
}

function requestTempEmail(){
	window.location.replace("/eca/EcaController?command=resolveUserIdCheckTempUser&requestTempEmail=Y&userid="+jq14("#emailAddress").val());
	
}

function prepareForSubmission(){
	
	var userIdChanged= (jq14.inArray("required",jq14("#emailAddress").data('validations'))) >=0;

	if(formChanged){
		if(validateFields('app')){
	
			var userInfo = {"userid" : jq14("#emailAddress").val(), "verifyId" : "true"};
			var toServer = JSON.stringify(userInfo);
			if(userIdChanged){
			 	jq14.ajax({
			 		url: "/eca/EcaController?command=verify&jsonRequest="+ toServer,
			 		dataType:"json",
			 		type: 'POST',
			 		error: function(data){
			 			window.location.replace("/eca/EcaController?command=error&head="+jq14("#head").html());
			 		},
			 		success: function(data) {
			 			if(data.jsonResponse){
			 				if (data.isTempUser){
			 					var message=(registration_errors['emailAddress'])?registration_errors['emailAddress']['emailAddressPending']||registration_errors['emailAddress']:null;
			 					invalidField('emailAddress',message);
			 					formChanged = true;
			 					return false;
			 				}else if(data.userExists){
			 					var message=(registration_errors['emailAddress'])?registration_errors['emailAddress']['emailAddressExists']||registration_errors['emailAddress']:null;
								 invalidField('emailAddress',message);
								 formChanged = true;
								 return false;
			 				}else{
			 					validField('emailAddress');
			 				}
			 				jq14("#custRegUpdate").submit();
			 			}
			 		}
				});
			}else{
				jq14("#custRegUpdate").submit();
			}	
		}else{
			if(!(jq14("#phrase").data("isValid"))){
				resetField('phrase2');
			}
		}
	}else{
			invalidField("submitSection","No changes have been entered to process.");
		}
} 