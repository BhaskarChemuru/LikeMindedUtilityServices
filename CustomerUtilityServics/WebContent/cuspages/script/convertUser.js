 /*Holds the type of update to be performed  ME = Merge With Existing -- NU = New User ID -- AU = Auto Update*/
 var conversionType;
 
	jq14(document).ready(function(){
	
		jq14('#updateUserId,#password').focus(function(){
		  		var code;
		  		var message = (registration_help[this.id])?registration_help[this.id][code]||registration_help[this.id]:null;
		  		fieldFocus(this.id,message);
		  		}).blur(function(){jq14("#"+this.id+"HelpDisplay").filter(".hint").hide()
		  	});
		 jq14('#exitButton').mouseover(function(){
		  		var code;
		  		var message = (registration_help["exitButton"])?registration_help["exitButton"][code]||registration_help["exitButton"]:null;
		  		fieldFocus("exitButton",message);
		  		}).mouseout(function(){jq14("#exitButtonHelpDisplay").filter(".hint").hide()
		  	});
		 //set the validations 	
		jq14("#password").data("validations",["required"]).data("validationDictionary","registration_errors").data("attempts",0);
		jq14("#updateUserId").data("validations",["required","email","domain","server"]).data("validationDictionary","registration_errors");
		
		
		jq14('#addToExisting').click(function(){
			jq14('#updateUserId').val("");
			resetField('updateUserId');
			jq14('#updateIdForm').slideUp('fast',function(){
				$('#loginPassword').slideDown();
			});
		});
		
		jq14('#updateUserIdRadio').click(function(){
			resetField('password');
			jq14('#password').val("");
			jq14('#loginPassword').slideUp('fast',function(){
				$('#updateIdForm').slideDown();
			});
		});
			
		jq14('#submitUserUpdateButton').click(submitUserUpdateAction);
		
		jq14('#submitUserMergeButton').click(function(){
			if(validateFields('loginPassword')){
				convertUsers();
			}
		});
		
		jq14('#acceptContinue').click(convertUsers);
		
		jq14('#continue, #continueAuto').click(function(){
			jq14("#convertUser").submit();
		});	
		
		if(jq14('#userIdFound').val()==='true'){
			trackWebEvent('Profile User ID Conversion', 'start');
		}else{
			conversionType='AU';
			trackWebEvent('Profile User ID Auto Conversion', 'start');
		}
	 });

 
	 function convertUsers(){
	    if(conversionType !=='AU'){
	    	conversionType= jq14('#convertTypeSection input:radio:checked').val();
	    }
		var userInfo = { "userid" : jq14("#userid").val(),  "mergeAcctUser" : jq14("#mergeAcctUser").val(), "password" : jq14("#password").val(),"type": conversionType ,"updateUserId":jq14("#updateUserId").val()};		
		var toServer =  JSON.stringify(userInfo);
		jq14.ajax({
		 		url:"/eca/EcaController?command=processConversion&jsonRequest="+ toServer,
		 		dataType:"json",
		 		error: function(data){
		 			window.location.replace("/eca/EcaController?command=error&head="+jq14("#head").html());
		 		},
		 		type: 'POST',
		 		success: function(data) {
		 			if(data.jsonResponse){
		 				if(data.success){
		 					jq14('#convertTypeSection, #improvingMessage, #exitButton').remove();
			 				//to track completed conversion events
			 				if(conversionType === 'AU'){
			 					jq14('#head').empty().append("Your login User ID has changed");
			 					jq14('#autoSuccessLoginId').empty().append(data.newId);
			 					jq14('#autoUpdateSuccessful').fadeIn('slow');
			 					trackWebEvent('Profile User ID Auto Conversion', 'complete');
			 				}
			 				if(conversionType === 'ME'||conversionType === 'NU'){
			 					jq14('#successLoginId').empty().append(data.newId);
			 					jq14('#updateSuccessful').fadeIn('slow');
			 					trackWebEvent('Profile User ID Conversion', 'complete');
			 				}
				   	 		//
			 				
			   				jq14('#userid').val(data.newId);
			   	 			if(conversionType === 'ME'){
			   	 				jq14('#ME_successMessage').show();
			   	 				jq14('#ME_previousValidMessage').show();
			   	 			}else if(conversionType === 'NU'||conversionType === 'AU' ){
			   	 				jq14('#NU_successMessage').show();
			   	 			}
				   	 	}else{
				   	 		var message;
				   	 		if(data.error==='login'){
				   	 			jq14("#password").data("attempts",jq14("#password").data("attempts")+1)
				   	 			if(jq14("#password").data("attempts")<4){
				   	 				message=(registration_errors['password'])?registration_errors['password']['wrongPassword']||registration_errors['password']:null;
				   	 			}else{
				   	 				message=(registration_errors['password'])?registration_errors['password']['wrongPassword4']||registration_errors['password']:null;
				   	 			}
				   	 			invalidField('password',message);
				   	 		}
				   	 	}
		 			}
		 		}
			});
	 }

	function submitUserUpdateAction(){
		if(validateFields('updateIdForm')){
				var userInfo = {"userid" : jq14("#updateUserId").val(), "verifyId" : "true"};
				var toServer = JSON.stringify(userInfo);
				jq14.ajax({
			 		url: "/eca/EcaController?command=verify&jsonRequest="+ toServer,
			 		dataType:"json",
			 		error: function(data){
			 			window.location.replace("/eca/EcaController?command=error&head="+jq14("#head").html());
			 		},
			 		type: 'POST',
			 		success: function(data) {
			 			if(data.jsonResponse){
			 				if (data.isTempUser){
			 					var message=(registration_errors['updateUserId'])?registration_errors['updateUserId']['emailAddressPending']||registration_errors['updateUserId']:null;
			 					invalidField('updateUserId',message);
			 					return false;
			 				}else if(data.userExists){
			 					var message=(registration_errors['updateUserId'])?registration_errors['updateUserId']['emailAddressExists']||registration_errors['updateUserId']:null;
								 invalidField('updateUserId',message);
								 return false;
			 				}else{
			 					validField('updateUserId');
			 					convertUsers();
			 				}
			 			}
			 		}
				});
			}
	}
