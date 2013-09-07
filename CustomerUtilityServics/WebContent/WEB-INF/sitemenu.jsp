       <ul class="MenuBar shadow clearfix pinned-colelem" id="menuBar"><!-- row -->
        <li class="MenuItemContainer clearfix grpelem menuItem" onClick="underConstructionClick('paymybill')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>Pay My Bill</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
         <div class="SubMenu  MenuLevel1 clearfix subMenuItems"><!-- vertical box -->
          <ul class="SubMenuView clearfix colelem"><!-- vertical box -->
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('cdpayment')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Credit/Debit Card Payment</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('electroniccheck')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Electronic Check</p></div>
            </div>
           </li>
          </ul>
         </div>
        </li>
        <li class="MenuItemContainer clearfix grpelem menuItem" onClick="underConstructionClick('myaccount')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>My Account</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
         <div class="SubMenu  MenuLevel1 clearfix subMenuItems"><!-- vertical box -->
          <ul class="SubMenuView clearfix colelem"><!-- vertical box -->
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('callAccountSumWithAccNum.do')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Account Summary</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('getBillingHistory.do?accountNumber=<%=(String)(request.getSession()).getAttribute("accountNumSessVal")%>')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Billing History</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('paymenthistory')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Payment History</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('addaccount.jsp')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Add Account</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('selectAccountProcess.do')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Select Account</p></div>
            </div>
           </li>
           
          </ul>
         </div>
        </li>
        <li class="MenuItemContainer clearfix grpelem menuItem" onClick="underConstructionClick('customercare')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>Customer Care</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
         <div class="SubMenu  MenuLevel1 clearfix subMenuItems"><!-- vertical box -->
          <ul class="SubMenuView clearfix colelem"><!-- vertical box -->
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('ccservice')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Contact Customer Service</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('askquestion')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Ask A Question</p></div>
            </div>
           </li>
          </ul>
         </div>
        </li>
        <li class="MenuItemContainer clearfix grpelem menuItem" onClick="underConstructionClick('saveenergy')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>Save Energy &amp; Money</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
         <div class="SubMenu  MenuLevel1 clearfix subMenuItems"><!-- vertical box -->
          <ul class="SubMenuView clearfix colelem"><!-- vertical box -->
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('whynaturalgas')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Why Natural Gas</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('paymybill')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv" onClick="underConstructionClick('naturalgasforhome')"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Natural Gas for Your Home</p></div>
            </div>
           </li>
          </ul>
         </div>
        </li>
        <li class="MenuItemContainer clearfix grpelem menuItem" onClick="underConstructionClick('safety')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>My Profile</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
         <div class="SubMenu  MenuLevel1 clearfix subMenuItems"><!-- vertical box -->
          <ul class="SubMenuView clearfix colelem"><!-- vertical box -->
           <li class="MenuItemContainer clearfix colelem" onClick="btnClick('resetPasswd.jsp')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Reset Password</p></div>
            </div>
           </li>
           <li class="MenuItemContainer clearfix colelem" onClick="underConstructionClick('call')"><!-- horizontal box -->
            <div class="MenuItem MenuItemWithSubMenu clearfix grpelem submenuItemDiv"><!-- horizontal box -->
             <div class="grpelem menuicon"><!-- image --></div>
             <div class="MenuItemLabel NoWrap clearfix grpelem submenucontent"><!-- content --><p>Edit Profile</p></div>
            </div>
           </li>
          </ul>
         </div>
        </li>
         <li class="MenuItemContainer clearfix grpelem menuItem" onClick="btnClick('logout.jsp')"><!-- vertical box -->
         <div class="MenuItem MenuItemWithSubMenu clearfix menuItemDiv"><!-- horizontal box -->
          <div class="grpelem menuicon"><!-- image --></div>
          <div class="MenuItemLabel NoWrap clearfix grpelem menucontent"><!-- content --><p>Logout</p></div>
          <div class="grpelem arrow"><!-- image --></div>
         </div>
           </li>
        
       </ul>

