/**
Vertigo Tip by www.vertigo-project.com
Requires jQuery
Modified by FPL to display onFocus to the right of field

 
this.vtip = function() {    
    this.xOffset = 17; // x distance from input
	this.yOffset = -2;
	if(jq14.browser.msie){
	    this.yOffset = -7; // y distance from input
	    }
    jq14(".vtip").unbind().focus(    
        function(e) {
            this.t = this.title;
            this.title = ''; 
			sf_pos =jq14(this).position();
			sf_top = sf_pos.top+(yOffset);
			sf_left = sf_pos.left + (jq14(this).width()+xOffset);
            
           jq14('body').append( '<p id="vtip"><img id="vtipArrow" />' + this.t + '</p>' );
            jq14('p#vtip #vtipArrow').attr("src", 'images/vtip_arrow.png');
            jq14('p#vtip').css("top", sf_top+"px").css("left", sf_left+"px").fadeIn("slow");
        },
        function() {
            this.title = this.t;
            jq14("p#vtip").fadeOut("slow").remove();
        }
    ).blur(
	
		function() {
            this.title = this.t;
            jq14("p#vtip").fadeOut("slow").remove();
        }
	);};

jq14(document).ready(function(jq14){vtip();}) 
*/

this.vtip = function() {    
    this.xOffset = 35; // x distance from input
	this.yOffset = -2;
	if(jq14.browser.msie){
	    this.yOffset = -7; // y distance from input
	 }
    jq14(".vtip").unbind().focus(    
        function(e) {
        	jq14(window).resize(function(){
        		jq14(this).focus();
        	});
            this.t = registration_help[this.id+"HelpMsg"];
            this.title = ''; 
            var lastChild = jq14(this).parent().children().filter(":visible").last();
            sf_pos =lastChild.offset();	
			sf_top = sf_pos.top+(yOffset);
			sf_left = sf_pos.left + (jq14(this).width()+xOffset);
            jq14('body').append( '<span id="hinter" ><span id="hinter-pointer"/>'+'<b>' + this.t+'</b>'+'</span>' );
            jq14('span#hinter').css("top", sf_top+"px").css("left", sf_left+"px").fadeIn("slow");
        },
        function() {
           // this.title = this.t;
            jq14("span#hinter").fadeOut("slow").remove();
        }
    ).blur(
	
		function() {
           // this.title = this.t;
           jq14("span#hinter").fadeOut("slow").remove();
        }
	);};

jq14(document).ready(function(jq14){vtip();}) 