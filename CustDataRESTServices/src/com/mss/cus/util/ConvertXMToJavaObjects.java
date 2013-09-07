package com.mss.cus.util;

import java.io.StringReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.JAXBIntrospector;
import javax.xml.bind.Unmarshaller;

import com.mss.cus.xml.jaxb.*;
public class ConvertXMToJavaObjects {
	
	//@SurpessWarnings
	/*public AccountSummaryold getAccountSummaryData(String acctData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(AccountSummaryold.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(acctData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		AccountSummaryold unmarshalledObject = (AccountSummaryold) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	} 
	
	public AccountSummaryold getConsumptionHistoryData(String acctData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(AccountSummaryold.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(acctData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		AccountSummaryold unmarshalledObject = (AccountSummaryold) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	}
	*/
}
