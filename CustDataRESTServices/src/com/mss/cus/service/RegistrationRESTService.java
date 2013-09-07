package com.mss.cus.service;

/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	RegistrationService.java
 **	Description		:	
 **	Author			:	Bhaskar Reddy	
 **	Created Date	:	June 02, 2013
 ************************************************************
 **	Change History 
 **	Header: 
 ************************************************************
 **	Date		Author    				Description:
 **	--------	--------   				-----------------
 **	June 02 2013       Bhaskar Reddy			Created
 ************************************************************
 */
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;




import com.mss.cus.dao.RegistrationDAO;
import com.mss.cus.dataobject.UserDetails;




@Path("/")
public class RegistrationRESTService {
	

	/**
	 * This is RESTful webservice for registration activities such as validating account, find account etc.,
	 */
	public RegistrationRESTService()
	{
		//Any default initialization objects, parameters etc.,
	}

	@GET
	@Path("/validateAccount")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	//@Produces(MediaType.APPLICATION_JSON)	
	@Produces({ MediaType.TEXT_PLAIN })	
	
	public String validateAccount(@QueryParam("accountNumber") String accountNumber, @QueryParam("last4SSN") String last4SSN) throws Exception  { 
		
		if((accountNumber == null || last4SSN.trim().length() == 0)) {
			
			return null;
		} 
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.validateAccount(accountNumber, last4SSN);
		
		//return "success";
		
	}
	
	@GET
	@Path("/createUserProfile")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({ MediaType.TEXT_PLAIN })	
		
	public String createUserProfile(@QueryParam("accountNum") String accountNumber, 
			@QueryParam("ssnVal") String last4SSN, @QueryParam("firstName") String firstName, @QueryParam("lastName") String lastName, 
			@QueryParam("emailAddress") String emailAddress, @QueryParam("password") String password, @QueryParam("phraseIdentifier") String phraseIdentifier, 
			@QueryParam("phrase") String phrase, @QueryParam("serviceAddr") String serviceAddr) throws Exception  { 
		
		String result = null;
		UserDetails userDetails = new UserDetails();
		System.out.println("inside createUserProfile");
		System.out.println("inside createUserProfile: emailAddress"+emailAddress);
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		result = registrationDAO.createUserProfile(accountNumber, last4SSN, firstName, lastName, emailAddress, password, phraseIdentifier, phrase, serviceAddr );
		userDetails.setResult(result);
		userDetails.setUserid("dummy");
		userDetails.setSecurityPhrase("dummy");
		userDetails.setSecurityPhraseAnswer("dummy");
		userDetails.setUserIdList("dummy");
		
		return result;
		
	}
	
	@GET
	@Path("/setDefaulAccountStatus")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({ MediaType.TEXT_PLAIN })	
		
	public String setDefaulAccountStatus(@QueryParam("accountNum") String accountNumber, @QueryParam("userId") String useId) throws Exception  { 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.callSetDefaultAcctStatus(accountNumber, useId);
		
	}

	@GET
	@Path("/findUserId")
	@Consumes(MediaType.APPLICATION_JSON)
	//@Produces(MediaType.APPLICATION_JSON)	
	@Produces( {MediaType.TEXT_PLAIN })
	
	public String findUserId(@QueryParam("accountNum") String accountNumber, 
			@QueryParam("ssnVal") String last4SSN) throws Exception  { 
		
		//String result = null;
		
		System.out.println("accountNum from findUserId:"+accountNumber);
		if((accountNumber == null || last4SSN.trim().length() == 0)) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.findUserId(accountNumber, last4SSN);
				
	}

	@GET
	@Path("/getSecurityPhrase")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String getSecurityPhrase(@QueryParam("userId") String userId) throws Exception  { 
		
		if(userId == null ) {
			
			return null;
		} 
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getSecurityPhrase(userId);
		
	}
	
	@GET
	@Path("/loginValidation")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String loginValidation(@QueryParam("userId") String userId, @QueryParam("password") String password) throws Exception  { 
		
		if(userId == null || password == null) {
			
			return null;
		} 
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.doLoginValidation(userId, password);
		
	}

	@GET
	@Path("/getAccountNumbersForUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String getAccountNumbersForUser(@QueryParam("userId") String userId) throws Exception  { 
		
		if(userId == null) {
			
			return null;
		} 
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getAcctNumberForUser(userId);
		
	}
	@GET
	@Path("/getAccountNumbersListForUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String getAccountNumbersListForUser(@QueryParam("userId") String userId) throws Exception  { 
		
		if(userId == null) {
			
			return null;
		} 
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getAcctNumbersListUser(userId);
		
	}
	
	@GET
	@Path("/resetPassword")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String resetPassword(@QueryParam("userId") String userId, @QueryParam("password") String password) throws Exception  { 
		
		System.out.println("Inside resetPassword Service");
		System.out.println("Inside resetPassword Service, userId: "+userId);
		System.out.println("Inside resetPassword Service, password: "+password);
		if(userId == null || password == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.resetPassword(userId, password);
		
	}

	@GET
	@Path("/getAccountSummary")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String getAccountSummary(@QueryParam("accountNumber") String accountNum) throws Exception  { 
		
		System.out.println("Inside getAccountSummary Service");
		System.out.println("Inside getAccountSummary Service, accountNum: "+accountNum);
		if(accountNum == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getCustAccountInfo(accountNum);
		
	}

	@GET
	@Path("/addAccountForUser")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String addAccountForUser(@QueryParam("accountNumber") String accountNum, @QueryParam("userId") String userId, @QueryParam("serviceAddr") String serviceAddr) throws Exception  { 
		
		if(accountNum == null || userId == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.addAccountForUser(accountNum, userId, serviceAddr);
		
	}
	
	@GET
	@Path("/callBillHistoryService")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String callBillHistoryService(@QueryParam("accountNumber") String accountNum) throws Exception  { 
		
		if(accountNum == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getBillHistoryData(accountNum);
		
	}
	@GET
	@Path("/callPaymentHistoryService")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String callPaymentHistoryService(@QueryParam("accountNumber") String accountNum) throws Exception  { 
		
		if(accountNum == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getPaymentHistoryData(accountNum);
		
	}
	
	@GET
	@Path("/getConsumptionHistory")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String getConsumptionHistory(@QueryParam("accountNumber") String accountNum, @QueryParam("serviceNumber") String serviceNum) throws Exception  { 
		
		System.out.println("Inside getConsumptionHistory Service");
		System.out.println("Inside getConsumptionHistory Service, accountNum: "+accountNum);
		if(accountNum == null || serviceNum == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.getConsumptionHistory(accountNum, serviceNum);
		
	}
	@GET
	@Path("/ebillEnrollmentService")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces({MediaType.TEXT_PLAIN })	
	
	public String ebillEnrollmentService(@QueryParam("accountNum") String accountNum, @QueryParam("emailAddress") String emailAddress, @QueryParam("enrollmentInd") String enrollmentInd) throws Exception  { 
		
		System.out.println("Inside getConsumptionHistory Service");
		System.out.println("Inside getConsumptionHistory Service, accountNum: "+accountNum);
		if(accountNum == null || emailAddress == null || enrollmentInd == null) {
			
			return null;
		} 
		
		RegistrationDAO registrationDAO = new RegistrationDAO();
		return registrationDAO.performEBillEnroll(accountNum, emailAddress, enrollmentInd);
		
	}
	
}
