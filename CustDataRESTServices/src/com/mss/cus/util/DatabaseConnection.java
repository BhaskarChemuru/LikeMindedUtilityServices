package com.mss.cus.util;

/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	DatabaseConnection.java
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


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import com.mss.cus.constants.CUSWebServicesConstants;

public class DatabaseConnection {

	
	public static Connection connection = null;
	
	private static Context context = null;
	

	/**
	*
	* This method Returns the Oracle Connection object to connect to the 
	* database without JNDI lookup. It takes DB Connection URL, Username and Password as input.These values comes from the properties file. 
	* occurs in lookup
	* @return      Connection : Reference of Connection object.
	* @throws       
	*/
	public static Connection getConnectionWithOutJNDI()
	{
		try {

			String dbUrl = CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.DBConnection_URL);
			String dbUserName = CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.DBConnection_USERNAME);
			String dbPassword = CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.DBConnection_PASSWORD);

			Class.forName("oracle.jdbc.driver.OracleDriver");

			connection = DriverManager.getConnection(dbUrl, dbUserName,
					dbPassword);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}

	/**
	*
	* This method Returns the Oracle Connection object to connect to the 
	* database with JNDI lookup. Throws ServiceLocatorException If Any Error 
	* occurs in lookup
	* @return      Connection : Reference of Connection object.
	* @throws       
	*/

	public static Connection getConnectionWithJNDI()
	{
		try {

			context =new InitialContext();
			System.out.println("JNDI name:"+CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.JNDI_DATASOURCE_NAME));
			DataSource ods =
					(DataSource) context.lookup("java:/"+
							CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.JNDI_DATASOURCE_NAME));

				connection = ods.getConnection();
				System.err.println("Database connection is successfull");
		} catch (SQLException sqlex) {
			
			sqlex.printStackTrace();
		} catch (NamingException ex) {
			ex.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}
	
	/**
	*
	* This method Returns the Oracle Connection object to connect to the 
	* database with JNDI lookup. Throws ServiceLocatorException If Any Error 
	* occurs in lookup
	* @return      Connection : Reference of Connection object.
	* @throws       
	*/

	public static Connection getConnectionWithJNDIForUserProfile()
	{
		try {

			context =new InitialContext();
			System.out.println("JNDI name2:"+CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.JNDI_DATASOURCE_NAME2));
			DataSource ods =
					(DataSource) context.lookup("java:/"+
							CUSResourceBundle.getValueFromPropertiesFile(CUSWebServicesConstants.JNDI_DATASOURCE_NAME2));

				connection = ods.getConnection();
				System.err.println("Database connection is successfull");
		} catch (SQLException sqlex) {
			
			sqlex.printStackTrace();
		} catch (NamingException ex) {
			ex.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}
	
}
