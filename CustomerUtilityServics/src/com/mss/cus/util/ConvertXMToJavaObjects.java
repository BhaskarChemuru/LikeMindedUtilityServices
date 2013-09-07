package com.mss.cus.util;

import java.io.StringReader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.JAXBIntrospector;
import javax.xml.bind.Unmarshaller;

import com.mss.cus.xml.jaxb.*;
import com.mss.cus.xml.jaxb.BillingHistory.BillingInfo;
import com.mss.cus.xml.jaxb.BillingHistory.BillingInfo.Billing;
import com.mss.cus.xml.jaxb.PaymentHistory.PaymentInfo.Payments;
public class ConvertXMToJavaObjects {
	
	//@SurpessWarnings
	public AccountSummary getAccountSummaryData(String acctData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(AccountSummary.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(acctData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		AccountSummary unmarshalledObject = (AccountSummary) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		System.err.println("Pament due amount:"+unmarshalledObject.getPayments().getLastPaymentAmount());
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	}
	
	public ConsumptionHistory getConsumptionHistoryData(String consumptionData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(ConsumptionHistory.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(consumptionData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		ConsumptionHistory unmarshalledObject = (ConsumptionHistory) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	}

	public BillingHistory getBillHistoryData(String consumptionData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(BillingHistory.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(consumptionData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		BillingHistory unmarshalledObject = (BillingHistory) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	}

	public String getBillHistoryDataAsString(String billHistStr)
	{
		StringBuffer bhistStr = new StringBuffer();
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(BillingHistory.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(billHistStr);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		BillingHistory unmarshalledObject = (BillingHistory) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		List<Billing> billingList = (unmarshalledObject.getBillingInfo()).getBilling();
		Iterator billIte = billingList.iterator();
		int counter = 0;
		bhistStr.append("[");
		Date date ; 
		DateFormat formatter  = new SimpleDateFormat("dd-MMM-yyyy");
		DateFormat formatter2  = new SimpleDateFormat("yyyy-MM-dd");
		while (billIte.hasNext())
		{
			Billing billData = (Billing)billIte.next();
			bhistStr.append("{duedate:\""+formatter2.format(new Date(billData.getBillDate())) +"\", amountdue:\""+billData.getEndingBalance()+"\"}");
			counter++;
			if(counter!=billingList.size())
			{
				bhistStr.append(",");
			}
		}
		bhistStr.append("]");
		//return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 //System.err.println("Billing History: "+bhistStr.toString());	
	 return bhistStr.toString();
	}

	public String getPaymentHistoryDataAsString(String paymentHistStr)
	{
		StringBuffer phistStr = new StringBuffer();
		//System.err.println("Payment xml string:"+paymentHistStr);
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(PaymentHistory.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(paymentHistStr);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		PaymentHistory unmarshalledObject = (PaymentHistory) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		List<Payments> paymentsList = (unmarshalledObject.getPaymentInfo()).getPayments();
		Iterator paymentIte = paymentsList.iterator();
		int counter = 0;
		phistStr.append("[");
		Date date ; 
		DateFormat formatter1  = new SimpleDateFormat("dd-MMM-yyyy");
		DateFormat formatter3  = new SimpleDateFormat("yyyy-MM-dd");
		while (paymentIte.hasNext())
		{
			Payments paymentData = (Payments)paymentIte.next();
			//System.err.println("paymentData.getPaymentDate():"+paymentData.getPaymentDate());
			phistStr.append("{paymentdate:\""+formatter3.format(new Date(paymentData.getPaymentDate())) +"\", paymentamount:\""+paymentData.getPaymentAmount()+"\"}");
			counter++;
			if(counter!=paymentsList.size())
			{
				phistStr.append(",");
			}
		}
		phistStr.append("]");
		//return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	// System.err.println("Payment History: "+phistStr.toString());	
	 return phistStr.toString();
	}
	
	public PaymentHistory getPaymentHistoryData(String consumptionData)
	{
		try{
		JAXBContext jaxbContext = JAXBContext.newInstance(PaymentHistory.class);
		Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
		StringReader reader = new StringReader(consumptionData);
		//JAXBElement<AccountSummary> unmarshalledObject =	(JAXBElement<AccountSummary>)unmarshaller.unmarshal(reader);
		PaymentHistory unmarshalledObject = (PaymentHistory) JAXBIntrospector.getValue(unmarshaller.unmarshal(reader));
		return unmarshalledObject;
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	 return null;
	}

}
