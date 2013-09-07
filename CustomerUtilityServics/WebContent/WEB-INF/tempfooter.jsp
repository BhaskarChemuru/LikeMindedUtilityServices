	</div>
    <div class="verticalspacer"></div>
   <div class="footer" id="footerwrapper"><jsp:include flush="true" page="foot.jsp"/></div>
  </div>
 
   <!-- JS includes -->
  <script type="text/javascript">
   if (document.location.protocol != 'https:') 
   document.write('\x3Cscript src="http://musecdn.businesscatalyst.com/scripts/4.0/jquery-1.8.3.min.js" type="text/javascript">\x3C/script>');
  </script>
  <script type="text/javascript">
   window.jQuery || document.write('\x3Cscript src="scripts/jquery-1.8.3.min.js" type="text/javascript">\x3C/script>');
  </script>
  <script src="scripts/museutils.js?3992981318" type="text/javascript"></script>
  <script src="scripts/jquery.musemenu.js?3788803530" type="text/javascript"></script>
  <script src="scripts/jquery.watch.js?4068933136" type="text/javascript"></script>
  <script src="scripts/site.js" type="text/javascript"></script>
  <!-- Other scripts -->
  <script type="text/javascript">
   $(document).ready(function() { try {
		Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
		Muse.Utils.prepHyperlinks();/* body */
		Muse.Utils.initWidget('.MenuBar', function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
		Muse.Utils.fullPage('#wrapper');/* 100% height page */
		Muse.Utils.showWidgetsWhenReady();/* body */
		Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
	} catch(e) { Muse.Assert.fail('Error calling selector function:' + e); }});
  </script>
   </body>

</html>
