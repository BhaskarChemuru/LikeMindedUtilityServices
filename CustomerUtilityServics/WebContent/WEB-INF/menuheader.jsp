      <div id="PriNav" class="clear">
        <ul class="flexy-menu orange">
          <li class="showhide" style="display: none;"><span class="title">MENU</span><span class="icon"><em></em><em></em><em></em><em></em></span></li>
          <li style=""><a href="index.html">Home</a></li>
          <li style=""><a href="accountsummary.html">My Account</a>
            <ul style="display: none;">
              <li><a href="JavaScript:btnClick('callAccountSumWithAccNum.do')">Account Summary</a></li>
              <li><a href="JavaScript:btnClick('addaccount.jsp')">Add Account</a></li>
              <li><a href="JavaScript:btnClick('selectAccountProcess.do')">Select Account</a>
              </li>
              <li><a href="JavaScript:void(0)">Dropdown</a></li>
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
            </ul>
          </li>
          <li style=""><a href="JavaScript:void(0)">Payments</a>
            <ul style="display: none;">
              <li><a href="JavaScript:void(0)">On-Demand Pay</a></li>
              <li><a href="javaScript:btnClick('getPaymentHistory.do?accountNumber=<%=(String)(request.getSession()).getAttribute("accountNumSessVal")%>');">Payment History</a></li>
              <li><a href="JavaScript:void(0)">Auto Pay</a>
                <!--<ul style="">
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
              <li><a href="JavaScript:void(0)">Dropdown item</a>
                <ul style="">
                  <li><a href="JavaScript:void(0)">Dropdown item</a></li>
                  <li><a href="JavaScript:void(0)">Dropdown item</a></li>
                  <li><a href="JavaScript:void(0)">Dropdown item</a></li>
                  <li><a href="JavaScript:void(0)">Dropdown item</a></li>
                </ul>
              </li>
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
            </ul>
--> </li>
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
              <li><a href="JavaScript:void(0)">Dropdown item</a></li>
            </ul>
          </li>
          <li style=""><a href="billusage.html">Billing & Usage</a>
            <ul style="display: none;">
              <li class=""><a href="billusage.html">Bill Summary</a></li>
              <li><a href="JavaScript:void(0)">View Bill</a></li>
              <li><a href="javaScript:btnClick('getBillingHistory.do?accountNumber=<%=(String)(request.getSession()).getAttribute("accountNumSessVal")%>');">Billing History</a></li>
            <li><a href="javaScript:btnClick('ebillenrollment.jsp');">E-bill Enrollment</a></li>
            <li><a href="budgetBilling.html">Budget Billing Enrollment</a></li>

            </ul>
          </li>
          <li style=""><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
