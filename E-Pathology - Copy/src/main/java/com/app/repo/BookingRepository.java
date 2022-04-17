package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.TestBooking;

public interface BookingRepository extends JpaRepository<TestBooking, Long>
{

}
