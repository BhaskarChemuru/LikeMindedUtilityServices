	
		function openLink(selectedURL, windowProp){
			window.showModelessDialog(selectedURL,window,windowProp);
		}

		function handleUserInput(){
			var actionName= "handleUserInputAction.do";
			var dispatchMethodname = "handleUserInput"
			var questionId = document.forms[0].questionId.value;
						
			if(userInputValue != null){
				var url = actionName+"?dispatchMethodname="+dispatchMethodname+"&selectedTabID="+selectedTabId+"&questionId="+questionId+"&userInput="+userInputValue;

				var xMLHttprequestObject = getXMLHttpRequestObject();
				if(xMLHttprequestObject){
					xMLHttprequestObject.open("POST",url);
					xMLHttprequestObject.onreadystatechange = function ()
					{
						isDataLoadingOn = true;
						if(xMLHttprequestObject.readyState == 4 && xMLHttprequestObject.status == 200){		
							var xMLResponseDoc = xMLHttprequestObject.responseXML;	
							var isBCChanged = isBusinessConditionChanged(xMLResponseDoc);
							if(isBCChanged == true){
								switchBusinessCondition();
							}else{
								isAdviceScriptUpdated = false;
								updateQuestion(xMLResponseDoc);
								loadAdviceScripts();
								var currentTimeStampForUpdate = new Date();
								PageCounter[1] = PageCounter[1] + currentTimeStampForUpdate.getTime();
								
								/*if(isMessageTabUp == true){
									window.open(PageCounter[1],"frameContainer");
								}*/
								
								xMLResponseDocument = xMLResponseDoc;
								isAdviceScriptUpdated = true;
								isDataLoadingOn = false;
							}
						
						}
					}
					isDataLoadingOn = true;
					xMLHttprequestObject.send(null);
				}else{
					alert(browserIncompatibilityWarning);
				}
			}else{
				alert("Please provide answer to Question.");
				return false;
			}
			
			
		}	
		
		function loadAdviceScripts(){
			if(!isAdviceScriptUpdated){
			
				if(NoOffFirstLineMenus==2){		
				
					alert("No Workflow has been defined , contact your Adminstrator.");
				}else{
						
					var actionName= "handleUserInputAction.do";
					var dispatchMethodname = "getAdviceScripts";	
					var url = actionName+"?dispatchMethodname="+dispatchMethodname+"&selectedTabID="+selectedTabID;

					var xMLHttprequestObject = getXMLHttpRequestObject();
					var questionId = document.forms[0].questionId.value;
					var questionRow = document.getElementById("questionRow");
					if(xMLHttprequestObject){
						xMLHttprequestObject.open("POST",url);
						xMLHttprequestObject.onreadystatechange = function ()
						{
							isDataLoadingOn = true;
							if(xMLHttprequestObject.readyState == 4 && xMLHttprequestObject.status == 200){
								var xMLResponseDoc = xMLHttprequestObject.responseXML;
								updateAdviceScripts(xMLResponseDoc);
								xMLResponseDocument = xMLResponseDoc;
								if(questionId!=null && questionId!="" && isQuestionAnswered == false){
									questionRow.style.display = "inline";
								}
								isAdviceScriptUpdated = true;
								isDataLoadingOn = false;
							}
						}
						
						isDataLoadingOn = true;
						xMLHttprequestObject.send(null);

					}else{
						alert(browserIncompatibilityWarning);
					}
				}
			}
			TogalTab('ActiveTab2');
		}
		
		function updateAdviceScripts(xMLResponseDoc){
			var targetTable = document.getElementById("adviceScriptTable");
			var xMLScripts = xMLResponseDoc.getElementsByTagName("ADVICESCRIPT");
			var noOfTargetRows = targetTable.rows.length;
			for(var iCounter=0;iCounter<noOfTargetRows;iCounter++){
				targetTable.deleteRow(0);
			}

			for(var scriptCounter = xMLScripts.length -1;scriptCounter>-1;scriptCounter--){

				insertedRow = targetTable.insertRow(0);
				insertedCell = insertedRow.insertCell(0);
				insertedRow.insertCell(0);
				insertedCell.className = "TxtBlue";
				var selectedScript = xMLScripts.item(scriptCounter);
				var script;
				var foramt;
				var adScriptHTML = document.createElement("SPAN");
				script = selectedScript.getElementsByTagName(language);
				adScriptHTML.innerHTML = script[0].getElementsByTagName(format).item(0).text;
				insertedCell.appendChild(adScriptHTML);
				insertedCell.appendChild(document.createElement("BR"));	
				var xMLLinks =  selectedScript.getElementsByTagName("LINK");

				var noOfLinks = xMLLinks.length;
				if(noOfLinks != 0 ){

					for(var iLinkCounter = xMLLinks.length-1;iLinkCounter>-1;iLinkCounter--){
					
						var adScriptLink = document.createElement("A");
						var adScriptLinkURL = xMLLinks.item(iLinkCounter).getAttribute("url");
						adScriptLink.setAttribute("href","#");
						adScriptLink.onclick=function(){
													window.open(adScriptLinkURL,'mywindow','resizable=1, width=800,height=600,left=80,top=80');
													return false;
											}
						adScriptLink.innerHTML = xMLLinks.item(iLinkCounter).getAttribute("name");

						insertedCell.appendChild(adScriptLink);
						insertedCell.appendChild(document.createElement("BR"));							
					}
				}
			}
		}
		
		function isBusinessConditionChanged(xMLResponseDoc){
			var errors = xMLResponseDoc.getElementsByTagName("ERROR-RECORDS");
			if(errors.length == 0){
				return false;
			}else{
				return true;
			}	
		}
		
		function switchBusinessCondition(){
				window.name = "changedBusinessCondition";
				var newUrl = contextPath+'/handleUserInputAction.do?dispatchMethodname=changeBusinessCondition';
				window.open(newUrl, window.name);
		}
		
		function updateQuestion(xMLResponseDoc){
			var questionRow = document.getElementById("questionRow");
			var englishQuestionDiv = document.getElementById("englishQuestionDiv");
			var spanishQuestionDiv = document.getElementById("spanishQuestionDiv");			
			var xMLQuestion =  xMLResponseDoc.getElementsByTagName("QUESTION");
			var noOfQuestions = xMLQuestion.length;
			if(noOfQuestions != 0 && NoOffFirstLineMenus>2 ){
				isQuestionAnswered = false;
				document.forms[0].questionId.value = xMLQuestion.item(0).getAttribute('id');
				englishQuestionDiv.innerHTML = xMLQuestion.item(0).getElementsByTagName("ENGLISH").item(0).text;
				spanishQuestionDiv.innerHTML = xMLQuestion.item(0).getElementsByTagName("SPANISH").item(0).text;
				questionRow.style.display = "inline";
				document.getElementById("userInputIDYES").checked=false
				document.getElementById("userInputIDNO").checked=false
				userInputValue = null;
				noOfQuestions = 0;
			}else{
				isQuestionAnswered = true;
				document.forms[0].questionId.value = null;
				questionRow.style.display = "none";
			}
		}
		
		function toggleLanguage(lang,formatVal){
			language = lang;
			format=formatVal;
			var questionRow = document.getElementById("questionRow");
			var englishQuestionDiv = document.getElementById("englishQuestionDiv");
			var spanishQuestionDiv = document.getElementById("spanishQuestionDiv");
			if(language == "SPANISH"){
				if(questionRow.style.display == "inline"){
					englishQuestionDiv.style.display = "none";
					spanishQuestionDiv.style.display = "inline";
				}
			}else{
				if(questionRow.style.display == "inline"){
					englishQuestionDiv.style.display = "inline";
					spanishQuestionDiv.style.display = "none";				
				}				
			}
			updateAdviceScripts(xMLResponseDocument);
		}

		function setUserInput(input){
			userInputValue = input;
		}
		
		function updateCCAD(source){
				var con = false;
				isUpdateCCADCancelled = false;
				var url = contextPath+"/updateCCAD.do?dispatchMethodname=updateCCAD&";
				if(isCSRNovice == true){
					// Code for updating CCAD for Novice CSR
					if(isCCADUpdated){
						con = confirm("CCAD is already updated .Are you sure you want update CCAD again ?");
					}else{
						con = confirm("Are you sure you want update CCAD ?");					
					}
					
					if(con){
						url =url+"selectedCCADCode="+selectedTabID+"&comments=&isCSRNovice=true";
					}else {
						isUpdateCCADCancelled = true;
					}
					
				}else{
					if(isCCADUpdated){
						con = confirm("CCAD is already updated .Are you sure you want update CCAD again ?");
					}else{
						con = true;
					}
					if(con){
						var returnValue = window.showModalDialog(contextPath+'/updateCCAD.do?dispatchMethodname=getCCADCodes','Update CCAD','status:no;scroll:yes;dialogHeight:308px;dialogWidth:710px');
						if(returnValue == false){
							isUpdateCCADCancelled = true;
						}
						url = url+returnValue+"&isCSRNovice=false";	
					}else {
						isUpdateCCADCancelled = true;
					}
								 
				}
				var serverMessage = "";
				var isErrorOccured = false;
				var xMLHttprequestObject = getXMLHttpRequestObject();
				if(!isUpdateCCADCancelled){
					if(xMLHttprequestObject){		
						xMLHttprequestObject.open("POST",url);	
						xMLHttprequestObject.onreadystatechange = function ()
							{
								isDataLoadingOn = true;
								try{						
									if(xMLHttprequestObject.readyState == 4 && xMLHttprequestObject.status == 200){									
										serverMessage = xMLHttprequestObject.responseText;
										if(serverMessage == "true"){
											document.forms[0].btnSatisfied.disabled = true;			
											document.forms[0].btnNotSatisfied.disabled = true;
											document.forms[0].btnContinue.disabled = false;
											isCCADUpdated = true;
											isErrorOccured = false;
											isDataLoadingOn = false;
											hideWaitToolTip();
											alert("CCAD successfully Updated");
											
										}else{
											if(isCSRNovice == true){
												alert("Session has expired.Please,try again.");
											}
											window.close();
										 	//alert(serverMessage);
										}										
										
									}
								}catch(err){
									isErrorOccured = true;
								}
							}	
						
						isDataLoadingOn = true;
						xMLHttprequestObject.send(null);

						if(serverMessage == "" && isErrorOccured == true)
						{
							alert("Unexpected error occured, can't update CCAD. Try later.");
						}
					}else{
						alert(browserIncompatibilityWarning);
					}
				}
			
		}
		
		
		// position of the tooltip relative to the mouse in pixel //
		var offsetx = 12;
		var offsety =  8;
		
		function createWaitToolTip(newid)
		{
		    if(document.createElement)
		    {
		        var el = document.createElement('div');
		        el.id = newid;
		        with(el.style)
		        {
		            display = 'inline';
		            position = 'absolute';
		        }
		        var toolTipInnerHTML = "<table border='0'><tr><td width='50px' height='50px'><img src='"+contextPath+"/CSR/Images/ajax-loader.gif' width='50' height='50'  style='z-index:5'/></td>";
		        toolTipInnerHTML = toolTipInnerHTML+"<td height='50px' nowrap='nowrap'><span   style='z-index: 10'>Please wait for<BR>Loading Data...</span></td></tr></table>";
		        el.innerHTML = toolTipInnerHTML;
		        document.body.appendChild(el);
		    }
		}
		var ie5 = (document.getElementById && document.all);
		var iebody = document.body;
		function getMousePositionForWaitToolTip(e)
		{
		    if(document.getElementById)
		    {
		        pagex = iebody.scrollLeft;
		        pagey = iebody.scrollTop;
		        mousex = event.x;
		        mousey = event.y;
		        var tooltip = document.getElementById('WaitToolTip');
		        tooltip.style.left = (mousex+pagex+offsetx) + 'px';
		        tooltip.style.top = (mousey+pagey+offsety) + 'px';
		    }
		}
		function showWaitToolTip()
		{
			if(ie5){
				if(!document.getElementById('WaitToolTip')){
				  	createWaitToolTip('WaitToolTip');
				}
		    	var tooltip = document.getElementById('WaitToolTip');
		    	if(isDataLoadingOn == true){
				    tooltip.style.display = 'block';
			    }else{
				    tooltip.style.display = 'none';
			    }
			    document.onmousemove = getMousePositionForWaitToolTip;
			}
			
		}
		function hideWaitToolTip()
		{
		    document.getElementById('WaitToolTip').style.display = 'none';
		}