//pass in a div or section containing inputs and validations will be performed the inputs must be assigned a "validations" array using jquery's data object
var validations;
function validateFields(fieldContainer) {

	var valid = true;
	var errorCounter = 1;	
	alert("rey11");
	jq14('#'+fieldContainer+' input,select').filter(':enabled').not('input[readOnly]').each(function(){
	
		//jq14(this).val(jq14.trim(jq14(this).val()));
		jq14(this).not("input:password").val(jq14(this).val().replace(/\s+$/, ''));

		var theFieldObject = jq14(this);

		//resetField(theFieldObject.attr("id"));
						
		validations = jq14(this).data('validations');
			
		if(validations){
			jq14.each(validations, function(intIndex, objValue){
				if(window[objValue] && window[objValue](theFieldObject) ){
					if(jq14.inArray("server",validations)<1){
						validField(theFieldObject.attr("id"));
					}
					jq14(theFieldObject).data("isValid",true);
				}else if(window[objValue]){
					var messageDictionary = window[jq14(theFieldObject).data("validationDictionary")];
					if(messageDictionary){
						if(errorCounter == 1){
							jq14("#" + theFieldObject.attr("id").scroll);
							jq14("#" + theFieldObject.attr("id")).focus();
							errorCounter++;
						}

						var message = messageDictionary[theFieldObject.attr("id")];
						if (!message.length){
							message = (messageDictionary[theFieldObject.attr("id")])? messageDictionary[theFieldObject.attr("id")][objValue] ||objValue in ( messageDictionary[theFieldObject.attr("id")]):null;
						}
					}
					//console.log("the failed field is: " + theFieldObject.attr("id")+"\n the failed validation is: " +objValue + "\n the validated string was: " +theFieldObject.val()+"\n the message is: "+message+"\n****************\n");
					invalidField(theFieldObject.attr("id"),message);
					jq14(theFieldObject).data("isValid",false);
					valid=false;
					return false;
				}
		   	});
		}
	});
	return valid;
}



function required(aTxtField){
	if(aTxtField.val()!=""){
		return true;
	}else{
		return false;
	}
}
function checked(aCheckbox){
	return aCheckbox.is(':checked');
}

function radio(aRadio){
	var radioName= aRadio.attr('name');
	return jq14("input[@name='+radioName+']:checked").val();
}

function numeric(aTxtField){

	if(aTxtField.val()!=""){
		var alphaNum= new RegExp("^[0-9]*$");
		return alphaNum.test(aTxtField.val());
	}else{	
		return jq14.inArray("required",validations) < 0;
	}
}
function minLength(aTxtField){
		return aTxtField.val().length === aTxtField.attr("maxLength");
	
}
function minLengthPassword(aTxtField){
	return aTxtField.val().length >= 8;
}

function minLengthPhrase(aTxtField){
	return aTxtField.val().length >= 4;
}

function alpha(aTxtField){
	
	if(aTxtField.val()!=""){
		//var alphaNum= new RegExp("^[a-zA-Z]*$");
		var alphaNum= new RegExp("^[\\D]*$");
		return alphaNum.test(aTxtField.val());
	}else{
		return jq14.inArray("required",validations) < 0;
	}
}
//check if the number entered is all zeros
function zero(aTxtField){
	if(aTxtField.val()!=""){
		var zeroNum= new RegExp("(^[0]{1,}$)");
		return !zeroNum.test(aTxtField.val());
	}else{
		return jq14.inArray("required",validations) < 0;
	}
}

function strongPassword(aTxtField){
	if(aTxtField.val()!=""){
		var alphaNum= new RegExp("^[\\da-zA-Z]*(?=[\\da-zA-Z]{8,25})(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]*$");
	
		return alphaNum.test(aTxtField.val());
	}else{
		return jq14.inArray("required",validations) < 0;
	}
}
//says at least 1 letter and 1 number in the whole string
function alphaNumeric(aTxtField){
		if(aTxtField.val()!=""){
			//var alphaNum= new RegExp("^[\\da-zA-Z]*(?=[\\da-zA-Z]{8,25})(?=.*\\d)(?=.*[a-zA-Z])[a-zA-Z\\d]*$");
			var alphaNum= new RegExp("^([\\d\\D]*[\\d][\\d\\D]*[a-zA-Z][\\d\\D]*)|([\\d\\D]*[a-zA-Z][\\d\\D]*[\\d][\\d\\D]*)$");
			return alphaNum.test(aTxtField.val());
		}else{
			return jq14.inArray("required",validations) < 0;
		}
	}
function alphaNumericAndSpaces(aTxtField){
		if(aTxtField.val()!=""){
			var alphaNum= new RegExp("^[a-zA-Z0-9\\s]*$");
			return alphaNum.test(aTxtField.val());
		}else{
			return false;
		}
	}	

function domain(aTxtField){
	if(aTxtField.val()!=""){
		var validDomain = new RegExp("^([a-zA-Z0-9]{1,}[\\-\\_\\.]){0,}[a-zA-Z0-9]{1,}[\\_]{0,1}[@]([a-zA-Z0-9]{1,}[\\-\\_\\.]){1,}[a-zA-Z0-9]{1,}$");
		return validDomain.test(aTxtField.val());
	}else{
		return false;
		}
	}
function email(aTxtField){
	if(aTxtField.val()!=""){
		var validEmail= new RegExp("^([a-zA-Z0-9]{1,}[\\-\\_\\.]){0,}[a-zA-Z0-9]{1,}[\\_]{0,1}$");
		return validEmail.test(aTxtField.val().substring(0,aTxtField.val().indexOf('@')));
	}else{
		return jq14.inArray("required",validations) < 0;
		}
	}
//nothing fancy here...this one just compairs email one to email 2
function emailConfirm(aTxtField){
	if(aTxtField.val()!=""){
		return aTxtField.val().toUpperCase()===jq14("#emailAddress").val().toUpperCase();
	}else{
		return false;
		}
		
}
function passwordConfirm(aTxtField){
	if(aTxtField.val()===jq14("#password").val()){
		return true;
	}else{
		//aTxtField.value="";
		return false;
		}
}

function isPasswordChanged(aTxtField){
	if(aTxtField.val()!==jq14("#password").val()){
		return true;
	}else{
		return false;
		}
}

function newPasswordConfirm(aTxtField){
	if(aTxtField.val()===jq14("#newpassword1").val()){
		return true;
	}else{
		resetField('newpassword2');
		jq14("#newpassword2").val("");
		return false;
		}
}

function phraseConfirm(aTxtField){
	if(aTxtField.val()===jq14("#phrase").val()){
		return true;
	}else{
		aTxtField.val("");
		return false;
		}
}

//if phrase 1 is not blank and it does not match phrase 2 then its a problem
function phraseConfirm2(aTxtField){
	if(aTxtField.val()!=="" || (aTxtField.val()===jq14("#phrase2").val())){
		return true;
	}else{
		return false;
		}
}
function phrase(aTxtField){

	if(aTxtField.val()!=""){
		//var phraseTest= new RegExp("^([a-zA-Z0-9]{1,5}[\\s]{0,1}){1,4}$");
		//var phraseTest= new RegExp("^[\\s]{0,1}([a-zA-Z0-9]{1,5}[\\s]{0,1}){1,5}$");
		var phraseTest= new RegExp("^[\\s]{0,1}([a-zA-Z0-9]{1,}[\\s]{0,1}){1,}$");
		return phraseTest.test(aTxtField.val());
	}else{
		resetField('phrase2');
		return false;
		}
}
