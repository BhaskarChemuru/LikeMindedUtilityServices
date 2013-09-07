package com.mss.cus.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;

import com.mss.cus.xml.jaxb.ConsumptionHistory;
import com.mss.cus.xml.jaxb.ConsumptionHistory.ConsumptionInfo.Consumption;

public class GenerateJSONDataForGraph {

	
	public String getJSONGrpahDataForConsumption(String consumData)
	{
		
		ConvertXMToJavaObjects converXMLObj = null;
		ConsumptionHistory consumptionHistory = null;
		StringBuffer jsonStrBuff = null;
		try {
			 
				
				 
				Date date ; 
				DateFormat formatter  = new SimpleDateFormat("dd-MMM-yy");
				DateFormat formatter2  = new SimpleDateFormat("MMM-yyyy");
			   
			 converXMLObj = new ConvertXMToJavaObjects();
			 consumptionHistory = converXMLObj.getConsumptionHistoryData(consumData);
			 jsonStrBuff = new StringBuffer();
			 jsonStrBuff.append(" { \"chart\": { \"caption\" : \"Monthly Consumption Graph\", \"xAxisName\" : \"Month\", \"yAxisName\" : \"Consumption\", \"labeldisplay\":\"ROTATE\", \"slantLabels\":\"1\"},\"data\" : 	[" );
			 
			 ArrayList<Consumption> consumtionList = (ArrayList) (consumptionHistory.getConsumptionInfo()).getConsumption();
			 Iterator consIte = consumtionList.iterator();
			 int counter = 0;
			 while (consIte.hasNext())
			 {
				 Consumption consuData = (Consumption) consIte.next();
				 String chargeDate = formatter2.format(formatter.parse(consuData.getChargeDate()));
				 String billConsumption = consuData.getBilledConsumption()+"";
				 jsonStrBuff.append("{ \"label\": \" "+chargeDate+ "\" , \"value\" : \""+billConsumption + " \" , \"toolText\":\"Billed Charge:$"+ consuData.getBilledCharge() +"{br}Bill Charged Date:" +consuData.getChargeDate()+ "{br}Consumption:" +consuData.getBilledConsumption()+ "{br}DaysOfService:" +consuData.getDaysOfService()+" \" }");
				 
				 counter++;
				 if(counter == 12 || counter == consumtionList.size())
				 {
					 jsonStrBuff.append("] }");
					 break;
				 }
				 else
					 jsonStrBuff.append(",");
				 
			 }
											
			 
		}catch (Exception e)
		{
			e.printStackTrace();
		}
		System.err.println("Consumption Data in JSON String:"+jsonStrBuff.toString());
		return jsonStrBuff.toString();
	}
	
}
