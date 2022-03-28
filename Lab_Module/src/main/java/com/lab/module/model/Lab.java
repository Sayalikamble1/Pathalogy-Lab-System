package com.lab.module.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Lab {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long LabId;
	@Column
	private String LabName;
	@Column
	private long LicenseNo;
	@Column(unique = true)
	private long GstNo;
	@Column(nullable = false)
	private String State;
	@Column(nullable = false)
	private String District;
	@Column(nullable = false)
	private String City;
    @Column(length = 6,unique = true)
	private long PinCode;
    @Column(nullable = false)
	private String Location;

public Lab()
{
	
}

public long getLabId() {
	return LabId;
}

public void setLabId(long labId) {
	LabId = labId;
}

public String getLabName() {
	return LabName;
}

public void setLabName(String labName) {
	LabName = labName;
}

public long getLicenseNo() {
	return LicenseNo;
}

public void setLicenseNo(long licenseNo) {
	LicenseNo = licenseNo;
}

public long getGstNo() {
	return GstNo;
}

public void setGstNo(long gstNo) {
	GstNo = gstNo;
}

public String getState() {
	return State;
}

public void setState(String state) {
	State = state;
}

public String getDistrict() {
	return District;
}

public void setDistrict(String district) {
	District = district;
}

public String getCity() {
	return City;
}

public void setCity(String city) {
	City = city;
}

public long getPinCode() {
	return PinCode;
}

public void setPinCode(long pinCode) {
	PinCode = pinCode;
}

public String getLocation() {
	return Location;
}

public void setLocation(String location) {
	Location = location;
}

public Lab(long labId, String labName, long licenseNo, long gstNo, String state, String district, String city,
		long pinCode, String location) {
	super();
	LabId = labId;
	LabName = labName;
	LicenseNo = licenseNo;
	GstNo = gstNo;
	State = state;
	District = district;
	City = city;
	PinCode = pinCode;
	Location = location;
}

}
