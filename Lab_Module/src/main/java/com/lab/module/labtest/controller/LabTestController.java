package com.lab.module.labtest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lab.module.labtest.LabTest;
import com.lab.module.labtest.repository.LabTestRepository;

@RestController
@RequestMapping("/api/v1/")
public class LabTestController {

	@Autowired
	private LabTestRepository labtestRepository;
	
	// get all employees
	@GetMapping("/labs")
	public List<LabTest> getAllTest(){
		return labtestRepository.findAll();
	}
}
