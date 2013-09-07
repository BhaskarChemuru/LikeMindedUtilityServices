$(document).ready(function () {
	    /*$('#header').load('header.html');*/
	$('#snqHeaderCP').load('header_CreateProfile.html');
    $('#Footer').load('footer.html');
    	$("#btnAudioVersionId").click(function () {
		var caption = $(this).val() == 'Audio Version' ? 'Text Version' : 'Audio Version';
    	$(this).val(caption).toggleClass("textCap");
		});
        $(".utilBtn:first-child").css('marginRight','10px');

});

// this is a test function that can be call upon clicking the continue button
function testFunc() {
    alert("Call any function you wish before closing the modal");
    window.parent.$("#loadDialog").dialog('destroy');
}

function passFunc() {
	alert("Password Changed Successfully.");
	window.parent.$("#loadDialog").dialog('destroy');
}

function errValidate(e){
    errChk();
}

/* Use openDialog() for all modals site wide. the modal can be customized buy passing the all the parameters listed below */
function openDialog(url, title, cancelBtn, actionBtn, continueBtn, actionFunc, continueFunc) {
   if(url=='../SNQ_HTML_Prototype/modals/dentalModal.html')
	{

	 $("#loadDialogMadal").load(url);
	}
	else
	{

    $("#loadDialog").load(url);
	}

    var btns = {};
    if (actionBtn == '' || actionBtn == "nobutton") {
        btns[cancelBtn] = function () {

           $(this).dialog('destroy');
		   if(url=='../SNQ_HTML_Prototype/modals/dentalModal.html')
		   {
		   }
		   else
		   {
           $("#loadDialog").empty();
		   }
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
        btns[continueBtn] = function () {
            continueFunc();
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
    }
    else if (actionBtn == '' || actionBtn == "nobutton" || continueBtn == '' || continueBtn == "nobutton") {
        btns[cancelBtn] = function () {
            $(this).dialog('destroy');
            $("#loadDialog").empty();
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
    }
    else {
        btns[cancelBtn] = function () {
            $(this).dialog('destroy');
            $("#loadDialog").empty();
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
        btns[actionBtn] = function () {
            actionFunc();
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
        btns[continueBtn] = function () {
            continueFunc();
            // Return focus to link that open the modal for accessibility
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
        };
    }
    if (title == 'Medical Eligibility Guide') { // For Check Eligibility Pop-up
      	    dialog = $("#loadDialog").dialog({
            autoOpen: false,
            modal: true,
            width: 900,
            //height: "auto",
            height: 720,
            title: title,
            buttons: btns
        });
    }
	else if((title == 'View and Select Medical Plans') || (title == 'Medical Plan Details') || (title == 'Select Dental and Vision Plans') || (title == 'Dental Plan Details') || (title == 'Vision Plan Details') || (title == 'Create Your Profile')) {
		    dialog = $("#loadDialog").dialog({
            autoOpen: false,
            modal: true,
            width: 965,
            height: "auto",
            title: title,
            buttons: btns
        });
	}
	else if(title=='Who would you like to include in this Dental Plan?')
	{
		dialog = $("#loadDialogMadal").dialog({
            autoOpen: false,
            modal: true,
            width: 565,
            height: "auto",
			left:391,
            title: title,
            buttons: btns
        });

	}
    else {
            dialog = $("#loadDialog").dialog({ // For all modal Pop-up's
            autoOpen: false,
            modal: true,
            width: 565,
            height: "auto",
            title: title,
            buttons: btns
        });

    }

    if (title == 'Email Plans' && actionBtn == '' && continueBtn == '') { //For check eligiblity pop-up
        $(".ui-button").addClass("navBtn");
        $('.ui-dialog-buttonset button:eq(1)').remove();
    }
    else if (title == 'Medical Eligibility Guide' || title == 'More Details' || title == 'Success'  || title == '' || title == 'Create Profile' || title == 'Edit Profile' || title == 'You are being Re-routed' || title == 'Medical Plan Details' || title == 'View and Select Medical Plans' || title == 'Dental Plan Details' || title == 'Vision Plan Details' || title == 'Select Dental and Vision Plans' || title == 'Agent Details' || title == 'Session TimedOut' || title == 'Selected User ID') { //For check eligiblity pop-up
        $(".ui-button").addClass("navBtn");
        $('.ui-dialog-buttonset button:eq(1)').remove();
    }
    else //For all modal Pop-up's
    {
        $(".ui-button").addClass("navBtn");
        $(".ui-dialog-buttonset button:eq(1)").css("float", "left").addClass("funcBtn");
    }
    //wrap title in an H1 tab for accessibility
    $(".ui-dialog-title").wrap("<h1></h1>");

    /* Account for IE bug with tabbing behind dialog box */
    $(":tabbable:first").focus(function () {
        $(".ui-dialog:visible:last :tabbable:first").focus();
    })

     OpenModalDialog(url)
    //$(".ui-dialog-titlebar-close").focus();
    return false;
}
function iFrameLoaded(e) {
    OpenModalDialog();
    $(".ui-dialog-titlebar-close").focus();
}
function mailSend() {
    $("#loadDialog").empty();
    openDialog('modals/emailSent.html', 'Email Plans', 'Close', '', '', '', '');
}
function regStep2() {
    $("#loadDialog").empty();
    openDialog('modals/registration_step2.html', 'Registration - Step 2', 'Close', '', 'Submit', '', '');
}
function bankStep2() {
    $("#loadDialog").empty();
    openDialog('modals/newBankAcc_step2.html', 'New Bank Account', 'Close', '', 'Next', '', bankStep3);
}
function bankStep3() {
    $("#loadDialog").empty();
    openDialog('modals/newBankAcc_step3.html', 'New Bank Account', 'Close', '', 'Save', '', '');
}
function creditStep2() {
    $("#loadDialog").empty();
    openDialog('modals/newCredit_step2.html', 'New Credit Card', 'Close', '', 'Next', '', creditStep3);
}
function creditStep3() {
    $("#loadDialog").empty();
    openDialog('modals/newCredit_step3.html', 'New Credit Card', 'Close', '', 'Save', '', '');
}

function OpenModalDialog(url) {

   setTimeout(function () {
 if(url=='../SNQ_HTML_Prototype/modals/dentalModal.html')
	{

	 $("#loadDialogMadal").dialog(dialog).dialog('open');
	}
	else
	{

    $("#loadDialog").dialog(dialog).dialog('open');
	}


       // $("#loadDialog").dialog('open');
        // var x=$(".mktTiplink").focus();
		$("a[role=button]").focus();

		//$('.sidePadding').find('a[tabindex=1]').focus();
		//var x=$(".qnIcon:first").attr("tabindex",1);

       $(".ui-dialog-titlebar-close").click(function (e) {
            e.preventDefault();
            $(".dialogLink.focus").focus();
            $(".dialogLink.focus").removeClass("focus");
			if(url=='../SNQ_HTML_Prototype/modals/dentalModal.html')
			{
			}
			else
			{
            $("#loadDialog").dialog('destroy');
            $("#loadDialog").empty();
			}
             $("#tooltip").fadeOut("fast");
            return false;
       	 });
        $("#loadDialog").dialog("option", "position", 'center');
        $("#eligibilityGuide ul:even").addClass("bg");
    }, 500);
}
function closeDialog() {
    window.parent.$("#loadDialog").dialog('destroy');
    $("#loadDialog").empty();
 }
function loginModal() {
    /*********************Login Modal Trigger Starts here       **********************/
    $(".panel").toggle();
    if ($(".panel").css("display") == 'block') {
        $("#txtUsername").focus();
        $(".trigger").addClass('active');                  //to change the arrow image
        $(".loginlinks span").hide();
        $(this).css("margin-right", "25px");
    }
    if ($(".panel").css("display") == 'none') {
        $(".trigger").removeClass('active');          //to restore the arrow image
        $(".loginlinks span").show();
        $(this).css("margin-right", "0");
    }

    /*********************Login Modal Trigger ends here         ************************/
}
$(function () {
    // Close any opened dialogs
    $("#dialog:ui-dialog").dialog("destroy");

    /* Add focus class to Links that opens a Dialog Box */
    $(".dialogLink").click(function (e) {
        $(this).addClass("focus");
    });

    /*********************Add dependents Starts here	************************/
    //Delete dependents
    $(".deleteDependent").click(function () {
        $(this).parents(".getQuoteMembersChild").addClass("hide");
        depCount = ($('.getQuoteMembersChild:visible').length);
        if (depCount == 17) {
            $(".AddDependent").attr('disabled', false).removeClass("disableBtn");
        }
        return false;
    });
    //Add new dependents
    $(".AddDependent").click(function () {
        depCount = ($('.getQuoteMembersChild:visible').length);
        if (depCount <= 17) {
            $("div#showDependents").find(".getQuoteMembersChild.hide:first").removeClass("hide").find("input:first").focus();
            if (depCount == 17) {
                $(this).attr('disabled', true).addClass("disableBtn");
				$(this).attr('title', 'Please Call the Number at the top');
            }
        }
        return false;
    });
    //Delete Spouse
    $(".deleteSpouse").click(function () {
        $(".addSpouse").attr('disabled', false).removeClass("disableBtn");
        $(this).parents(".getQuoteMembersSpouse").addClass("hide");
        return false;

    });
    //Add new Spouse
    $("#AddSpouse").click(function () {
        $(".addSpouse").attr('disabled', true).addClass("disableBtn");
		$(".addSpouse").attr('title', 'Please Call the Number at the top');
        $(".getQuoteMembersSpouse").removeClass("hide").find("input:first").focus();
        return false;
    });

    /*********************Add dependents ends here	************************/

    /*********************Tooltip for Plan Details Medical/Dental/Vision - start here	************************/

    //Global tooltips Starts Here
    $(".tooltipLink").click(function (e) {
        var offset = $(this).offset();
        $(".tip:visible,.toolTipDetailsComparePlan:visible, .toolTipFees").hide();
        $("#tooltip.tip:visible").hide();
        e.preventDefault();
        if ($(this).parent().find("toolTipDetailsComparePlan")) {
            if ($(this).next(".toolTipDetailsComparePlan").is(":hidden")) {
                //var contWidth = $(this).parent().width();
                var tipText = $(this).next(".toolTipDetailsComparePlan").html();
                $("#tooltip").html(tipText).fadeIn("fast").css("width", "auto").css("top", offset.top + 25 + "px").css("left", offset.left - 50 + "px").css("z-index", "2000").find(".closeComparePlan, .close").focus().click(function () {
                    $("#tooltip").fadeOut("fast");
                    $(".tooltipLink.active").removeClass("active").focus();
                    return false;
                });
            }
            else {
                $(this).next(".toolTipDetailsComparePlan").fadeOut("fast");
            }

        }
        if ($(this).parents().hasClass("scrollPlanItem")) {
            if ($(this).next(".tip").is(":hidden")) {
                //var contWidth = $(this).parent().width();
                var tipText = $(this).next(".tip").html();
                $("#tooltip").html(tipText).fadeIn("fast").css("width", "250").css("top", offset.top + 25 + "px").css("left", offset.left + "px").find(".close").focus().click(function () {
                    $("#tooltip").fadeOut("fast");
                    $(".tooltipLink.active").removeClass("active").focus();
                    return false;
                });
            }

            else {
                $(this).next(".tip").fadeOut("fast");
            }

        }
       else {
            var contWidth = $(this).parent().width();
            if ($(this).next(".tip").is(":hidden")) {
            if ($(this).parents().hasClass("summaryFees")){
             $(this).next(".tip").fadeIn("fast").css("top", offset.top + 15 + "px").find(".close").focus();
             }
             else{  //                var offset = $(this).offset();
                $(this).next(".tip").fadeIn("fast").css("top", offset.top + 15 + "px").css("left", (offset.left - contWidth) + "px").find(".close").focus();
             }
            }

            else {
                $(this).next(".tip").fadeOut("fast");
            }
        }
        return false;
    });

    $(".close,.closeComparePlan").click(function () {
        $(this).parents(".tip, .toolTipDetailsComparePlan,.toolTipFees  ").hide("fast");
        $(".tooltipLink.active").focus().removeClass("active");
        return false;
    });


    xOffset = 10;
    yOffset = 20;
    $("body").append("<p id='tooltip' class='tip zIndex'></p>");
    //Code for trimming marketing content in Plan compare page, Starts */
    $("#contntShowFirst").is(function () {
        $("#contntShowFirst").append("<div id='shortContent'></div>");
        mktStr = $("#contntShowFirst").html(); /* Get the HTML content from the cell */
        var mktStrLong = mktStr.toString();
        var mktMax_length = 300;
        $("#longContent").hide();
        if ($("#contntShowFirst").html().length > mktMax_length) { /* If the cell content is greater than 45 chars */
            str = mktStr.substr(0, mktStr.indexOf(" ", mktMax_length)); /* Split from the nearest word space */
            $("#shortContent").html(str + " ");
            $("#shortContent").find("#longContent").removeAttr("id");
            // $("#contntShowFirst").addClass("inline");
            /* Show trimmed content and the more link */
            $("#shortContent").find(".mktContent").append('<a href="#" aria-describedby="shortContent" class="tooltipLink mktTiplink">More Details</a>');
            $(".mktTiplink").click(function (e) {
            $(".tip:visible,.toolTipDetailsComparePlan:visible, .toolTipFees").hide();
            $("#tooltip.tip:visible").hide();
            e.preventDefault();
                //$(this).after("<p id='mktTooltip' class='tip'></p>");
                $("#tooltip").html(mktStrLong);
                //$("#contntShowFirst").siblings().attr("title", mktStrLong); /* Add title attribute to show whole content */
                $("#tooltip").prepend("<a class='close' href='#' title='Close the Tool tip'></a>");
                $("#tooltip").find(".close").click(function () {
                    $("#tooltip").fadeOut("fast");
                    return false;
                });
                if ($("#tooltip").is(":hidden")) {
                    $("#tooltip").css("width", "650").css("top", (e.pageY - xOffset + 30) + "px")
			.css("left", (e.pageX + yOffset - 60) + "px").css("z-index", "2000").fadeIn("fast").find(".close").focus();
                    //$(this).attr("title", toolTipText);
                }
                else {
                    $("#tooltip").fadeOut("fast");
                }
                return false;
            });
        }
    });

    //Code for trimming attributes content and more details tooltip
    /* Code for Trimming Cell content in Plan compare page, Starts */
    $('.scrollPlanItem p.cellContent').each(function (event) {
        str = $(this).html(); /* Get the HTML content from the cell */
        var strLong = str.toString();
		var strTrim = strLong.replace(/ /g,'');
        var max_length = 55;
		var strLen = strTrim.length;
        var ariaVal=$(this).parent("div.scrollPlanItem").attr("aria-describedby");
        //alert(ariaVal);
        if (strLen > max_length) { /* If the cell content is greater than 45 chars */
			/*str = strLong.substring(0, strLong.indexOf(" ", max_length)); /* Split from the nearest word space */
			str = jQuery.trim(strLong).substring(0, 45).split(" ").slice(0, -1).join(" ");
            $(this).html(str + " ");
            $(this).addClass("inline");
            $(this).after('<a href="#" aria-describedby="' + ariaVal +'" class="MoreDetTtipLink">More Details</a>'); /* Show trimmed content and the more link */
            $(this).after('<span class="MoreDetText hide"></span>'); /* Create a hidden span */
            $(this).siblings('span').html(strLong); /* Add title attribute to show whole content */
        }
    });

    $(".MoreDetTtipLink").click(function (e) {
        e.preventDefault();
        $("#tooltip").hide();
        $("#tooltipFav").hide();
        var toolTipText = $(this).parent().find(".MoreDetText").html();
        //$(this).attr("title", "");
        $("#tooltip").text(toolTipText);
        $("#tooltip").prepend("<a class='close' href='#' title='Close the Tool tip'></a>");
        $("#tooltip").find(".close").click(function () {
            $("#tooltip").fadeOut("fast");
            return false;
        });
        if ($("#tooltip").is(":hidden")) {
            $("#tooltip").css("width", "250").css("top", (e.pageY - xOffset + 30) + "px")
			.css("left", (e.pageX + yOffset - 60) + "px").fadeIn("fast").find(".close").focus();
            //$(this).attr("title", toolTipText);
        }
        else {
            $("#tooltip").fadeOut("fast");
        }
        return false;
    });
    /*********************Tooltip ends here	************************/
    /*********************Tooltip for Popup- start here	************************/

    $(".tooltipLink").click(function () {
        $(".tipPopup:visible").hide();
        $(this).parents("table").find(".tooltipLink.active").removeClass("active");
        $(this).next(".tipPopup").show("fast").find(".close").focus();
        $(this).siblings(".tipPopup").show("fast").find(".close").focus();
        $(this).addClass ("active");
        return false;
    });
    $(".close").click(function () {
        $(this).parents(".tipPopup").hide("fast");
        $(".tooltipLink.active").removeClass("active").focus();
        return false;
    });

    /*********************Tooltip for Popup End here	************************/

    /*********************Contextual Help- start here	************************/

    /*$(".tooltipLink").click(function () {
        $(".tipContxt:visible").hide();
        $(this).parents("table").find(".tooltipLink.active").removeClass("active");
        $(this).next(".tipContxt").show("fast").find(".close").focus();
        $(this).siblings(".tipContxt").show("fast").find(".close").focus();
        $(this).addClass ("active");
        return false;
    });*/
	$(".tooltipLink").focus(function () {
        $(".tipContxt:visible").hide();
        $(this).parents("table").find(".tooltipLink.active").removeClass("active");
        $(this).next(".tipContxt").show("fast");
      //  $(this).siblings(".tipContxt").show("fast");
        $(this).addClass ("active");
        return false;
    });

    $(".close").click(function () {
        $(this).parents(".tipContxt").hide("fast");
        $(".tooltipLink.active").removeClass("active").focus();
        return false;
    });

    /**********Bolding input puts in filter section**************/
    $(".inputPlanPair input").click(function(){
        if ($(this).is(":checked")){
        $(this).next("label").addClass("bold");
        }
        else{
         $(this).next("label").removeClass("bold");
        }
    });

    /*********************Contextual Help End here	************************/

    /*********************Datepicker************************/
    var minDate = new Date('1/1/1940');
    var todaysDate = new Date();
    var maxDate = new Date(todaysDate.getFullYear() - 18,
                               todaysDate.getMonth(),
                               todaysDate.getDate() - 1);
    var currentsYear = todaysDate.getFullYear();

    var range = '1940:' + currentsYear;


    $(".datepicker").datepicker({

        showOn: "button",
        showButtonPanel: true,
        buttonImage: "resources/images/calendar_icon.jpg",
        buttonImageOnly: true,
        minDate: minDate,
        changeMonth: true,
        changeYear: true
    });

    /******************Datepicker ends here**********************/

    /***************Quote Summary Page Variations & Other styles to be removed - starts here*****************/

    var title = $(this).attr('title');
    if (title == "Quote Summary") {
        var $div = $('<div />').appendTo('#snqWrap');
        $div.attr('id', 'container');
        $('#container').css({ "background-color": "#000000", "height": "40px", "width": "900px;", "position": "fixed", "top": "0px", "padding": "6px", "right": "35%", "left": "12%", "z-index": "1000" });

        $("<a />").attr("href", "1.7.1a_Aug Sept 2013.html").appendTo("#container").text("Aug Sept 2013").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.7.1b_onExchPlan.html").appendTo("#container").text("On Exch Plan").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.7.1c_offExchPlan.html").appendTo("#container").text("Off Exch Plan").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.7.1d_incompleteQHP.html").appendTo("#container").text("Off Exch Plan Incomplete QHP").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.7.1e_enrollment2014.html").appendTo("#container").text("2014").css({
            'margin-right': '40px', 'color': 'white'
        });
		$("<a />").attr("href", "1.7.1f_onExchPlan_incompleteQHP.html").appendTo("#container").text("On Exch Plan Incomplete QHP").css({
            'margin-right': '40px', 'color': 'white'
        });
		$("<a />").attr("href", "1.7.1g_offExchPlan_incompleteQHP_ReqtoFix.html").appendTo("#container").text("Off Exch Plan Incomplete QHP Req to Fix").css({
            'margin-right': '40px', 'color': 'white'
        });

    }
    $("#zipCode").focus(function () {
        $(".group.hide").show();
    });
    /***************Quote Summary Page Variations - ends here*****************/
    /*********************Eligibility Guide start here	************************/
    //$("#eligibilityGuide ul:even").addClass("bg");
    $("#eligibilityGuide a").live("click", function (e) {
        e.preventDefault();
        var hhtooltipDiv = $(this).parents("ul").next(".eligibilityDef");
        var hhtooltipText = $(hhtooltipDiv).html();
        if ($(hhtooltipText).text() != "") {
            $(hhtooltipText).val("");
            //alert(hhtooltipText);
            $(".rightPanel").html(hhtooltipText);
            $(this).parents("div#eligibilityGuide").find("a.active").removeClass("active");
            $(this).addClass("active");
        }
        else {
            $(".rightPanel").text("No defination avaliable");

        }
    });

    /*********************Eligibility Guide ends here	************************/
    /****************General Information/Messaging Dialog starts from here *******/
    $("#generalDialog").dialog({
        resizable: false,
        width: 550,
        height: 250,
        modal: true
    });

    $("#okBtnGeneralId").click(function () {
        $("#generalDialog").dialog('destroy');
    });

    /****************General Information/Messaging Dialog ends here *******/

    /********************* Tabs Starts here	******************************/

    $('.snqTabbedPanelsContentGroup li').hide();
    $('.snqTabbedPanelsContentGroup li:first').show();
    $('.snqHixTabbedPanelsTabGroup li a:first').addClass('active');
    $('.snqHixTabbedPanelsTabGroup li a').click(function () {
        //    var liInd = $('li a').index(this);
        var liInd = $('.snqHixTabbedPanelsTabGroup li a').index(this);
        $('.snqTabbedPanelsContentGroup li').hide();
        $('li a').removeClass('active');
        $('.snqTabbedPanelsContentGroup li:eq(' + liInd + ')').show();
        $(this).addClass('active');
    });

    /*********************Tabs Ends here   ****************************/

    /*********************Favourites increment starts here	****************************/
    $("input[name='checkbox1']").on('click', function (e) {


        var chkSelected = $("input[name='checkbox1']:checked");
        if ($("input[id='PlanChkIdSmartSense']:checked").val() == 'Yes') {
            $(".chkFavouriteSmartSense").css("background-color", "#ffffcc");
        }
        else {
            $(".chkFavouriteSmartSense").css("background-color", "#fff");
        }
        if ($("input[id='PlanChkIdLumenos']:checked").val() == 'Yes') {
            $(".chkFavouriteLumenos").css("background-color", "#ffffcc");
        }
        else {
            $(".chkFavouriteLumenos").css("background-color", "#fff");
        }
        if ($("input[id='chkClearProtectionId']:checked").val() == 'Yes') {
            $(".chkFavouriteClearProtection").css("background-color", "#ffffcc");
        }
        else {
            $(".chkFavouriteClearProtection").css("background-color", "#fff");
        }
        if ($("input[id='chkSmallTextId']:checked").val() == 'Yes') {
            $(".chkFavouriteSmallText").css("background-color", "#ffffcc");
        }
        else {
            $(".chkFavouriteSmallText").css("background-color", "#fff");
        }
        if ($("input[id='chkTaglineId']:checked").val() == 'Yes') {
            $(".chkFavouriteTagline").css("background-color", "#ffffcc");
        }
        else {
            $(".chkFavouriteTagline").css("background-color", "#fff");
        }
        var numSelected = chkSelected.length;
        $("#favId").html(numSelected);
    });
    var chkSelected = $("input[name='checkbox1']:checked");
    if ($("input[id='PlanChkIdSmartSense']:checked").val() == 'Yes') {
        $(".chkFavouriteSmartSense").css("background-color", "#ffffcc");
    }
    else {
        $(".chkFavouriteSmartSense").css("background-color", "#fff");
    }
    if ($("input[id='PlanChkIdLumenos']:checked").val() == 'Yes') {
        $(".chkFavouriteLumenos").css("background-color", "#ffffcc");
    }
    else {
        $(".chkFavouriteLumenos").css("background-color", "#fff");
    }
    if ($("input[id='chkClearProtectionId']:checked").val() == 'Yes') {
        $(".chkFavouriteClearProtection").css("background-color", "#ffffcc");
    }
    else {
        $(".chkFavouriteClearProtection").css("background-color", "#fff");
    }
    if ($("input[id='chkSmallTextId']:checked").val() == 'Yes') {
        $(".chkFavouriteSmallText").css("background-color", "#ffffcc");
    }
    else {
        $(".chkFavouriteSmallText").css("background-color", "#fff");
    }
    if ($("input[id='chkTaglineId']:checked").val() == 'Yes') {
        $(".chkFavouriteTagline").css("background-color", "#ffffcc");
    }
    else {
        $(".chkFavouriteTagline").css("background-color", "#fff");
    }
    var numSelected = chkSelected.length;
    $("#favId").html(numSelected);
    /*********************Favourites increment ends here	****************************/

    /*********************What is starts here	************************/
    $("#head #a11").click(function () {
        $("#whatImpCont").toggle();
        $(this).html(function (i, html) {
            if (html.indexOf('Narrow these results') != -1) {
                html = html.replace('Narrow these results', '<strong>Hide These Options</strong>');
                $(".triggerArrow").addClass('active'); //to change the arrow image
            } else {
                html = html.replace('<strong>Hide These Options</strong>', 'Narrow these results');
                $(".triggerArrow").removeClass('active'); //to restore the arrow image
            }
            return html;
        })
    });

    $(".moreFilterOpts").click(function () {
        $(".hide").slideToggle("fast");
        $(".btnIsDoc").focus();
        $(this).html(function (i, html) {
            if (html.indexOf('+ More') != -1) {
                html = html.replace('+ More', '- Fewer');
            } else {
                html = html.replace('- Fewer', '+ More');
            }
            return html;
        })
    });
    /***************************************What is ends here *************************************************/

    /**************Plan Results expand/collapse starts from here*************/

    $('.morePlansViewShow').click(function () {
        $('.morePlansView').show();
        return false;
    });

    $('.morePlansViewHide').click(function () {
        $('.morePlansView').hide();
        return false;
    });

    $('#scrollPlanSubsidyEligible li').hide();
    $('#applyPlan').attr('checked', 'checked');

    /************************Narrow these results starts here**********************************/
    $("#medTabResults").click(function (event) {
        event.preventDefault();
        $("#planResMed").slideToggle("fast");
        $("#medTabResults").toggleClass('active', function () {
            if ($('.sidePadding').parent().first().hasClass('cmcPlanMedical')) {
                if ($("#medTabResults").hasClass('active')) {
                    $("#medTabResults").text('Hide these options');

                }
                else {
                    $("#medTabResults").text('Narrow these results');
                    $("#longContent").hide();
                    $("#shortContent").show();
                }
            }
            else {
                if ($("#medTabResults").hasClass('active')) {
                    $("#medTabResults").text('Hide these options');
                }
                else {
                    $("#medTabResults").text('Narrow these results');
                }
            }
        });
    });
    $("#plansMoreLink").click(function (event) {
        event.preventDefault();
        $(".planResult").toggleClass("filterMore");
        $("#plansMoreLink").toggleClass('active', function () {
            if ($("#plansMoreLink").hasClass('active')) {
                $("#plansMoreLink").text('Fewer filter options');
                $("#plansMoreLink").parents("#planResMed").find("ul").css("overflow", "visible");
                $("#longContent").show();
                $("#shortContent").hide();
            }
            else {
                $("#plansMoreLink").text('More filter options');
                $("#plansMoreLink").parents("#planResMed").find("ul").css("overflow", "hidden");
                $("#longContent").hide();
                $("#shortContent").show();
            }
        });
    });



    /************************Narrow these results ends here*******************/

    /********************* Select PLan Btn action *******************/

    $(".scrollPlanItem .funcBtn").click(function () {
        $(".scrollPlan").removeClass("selected");
        $(".scrollList").find('H3').addClass('hidden');
        var btnVal = $(this).attr('value');
        $(".scrollPlanItem .funcBtn").attr('value', "SELECT PLAN");
        $(this).attr('value', btnVal);

        if (btnVal == "SELECT PLAN") {
            $(this).attr('value', "DESELECT PLAN");
            $(this).parent().parent().children().removeClass('hidden');
            $(this).parent().parent().addClass("selected");
           // $("#medSelTable, #selectionDV").show();
        }
        else {
            $(this).attr('value', "SELECT PLAN");
            $(this).parent().parent().removeClass("selected");
            //$("#medSelTable, #selectionDV").hide();
        }
    });

    /******************Increment Favourites starts here**********************/
    $("input[name='Favorite']").on('click', function (e) {
        var offset = $(this).offset();
        chkVal = $(this).attr('checked');
        planId = $(this).parent().parent().parent().attr("id");
        favContent = $(this).parent().parent().parent().html();
        var chkAllVal = $(".compWidgetRt").find("input[name='Favorite']:checked").length;
        if (chkVal == "checked") {
            $('#scrollFavPlan').append('<li class="scrollPlanColumn" id=fav' + planId + '><div class="scrollPlan left">' + favContent + '</div>')
            /***Show tooltip with alert message that you added a plan to favorite***/
            var tipText = $(".alertPop").html();
            $("body").append("<p id='tooltipFav' class='tip'></p>");
            var chkAllVal = $(".compWidgetRt").find("input[name='Favorite']:checked").length;
            if ($("#tooltipFav").is(":hidden")) {
                if (chkAllVal == 1) {
                    $("#tooltip.tip").fadeOut("fast");
                    $("#tooltipFav").html(tipText).fadeIn("fast").css("width", "250").css("top", offset.top + 25 + "px").css("left", offset.left + "px").find(".close").focus().click(function () {
                        $("#tooltipFav").fadeOut("fast");
                        return false;
                    });
                }
            }
            else {


            }
        }
        else {
            $("#fav" + planId).remove();

        }
        var chkSelected = $("#planTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;

        var ifClass = $('.sidePadding').parent().attr('class');
        if (ifClass === 'cmcPlanMedical') {
            pageShown = 2;
        }
        else {
            pageShown = 3;
        }
        if (numSelected > pageShown) {
            $("#favPlanRightBtnEnabled").show();
            $("#favPlanRightBtnDisabled").hide();
        }
        else {
            $("#favPlanRightBtnEnabled").hide();
            $("#favPlanRightBtnDisabled").show();

        }

        numSelected2 = chkSelected.length;
        if (numSelected2 == 0) {
            $("#noFavPlansAlert").show();
            //hide add to favorite alert message
            $('#tooltipFav.tip').hide("fast");
        }
        else {
            $("#noFavPlansAlert").hide();

        }

        $("#favCount").html(numSelected);
        $("#favtotPlans").html(numSelected);
        if ($('.medAttrHideCrntPlan').is(':visible') && numSelected2 > 2) {
            $(".favcounter_change").html("2");
			$(".fav_counter_change").html("2");

        }
        else if (numSelected2 > 3) {
            $(".favcounter_change").html("3");
			$(".fav_counter_change").html("3");
        }
        else {
            $(".favcounter_change").html(numSelected2);
			$(".fav_counter_change").html(numSelected2);

        }
    });
    $('.medAlertClose').click(function (e) {
        e.preventDefault();
        $(this).parent().hide('fast');
    });

/******************Renamed *********************/
    /* $("#favTabContent input[name='Favorite']").live("click", function () {
			//alert(PlansPerPage);
        chkFavVal = $(this).attr('checked');

        var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;

		 var id=$(this).parents(".scrollPlanColumn").attr('id');

		 idn=id.substring(3);


		 $("#"+idn+" input[name='Favorite']").prop("checked",false);

		var numberOfpages;
		numberOfpages=(numSelected)/3;

		numberOfpages=Math.ceil(numberOfpages);
		//alert(numberOfpages);


		if (numSelected%3==0&&curPageFav>1&&PlansPerPage==3) {

			gotoPrevFav();


		}

		if (numSelected%2==0&&curPageFav>1&&PlansPerPage==2) {

			gotoPrevFav();

		}


		if(curPageFav==numberOfpages){

		 $('#favPlanRightBtnDisabled').show();
		}
		noOfPagesFav=numberOfpages;
        if (numSelected == 0) {

            $("#noFavPlansAlert").show();
			$("#favHdr").hide();
			$(this).parents(".scrollPlanColumn").remove();
        }
        else {

            $("#noFavPlansAlert").hide();

            //$(this).parents(".scrollPlanColumn").remove();
            $(this).parents(".scrollPlanColumn").remove();

			 }

		  $("#favCount").html(numSelected);
          $("#favtotPlans").html(numSelected);

		 if(numSelected<=3)
		 {
		 $('.favcounter_change').html(numSelected);
		 }
		 if(curPageFav>1)
		 {
			$('.favcounter_change').html(numSelected);
		 }
		  if (numSelected == 0) {
            $("#noFavPlansAlert").show();


        }
        return false;

    });
	*/
    /******************Increment Favourites ends here*********************/

    /***** Plan Listing Tab Scripts *****/
    $('#planTab').click(function (evt) {
        evt.preventDefault();
        $("#planTabContent").show();
        $("#favTabContent").hide();

        $('#favTab').removeClass('selected');
        $('#planTab').addClass('selected');
        $('#plansFilter, #plansHdr').show();
        $('#favMsg, #favHdr').hide();
		//$("#medTabResults").text('Narrow these results');
        //$('#scrollPlanNonSubsidyEligible li').show();

    });
    $('#favTab').click(function (evt) {

		/*hiding filters - for "to display only in click of plans tab not on fav tab"*/

								 $("#planResMed").hide();
								 if ($("#medTabResults").hasClass('active')) {
									 $("#medTabResults").text('Narrow these results');
									  $("#medTabResults").removeClass('active');
                                      // $("#medTabResults").text('Hide these options');
                                    }
                               else {

								         $("#medTabResults").text('Hide these options');
                                      // $("#medTabResults").text('Narrow these results');
                                    }
								  /*hiding filters*/


	$("#FavTabDisable").attr("disabled", "disabled");

		/******************Fav slider init starts here*********************/
		planColWidthFav=$("#favTabContent").find(".scrollPlanColumn").width();

		totNoOfPlansFav= parseInt($("#favTabContent").find(".scrollPlanColumn").index()+1);

		scrollListWidthFav=planColWidthFav*totNoOfPlansFav;
		$("#favTabContent").find(".scrollList").width(scrollListWidth+250);



		noOfPagesFav=(totNoOfPlansFav)/PlansPerPage;

		noOfPagesFav=Math.ceil(noOfPagesFav);


		curPageFav=1;

		$("#scrollFavPlan").css("left","0px");
		 $('#favPlanLeftBtnDisabled').show();
  		  $('#favPlanLeftBtnEnabled').hide();

		var chkSelected = $("#planTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;
		if (numSelected > 3) {
           $('#favPlanRightBtnDisabled').hide();
  		  $('#favPlanRightBtnEnabled').show();
        }

		/******************Fav slider init ends here*********************/

        $("#tooltipFav").fadeOut("fast");
        evt.preventDefault();

        $("#favTabContent").find("input[name='Favorite']").attr("checked", "checked");
		//$("#planResMed").hide();
        $("#planTabContent").hide();
        $("#favTabContent").show();

        $('#favTab').addClass('selected');
        $('#planTab').removeClass('selected');
        $('#plansFilter, #plansHdr').hide();


        var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;

        if (numSelected == 0) {
            $("#noFavPlansAlert").show();
        }
        else {
            $("#noFavPlansAlert").hide();

        }


        $('#favMsg, #favHdr').show();
        if (numSelected > 3) {
            $('.favcounter').html(1);
            $('.favcounter_change').html(3);
			if(PlansPerPage==2){

			$('.fav_counter').html(1);
			if($('.medAttrHideCrntPlan').is(":visible"))
			{

            $('.fav_counter_change').html(2);
			}
			else
			{
				$('.fav_counter_change').html(3);
			}
			}
			if(PlansPerPage==3){
				$('.fav_counter').html(1);
            $('.fav_counter_change').html(3);
			}
        }
        if (numSelected == 0) {
            $("#favHdr").hide();
        }
		 var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;
		var numberOfpages;
		if(($('.medAttrHideCrntPlan').is(':visible')))
		{
		numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages);


		if(curPageFav==numberOfpages){

		 //222
		 $('#favPlanRightBtnDisabled').show();
		}
		}
		else
		{


			numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages);


		if(curPageFav==numberOfpages){

		 //333
		 $('#favPlanRightBtnDisabled').show();
		}
		}
		if($('#favTab').hasClass('selected'))
	{

		var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;

		var numberOfpages;
		if($('.medAttrHideCrntPlan').is(':visible'))
		{
		console.log("visible");
		numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages);

		if(curPageFav==numberOfpages){

		 //444
		 $('#favPlanRightBtnDisabled').show();
		}
		}
		else
		{
		console.log("hidden");
			numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages);

		if(curPageFav==numberOfpages){

		 //555
		 $('#favPlanRightBtnDisabled').show();
		}
		}
	}

        /*if (numSelected) {
        $('#scrollPlanNonSubsidyEligible li').hide();
        $('#scrollPlanNonSubsidyEligible li.favAdd').show();
        }
        else $('#scrollPlanNonSubsidyEligible li').hide();*/
    });
    /* Code for Show/Hide More plan attributes, BEGIN*/
    /*   $('#medCompSeeAll').click(function (evt) {
    evt.preventDefault();
    $('#medCompPlans').css('height', '588px');
    $('#medAttribs').css('height', '579px');
    $('#medCompPlansScroll').css('height', '800px');
    $('#medCompSeeAll').hide();
    });
    $('#medCompHideMore').click(function (evt) {
    evt.preventDefault();
    $('#medCompPlans').css('height', '465px');
    $('#medAttribs').css('height', '456px');
    $('#medCompPlansScroll').css('height', '720px');
    $('#medCompSeeAll').show();
    });
    $('#denSeeAll').click(function (evt) {
    evt.preventDefault();
    hideVision();

    $('.moreDental').show();
    $('#compPlansDV').css('height', '761px');
    $('#attrDV').css('height', '721px');
    $('#planScrollDV').css('height', '800px');
    $('#denSeeAll').hide();
    });
    $('#denCompHideMore').click(function (evt) {
    evt.preventDefault();
    hideDental();
    });
    $('#visionSeeAll').click(function (evt) {
    evt.preventDefault();
    hideDental();
    $('.moreVision').show();
    $('#compPlansDV').css('height', '761px');
    $('#attrDV').css('height', '721px');
    $('#planScrollDV').css('height', '800px');
    $('#visionSeeAll').hide();
    });
    $('#visCompHideMore').click(function (evt) {
    evt.preventDefault();
    hideVision();
    });
    /* Methods for hiding Extra plans
    var hideDental = function () {
    $('.moreDental').hide();
    $('#compPlansDV').css('height', '699px');
    $('#attrDV').css('height', '659px');
    $('#planScrollDV').css('height', '800px');
    $('#denSeeAll').show();
    }
    var hideVision = function () {
    $('.moreVision').hide();
    $('#compPlansDV').css('height', '699px');
    $('#attrDV').css('height', '659px');
    $('#planScrollDV').css('height', '800px');
    $('#visionSeeAll').show();
    }*/

    /* Code for Show/Hide More plan attributes, END*/

    /* Code for Show/Hide More plan attributes, BEGIN*/
    $('#medCompSeeAll').click(function (evt) {
        evt.preventDefault();
        $('.moreMedBenefits').show();
        $("#scrollFavPlan").height($(".medAttribs").height());
        $("#noFavPlansAlert").height($(".medAttribs").height() - 105);
        $('#medCompSeeAll').hide();
    });
    $('#medCompHideMore').click(function (evt) {
        evt.preventDefault();
        $('.moreMedBenefits').hide();
        $("#scrollFavPlan").css("height", "auto");
        $("#noFavPlansAlert").height($(".medAttribs").height() - 105);
        /*$("#noFavPlansAlert").removeAttr("style");*/
        $('#medCompSeeAll').show();
    });
    $('#denSeeAll').click(function (evt) {
        evt.preventDefault();
        $('.moreDental').show();
        $('#denSeeAll').hide();
    });
    $('#denCompHideMore').click(function (evt) {
        evt.preventDefault();
        $('.moreDental').hide();
        $('#denSeeAll').show();
    });
    $('#visionSeeAll').click(function (evt) {
        evt.preventDefault();
        $('.moreVision').show();
        $('#visionSeeAll').hide();
    });
    $('#visCompHideMore').click(function (evt) {
        evt.preventDefault();
        hideVision();
    });
    /* Methods for hiding Extra plans*/
    var hideVision = function () {
        $('.moreVision').hide();
        $('#visionSeeAll').show();
    }

    /* Code for Show/Hide More plan attributes, END*/
    tPlans = $("#planScrollDV, #scrollPlanNonSubsidyEligible").find(
            ".scrollPlanColumn").index() + 1;
    $("#totPlans").html(tPlans);// for 6.4 cmc view compareplansmedical

    $("#medical121").html(tPlans);// for 1.4.1 viewcompareplansmedical

    $("#dental141").html(tPlans);// for 1.4.1 viewcompareplansmedicaldental
    $("#dental162").html(tPlans);// for 1.62 comparedentalplan
});

/***** Hide tooltip for alert message**/
function hideTooltip(e) {
    $(".tip:visible").fadeOut("fast");
    return false;
}
function numOfPlanNext(pPerPage) {
    var totPlans = parseInt($('#totPlans').text());
    var x = parseInt($('.counter').text());
    var y = parseInt($('.counter_change').text());
    x = x + pPerPage;
    y = y + pPerPage;
    if (y > totPlans) {
        $('.counter_change').html(totPlans);
    }
    else {
        $('.counter_change').html(y);
    }
    $('.counter').html(x);

}
function numOfPlanPrev(pPerPage) {
    var x = parseInt($('.counter').text());
    var y = parseInt($('.counter_change').text());
    x = x - pPerPage;
    y = y - pPerPage;
    $('.counter').html(x);
    $('.counter_change').html(y);
    if ($('.medAttrHideCrntPlan').is(':visible')) {
        $('.counter_change').html(y);
    }
   if ($('.medAttrHideCrntPlan').is(':hidden')) {
        $('.counter_change').html(y + 2);
    }

    else {
        $('.counter_change').html(y + 1);
    }
}
function favnumOfPlanNext(pPerPage) {
   var totPlans = parseInt($('#favCount').text());

    var x = parseInt($('.favcounter').text());
    var y = parseInt($('.favcounter_change').text());
    x = x + 1;
    y = y + 1;
    /*if (y > totPlans) {

        $('.favcounter_change').html(totPlans);
    }
    else {
        $('.favcounter_change').html(y);
    }*/
    $('.favcounter').html(x);
	$('.favcounter_change').html(y);

	var xx=parseInt($('.fav_counter').text());
	var yy = parseInt($('.fav_counter_change').text());
	xx = xx + pPerPage;
    yy = yy + pPerPage;
    if (yy > totPlans) {
        $('.fav_counter_change').html(totPlans);
    }
    else {
        $('.fav_counter_change').html(yy);
    }
    $('.fav_counter').html(xx);

	var favtotplns=parseInt($("#favtotPlans").text());
	var favchange =parseInt($(".fav_counter_change").text());
	//alert("favtotplns"+ favtotplns);
	//alert("favchange"+ favchange);

	if(favtotplns==favchange)
	{
		$("#favPlanRightBtnEnabled").hide();
		$("#favPlanRightBtnDisabled").show();
	}


}
function favnumOfPlanPrev(pPerPage) {
   var tp=parseInt($('#favtotPlans').text());
	 var x = parseInt($('.favcounter').text());
    var y = parseInt($('.favcounter_change').text());
   // var x = parseInt($('.fav_counter').text());
   // var y = parseInt($('.fav_counter_change').text());
	//alert("tp"+ tp);
	//alert("favcounter"+ x);
	//alert("favcounter_change"+ y);
		/*cutoff = tp - (tp%3);
	if(y<=cutoff)
		{
	    x=x-3;
		y=y-3;
	}
    else{
	   x=x-3;
		y=y-(tp%3);
	    }
           $('.favcounter').html(x);

    if ($('.medAttrHideCrntPlan').is(':visible')) {
        $('.favcounter_change').html(y);
    }

    else {
        $('.favcounter_change').html(y);
    }*/
	x=x-1;
	y=y-1;
	$('.favcounter').html(x);
	$('.favcounter_change').html(y);

	var xx = parseInt($('.fav_counter').text());
    var yy = parseInt($('.fav_counter_change').text());
	cutoff = tp - (tp%pPerPage);
	if(yy<=cutoff)
	{
		xx=xx-pPerPage;
		yy=yy-pPerPage;

	}
	else
	{
		xx=xx-pPerPage;
		yy=yy-(tp%pPerPage);
	}
	$('.fav_counter').html(xx);
	if ($('.medAttrHideCrntPlan').is(':visible')) {

        $('.fav_counter_change').html(yy);
    }

    else {
        $('.fav_counter_change').html(yy);
    }
}
/****Script for Scrolling functionality starts from here*****/
/****Script for Scrolling functionality initialisation starts from here*****/
$(document).ready(function () {

	planColWidth=$("#planTabContent").find(".scrollPlanColumn").width();
	totNoOfPlans= parseInt($("#planTabContent").find(".scrollPlanColumn").index())
	/*showing total no. of plan on tab label */
	$("#planCount").text(totNoOfPlans+1);
	scrollListWidth=planColWidth*totNoOfPlans;
 	$("#planTabContent").find(".scrollList").width(scrollListWidth+250);

	 var ifClass = $('#cmcPlanMedID').hasClass('cmcPlanMedical');

  // if(ifClass==undefined){


			if (ifClass) {
			noOfPages=(totNoOfPlans)/2;
			 PlansPerPage = 2;
			// noOfPages-2;
			}
			else{
			noOfPages=(totNoOfPlans+1)/3;
			 PlansPerPage = 3;
				}
	//}
		//alert(noOfPages);
	noOfPages=Math.ceil(noOfPages);
	curPage=1;

	/*noOfPages=(totNoOfPlans+1)/3;
	noOfPages=Math.ceil(noOfPages);
	curPage=1;*/
});
/****Script for Scrolling functionality initialisation ends  here*****/

curPageFav1=1;
curPageFav=1;
function gotoNextFav() {
    $('#favPlanLeftBtnDisabled').hide();
    $('#favPlanLeftBtnEnabled').show();

    planWrapperWidth = $("#favTabContent").find(".scrollArea").width();
    var ifClass = $('.sidePadding').parent().attr('class');
    if (ifClass === 'cmcPlanMedical')
	{
        if ($('.medAttrHideCrntPlan:visible')) {
            PlansPerPage = 2;
            favnumOfPlanNext(2);
        }
        else
		{
		PlansPerPage = 3;
        favnumOfPlanNext(3);
        }
    }
    else
	{
	 PlansPerPage = 3;
     favnumOfPlanNext(3);
    }
    plansPageWidth = $("#favTabContent").find(".scrollPlanColumn").width();//* PlansPerPage;
    totalPlans = $("#favTabContent").find(".scrollPlanColumn").index()+1;
	totNoOfPlansFav= parseInt($("#favTabContent").find(".scrollPlanColumn").index()+1);


    newLeft = ($("#scrollFavPlan").position().left);
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;

      if ($('.medAttrHideCrntPlan').is(':visible'))
	  {
       noOfPagesFav=(totNoOfPlansFav)-2;
	   noOfPagesFav=Math.ceil(noOfPagesFav);
	  }
	  else
	  {
		noOfPagesFav=(totNoOfPlansFav)-2;
		noOfPagesFav=Math.ceil(noOfPagesFav);
	  }


	if(curPageFav < noOfPagesFav)
	{
	$("#clickBlockerRight").show();
	$('#scrollFavPlan').animate({
	left: (newLeft) - plansPageWidth
	  }, "slow", function() {
		$("#clickBlockerRight").hide();
	  });
	  curPageFav++;
	}





		var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;
		var numberOfpages;
		var title = $(document).attr('title');
    if (title == "View Compare Plans Medical") {


		if($(".medAttrHideCrntPlan").is(':visible'))
		{

		numberOfpages=(numSelected)-2;
		numberOfpages=Math.ceil(numberOfpages);
			if(curPageFav==numberOfpages)
			{
				$('#favPlanRightBtnDisabled').show();
			}
		}
		else
		{
		numberOfpages=(numSelected)-2;
		numberOfpages=Math.ceil(numberOfpages);
			if(curPageFav1<numberOfpages)
			{
			curPageFav1++;
			}
			if(curPageFav==numberOfpages)
			{
			//777
		 	//$('#favPlanRightBtnDisabled').show();
			}

		}
	}
	if (title == "Compare Plans Medical") {

	numberOfpages=(numSelected)-2;
		numberOfpages=Math.ceil(numberOfpages);
			if(curPageFav1<numberOfpages)
			{
			curPageFav1++;
			}
			if(curPageFav==numberOfpages)
			{
			//777
		 	$('#favPlanRightBtnDisabled').show();
			}

		}

    return false;



}

function gotoPrevFav() {
    $('#favPlanRightBtnDisabled').hide();
    $('#favPlanRightBtnEnabled').show();
    planWrapperWidth = $("#favTabContent").find(".scrollArea").width();
    var ifClass = $('.sidePadding').parent().attr('class');
    if (ifClass === 'cmcPlanMedical') {
        if ($('.medAttrHideCrntPlan').is(':visible')) {
            PlansPerPage = 2;
            favnumOfPlanPrev(2);
        }
        else {
            PlansPerPage = 3;
            favnumOfPlanPrev(3);
        }
    }
    else {
        PlansPerPage = 3;
        favnumOfPlanPrev(3);
    }
    plansPageWidth = $("#favTabContent").find(".scrollPlanColumn").width();// * PlansPerPage;
    totalPlans = $("#favTabContent").find(".scrollPlanColumn").index();
    newLeft = ($("#scrollFavPlan").position().left);
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;
	if ($('.medAttrHideCrntPlan').is(':visible')) {
       noOfPagesFav=(totNoOfPlansFav)-2;

		noOfPagesFav=Math.ceil(noOfPagesFav);
	  }
	  else
	  {
		noOfPagesFav=(totNoOfPlansFav)-2;

		noOfPagesFav=Math.ceil(noOfPagesFav);
	  }


	if(curPageFav<=noOfPagesFav){
		$("#clickBlockerLeft").show();
	$('#scrollFavPlan').animate({
		left: (newLeft) + plansPageWidth
	  }, "slow", function() {
		$("#clickBlockerLeft").hide();
	  });
	  curPageFav--;
	}
	if(curPageFav==1){
		 $('#favPlanLeftBtnDisabled').show();
		}

    return false;
}

function gotoNext() {

  $('#planLeftBtnDisabled').hide();
    $('#planLeftBtnEnabled').show();

    planWrapperWidth = $("#planTabContent").find(".scrollArea").width();
    var ifClass = $('.sidePadding').parent().attr('class');

	//alert(tPlans);
    if (ifClass === 'cmcPlanMedical') {

        PlansPerPage = 2;
       //alert(PlansPerPage);
	   noOfPages=(totNoOfPlans)/2;
	 noOfPages=Math.ceil(noOfPages);

        var x=parseInt($('.counter').text());
       var y=parseInt($('.counter_change').text());
       if(tPlans%2==0){
		   x=x+2;
		   y=y+2;

		   }
		  if((tPlans%2!=0)&&(y!=(tPlans-1))){
		   x=x+2;
		   y=y+2;

		   }
		   if((tPlans%2!=0)&&(y==(tPlans-1))){
		   x="";
		   y=y+1;

		   }

        $('.counter').html(x);
		$('.counter_change').html(y);



    }
    else {
      PlansPerPage = 3;

	 noOfPages=(totNoOfPlans+1)-2;
	 noOfPages=Math.ceil(noOfPages);

	var x=parseInt($('.count').text());
    var y=parseInt($('.count_change').text());

	 x=x+1;
	 y=y+1;
        $('.count').html(x);
		$('.count_change').html(y);

    }
    plansPageWidth = $("#planTabContent").find(".scrollPlanColumn").width();// * PlansPerPage;
    totalPlans = $("#planTabContent").find(".scrollPlanColumn").index();
	//alert(totalPlans+"line1390");
    newLeft = $("#scrollPlanNonSubsidyEligible").position().left;
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;
	if(curPage<noOfPages){
		$("#clickBlockerRight").show();
	$('#scrollPlanNonSubsidyEligible').animate({
		left: (newLeft) - plansPageWidth ,
	  }, "slow", function() {
		$("#clickBlockerRight").hide();
	  });
	  curPage++;
	}

	if(curPage==noOfPages){
		 $('#planRightBtnDisabled').show();
		}
    return false;

}


function gotoPrev() {
     $('#planRightBtnDisabled').hide();
    $('#planRightBtnEnabled').show();

    planWrapperWidth = $("#planTabContent").find(".scrollArea").width();
    var ifClass = $('.sidePadding').parent().attr('class');
    if (ifClass === 'cmcPlanMedical') {
        PlansPerPage = 2;

        var x=parseInt($('.counter').text());
    var y=parseInt($('.counter_change').text());

    x=x-2;
    y=y-2;
    $('.counter').html(x);
    $('.counter_change').html(y);
	 var count=parseInt($('.count').text());
	 var count_change=parseInt($('.count_change').text());

	count=count-2;
	count_change=count_change-2;
	$('.count').html(count);
    $('.count_change').html(count_change);


    }
    else {

        PlansPerPage = 3;
		 var count=parseInt($('.count').text());

    var count_change=parseInt($('.count_change').text());
	  count=count-1;
	  count_change=count_change-1;

        $('.count').html(count);
		$('.count_change').html(count_change);
    }


    plansPageWidth = $("#planTabContent").find(".scrollPlanColumn").width();// * PlansPerPage;
    totalPlans = $("#planTabContent").find(".scrollPlanColumn").index();
    newLeft = $("#planTabContent").find(".scrollList").position().left;
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;
   if(curPage<=noOfPages){
		$("#clickBlockerLeft").show();
	$('#scrollPlanNonSubsidyEligible').animate({
		left: (newLeft) + plansPageWidth ,
	  }, "slow", function() {
		$("#clickBlockerLeft").hide();
	  });
	  curPage--;
	}
	if(curPage==1){
		 $('#planLeftBtnDisabled').show();
		}
    return false;
	}


/****Script for Scrolling functionality for Dental/Vision starts from here*****/
curpage=1;
function gotoNextDenVis() {
    $('#left_button_disabled').hide();
    $('#left_button_enabled').show();

    planWrapperWidth = $(".scrollArea").width();
    PlansPerPage = 3;
    plansPageWidth = $(".scrollPlanColumn").width();// * PlansPerPage;
    totalPlans = ($(".scrollPlanColumn").index());
    newLeft = ($(".scrollList").position().left);
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;

     var x = parseInt($('#opt').text());
    var y = parseInt($('#opt_change').text());
	var totplans=parseInt($("#dental162").text());

    var noofpages=totplans-2;
    x = x + 1;
    y = y + 1;
    $('#opt').html(x);
    $('#opt_change').html(y);

    if (Math.abs(newLeft) != isNextPage) {
        $(".scrollList").animate({ "left": newLeft - plansPageWidth }, "slow");
		curpage++;
    }
    if (curpage==noofpages) {
        $('#right_button_disabled').show();
    }
    //numOfPlanNext(3);

    return false;
}

function gotoPrevDenVis() {
    $('#right_button_disabled').hide();
    $('#right_button_enabled').show();
    planWrapperWidth = $(".scrollArea").width();
    PlansPerPage = 3;
    plansPageWidth = $(".scrollPlanColumn").width();// * PlansPerPage;
    totalPlans = ($(".scrollPlanColumn").index());
    newLeft = ($(".scrollList").position().left);
    isNextPage = (totalPlans / PlansPerPage) * plansPageWidth;

    var x = parseInt($('#opt').text());
    var y = parseInt($('#opt_change').text());

    x = x - 1;
    y = y - 1;
    $('#opt').html(x);
    $('#opt_change').html(y);

    if (Math.abs(newLeft) != 0) {
        $(".scrollList").animate({ "left": newLeft + plansPageWidth }, "slow");
		curpage--;
    }
    if (curpage==1) {
        $('#left_button_disabled').show();
    }
    return false;
}

$(document).ready(function () {
	//the following for left/right arrow key to advance to next plan
	$(document).on("keydown",function (e) {


     if ((e.keyCode==39)){


		var dialogvalue=$('h1 span').html();
		var title= $(this).attr('title');

		if(title=="Compare Dental Plans")
		{
			  if(!$('#right_button_disabled').is(':visible'))
			 {
				gotoNextDenVis();
			 }
		}

		else if(dialogvalue=='Select Dental and Vision Plans')
		{
			 if(!$('#right_button_disabled').is(':visible'))
			 {
				gotoNextDenVis();

			 }

		}
	 else{
			 if(!$('#planRightBtnDisabled').is(':visible'))
			 {

			 gotoNextDenVis();
			 gotoNext();

			 }
			 if(!$('#favPlanRightBtnDisabled').is(':visible'))
			 {
				 gotoNextFav();
			 }

	    }
      }

	  if (e.keyCode==37) {


		  var dialogvalue=$('h1 span').html();
		  var title= $(this).attr('title');

		if(title=="Compare Dental Plans")
		{
			if(!$('#left_button_disabled').is(':visible'))
			{
			  gotoPrevDenVis();
			}
		}
		else if(dialogvalue=='Select Dental and Vision Plans')
		{
			 if(!$('#left_button_disabled').is(':visible'))
			 {
				gotoPrevDenVis();

			 }
		}
	  else
	  {
		 if(!$('#planLeftBtnDisabled').is(':visible'))
		 {
		  gotoPrevDenVis();
		  gotoPrev();

		}
		if(!$('#favPlanLeftBtnDisabled').is(':visible'))
		{
			  gotoPrevFav();
		}
	  }

	  }






    });//left/right arrow key advance to plan ends here
    $("#right_button_enabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoNextDenVis();
        return false;
    });

    $("#left_button_enabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoPrevDenVis();
        return false;
    });
    $("#planRightBtnEnabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoNext();
        return false;
    });

    $("#planLeftBtnEnabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoPrev();
        return false;
    });

    $("#favPlanRightBtnEnabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoNextFav();
        return false;
    });

    $("#favPlanLeftBtnEnabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoPrevFav();
        return false;
    });

	$("#right_button_enabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoNext1();
        return false;
    });

	$("#left_button_enabled").click(function () {
        $('#tooltip').hide();
        $('#tooltipFav').hide();
        gotoPrev1();
        return false;
    });


    $("#applyPlan").attr("disabled", true);
})
/****Script for Scrolling functionality ends here*****/

function SubsidyPlan() {
    if ($('#subsidyEligible').is(':checked')) {
        $("#applyPlan").attr("disabled", false);
        $('.quickPlans').hide();
        $('#scrollPlanSubsidyEligible li, #subsHdr').show();
    }
    else {
        $("#applyPlan").attr("disabled", true);
        $('.quickPlans').show();
        $('#scrollPlanSubsidyEligible li, #subsHdr').hide();
    }
}

function quickPlan() {
    if ($('#applyPlan').is(':checked')) {
        $("#subsidyEligible").attr("disabled", false);
        $('#scrollPlanSubsidyEligible li, #subsHdrOnly').hide();
        $('#scrollPlanSubsidyEligible li, #subsHdr').show();
    }
    else {
        $("#subsidyEligible").attr("disabled", true);
        $('#scrollPlanSubsidyEligible li, #subsHdr').hide();
        $('#scrollPlanSubsidyEligible li, #subsHdrOnly').show();
    }
}

$(function () {
 	$(".medAttribs div").not('[class="moreMedBenefits"]').hover(function () {
	cName=$(this).attr("class")	;
	cName=cName.substr(0,cName.indexOf(" "));
	$("."+cName).toggleClass('highlight');
    });

    $('.btnCurrentPlan').hide();
});
function setPlansLeft0(){
	totalPlans = $("#planTabContent").find(".scrollPlanColumn").index();

	totalPlansFav = $("#favTabContent").find(".scrollPlanColumn").index();
	$('#planLeftBtnDisabled').show();
    $('#planLeftBtnEnabled').hide();
    $('#favPlanLeftBtnDisabled').show();
    $('#favPlanLeftBtnEnabled').hide();
    if(totalPlans>2){
    	$('#planRightBtnDisabled').hide();
    	$('#planRightBtnEnabled').show();
    }
    if(totalPlansFav>1){
        $('#favPlanRightBtnDisabled').hide();
    $('#favPlanRightBtnEnabled').show();
     }
     $(".scrollList").css("left","0px");
}
function hideCurrentPlan() {
   curPageFav=1;
	var totalfav=parseInt($("#favCount").text());


   setPlansLeft0();
	curPage=1;
    $('.medAttrHideCrntPlan').hide();
    $('.btnCurrentPlan').show();
    $('.cmcPlanMedical').removeClass('cmcPlanMedical');  //1810px
    $('.contShowNarrows').hide();
    $('.contntShowFirsts').css({ "width": "210", "height": "50" }).show();
    $("#subsHdrOnly").removeClass("subsHdrCMC");
	//Content = $('.medAttrHideCrntPlan').html();
	//console.log(Content);
	//$('#scrollPlanNonSubsidyEligible').append('<li class="scrollPlanColumn" ><div class="scrollPlan left" id="plan9">' + Content + '</div></li>');

	 //$('#scrollPlanNonSubsidyEligible').css({ "width": "1810"});

  /*curPage=1;
    var count=parseInt($('.counter_change').text());

    var cont=parseInt($('.counter').text());
    count=count+1;
    $('.counter_change').html(count);*/
	x = 1;
    y = 3;
    $('.counter').html(x);
    $('.counter_change').html(y);
	$('.fav_counter').html(x);
	$('.fav_counter_change').html(y);
	if(totalfav<=3)
	{
		$("#favPlanRightBtnEnabled").hide();
		$("#favPlanRightBtnDisabled").show();
	}
	if(totalfav == 2)
	{
		$('.fav_counter_change').html(totalfav);
	}
	 var favtotplns=parseInt($("#favtotPlans").text());
   if(favtotplns==1)
       {
               $('.fav_counter').html(1);
               $('.fav_counter_change').html(1);
       }

}
function shwCurrentPlan() {
    setPlansLeft0();
	curPageFav=1;
	curPage=1;
    $(".scrollList").css("left","0px");
    $('.medAttrHideCrntPlan').show();
    $('.btnCurrentPlan').hide();
    $('#cmcPlanMedID').addClass('cmcPlanMedical');
    $('.contntShowFirsts').css("width","420").show();
    $('.contShowNarrows').hide();
    $("#subsHdrOnly").addClass("subsHdrCMC");
	var a = 1;
     var b = 2;
    $('.counter').html(a);
    $('.counter_change').html(b);
	$('.fav_counter').html(a);
	$('.fav_counter_change').html(b);

	var favtotplns=parseInt($("#favtotPlans").text());
	var favchange =parseInt($(".fav_counter_change").text());

	if(favtotplns==favchange)
	{
		$("#favPlanRightBtnEnabled").hide();
		$("#favPlanRightBtnDisabled").show();
	}
	 if(favtotplns==1)
       {
               $('.fav_counter').html(1);
               $('.fav_counter_change').html(1);
       }



}
/*function hideCurrentPlan() {
    x = 1;
    y = 3;
    $('.counter').html(x);
    $('.counter_change').html(y);
	setPlansLeft0();
    $('.medAttrHideCrntPlan').hide();
    $('.btnCurrentPlan').show();
    $('.cmcPlanMedical').removeClass();
	$('.contShowNarrows').hide();
	$('.contntShowFirsts').css({ "width": "210", "height": "50" }).show();
	$("#subsHdrOnly").removeClass("subsHdrCMC");
}
function shwCurrentPlan() {
    //var y = parseInt($('.counter_change').text());
    x = 1;
    y = 2;
    $('.counter').html(x);
    $('.counter_change').html(y);


	setPlansLeft0();
    $(".scrollList").css("left","0px");
    $('.medAttrHideCrntPlan').show();
    $('.btnCurrentPlan').hide();
    $('#cmcPlanMedID').addClass('cmcPlanMedical');
	$('.contntShowFirsts').css("width","420").show();
	$('.contShowNarrows').hide();
	$("#subsHdrOnly").addClass("subsHdrCMC");
}*/
/****1.4.1 Compare Plan Medical Variations starts here****/
$(function () {
    var title = $(this).attr('title');
    if (title == "Compare Plans Medical") {
        var $div = $('<div />').appendTo('#snqWrap');
        $div.attr('id', 'container');
        $('#container').css({ "background-color": "#000000", "height": "20px", "width": "700px;", "position": "fixed", "top": "0px", "padding": "6px", "right": "12%", "left": "14%", "z-index": "10000" });
        $("<a />").attr("href", "1.4.1_viewComparePlansMedical.html").appendTo("#container").text("Medical").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.4.1_viewComparePlansMedical_NoResults.html").appendTo("#container").text("No Results").css({
            'margin-right': '40px', 'color': 'white'
        });
    }
});
/****1.4.1 Compare Plan Medical Variations ends here****/


/*Error Handling functionality for Create Profile starts here*/
$(document).ready(function () {
    $('.confrmValidate').click(function (e) {
        e.preventDefault();
        $('#errorHandlerBlock').show();
        $(window).scrollTop($('#errorHandlerBlock').offset().top);
        $("#errorHandlerBlock").attr("tabindex", -1).focus();
        $("input[type='text'],select").val("").each(function (index, value) {
            //Get the value of the aria describedby for input and use that as the ID for dynamically generated div that contains the error message
              $(this).parent().find("p").remove();
			var ariaID = $(this).attr("aria-describedby");
            //alert(ariaID);
            if ($(this).hasClass("optional")) {
                $(this).removeClass("errorBorder");
            }
            else {
                $('#errorHandlerBlock').show();
                if ($(this).parent().children().hasClass('tipContxt')) {

                    //Get only the first value before the ' ' (space) and use that as the ID for error div
                    ariaID = ariaID.substr(0, ariaID.lastIndexOf(" "));
                    $(this).parent("div").find('input').after('<p class="error">Required field.</p>');
                    $(this).next("p.error").attr("id", ariaID);
                }
                else {
                    $(this).parent("div").append('<p class="error">Required field.</p>');
                    $(this).parent("div").find("p.error").attr("id", ariaID);
                }
                $('.tipContxt').addClass("botMargin5").show();
                $('.tipContxt').addClass("topMargin15").show();
                $(this).addClass("errorBorder").css("background", "none");
            }
        });
        var chkSelected = $("#chkAgreementBlock").find("input[name='chkReadAgreement']:checked");
        numSelected = chkSelected.length;
		    $("#termsofuse_label").remove();
        if (numSelected == 0) {
            $("#chkAgreementBlock").addClass("errorBorder").css("padding", "5px");
            $("#chkAgreementBlock").after('<p id="termsofuse_label" class="error">Required field.</p>');
        }
    });

    $("input[type='text'],select").change(function () {
        Val = $(this).val();
        //Get the value of the aria describedby for input and use that as the ID for dynamically generated div that contains the error message
        var ariaID = $(this).attr("aria-describedby");
        if (Val == "") {
            if ($(this).hasClass('toolTip')) {
                $(this).parent().find("p").remove();
            }
            else if ($(this).hasClass('datepicker')) {
                $(this).parent().find("p").remove();
                $(this).parent("div").find(this).next().after('<p class="error">Required field.</p>');
                $(this).next("p.error").attr("id", ariaID);
            }
            else {
                $(this).parent().find("p").remove();
                $(this).parent("div").find(this).after('<p class="error">Required field.</p>');
                $(this).next("p.error").attr("id", ariaID);
            }

            $(this).addClass("errorBorder").css("border", "1px solid #f00");
            $(this).parent().find("div.tipContxt").show();
            if ($(this).hasClass('toolTip')) {
                $(this).parent("div").find(this).after('<p class="error">Required field.</p>');
                $(this).next("p.error").attr("id", ariaID);
            }
        }
        else {
            $(this).parent().find("p").remove();
            $(this).css("border", "1px solid #7f9db9");
            $(this).removeClass("errorBorder");
            $(this).parent().find("div.tipContxt").hide();
        }
    });

    $('#chkReadAgreementId').click(function () {
        var chkSelected = $("#chkAgreementBlock").find("input[name='chkReadAgreement']:checked");
        //Get the value of the aria describedby for input and use that as the ID for dynamically generated div that contains the error message
        var ariaID = $(this).attr("aria-describedby");
        numSelected = chkSelected.length;
        if (numSelected == 0) {
            $(this).closest("#chkAgreementBlock").next().remove();
            $("#chkAgreementBlock").addClass("errorBorder").css("padding", "5px");
            $("#chkAgreementBlock").after('<p class="error">Required field.</p>');
            $(this).next("p.error").attr("id", ariaID);
        }
        else {
            $("#chkAgreementBlock").removeClass("errorBorder");
            $(this).closest("#chkAgreementBlock").next().remove();
        }
    });

});
    $('.confrmValidateDemographic').click(function (e) {
        e.preventDefault();
        //Get the value of the aria describedby for input and use that as the ID for dynamically generated div that contains the error message
        var ariaID = $(this).attr("aria-describedby");
        if ($('#zipCode').val("")) {
            $('#zipCode').parent("div").find("label").addClass("error");
            $('#zipCode').parent("div").before('<p class="error">This field is required.</p>');
            $(this).next("p.error").attr("id", ariaID);
            $('#zipCode').addClass("errorBorder").css("background", "none");
        }
    });

	/******************Renamed *********************/
    $("#favTabContent input[name='Favorite']").live("click", function () {
        chkFavVal = $(this).attr('checked');

        var chkSelected = $("#favTabContent").find("input[name='Favorite']:checked");
        numSelected = chkSelected.length;
    	//alert("numSelected"+ numSelected);
		 var id=$(this).parents(".scrollPlanColumn").attr('id');

		 idn=id.substring(3);
		 //alert("idn "+idn);

		 $("#"+idn+" input[name='Favorite']").prop("checked",false);

		var numberOfpages;
		if ($('.medAttrHideCrntPlan').is(':visible')) {
			numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages)+1;
		}
		else
		{
		numberOfpages=(numSelected)-2;

		numberOfpages=Math.ceil(numberOfpages)+1;
		}



		if (numSelected>=3&&curPageFav>1&&PlansPerPage==3) {

			gotoPrevFav();


		}

		if (numSelected%2==0&&curPageFav>1&&PlansPerPage==2) {

			gotoPrevFav();

		}


		if(curPageFav==numberOfpages-1){
		 //111
		 $('#favPlanRightBtnDisabled').show();
		}
		noOfPagesFav=numberOfpages;

        if (numSelected == 0) {

            $("#noFavPlansAlert").show();
			$("#favHdr").hide();
			$(this).parents(".scrollPlanColumn").remove();
        }
        else {

            $("#noFavPlansAlert").hide();

            //$(this).parents(".scrollPlanColumn").remove();
            $(this).parents(".scrollPlanColumn").remove();

			 }

		  $("#favCount").html(numSelected);
          $("#favtotPlans").html(numSelected);
		  //$(".fav_counter_change").html(numSelected);
		if($(".btnCurrentPlan").is(":visible"))
		{
		 if(numSelected<=3)
		 {

		// $('.favcounter_change').html(numSelected);
		 $('.fav_counter_change').html(numSelected);
		 }
		}
		if(numSelected<=3)
		 {
		$('.favcounter').html(1);
		$('.favcounter_change').html(numSelected);

		 }

		if($(".medAttrHideCrntPlan").is(":visible"))
		{
		 if(numSelected<3)
		 {

		// $('.favcounter_change').html(numSelected);
		 $('.fav_counter_change').html(numSelected);
		 }
		}
		if(numSelected<=3)
		 {
			$('.favcounter').html(1);
		 $('.favcounter_change').html(numSelected);
		 }
		  if((curPageFav>1)&&(curPageFav!=numberOfpages))
		 {
			//$('.favcounter').html((PlansPerPage*(curPageFav-1))+1);
			//$('.favcounter_change').html(PlansPerPage*curPageFav);
			 $('.fav_counter_change').html(PlansPerPage*curPageFav);
		 }
		 /*if((curPageFav>1))
			 {
				 $('.fav_counter_change').html(numSelected);
			 }*/
		 if(curPageFav==numberOfpages)
		 {
			//$('.favcounter').html(curPageFav);
			//$('.favcounter_change').html(numSelected);
			 $('.fav_counter_change').html(numSelected);
		 }
		 if (curPageFav == 1) {

			 $('#favtotPlans').html(numSelected);
        }

		  if (numSelected == 0) {
            $("#noFavPlansAlert").show();


        }
        return false;

    });


/*Error Handling functionality for Create Profile ends here*/
/*Scolling enabling for PopUp Begin*/
(function( $, undefined ) {
  if ($.ui && $.ui.dialog) {
    $.ui.dialog.overlay.events = $.map('focus,keydown,keypress'.split(','), function(event) { return event + '.dialog-overlay'; }).join(' ');
  }
}(jQuery));
/*Scolling enabling for PopUp End*/
/****10.0 Login No PIN Variation Page Starts here****/
$(function () {
    var title = $(this).attr('title');
    if (title == "10.0a Log In No PIN") {
        var $div = $('<div />').appendTo('#snqWrap');
        $div.attr('id', 'container');
        $('#container').css({ "background-color": "#000", "height": "20px", "width": "600px;", "position": "fixed", "top": "0px", "padding": "6px", "right": "50%", "left": "14.5%", "z-index": "10000", "opacity": "0.4" });
        $("<a />").attr("href", "10.0a_LogInNoPIN.html").appendTo("#container").text("Hdr#Shopper").css({
           'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "10.0a_LogInNoPIN_CMC.html").appendTo("#container").text("Hdr#CMC").css({
            'margin-right': '40px', 'color': 'white'
        });
                                $("<a />").attr("href", "10.0a_LogInNoPIN_Agent.html").appendTo("#container").text("Hdr#Agent").css({
            'margin-right': '40px', 'color': 'white'
        });
    }
});
/****10.0 Login No PIN Variation Page ends here****/

/****10.0b.2 Quote Summ Page Variation Starts here****/
$(function () {
    var title = $(this).attr('title');
    if (title == "10.0b Log In with Pin") {
        var $div = $('<div />').appendTo('#snqWrap');
        $div.attr('id', 'container');
        $('#container').css({ "background-color": "#000", "height": "20px", "width": "600px;", "position": "fixed", "top": "0px", "padding": "6px", "right": "50%", "left": "14.5%", "z-index": "10000", "opacity": "0.4" });
                                $("<a />").attr("href", "10.0b.2_Quote_Summary_Special_Case.html").appendTo("#container").text("Hdr#Agent").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "10.0b.2_Quote_Summary_Special_Case_CMC.html").appendTo("#container").text("Hdr#CMC").css({
            'margin-right': '40px', 'color': 'white'
        });
    }
});
/****10.0b.2 Quote Summ Page Variation ends here****/
/****1.6.2 Compare Dental Plans Page Variation Starts here****/
$(function () {
    var title = $(this).attr('title');
    if (title == "Compare Dental Plans") {
        var $div = $('<div />').appendTo('#snqWrap');
        $div.attr('id', 'container');
        $('#container').css({ "background-color": "#000", "height": "20px", "width": "600px;", "position": "fixed", "top": "0px", "padding": "6px", "right": "50%", "left": "12%", "z-index": "10000", "opacity": "0.4" });
                                $("<a />").attr("href", "1.6.2_compareDentalPlan.html").appendTo("#container").text("Medical & Dental").css({
            'margin-right': '40px', 'color': 'white'
        });
        $("<a />").attr("href", "1.6.2_compareDentalPlan_Medical.html").appendTo("#container").text("Medical").css({
            'margin-right': '40px', 'color': 'white'
        });
    }
});
/****1.6.2 Compare Dental Plans Page Variation ends here****/

$("input[id='forgotUser']").change(function () {
	alert("test");
	if ($("input[id='forgotUser']:checked")) {
		$("#forgotUsernameblock").show();
		$("input[name='forgotPassword']").removeAttr("checked");
		$("#paymentElectronicBlock").hide();
	}

});

$("input[id='forgotPassword']").change(function () {
	if ($("input[id='forgotPassword']:checked")) {
		$("#paymentElectronicBlock").show();
		$("input[name='forgotUser']").removeAttr("checked");
		$("#forgotUsernameblock").hide();
	}
});

    $("#tabs").tabs();

    // table Sorter
    $("#tblDashboard")
      .tablesorter({ debug: false, widgets: ['zebra'] }).tablesorterPager({ container: $("#pager") })
      .tablesorterFilter({ filterContainer: $("#txtCase"),
          filterClearContainer: $("#filter-clear-button"),
          filterColumns: [0, 1, 2, 3, 4],
          filterCaseSensitive: false
      });
    //Applications tablesorter pager
    $("#applications")
      .tablesorter({ debug: false, widgets: ['zebra'] }).tablesorterPager({ container: $("#appsPager") })
      .tablesorterFilter({ filterContainer: $("#txtCase"),
          filterClearContainer: $("#filter-clear-button"),
          filterColumns: [0, 1, 2, 3, 4],
          filterCaseSensitive: false
      });
    //Quotes tablesorter pager
    $("#quotes")
      .tablesorter({ debug: false, widgets: ['zebra'] }).tablesorterPager({ container: $("#quotesPager") })
      .tablesorterFilter({ filterContainer: $("#txtCase"),
          filterClearContainer: $("#filter-clear-button"),
          filterColumns: [0, 1, 2, 3, 4],
          filterCaseSensitive: false
      });


    $("#validEmail").click(function () {
        $("#successID").show();
    });

function gotoURL(lnk){
	
	location.href = lnk;
	}