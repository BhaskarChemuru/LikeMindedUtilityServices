package com.mss.cus.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;


import com.mss.cus.constants.CUSWebServicesConstants;
import com.mss.cus.dataobject.UserDetails;
import com.mss.cus.util.CUSResourceBundle;
import com.mss.cus.util.DatabaseConnection;
//import com.mss.cus.xml.jaxb.AccountSummaryold;


/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	RegistrationDAO.java
 **	Description		:	
 **	Author			:	Bhaskar Reddy	
 **	Created Date	:	May 31, 2013
 ************************************************************
 **	Change History 
 **	Header: 
 ************************************************************
 **	Date		Author    				Description:
 **	--------	--------   				-----------------
 **	May 31st 2013       Bhaskar Reddy			Created
 ************************************************************
 */


public class RegistrationDAO {

	/**
	 * This dao serves the registration services such as validating account, account registration, forgot password etc., 
	 * @author Bhaskar Reddy
	 *
	 */
	
	public RegistrationDAO()
	{
		//initialize required objects
	}
	
	/**
	 * This is to validate the account in Banner database.
	 * @param accountNumber
	 * @param last4SSN
	 * @return BOOLEAN value of true or false
	 */
	
	
	public  String validateAccount(String accountNumber, String last4SSN)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			//final PreparedStatement validateStatement =
				//	connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_VALIDATE_ACCOUNT));
			
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_VALIDATE_ACCT(?,?,?,?,?,?,?,?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,"TST");
			callableStmt.setString(2,accountNumber );
			callableStmt.setString(3,"" );
			callableStmt.setString(4,"" );
			callableStmt.setString(5,"" );
			callableStmt.setString(6,"" );
			callableStmt.setString(7,"" );
			callableStmt.setString(8,"" );
			callableStmt.setString(9,"" );
			callableStmt.registerOutParameter(10,Types.VARCHAR );
			callableStmt.registerOutParameter(11,Types.VARCHAR );
			callableStmt.executeQuery();
			result = callableStmt.getString(10);
			System.out.println("Output from procedure:"+result );
			if (result == null)
			{
				result = "fail";
			}
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	}

	/**
	 * This is to validate the account in Banner database.
	 * @param accountNumber
	 * @param last4SSN
	 * @return BOOLEAN value of true or false
	 */
	
	
	public  String getCustAccountInfo(String accountNumber)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			//final PreparedStatement validateStatement =
				//	connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_VALIDATE_ACCOUNT));
			
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_GET_ACCT_SUMMARY(?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,"TST");
			callableStmt.setString(2,accountNumber );
			callableStmt.registerOutParameter(3,Types.VARCHAR );
			callableStmt.registerOutParameter(4,Types.VARCHAR );
			callableStmt.executeQuery();
			result = callableStmt.getString(3);
			System.out.println("Output from procedure from acctsummary:"+result );
			if (result == null)
			{
				result = "fail";
			}
			//AccountSummaryold acctSummary = new ConvertXMToJavaObjects().getAccountSummaryData(result);
			//System.err.println("Payment value:"+(acctSummary.getPayments()).getLastPaymentAmount());
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	} 

	/**
	 * This is to validate the account in Banner database.
	 * @param accountNumber
	 * @param last4SSN
	 * @return BOOLEAN value of true or false
	 */
	
	
	public  String performEBillEnroll(String accountNumber, String emailAddr, String enrollmentInd)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			//final PreparedStatement validateStatement =
				//	connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_VALIDATE_ACCOUNT));
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_ENROLL_EBILL(?,?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,accountNumber);
			callableStmt.setString(2,"TST" );
			callableStmt.setString(3,enrollmentInd );
			callableStmt.setString(4,emailAddr );
			callableStmt.registerOutParameter(5,Types.VARCHAR );
			callableStmt.registerOutParameter("P_INOUT_ACCOUNT_NUM",Types.VARCHAR );
			
			callableStmt.executeQuery();
			result = callableStmt.getString("P_INOUT_ACCOUNT_NUM");
			System.out.println("Output from procedure from performEBillEnroll:"+result );
			if (result == null)
			{
				result = "fail";
			}
			else
				result = "success";
			//AccountSummaryold acctSummary = new ConvertXMToJavaObjects().getAccountSummaryData(result);
			//System.err.println("Payment value:"+(acctSummary.getPayments()).getLastPaymentAmount());
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	} 

	public  String getConsumptionHistory(String accountNumber, String serviceNum)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			//final PreparedStatement validateStatement =
				//	connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_VALIDATE_ACCOUNT));
			
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_GET_CONSUMPTION_HIST(?,?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,accountNumber );
			callableStmt.setString(2,"TST");
			callableStmt.setInt(3,new Integer(serviceNum).intValue());
			callableStmt.registerOutParameter(4,Types.VARCHAR );
			callableStmt.registerOutParameter(5,Types.VARCHAR );
			callableStmt.executeQuery();
			result = callableStmt.getString(4);
			System.out.println("Output from procedure from acctsummary:"+result );
			if (result == null)
			{
				result = "fail";
			}
			//AccountSummary acctSummary = new ConvertXMToJavaObjects().getAccountSummaryData(result);
			//System.err.println("Payment value:"+(acctSummary.getPayments()).getLastPaymentAmount());
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	}

	public  String getBillHistoryData(String accountNumber)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			//final PreparedStatement validateStatement =
				//	connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_VALIDATE_ACCOUNT));
			
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_GET_BILLING_HIST(?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,accountNumber );
			callableStmt.setString(2,"IVR");
			callableStmt.registerOutParameter(3,Types.VARCHAR );
			callableStmt.registerOutParameter(4,Types.VARCHAR );
			callableStmt.executeQuery();
			result = callableStmt.getString(3);
			//System.out.println("Output from procedure from acctsummary:"+result );
			if (result == null)
			{
				result = "fail";
			}
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	}

	public  String getPaymentHistoryData(String accountNumber)
	{
		
		String result = null;
		Connection connecton = null;
		CallableStatement callableStmt = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			 connecton = DatabaseConnection.getConnectionWithJNDI();
			callableStmt = connecton.prepareCall("{call SELF_SERVICE_PROTAL_DB_MODULE.P_GET_PAYMENT_HISTORY(?,?,?,?)}");
			
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			callableStmt.setString(1,accountNumber );
			callableStmt.setString(2,"IVR");
			callableStmt.registerOutParameter(3,Types.VARCHAR );
			callableStmt.registerOutParameter(4,Types.VARCHAR );
			callableStmt.executeQuery();
			result = callableStmt.getString(3);
			//System.out.println("Output from procedure from acctsummary:"+result );
			if (result == null)
			{
				result = "fail";
			}
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		finally {
			
			try {
				callableStmt.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}

		return result;
	}
	
	public  String createUserProfile(String accountNumber, String last4SSN, String firstName, String lastName, String emailAddress, String password
			, String phraseIdentifier, String phrase, String serviceAddr)
	{
		
		System.out.println("inside createUserProfile DAO, connection is successfull11111.");
		//String result = null;
		PreparedStatement createStatement = null;
		Connection connecton = null;
		try
		{
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
			connecton.setAutoCommit(false);
			System.out.println("inside createUserProfile DAO, connection is successfull.");
			createStatement =
					connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_CREATE_USER));
			
		
			//cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
			
			//createStatement.setString(1, MUSI_CUST_ID_SEQ.NEXTVAL);
			createStatement.setString(1,emailAddress );
			createStatement.setString(2, firstName);
			createStatement.setString(3,lastName );
			createStatement.setString(4,emailAddress);
			createStatement.setString(5,password );
			createStatement.setString(6,phraseIdentifier );
			createStatement.setString(7,phrase );
			createStatement.execute();
			createStatement.close();
			
			// Insert a row into customer registration association table.
			createStatement =
					connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_CREATE_USER_ACCOUNT));
			createStatement.setString(1, emailAddress);
			createStatement.setString(2,accountNumber );
			createStatement.setString(3,"Y" );
			createStatement.setString(4,serviceAddr );
			createStatement.execute();
			connecton.commit();
			return "success";
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
			try { connecton.rollback();}catch(Exception e){}
		}
		catch (Exception e)
		{
			e.printStackTrace();
			try { connecton.rollback();}catch(Exception e1){}
		} finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		return "fail";
	}

	/*public  UserDetails findUserId(String accountNumber, String last4SSN)
	{
		
		String result = null;
		PreparedStatement createStatement = null;
		Connection connecton = null;
		UserDetails userData = new UserDetails();
		try
		{
			
			String validAccResult = validateAccount(accountNumber, last4SSN); 
			if (validAccResult != null && validAccResult != "")
			{	
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_SELECT_USERID));
				
			
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, accountNumber);
				//createStatement.setString(2,last4SSN );
				getUserResultSet = createStatement.executeQuery();
				while (getUserResultSet.next()) {
					
					userData.setUserIdList(getUserResultSet.getString("email_id"));
				}
				
			} else	
					userData.setResult("Invalid Account");
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		return userData;
	} */

	public  String findUserId(String accountNumber, String last4SSN)
	{
		
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		UserDetails userData = new UserDetails();
		StringBuffer strBuff = new StringBuffer();
		try
		{
			
			System.out.println("accountNumber from findUseId:"+accountNumber);
			System.out.println("last4SSN from findUseId:"+last4SSN);
			
			String validAccResult = validateAccount(accountNumber, last4SSN); 
			if (validAccResult != null && validAccResult != "")
			{	
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_SELECT_USERID));
				
			
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, accountNumber);
				//createStatement.setString(2,last4SSN );
				getUserResultSet = createStatement.executeQuery();
				while (getUserResultSet.next()) {
					
					//userData.setUserIdList(getUserResultSet.getString("email_id"));
					strBuff.append(getUserResultSet.getString("email_id"));
					strBuff.append("|");
				}
				getUserResultSet.close();
				
			} else	
					userData.setResult("Invalid Account");
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		System.out.println("strBuff with UserIds:"+strBuff.toString());
		return strBuff.toString();
	}	
	public  String getSecurityPhrase(String userid)
	{
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		
		StringBuffer strSec = new StringBuffer();
		try
		{
			
			//strSec.append("nodata");
			System.out.println("Inside getSecurityPhrase");
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_SELECT_SECURITY_PHRASE));
				
			
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, userid);
				//createStatement.setString(2,last4SSN );
				getUserResultSet = createStatement.executeQuery();
				while (getUserResultSet.next()) {
					
					strSec.append(getUserResultSet.getString("sec_question"));
					strSec.append("|");
					strSec.append(getUserResultSet.getString("sec_answer"));
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_question"));
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_answer"));
				}
				getUserResultSet.close();
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		System.out.println("Inside getSecurityPhrase: strSec.toString(): "+strSec.toString());
		if(strSec.toString().length() < 1)
			return "nodata";
		return strSec.toString();
	}

	public  String getAcctNumberForUser(String userid)
	{
		
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		StringBuffer strSec = new StringBuffer();
		try
		{
			
			//strSec.append("nodata");
			System.out.println("Inside getAcctNumberForUser");
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_GET_ACCTNUMBER));
				
			
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, userid);
				createStatement.setString(2, "Y");
				getUserResultSet = createStatement.executeQuery();
				while (getUserResultSet.next()) {
					
					if (getUserResultSet.getString("account_number") != null || getUserResultSet.getString("account_number") != "")
					{
						strSec.append(getUserResultSet.getString("account_number"));
						//strSec.append("|");
					}
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_question"));
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_answer"));
				}
				getUserResultSet.close();
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		
		return strSec.toString();
	}	

	public  String callSetDefaultAcctStatus(String accountNumber, String userid)
	{
		
		PreparedStatement createStatement = null;
		PreparedStatement createStatement2 = null;
		Connection connecton = null;
		try
		{
				System.err.println("Account Number from callSetDefaultAcctStatus"+accountNumber);
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				connecton.setAutoCommit(false);
				createStatement2 =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_UPDATE_ACCT_EXIST_STATUS));
				createStatement2.setString(1,"N" );
				createStatement2.setString(2, userid);
				createStatement2.setString(3,"Y" );
				
				createStatement2.execute();
				

				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_UPDATE_ACCT_DEFAULT));
				createStatement.setString(1,"Y" );
				createStatement.setString(2, userid);
				createStatement.setString(3,accountNumber );
				
				
				createStatement.execute();
				connecton.commit();
				return "success";
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
			try { connecton.rollback();}catch(Exception e){}
		}
		catch (Exception e)
		{
			e.printStackTrace();
			try { connecton.rollback();}catch(Exception e1){}
		}finally {
			
			try {
			createStatement.close();
			if(createStatement2 != null)
				createStatement2.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		
		return "fail";
	}	

	public  String addAccountForUser(String accountNumber, String userid, String serviceAddr)
	{
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		try
		{
			
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				/*createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_ADD_ACCTNUMBER));*/
				
					
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_ADD_ACCTNUMBER));
				createStatement.setString(1, userid);
				createStatement.setString(2,accountNumber );
				createStatement.setString(3,"N" );
				createStatement.setString(4, serviceAddr);
				createStatement.execute();
				return "success";
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		
		return "fail";
	}	
	
	public  String getAcctNumbersListUser(String userid)
	{
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		StringBuffer strSec = new StringBuffer();
		try
		{
				//strSec.append("nodata");
				System.out.println("Inside getAcctNumberListUser");
				//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_GET_ACCTNUMBER_WITHOUTDEFAULT),ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
				
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, userid);
				getUserResultSet = createStatement.executeQuery();
				strSec.append("[");
				while (getUserResultSet.next()) {
					
					String acctNumStr = getUserResultSet.getString("account_number");
					String defaultStr = getUserResultSet.getString("DEFAULT_ACCOUNT");
					String serviceaddr = getUserResultSet.getString("SERVICE_ADDRESS");
					if (acctNumStr != null || acctNumStr != "")
					{
						strSec.append("{accountnumber:\""+acctNumStr +"\", defaultstatus:\""+defaultStr+"\", serviceaddr:\""+serviceaddr+"\"}");
						if(!getUserResultSet.isLast())
						strSec.append(",");
					}
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_question"));
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_answer"));
					//getUserResultSet.close();
				}
				strSec.append("]");
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		System.err.println("AcccountNumbersList:"+strSec.toString());
		return strSec.toString();
	}	
	
	public  String doLoginValidation(String userid, String password)
	{
		
		String result = "fasle";
		PreparedStatement createStatement = null;
		Connection connecton = null;
		
		try
		{
			
			//strSec.append("nodata");
			System.out.println("Inside doLoginValidation");
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_LOGIN_VALIDATE));
				
			
				ResultSet getUserResultSet = null;
				
				createStatement.setString(1, userid);
				createStatement.setString(2,password );
				getUserResultSet = createStatement.executeQuery();
				while (getUserResultSet.next()) {
					
					if (getUserResultSet.getString("user_id") != null || getUserResultSet.getString("user_id") != "")
						
						result="success";
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_question"));
					//userData.setSecurityPhrase(getUserResultSet.getString("sec_answer"));
				}
				getUserResultSet.close();
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		
		
		return result;
	}

	public  String resetPassword(String userid, String password)
	{
		
		
		PreparedStatement createStatement = null;
		Connection connecton = null;
		
		
		System.out.println("userid from DAO:"+userid);
		try
		{
			
			//Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
				connecton = DatabaseConnection.getConnectionWithJNDIForUserProfile();
				createStatement =
						connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_UPDATE_PASSWORD));
				System.out.println("New password from DAO:"+password);
				createStatement.setString(1,password );
				createStatement.setString(2, userid);
				
				
				createStatement.execute();
				createStatement.close();
				
				return "success";
				
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}finally {
			
			try {
			createStatement.close();
			connecton.close();
			}catch (SQLException seq)
			{
				seq.printStackTrace();
			}
		}
		return "fail";
	}
	
	/**
	 * This is to find account number of the customer.
	 * @param custAddr
	 * @param lastName
	 * @return String accountNumber
	 */
	/*public String findAccount(String custAddr, String lastName)
	{
		
		try
		{
			Connection connecton = DatabaseConnection.getConnectionWithOutJNDI();
			final PreparedStatement validateStatement =
					connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_FIND_ACCOUNT));
				
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}
		return "accountNumber";
	}*/

	public static String callManualOperation(String cctNumber, String userid)
	{
		Connection connecton = null;
		PreparedStatement validateStatement = null;
		try
		{
			connecton = DatabaseConnection.getConnectionWithOutJNDI();
			ResultSet getUserResultSet = null;
			validateStatement =
					connecton.prepareStatement("UPDATE MUSI_CUSREG_ACCOUNT SET DEFAULT_ACCOUNT=? where email_id = ? and DEFAULT_ACCOUNT =?");
			
			validateStatement.setString(1, "N");
			validateStatement.setString(2, userid);
			validateStatement.setString(3, "Y");
			validateStatement.execute();
			validateStatement.close();
			
			validateStatement =
					connecton.prepareStatement(CUSResourceBundle.getsqlQuery(CUSWebServicesConstants.SQL_QUERY_UPDATE_ACCT_DEFAULT));
			validateStatement.setString(1,"Y" );
			validateStatement.setString(2, userid);
			validateStatement.setString(3,"5106182421015640" );
			
			
			validateStatement.execute();
			validateStatement.close();
			
			validateStatement =
					connecton.prepareStatement("select * from MUSI_CUSREG_ACCOUNT where email_id=?");
			
			validateStatement.setString(1, userid);
			getUserResultSet = validateStatement.executeQuery();
			while (getUserResultSet.next()) {
				
				String acctNumStr = getUserResultSet.getString("account_number");
				String defaultStr = getUserResultSet.getString("DEFAULT_ACCOUNT");
				//String serviceaddr = getUserResultSet.getString("SERVICE_ADDRESS");
				System.out.println("Account Number: "+ acctNumStr + "  Status:"+defaultStr);
				
			}
			
			
		}catch (SQLException sqlEx)
		{
			sqlEx.printStackTrace();
		}finally{
			try{
			validateStatement.close();
			connecton.close(); } catch(Exception e){}
		}
		return "accountNumber";
	}
	
	public static void main(String[] args)
	{
		System.out.println ("Registration DAO class...");
		callManualOperation("5105993991403492","bhaskar1@yahoo.com");
		
	}
}
