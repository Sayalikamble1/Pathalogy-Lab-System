package com.lab.module.labtest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class LabTest {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long TestId;
	@Column(unique = true)
	private String TestName;

	public LabTest()
	{
	
		
	}

	public long getTestId() {
		return TestId;
	}

	public void setTestId(long testId) {
		TestId = testId;
	}

	public String getTestName() {
		return TestName;
	}

	public void setTestName(String testName) {
		TestName = testName;
	}

	public LabTest(long testId, String testName) {
		super();
		TestId = testId;
		TestName = testName;
	}
	
}
