package com.mss.cus.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.servlet.ModelAndView;

import com.mss.cus.util.ConvertXMToJavaObjects;
import com.mss.cus.util.GenerateJSONDataForGraph;
import com.mss.cus.xml.jaxb.AccountSummary;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.core.util.MultivaluedMapImpl;
 
@Controller
//@RequestMapping("/registration")

public class CUSRegistrationController {
 
	//public String restURLPrefix = "http://209.192.100.90:8081/mcusrest/rest/";
	public String restURLPrefix = "http://localhost:8080/mcusrest/rest/";
	@RequestMapping(value="/registration", method = RequestMethod.GET)
	protected ModelAndView registerCustomer() throws Exception {
 
		System.err.println("ekkada unnanu");
		ModelAndView model = new ModelAndView("registration");
		//model.addObject("msg", "hello world");
 
		return model;
	}
	
	@RequestMapping(value="/validateAccount.do", method = RequestMethod.POST)
	protected @ResponseBody String validaeAccount(@RequestParam(value="accountNum", required=true)  String accountNumber, @RequestParam(value="ssnVal", required=true) String last4SSN) throws Exception {
		
		//call REST Service method with input data to validate the account
		String svcURL = restURLPrefix +"validateAccount?accountNumber="+accountNumber+"&last4SSN="+last4SSN;
		HttpURLConnection connection;
		URL url = new URL(svcURL);
		connection = (HttpURLConnection) url.openConnection();
		connection.setRequestMethod("GET");
		
		BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		String str;
		StringBuffer sb = new StringBuffer();
		while ((str = br.readLine()) != null) {
			sb.append(str);
			sb.append("\n");
		}
		 System.out.println("result:="+sb.toString());
		
		return sb.toString();
	}

	@RequestMapping(value="/registerCustomer.do", method = RequestMethod.POST)
	protected ModelAndView registerCustomer(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//call REST Service method with input data to validate the account
		
		ClientConfig clientConfig = new DefaultClientConfig();

		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNum", request.getParameter("acctNumHidden"));
		requestParams.add("ssnVal", request.getParameter("ssnHidden"));
		requestParams.add("firstName", request.getParameter("firstName"));
		requestParams.add("lastName", request.getParameter("lastName"));
		requestParams.add("emailAddress", request.getParameter("emailAddress"));
		requestParams.add("password", request.getParameter("passwd"));
		requestParams.add("phraseIdentifier", request.getParameter("phraseIdentifier"));
		requestParams.add("phrase", request.getParameter("phrase"));
		requestParams.add("serviceAddr", request.getParameter("serviceAddrToadd"));
		
	

		//userDetails = (UserDetails) webResource.path("createUserProfile").queryParams(requestParams).accept(MediaType.APPLICATION_JSON).get(MediaType.TEXT_PLAIN);		
		ModelAndView mav = null;
		//Map<String, Object> model = new HashMap<String, Object>();
		String result =  webResource.path("createUserProfile").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (result.equalsIgnoreCase("success"))
		{
			/*mav = new ModelAndView("accthistory");
			mav.addObject("dispmessage", "User Profile has been successfully created.");
			return mav;*/
			return callAccountSumProcess(request.getParameter("emailAddress"), request);
		}
		mav = new ModelAndView("registration");
		mav.addObject("dispmessage", "Error during the user profile creation. Please contact System admin for further assistance.");
		return mav;
	}

	@RequestMapping(value="/ebillEnrollment.do", method = RequestMethod.POST)
	protected ModelAndView ebillEnrollment(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//call REST Service method with input data to validate the account
		
		ClientConfig clientConfig = new DefaultClientConfig();

		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNum", request.getParameter("acctNumHidden"));
		requestParams.add("emailAddress", request.getParameter("emailaddr"));
		requestParams.add("enrollmentInd", "I");
	
		ModelAndView mav = null;
		String result =  webResource.path("ebillEnrollmentService").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (result.equalsIgnoreCase("success"))
		{
			mav = new ModelAndView("ebillenrollment");
			mav.addObject("dispmessage", "You are successfully enrolled into Email Bill program.");
			return mav;
			//return callAccountSumProcess(request.getParameter("emailAddress"), request);
		}
		mav = new ModelAndView("ebillenrollment");
		mav.addObject("dispmessage", "Error during the Email Bill Enrollment process. Please contact System admin for further assistance.");
		return mav;
	}

	@RequestMapping(value="/getuserid", method = RequestMethod.POST)
	protected @ResponseBody String getuserid(@RequestParam(value="accountNum", required=true)  String accountNumber, @RequestParam(value="ssnVal", required=true) String last4SSN) throws Exception {
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNum", accountNumber);
		requestParams.add("ssnVal", last4SSN);

		return webResource.path("findUserId").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
	}

	@RequestMapping(value="/resetPassword", method = RequestMethod.POST)
	protected @ResponseBody String forgotPassword(@RequestParam(value="userId", required=true)  String userId) throws Exception {
		
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("userId", userId);

		return webResource.path("getSecurityPhrase").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);			
		//return userDetails;
	}

	@RequestMapping(value="/getJSonGraphData", method = RequestMethod.POST)
	protected @ResponseBody String getJSonGraphData(@RequestParam(value="accountNumber", required=true)  String accountNum, @RequestParam(value="serviceNumber", required=true)  String serviceNum) throws Exception {
		
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNumber", accountNum);
		requestParams.add("serviceNumber", serviceNum);
		String consumptionData = webResource.path("getConsumptionHistory").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		//JSONObject jsonObject = (JSONObject)JSONSerializer.toJSON(consumptionData);
        
        //jsonObject.put("consuption", jsonArray);
       // System.out.println(jsonObject);
        //return jsonObject.toString();
		//return 	((JSONObject)JSONSerializer.toJSON(new GenerateJSONDataForGraph().getJSONGrpahDataForConsumption(consumptionData))).toString();		
		return new GenerateJSONDataForGraph().getJSONGrpahDataForConsumption(consumptionData);
	}	
	
	@RequestMapping(value="/updatePassword", method = RequestMethod.POST)
	protected ModelAndView updatePassword(@RequestParam(value="userIdHiden", required=true)  String userId, @RequestParam(value="passwd", required=true)  String password) throws Exception {
		
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		System.out.println("userId from updatePassword:"+userId);
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();

		requestParams.add("userId", userId);
		requestParams.add("password", password);
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		
		String updateStatus = webResource.path("resetPassword").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);	
		if (updateStatus.equalsIgnoreCase("success"))
		{
			//model.put("dispmessage", "Password has been updated successfully.");
			//return new ModelAndView("accthistory", model);
			mav = new ModelAndView("accthistory");
			mav.addObject("dispmessage", "Password has been updated successfully.");
			return mav;
		}
		
		mav = new ModelAndView("forgotPassword");
		mav.addObject("dispmessage", "Password reset is failed. Please contact System admin for further assistance.");
		return mav;
	}	
	
	public ModelAndView callAccountSumProcess(String userId, HttpServletRequest request)
	{
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		HttpSession session =  request.getSession();
		if ((String) session.getAttribute("userNameSessVal") == null)
			session.setAttribute("userNameSessVal", userId);
		
		ModelAndView mav = null;
		
		try
		{
			requestParams = new MultivaluedMapImpl();
			AccountSummary acctSummary = null;
			requestParams.add("userId", userId);
			String accountNumber = webResource.path("getAccountNumbersForUser").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
			//System.err.println("accountNumbers from loginProcesses: "+accountNumbers);
			
			if (accountNumber != null || accountNumber != "")
			{
				//StringTokenizer strToken = new StringTokenizer(accountNumbers,"|");
				//String accountNumVal = strToken.nextToken();
				requestParams = new MultivaluedMapImpl();
				requestParams.add("accountNumber", accountNumber);
				session.setAttribute("accountNumSessVal", accountNumber);
				String acttSummary = webResource.path("getAccountSummary").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
				System.err.println("%%%%%%%%%%%%% acttSummary:  "+acttSummary);
				if (!"fail".equalsIgnoreCase(acttSummary))
				{
					acctSummary = new ConvertXMToJavaObjects().getAccountSummaryData(acttSummary);
					//(Service) (acctSummary.getServices().getService()).
					
					session.setAttribute("customerName", acctSummary.getCustomerName().getFirstName()+" "+acctSummary.getCustomerName().getLastName());
				}
				else
				{
					mav = new ModelAndView("error");
					mav.addObject("dispmessage", "We are sorry, please contact system admin for furhter help.");
					//mav.addObject("accountSummaryObj", acctSummary);
					return mav;
				}
			}
			mav = new ModelAndView("accthistory");
			mav.addObject("dispmessage", "User has logged in successfully.");
			mav.addObject("accountSummaryObj", acctSummary);
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return mav;
	}
	
	//@SuppressWarnings()
	@RequestMapping(value="/selectAccountProcess.do", method = RequestMethod.GET)
	public ModelAndView selectAccountProcess(HttpServletRequest request)
	{
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		ModelAndView mav = null;
		
		try
		{
			requestParams = new MultivaluedMapImpl();
			String userId = (String)request.getSession().getAttribute("userNameSessVal");
			if (userId == null || userId == "")
			{
				mav = new ModelAndView("mcuslogin");
				mav.addObject("dispmessage", "Session has expired, please login.");
				return mav;
			}
			requestParams.add("userId", userId);
			String acctNumsDataList = webResource.path("getAccountNumbersListForUser").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
			System.err.println("getAccountNumbersListForUser: from loginProcesses: "+acctNumsDataList);
			
			if (acctNumsDataList != null || acctNumsDataList != "")
			{
				mav = new ModelAndView("selectaccount");
				mav.addObject("accountSumData", acctNumsDataList);
				
			} /*else 
			{
				mav = new ModelAndView("selectaccount");
				mav.addObject("dispmessage", "No Accounts returned.");
			}*/
			
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return mav;
	}

	@RequestMapping(value="/callAccountSumWithAccNum.do", method = RequestMethod.GET)
	public ModelAndView callAccountSumWithAccNum(HttpServletRequest request)
	{
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		HttpSession session =  request.getSession();
		ModelAndView mav = null;
		String accountNumber = null;
		
		try
		{
			requestParams = new MultivaluedMapImpl();
			AccountSummary acctSummary = null;
			if(request.getParameter("acctNumberReq") != null)
				accountNumber = request.getParameter("acctNumberReq");
			else
				accountNumber = (String)session.getAttribute("accountNumSessVal");
			//System.err.println("accountNumbers from loginProcesses: "+accountNumbers);
			
			if (accountNumber != null || accountNumber != "")
			{
				requestParams.add("accountNumber", accountNumber);
				String acttSummary = webResource.path("getAccountSummary").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
				if (!"fail".equalsIgnoreCase(acttSummary))
					acctSummary = new ConvertXMToJavaObjects().getAccountSummaryData(acttSummary);
				else
				{
					mav = new ModelAndView("error");
					mav.addObject("dispmessage", "We are sorry, please contact system admin for further help.");
					//mav.addObject("accountSummaryObj", acctSummary);
					return mav;
				}

			}
			mav = new ModelAndView("accthistory");
			mav.addObject("accountSummaryObj", acctSummary);
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return mav;
	}

	@RequestMapping(value="/updateDefaultAcctStatus.do", method = RequestMethod.POST)
	public ModelAndView updateDefaultAcctStatus(HttpServletRequest request)
	{
		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		HttpSession session =  request.getSession();
		ModelAndView mav = null;
		String accountNumber = null;
		String userId = null;
		
		try
		{
			requestParams = new MultivaluedMapImpl();
			userId = (String)session.getAttribute("userNameSessVal");
			if(request.getParameter("acctNumberReq") != null)
				accountNumber = request.getParameter("acctNumberReq");
			if (userId == null || userId == "")
			{
				mav = new ModelAndView("mcuslogin");
				mav.addObject("dispmessage", "Session has expired, please login.");
				return mav;
			}
			if (accountNumber != null || accountNumber != "")
			{
				requestParams.add("accountNum", accountNumber);
				requestParams.add("userId", userId);
				String status = webResource.path("setDefaulAccountStatus").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
				if ("success".equalsIgnoreCase(status))
				{
					session.setAttribute("accountNumSessVal", accountNumber);
					return callAccountSumWithAccNum(request);
				}
				else {
					mav = new ModelAndView("selectaccount");
					mav.addObject("dispmessage", "Error, please try again.");
				}
			}
		
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return mav;
	}
	
	@RequestMapping(value="/addAccountProcess.do", method = RequestMethod.POST)
	protected ModelAndView addAccountProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		HttpSession session =  request.getSession();
		//session.setAttribute("userNameSessVal", userId);
		String acctNumtoAdd = request.getParameter("acctNumToAdd");
		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNumber", acctNumtoAdd);
		requestParams.add("userId", (String)session.getAttribute("userNameSessVal"));
		requestParams.add("serviceAddr", request.getParameter("serviceAddrToadd"));
		
		
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String updateStatus = webResource.path("addAccountForUser").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);	
		if (updateStatus.equalsIgnoreCase("success"))
		{
			session.setAttribute("accountNumSessVal", acctNumtoAdd);
			return callAccountSumWithAccNum(request);
		}

		mav = new ModelAndView("addaccount");
		mav.addObject("dispmessage", "Add account is failed, please try again.");
		return mav;
	}
	
	@RequestMapping(value="/loginProcesses", method = RequestMethod.POST)
	protected ModelAndView loginProcesses(@RequestParam(value="username", required=true)  String userId, @RequestParam(value="cpassword", required=true)  String password, HttpServletRequest request, HttpServletResponse response) throws Exception {
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);
		HttpSession session =  request.getSession();
		session.setAttribute("userNameSessVal", userId);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("userId", userId);
		requestParams.add("password", password);
		
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String updateStatus = webResource.path("loginValidation").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);	
		if (updateStatus.equalsIgnoreCase("success"))
		{
			return callAccountSumProcess(userId, request);
		}

		mav = new ModelAndView("mcuslogin");
		mav.addObject("dispmessage", "Login failed, please try again.");
		return mav;
	}

	@RequestMapping(value="/getBillingHistory", method = RequestMethod.GET)
	protected ModelAndView getBillingHistory(@RequestParam(value="accountNumber", required=true)  String accountNumber, HttpServletRequest request, HttpServletResponse response) throws Exception {
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNumber", accountNumber);
				
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String billHistStr = webResource.path("callBillHistoryService").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (billHistStr != null)
		{
			
			mav = new ModelAndView("billinghistory");
			//mav.addObject("billhistoryObj", new ConvertXMToJavaObjects().getBillHistoryData(billHistStr));
			mav.addObject("billhistoryData", new ConvertXMToJavaObjects().getBillHistoryDataAsString(billHistStr));
			return mav;
		}

		mav = new ModelAndView("billinghistory");
		mav.addObject("dispmessage", "No Billing History data available.");
		return mav;
	}

	@RequestMapping(value="/getPaymentHistory", method = RequestMethod.GET)
	protected ModelAndView getPaymentHistory(@RequestParam(value="accountNumber", required=true)  String accountNumber, HttpServletRequest request, HttpServletResponse response) throws Exception {
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("accountNumber", accountNumber);
				
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String paymentHistStr = webResource.path("callPaymentHistoryService").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (paymentHistStr != null)
		{
			
			mav = new ModelAndView("paymenthistory");
			mav.addObject("paymentHistoryData", new ConvertXMToJavaObjects().getPaymentHistoryDataAsString(paymentHistStr));
			return mav;
		}

		mav = new ModelAndView("paymenthistory");
		mav.addObject("dispmessage", "No Paymnet History data available.");
		return mav;
	}
	
	@RequestMapping(value="/changePassword", method = RequestMethod.POST)
	protected ModelAndView changePassword(@RequestParam(value="userIdHiden", required=true)  String userId, @RequestParam(value="oldpasswd", required=true)  String oldpassword, @RequestParam(value="passwd", required=true)  String newpassword) throws Exception {
		
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		//WebResource webResource = client.resource("http://209.192.100.90:8081/mcusrest/rest/");
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("userId", userId);
		requestParams.add("password", oldpassword);
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String updateStatus = webResource.path("loginValidation").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (updateStatus.equalsIgnoreCase("success"))
		{
			
			requestParams = new MultivaluedMapImpl();
			requestParams.add("userId", userId);
			requestParams.add("password", newpassword);
			String updateStatus2 = webResource.path("resetPassword").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);	
			if (updateStatus2.equalsIgnoreCase("success"))
			{
				mav = new ModelAndView("accthistory");
				mav.addObject("dispmessage", "Password has been reset successfully.");
				return mav;
			}

		} else {
			
			mav = new ModelAndView("resetPassword");
			mav.addObject("dispmessage", "Old Password that you have provided is not matching.");
			return mav;
		}
		mav = new ModelAndView("forgotPassword");
		mav.addObject("dispmessage", "Password reset is failed. Please contact System admin for further assistance.");
		return mav;
	}
	
	@RequestMapping(value="/budgetBillingProcess", method = RequestMethod.POST)
	protected ModelAndView budgetBillingProcess(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		

		ClientConfig clientConfig = new DefaultClientConfig();
		Client client = Client.create(clientConfig);
		//WebResource webResource = client.resource("http://209.192.100.90:8081/mcusrest/rest/");
		WebResource webResource = client.resource(restURLPrefix);

		MultivaluedMap<String, String> requestParams = new MultivaluedMapImpl();
		requestParams.add("userId", userId);
		requestParams.add("password", oldpassword);
		//Map<String, Object> model = new HashMap<String, Object>();
		ModelAndView mav = null;
		String updateStatus = webResource.path("loginValidation").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);
		if (updateStatus.equalsIgnoreCase("success"))
		{
			
			requestParams = new MultivaluedMapImpl();
			requestParams.add("userId", userId);
			requestParams.add("password", newpassword);
			String updateStatus2 = webResource.path("resetPassword").queryParams(requestParams).accept(MediaType.TEXT_PLAIN).get(String.class);	
			if (updateStatus2.equalsIgnoreCase("success"))
			{
				mav = new ModelAndView("accthistory");
				mav.addObject("dispmessage", "Password has been reset successfully.");
				return mav;
			}

		} else {
			
			mav = new ModelAndView("resetPassword");
			mav.addObject("dispmessage", "Old Password that you have provided is not matching.");
			return mav;
		}
		mav = new ModelAndView("forgotPassword");
		mav.addObject("dispmessage", "Password reset is failed. Please contact System admin for further assistance.");
		return mav;
	}	

	
}
