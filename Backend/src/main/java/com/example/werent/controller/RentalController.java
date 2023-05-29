package com.example.werent.controller;

import com.example.werent.entity.LocationDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping("/Rentals")
public class RentalController {
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalController(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    @PostMapping
    public RentalDTO addRental(@RequestBody RentalDTO newRental) {

        return rentalRepository.addRental(newRental);
    }

    @PutMapping("/updateLocation")
    public void updateLocation(@RequestBody LocationDTO rentalLocation) {
        System.out.println(rentalLocation.getRentalId());
        rentalRepository.updateLocation(rentalLocation.getRentalId(), rentalLocation.getCity(), rentalLocation.getProvince(), rentalLocation.getAddress(),rentalLocation.getLatitude(), rentalLocation.getLongitude());
    }

    @PutMapping("/updateRentalInfo")
    public void updateRentalInfo(@RequestBody RentalDTO rentalDTO)
    {
        rentalRepository.updateRentalInfo(rentalDTO.getRentalId(),rentalDTO.getRentalName(),rentalDTO.getDailyPrice(),rentalDTO.getMaxStayDuration(),rentalDTO.getCancellationRefund(),rentalDTO.getCancellationDayLimit(),rentalDTO.getEarliestCheckInHour(),rentalDTO.getLatestCheckInHour(), rentalDTO.getCancellationHourLimit(), rentalDTO.isAutoApproveRequests(), rentalDTO.getAdminApproved());
    }

    @PutMapping("/updateRentalDates")
    public void updateRentalDates(int rentalId, Date AvailableStartDate, Date AvailableEndDate, Date selectedStartDate, Date selectedEndDate)
    {
        rentalRepository.updateRentalDates(rentalId, AvailableStartDate, AvailableEndDate, selectedStartDate, selectedEndDate);
    }

    // You can add a method to handle the PUT request and update the rental details

    //DELETE Mapping???
    // You can add a method to handle the DELETE request and delete a rental
}

