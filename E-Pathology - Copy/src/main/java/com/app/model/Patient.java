package com.app.model;



import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  long PatientId;
	
	private String FirstName;
	
	private String LastName;
	
//	@Size(min = 10,max = 10, message = "Mobile No. Must Be 10 Digit...")
	@Column(unique = true)
	private long MobileNo;
	
	//@javax.validation.constraints.Email(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
	@Column(unique = true)
	private String Email;
	
	private String Address;
	
	private String City;
	
	private String State;
	
	//@Size(min = 12,max = 12, message = "Adhaar must be 12 no....")
	@Column(unique = true)
	private long AdhaarNo;
	
	@OneToMany(fetch = FetchType.EAGER,mappedBy="test",cascade = CascadeType.MERGE)
    private Set<TestBooking> testbook;
	
	public Patient()
	{
		
	}
	public Patient(long PatientId)
	{
		this.PatientId=PatientId;
	}
	

	public long getPatientId() {
		return PatientId;
	}

	public void setPatientId(long patientId) {
		PatientId = patientId;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public long getMobileNo() {
		return MobileNo;
	}

	public void setMobileNo(long mobileNo) {
		MobileNo = mobileNo;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public long getAdhaarNo() {
		return AdhaarNo;
	}

	public void setAdhaarNo(long adhaarNo) {
		AdhaarNo = adhaarNo;
	}



	

	
}
