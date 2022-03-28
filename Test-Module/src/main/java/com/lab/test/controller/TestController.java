package com.lab.test.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lab.test.exception.ResourceNotFoundException;
import com.lab.test.model.LabTest;
import com.lab.test.repository.LabTestRepository;

@RestController
@RequestMapping("/api/t1/")
public class TestController {

	@Autowired
	private LabTestRepository labtestRepository;
	
	// get all employees
	@GetMapping("/test")
	public List<LabTest> getAllTest(){
		return labtestRepository.findAll();
	}
	
	@PostMapping("/test")
	public LabTest createTest(@RequestBody LabTest labtest)
	{
		return labtestRepository.save(labtest);
	}
	
	@PutMapping("/test/{TestId}")
	public ResponseEntity<LabTest> updateLab(@PathVariable Long TestId,@RequestBody LabTest testdetails)
	{
		LabTest labtest1 = labtestRepository.findById(TestId)
				.orElseThrow(() -> new ResourceNotFoundException("Test not exist with id :" + TestId));
		
		labtest1.setTestId(testdetails.getTestId());
		labtest1.setTestName(testdetails.getTestName());
		
		
	LabTest updateLab=labtestRepository.save(labtest1);
    return ResponseEntity.ok(updateLab);
    
	}
	
	@DeleteMapping("/test/{TestId}")
	public ResponseEntity<Map<String, Boolean>> deleteTest(@PathVariable Long TestId){
		LabTest test2 = labtestRepository.findById(TestId)
				.orElseThrow(() -> new ResourceNotFoundException("Test not exist with id :" + TestId));
		
		labtestRepository.delete(test2);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}