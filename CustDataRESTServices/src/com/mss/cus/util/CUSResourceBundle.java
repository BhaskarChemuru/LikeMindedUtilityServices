package com.mss.cus.util;

/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	CUSResourceBundle.java
 **	Description		:	
 **	Author			:	Bhaskar Reddy	
 **	Created Date	:	May 30, 2013
 ************************************************************
 **	Change History 
 **	Header: 
 ************************************************************
 **	Date		Author    				Description:
 **	--------	--------   				-----------------
 **	May 30th 2013       Bhaskar Reddy			Created
 ************************************************************
 */

import java.util.Properties;
import java.util.ResourceBundle;

import com.mss.cus.constants.CUSWebServicesConstants;


public class CUSResourceBundle {

	
	/**
	 * This Singleton class provides services to other classes
	 * like retrieving a property value which is set in
	 * either the "Primary Configuration File" or SQL Configuration File
	 *
	 * The Global configuration file is a file
	 * from which all the configuration settings are to picked up from.It also defines
	 * commonly used properties
	 *
	 *
	 * @author		Bhaskar Chemuru
	 * @version		1.0
	 */
	
		/**All SQL related property settings.*/
		private static ResourceBundle objResourceBundle =
			ResourceBundle.getBundle(CUSWebServicesConstants.SQL_PROPERTIES_CONFIG_URI);

	
		/**
		 * <p>
		 * Return the value of the property from the SQL Configuration File
		 * </p>
		 * @param       strKey  String specifying the key whose value is the be
		 *                      retrieved
		 * @return      String  The value corresponding to the key
		 */

		public static String getsqlQuery(String strKey) {
			return objResourceBundle.getString(strKey);
		}

		public static String getValueFromPropertiesFile(String keyName)
				throws Exception {
			
			Properties prop = new Properties();
			String keyValue = null;
			try {

				// load a properties file for local machine
				prop.load(CUSResourceBundle.class.getResourceAsStream("../resources/jdbcconnection.properties"));
				
				// get the property value and print it out
				keyValue = prop.getProperty(keyName);
				
			} catch (Exception ex) {
				
				ex.printStackTrace();
			}
			return keyValue;
		}
		
	}
