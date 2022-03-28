package com.lab.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.test.model.LabTest;

public interface LabTestRepository extends JpaRepository<LabTest, Long>
{

}
