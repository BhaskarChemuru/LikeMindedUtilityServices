<div class="page">
    <div class="formHeader">Forgot UserID or Password</div>
    <div class="form">
        <form method="post" action="./?p=process&" onSubmit="validateForm(this)">
            <input type="hidden" name="action" value="forgotu">
            <div class="sectionHeader">Find UserID</div>
            <div class="label"><label for="accountnumber">Account Number*</label></div>
            <div class="input"><input id="accountnumber" name="accountnumber" type="text" required /></div>
            <div class="label"><label for="lastdigits">Last 4 digits of SSN / SIN / TIN *</label></div>
            <div class="input"><input id="lastdigits" type="password" name="lastdigits" required /></div>
            <div class="buttonrow">
                <div><button class="button-lg" type="submit">Continue</button></div>
            </div>
        </form>
    </div>
    <div class="form">
        <form method="post" action="./?p=process&" onSubmit="validateForm(this)">
            <input type="hidden" name="action" value="forgotp">
            <div class="sectionHeader">Find/Reset Password</div>
            <div class="label"><label for="userid_emailaddress">UserID or Email Address*</label></div>
            <div class="input"><input id="userid_emailaddress" name="userid_emailaddress" type="email" required /></div>
            <div class="buttonrow">
                <div><button class="button-lg" type="submit">Continue</button></div>
            </div>
        </form>
    </div>
</div>
