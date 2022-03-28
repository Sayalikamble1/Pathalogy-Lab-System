package com.lab.module.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lab.module.exception.ResourceNotFoundException;
import com.lab.module.model.Lab;
import com.lab.module.repository.LabRepository;


	@RestController
	@RequestMapping("/api/v1/")
	public class LabController {

		@Autowired
		private LabRepository labRepository;
		
		// get all employees
		@GetMapping("/labs")
		public List<Lab> getAllEmployees(){
			return labRepository.findAll();
		}
		@PostMapping("/labs")
		public Lab createLab(@RequestBody Lab lab)
		{
			return labRepository.save(lab);
		}
		
		@PutMapping("/labs/{LabId}")
		public ResponseEntity<Lab> updateLab(@PathVariable Long LabId,@RequestBody Lab labdetails)
		{
			Lab lab1 = labRepository.findById(LabId)
					.orElseThrow(() -> new ResourceNotFoundException("Lab not exist with id :" + LabId));
			lab1.setLabName(labdetails.getLabName());
			lab1.setLicenseNo(labdetails.getLicenseNo());
			lab1.setGstNo(labdetails.getGstNo());
			lab1.setState(labdetails.getState());
			lab1.setDistrict(labdetails.getDistrict());
			lab1.setCity(labdetails.getCity());
			lab1.setPinCode(labdetails.getPinCode());
			lab1.setLocation(labdetails.getLocation());
			
			
		Lab updateLab=labRepository.save(lab1);
	    return ResponseEntity.ok(updateLab);
	    
		}
		
		@DeleteMapping("/labs/{LabId}")
		public ResponseEntity<Map<String, Boolean>> deleteLab(@PathVariable Long LabId){
			Lab lab2 = labRepository.findById(LabId)
					.orElseThrow(() -> new ResourceNotFoundException("Lab not exist with id :" + LabId));
			
			labRepository.delete(lab2);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	}
		

	
	


