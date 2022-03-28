package com.lab.module.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lab.module.model.Lab;

public interface LabRepository extends JpaRepository<Lab, Long>
{

}
