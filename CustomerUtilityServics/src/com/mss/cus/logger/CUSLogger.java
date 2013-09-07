
package com.mss.cus.logger;

/************************************************************
 **	Copyright 2013-14 Milestone Services.  All rights reserved.
 **	
 **	No Part of this file should be copied or distributed without the permission	of MSS.
 **	Application		:	CUS
 **	Module			:	
 **	File			:	CUSLogger.java
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



import java.net.URL;

import org.apache.log4j.Level;
import org.apache.log4j.helpers.Loader;
import org.apache.log4j.xml.DOMConfigurator;

public class CUSLogger {

	
	/**
	 * This class is used to show different types of login messages
	 *
	 */

		private static boolean isDebugEnabled;
		static {		
		
			URL url = null; 
				url =
					Loader.getResource("/com/mss/cus/resources/log4j.xml");
			DOMConfigurator.configure(url);
		}
		//	internal logger reference
		private static org.apache.log4j.Logger internalLogger = null;
		private static String WRAPPER_FQN = null;
		private static CUSLogger instance;
		//	hide the constructor
		private CUSLogger(Class clsLogger) {
			super();
			CUSLogger.internalLogger =
				org.apache.log4j.Logger.getLogger(clsLogger);
			CUSLogger.WRAPPER_FQN = CUSLogger.class.getName();
		}
		//	hide the constructor
		private CUSLogger(String strLogger) {
			super();
			CUSLogger.internalLogger =
				org.apache.log4j.Logger.getLogger(strLogger);
			CUSLogger.WRAPPER_FQN = CUSLogger.class.getName();
		}
		/**
		* logDebug() This method can be used to log DEBUG level messages.
		* Other available logging levels priority wise : FATAL > ERROR > WARN > INFO > DEBUG
		* @param String : message
		*/
		public void logDebug(final String message) {
			if (isDebugEnabled) {
				CUSLogger.internalLogger.log(
					CUSLogger.WRAPPER_FQN,
					Level.DEBUG,
					message,
					null);
			}
		}
		/**
		* logInfo() This method can be used to log INFO level messages.
		* Other available logging levels priority wise : FATAL > ERROR > WARN > INFO > DEBUG
		* @param  String : message
		*/
		public void logInfo(final String message) {

			CUSLogger.internalLogger.log(
				CUSLogger.WRAPPER_FQN,
				Level.INFO,
				message,
				null);
		}
		/**
		* logWarn() This method can be used to log WARN (Warning) level messages.
		* Other available logging levels priority wise : FATAL > ERROR > WARN > INFO > DEBUG
		* @param  String : message
		* 
		* 
		*/
		public void logWarn(final String message) {

			CUSLogger.internalLogger.log(
				CUSLogger.WRAPPER_FQN,
				Level.WARN,
				message,
				null);
		}

		/**
		* logError() This method can be used to log ERROR level messages with the Exception.
		* Other available logging levels priority wise : FATAL > ERROR > WARN > INFO > DEBUG
		* @param  String    : message
		* @param  Exception : excp
		*/
		public void logError(final String message, final Throwable excp) {

			CUSLogger.internalLogger.log(
				CUSLogger.WRAPPER_FQN,
				Level.ERROR,
				message,
				excp);
		}

		/**
		* logFatal() This method can be used to log FATAL level messages with the Exception.
		* Other available logging levels priority wise : FATAL > ERROR > WARN > INFO > DEBUG
		* @param  String : message
		* @param  Exception : excp
		*/
		public void logFatal(final String message, final Throwable excp) {

			CUSLogger.internalLogger.log(
				CUSLogger.WRAPPER_FQN,
				Level.FATAL,
				message,
				excp);
		}

		/**
		* getLogger() This is a factory method which returns CUSLogger instance by giving class name.
		* @param  Class : clsLogger (Class in which logging is required)
		*/
		public static CUSLogger getLogger(final Class clsLogger) {
			if (instance == null) {
				instance = new CUSLogger(clsLogger);
			}
			return instance;
		}
		/**
		* This is a factory method which returns CUSLogger instance by giving 
		* Fully qualified Class name as String.
		* Generally Useful when you are logging at a particular point in the package hiararchy 
		* but want to log through a different Logger which cater to different hiararchy. 
		* @param  String : strLogger (Class in which logging is required)
		*/
		public static CUSLogger getLogger(final String strLogger) {
			if (instance == null) {
				instance = new CUSLogger(strLogger);
			}
			return instance;
		}

		/**
		 * @return
		 */
		public static boolean isDebugEnabled() {
			return isDebugEnabled;
		}

		/**
		 * @param b
		 */
		public static void setDebugEnabled(boolean isDebugEnabled) {
			CUSLogger.isDebugEnabled = isDebugEnabled;
		}

	}

