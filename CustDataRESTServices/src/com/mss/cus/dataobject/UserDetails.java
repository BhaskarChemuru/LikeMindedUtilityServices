package com.mss.cus.dataobject;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


//@XmlType(propOrder = { "result","userid","securityPhrase","securityPhraseAnswer","userIdList" }, name = "mcusUserData")
//@XmlRootElement
//@XmlSeeAlso(UserDetails.class)
@XmlRootElement(name="userDetails")
@XmlRegistry
public class UserDetails {
	
	public String result = null;
	
	public String userid = null;
	
	public String securityPhrase = null;
	
	public String securityPhraseAnswer = null;
	
	public List userIdList = new ArrayList<String>();

	
	public void setUserIdList(String userId) {
		this.userIdList.add(userId);
	}

	public List getUserIdList() {
		return userIdList;
	}
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getSecurityPhrase() {
		return securityPhrase;
	}

	public void setSecurityPhrase(String securityPhrase) {
		this.securityPhrase = securityPhrase;
	}

	public String getSecurityPhraseAnswer() {
		return securityPhraseAnswer;
	}

	public void setSecurityPhraseAnswer(String securityPhraseAnswer) {
		this.securityPhraseAnswer = securityPhraseAnswer;
	}
	
	
	
}
