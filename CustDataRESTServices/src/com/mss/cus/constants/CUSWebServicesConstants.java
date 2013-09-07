package com.mss.cus.constants;


/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	CUSWebServicesConstants.java
 **	Description		:	
 **	Author			:	Bhaskar Reddy	
 **	Created Date	:	June 01, 2013
 ************************************************************
 **	Change History 
 **	Header: 
 ************************************************************
 **	Date		Author    				Description:
 **	--------	--------   				-----------------
 **	June 01, 2013       Bhaskar Reddy			Created
 ************************************************************
 */

		
public class CUSWebServicesConstants {
	
	
	/**
	 * This class is to maintain all required constants for services
	 * @author Bhaskar Reddy
	 *
	 */
	
		public static final String PROP_PATH_JDBC =
			"/com/mss/cus/resources/jdbcconnection.properties";
		
		public static final String SQL_PROPERTIES_CONFIG_URI =
			"com.mss.cus.resources.cussql";
	
		public static final String DBConnection_URL =
			"dbUrl";
	
		public static final String DBConnection_USERNAME =
				"dbUserName";
		
		public static final String DBConnection_PASSWORD =
				"dbPassword";
		public static final String JNDI_DATASOURCE_NAME =
				"JNDI_DATASOURCE_NAME";

		public static final String JNDI_DATASOURCE_NAME2 =
				"JNDI_DATASOURCE_NAME2";
	
		public static final String SQL_QUERY_VALIDATE_ACCOUNT =
				"query.cus.validateaccount.select";

		public static final String SQL_QUERY_FIND_ACCOUNT =
				"query.cus.findaccount.select";

		public static final String SQL_QUERY_CREATE_USER =
				"query.cus.createuser.insert";

		public static final String SQL_QUERY_CREATE_USER_ACCOUNT =
				"query.cus.createuserassociation.insert";
		
		public static final String SQL_QUERY_SELECT_USERID=
				"query.cus.selectuserid.select";

		public static final String SQL_QUERY_SELECT_SECURITY_PHRASE=
				"query.cus.selectsecphrase.select";

		public static final String SQL_QUERY_UPDATE_PASSWORD=
				"query.cus.resetpassword.update";
		
		public static final String SQL_QUERY_LOGIN_VALIDATE=
				"query.cus.loginvalidate.select";

		public static final String SQL_QUERY_GET_ACCTNUMBER=
				"query.cus.getacctnumbers.select";
		
		public static final String SQL_PROC_GET_CONSUMPTIONHIST=
				"query.cus.getconsumptionhist.proc";
		
		public static final String SQL_QUERY_GET_ACCTNUMBER_WITHOUTDEFAULT=
				"query.cus.getacctnumlist.select";
		
		public static final String SQL_QUERY_ADD_ACCTNUMBER=
				"query.cus.addaccount.insert";

		public static final String SQL_QUERY_UPDATE_ACCT_DEFAULT=
				"query.cus.updateaccount.update";	
		
		public static final String SQL_QUERY_UPDATE_ACCT_EXIST_STATUS=
				"query.cus.updateaccountexist.update";	
		
	
}
