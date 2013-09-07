<div id="header-wrapper" class="clear">
  <div id="header">
    <div class="left tpPad5"><img width="255" height="65" src="resources/images/Milestone_Utility_ServicesFocus.png" alt="Milestone Utility Services"> </div>
    <div class="right">
      <form action="#logout">
        <div id="logoCustServ" class="right width175">
          <div class="botMargin5">
            <p>Name:</p>
            <p class="bold"><%= (String)session.getAttribute("customerName") %></p>
          </div>
          <div class="botMargin5">
            <p>Account#:</p>
            <p class="bold"><%= (String)session.getAttribute("accountNumSessVal") %></p>
          </div>
          <div class="left width40 tpPad5"> <a href="#" title="Message"> <span class="msgIcon left rightMargin5"></span>
            <p>(3 Msgs)</p>
            </a> </div>
          <div class="right">
            <button class="navBtn last noMargin" onclick="btnClick('logout.jsp');" type="button"><span class="logoutIcon rtPad10"></span>Log Out&nbsp;</button>
          </div>
        </div>
      </form>
    </div>
