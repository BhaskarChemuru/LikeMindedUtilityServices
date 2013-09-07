var registration_help = {
	"account":"Enter your 10-digit account number.<br> Use numbers only. Do not use hyphens.",
	"search":"Your account number is on your paper bill that comes in the mail. Can&#39;t find it? Click on 'Find My Account' and we will help you locate it.",
	"ssn":"We ask for the last four digits of your Social Security number, Social Insurance number, or Tax ID number (for businesses) because we need to verify that the FPL billing account number you are entering is the same as the one associated with your ID number. This is required for verification and security purposes, and is securely protected.",
	"firstName":"Enter your full first name.  Numbers are not allowed.",
	"lastName":"Enter your full last name.  Numbers are not allowed.",
	"emailAddress":"Enter a valid email address. Do not include spaces or special characters (+ & / # \"\", etc...). Acceptable symbols, like hyphens, underscores or periods, cannot be typed consecutively.",
	"emailAddress2":"Please enter your email address to confirm. This ensures that your email address is correctly identified.",
	"password":"Your password must be 8-25 characters long. It must have at least one letter and one number in it. No special characters can be used, and your password is case sensitive.",
	"password2":"This is to make 100% sure that we have the right password for you.",
	"phraseIdentifier":"If you forget your password, we'll verify your identity with your security question.",
	"phrase":"Your answer must be 4-25 characters long. It can contain letters and/or numbers and can have a space between words.",
	"phrase2":"This confirms and secures your security answer.",
	"emb":"FPL E-Mail Bill&reg; is the convenient, &#39;green way&#39, to receive and review your bill securely via email at no cost.<br /><ul><li>Fast access to 24 months of billing and payment history<li>The ability to view and print six months of electronic bill statements<li>A reminder email of when payment is due<li>You choose how you pay your bill<li>An environmentally friendly, paper-free bill<li>It's free!</ul>",
	"searchType":"Choose Business only if your account was opened under a business or government name.",
	"firstInitialSearch":"Enter the first letter of your first name as it appears on your electric bill.", 
	"lastNameSearch":"Enter your last name as it appears on your electric bill.",
	"businessNameSearch":"Enter your business name. You can enter as many characters from the beginning of your customer name as needed to find a match to our records.",
	"zipSearch":"Select the 5 digit zip code where your FPL account receives electric service.",
	"phoneSearch":"Enter the area code and phone number on record for your account. Please enter all ten digits only. Do not use hyphens or parentheses.",
	"accountStatusSearch":"This refers to your account's electric service. Pending means waiting to connect; Open means service is connected; Closed means service has been disconnected.",
	 "ssnSearch":"Please enter 4 digits only, including zeroes.",
	"tinreqSearch":"In order to perform an accurate business search, you must enter the last 4 digits of the Tax ID number associated with the account.",
	"noResultsRNameZip":"Make sure that your first initial and last name are the same as those used on the account. Check the spelling. Names are not case sensitive.<br /><br />Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address.",
	"noResultsPhoneZip":"Be sure to use the telephone number on record for this account. If you have recently changed your phone number, our records may still have the old number.<br /><br />Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address zip code.",
	"noResultsBNameZip":"Make sure your business name is the one used on the account. Check the spelling. Business names are not case sensitive.<br /><br />Make sure the zip code you selected is the one where you have electric service; this may not be the same as your mailing address zip code." 
};

var registration_errors = {
	"account":{"minLength":"Enter your 10-digit account number. Use numbers only. Do not use hyphens.",
			   "required":"Enter your 10-digit account number. Use numbers only. Do not use hyphens.",
			   "numeric":"Enter your 10-digit account number. Use numbers only. Do not use hyphens.",
			   "zero":"You have entered an invalid Florida Power & Light Company account number. Please check the number and try again."},
	"ssn":{
		"minLength":"Please enter the last 4 digits only, including zeroes.",
	   	"required":"We ask for the last four digits of your Social Security number, Social Insurance number, or Tax ID number (for businesses) because we need to verify that the FPL billing account number you are entering is the same as the one associated with your ID number. This is required for verification and security purposes, and is securely protected.",
	  	"numeric":"Please enter the last 4 digits only, including zeroes."
	},  
	"firstName":"Enter your full first name.  Numbers are not allowed.",
	"lastName":"Enter your full last name.  Numbers are not allowed.",
	"emailAddress": {
		"required":"Enter a valid email address. Do not include spaces or special characters (+ & / # \"\", etc...). Acceptable symbols, like hyphens, underscores or periods, cannot be typed consecutively.",
		"domain":"The domain name is not correct. You can use letters, numbers, hyphens and periods (example: yourname@yourdomain.com).",
		"mailbox":"The email address does not have the proper format. Please re-enter.",
		"email":"Enter a valid email address. Do not include spaces or special characters (+ & / # \"\", etc...). Acceptable symbols, like hyphens, underscores or periods, cannot be typed consecutively.",
		"emailAddressExists":"This User ID is already registered on FPL.com. Please enter another email address or <a href='https://apptest.fpl.com/eca/EcaController?command=displaylogin'>Log in.</a>",
"emailAddressPending":"Your User ID has not been activated. You can complete the activation from the secure email we sent you previously by clicking <a href='#' onclick='requestTempEmail()'>request it now</a>. To set up a new User ID, enter another email address."
	},
	"emailAddress2":{
		"required":"Please enter your User ID again to confirm. This ensures that your User ID is correctly identified.",
		"emailConfirm":"Your User ID does not match. Please re-enter."
	},
	"password":{
		"required":"Your password must be 8-25 characters long. It must have at least one letter and one number in it. No special characters can be used, and your password is case sensitive.",
		"strongPassword":"Your password must be 8-25 characters long. It must have at least one letter and one number in it. No special characters can be used, and your password is case sensitive.",
		"minLengthPassword":"Oops! Your password must be 8-25 characters long. Please try again!",
		"alphaNumeric":"Oops! Your password must contain at least one letter and one number. Please try again!"
	},
	"password2":{
		"required":"This is to make 100% sure that we have the right password for you.",
		"passwordConfirm":"Passwords must match exactly. Please re-enter."
		},
	"phraseIdentifier":"If you forget your password, we'll verify your identity with your security question.",
	"phrase":{
		"required":"Your answer must be 4-25 characters long. It can contain letters and/or numbers and can have a space between words.",
		"minLengthPhrase":"Your answer must be 4-25 characters long. It can contain letters and/or numbers and can have a space between words.",
		"alphaNumericAndSpaces":"Please enter only letters and/or numbers.",
		"phrase":"Do not use consecutive spaces as part of your security answer."
		},
	 "phrase2":{
	 	"required":"This confirms and secures your security answer.",
	 	"phraseConfirm":"Oops! Your answers must match. Please re-enter."
	 	},
	 "termsAndConditions":"Please check the box to indicate you have accepted FPL&#39;s Terms and Conditions.",
	 "firstInitialSearch":"Enter the first letter of your first name as it appears on your electric bill.",
	 "lastNameSearch":"Enter your last name as it appears on your electric bill.",
	 "lastNameSearchFormat":"Please enter letters for your last name; quote or hyphen is also acceptable.",
	 "businessNameSearch":"Enter your business name. You can enter as many characters as needed to match how it appears on your electric bill.",
	 "businessNameSearchFormat":"Please re-enter the business name on your account; please note that only some special characters are allowed.",
	 "zipSearch":"Select the 5 digit zip code where your FPL account receives electric service.",
	 "phoneSearch":"Enter the area code and phone number on record for your account. Please enter all ten digits only. Do not use hyphens or parentheses.",
	 "phoneSearchDigits":"Please enter all 10 digits of your area code and phone number.",
	 "ssnSearch":"Please enter 4 digits only, including zeroes.",
	 "tinreqSearch":"In order to perform an accurate business name search, you must enter the last 4 digits of the Tax ID number associated with the account.",
	 "noResults":"No results found.",
	 "doneResultsSelect":"Please make a selection." ,
	 "activateButton":"We cannot complete your FPL.com registration. Information is either missing or not in the correct format. Please try again." 
 };