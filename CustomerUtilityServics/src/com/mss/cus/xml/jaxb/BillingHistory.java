//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2013.08.21 at 02:22:57 PM EDT 
//


package com.mss.cus.xml.jaxb;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="AccountInfo">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="AccountNumber" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *         &lt;element name="BillingInfo">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="Billing" maxOccurs="unbounded">
 *                     &lt;complexType>
 *                       &lt;complexContent>
 *                         &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                           &lt;sequence>
 *                             &lt;element name="BillDate" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="EndingBalance" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *                             &lt;element name="Counter" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *                           &lt;/sequence>
 *                         &lt;/restriction>
 *                       &lt;/complexContent>
 *                     &lt;/complexType>
 *                   &lt;/element>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "accountInfo",
    "billingInfo"
})
@XmlRootElement(name = "BillingHistory")
public class BillingHistory {

    @XmlElement(name = "AccountInfo", required = true)
    protected BillingHistory.AccountInfo accountInfo;
    @XmlElement(name = "BillingInfo", required = true)
    protected BillingHistory.BillingInfo billingInfo;

    /**
     * Gets the value of the accountInfo property.
     * 
     * @return
     *     possible object is
     *     {@link BillingHistory.AccountInfo }
     *     
     */
    public BillingHistory.AccountInfo getAccountInfo() {
        return accountInfo;
    }

    /**
     * Sets the value of the accountInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link BillingHistory.AccountInfo }
     *     
     */
    public void setAccountInfo(BillingHistory.AccountInfo value) {
        this.accountInfo = value;
    }

    /**
     * Gets the value of the billingInfo property.
     * 
     * @return
     *     possible object is
     *     {@link BillingHistory.BillingInfo }
     *     
     */
    public BillingHistory.BillingInfo getBillingInfo() {
        return billingInfo;
    }

    /**
     * Sets the value of the billingInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link BillingHistory.BillingInfo }
     *     
     */
    public void setBillingInfo(BillingHistory.BillingInfo value) {
        this.billingInfo = value;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="AccountNumber" type="{http://www.w3.org/2001/XMLSchema}int"/>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "accountNumber"
    })
    public static class AccountInfo {

        @XmlElement(name = "AccountNumber")
        protected int accountNumber;

        /**
         * Gets the value of the accountNumber property.
         * 
         */
        public int getAccountNumber() {
            return accountNumber;
        }

        /**
         * Sets the value of the accountNumber property.
         * 
         */
        public void setAccountNumber(int value) {
            this.accountNumber = value;
        }

    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="Billing" maxOccurs="unbounded">
     *           &lt;complexType>
     *             &lt;complexContent>
     *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *                 &lt;sequence>
     *                   &lt;element name="BillDate" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="EndingBalance" type="{http://www.w3.org/2001/XMLSchema}string"/>
     *                   &lt;element name="Counter" type="{http://www.w3.org/2001/XMLSchema}int"/>
     *                 &lt;/sequence>
     *               &lt;/restriction>
     *             &lt;/complexContent>
     *           &lt;/complexType>
     *         &lt;/element>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "billing"
    })
    public static class BillingInfo {

        @XmlElement(name = "Billing", required = true)
        protected List<BillingHistory.BillingInfo.Billing> billing;

        /**
         * Gets the value of the billing property.
         * 
         * <p>
         * This accessor method returns a reference to the live list,
         * not a snapshot. Therefore any modification you make to the
         * returned list will be present inside the JAXB object.
         * This is why there is not a <CODE>set</CODE> method for the billing property.
         * 
         * <p>
         * For example, to add a new item, do as follows:
         * <pre>
         *    getBilling().add(newItem);
         * </pre>
         * 
         * 
         * <p>
         * Objects of the following type(s) are allowed in the list
         * {@link BillingHistory.BillingInfo.Billing }
         * 
         * 
         */
        public List<BillingHistory.BillingInfo.Billing> getBilling() {
            if (billing == null) {
                billing = new ArrayList<BillingHistory.BillingInfo.Billing>();
            }
            return this.billing;
        }


        /**
         * <p>Java class for anonymous complex type.
         * 
         * <p>The following schema fragment specifies the expected content contained within this class.
         * 
         * <pre>
         * &lt;complexType>
         *   &lt;complexContent>
         *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
         *       &lt;sequence>
         *         &lt;element name="BillDate" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="EndingBalance" type="{http://www.w3.org/2001/XMLSchema}string"/>
         *         &lt;element name="Counter" type="{http://www.w3.org/2001/XMLSchema}int"/>
         *       &lt;/sequence>
         *     &lt;/restriction>
         *   &lt;/complexContent>
         * &lt;/complexType>
         * </pre>
         * 
         * 
         */
        @XmlAccessorType(XmlAccessType.FIELD)
        @XmlType(name = "", propOrder = {
            "billDate",
            "endingBalance",
            "counter"
        })
        public static class Billing {

            @XmlElement(name = "BillDate", required = true)
            protected String billDate;
            @XmlElement(name = "EndingBalance", required = true)
            protected String endingBalance;
            @XmlElement(name = "Counter")
            protected int counter;

            /**
             * Gets the value of the billDate property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getBillDate() {
                return billDate;
            }

            /**
             * Sets the value of the billDate property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setBillDate(String value) {
                this.billDate = value;
            }

            /**
             * Gets the value of the endingBalance property.
             * 
             * @return
             *     possible object is
             *     {@link String }
             *     
             */
            public String getEndingBalance() {
                return endingBalance;
            }

            /**
             * Sets the value of the endingBalance property.
             * 
             * @param value
             *     allowed object is
             *     {@link String }
             *     
             */
            public void setEndingBalance(String value) {
                this.endingBalance = value;
            }

            /**
             * Gets the value of the counter property.
             * 
             */
            public int getCounter() {
                return counter;
            }

            /**
             * Sets the value of the counter property.
             * 
             */
            public void setCounter(int value) {
                this.counter = value;
            }

        }

    }

}
