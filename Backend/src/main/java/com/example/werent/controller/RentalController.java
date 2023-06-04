package com.example.werent.controller;

import com.example.werent.entity.LocationDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.repository.RentalRepository;
import com.example.werent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/Rentals")
public class RentalController {
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalController(RentalRepository rentalRepository) {

        this.rentalRepository = rentalRepository;

    }

    @PostMapping("/addRental")
    public RentalDTO addRental(@RequestBody RentalDTO newRental) {

        return rentalRepository.addRental(newRental);
    }

    @GetMapping("/getRentalsByUserId")
    public List<Map<String, Object>> getAllRentals(@RequestParam Integer userid) {

        return rentalRepository.getAllRentals(userid);
    }
    @GetMapping("/getRentalsRentalId")
    public RentalDTO getRentalsByRentalId(@RequestParam Integer rentalId) {
        return rentalRepository.getRental(rentalId);
    }

    @PutMapping("/updateLocation")
    public void updateLocation(@RequestBody LocationDTO rentalLocation) {
        System.out.println(rentalLocation.getRentalId());
        rentalRepository.updateLocation(rentalLocation.getRentalId(), rentalLocation.getCity(), rentalLocation.getProvince(), rentalLocation.getAddress(),rentalLocation.getLatitude(), rentalLocation.getLongitude());
    }

    @PutMapping("/updateRentalInfo")
    public void updateRentalInfo(@RequestBody RentalDTO rentalDTO)
    {
        rentalRepository.updateRentalInfo(rentalDTO.getRentalId(),rentalDTO.getDailyPrice(),rentalDTO.getMaxStayDuration(),rentalDTO.getCancellationRefund(),rentalDTO.getCancellationDayLimit(),rentalDTO.getEarliestCheckInHour(),rentalDTO.getLatestCheckOutHour(), rentalDTO.getCancellationHourLimit(), rentalDTO.isAutoApproveRequests(), rentalDTO.getAdminApproved());
    }

    @PutMapping("/updateRentalDates")
    public void updateRentalDates(
            @RequestParam Integer rentalId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime hostSelectedStartDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime hostSelectedEndDate)
    {
        rentalRepository.updateRentalDates(rentalId, hostSelectedStartDate, hostSelectedEndDate);
    }


    // You can add a method to handle the PUT request and update the rental details

    //DELETE Mapping???
    // You can add a method to handle the DELETE request and delete a rental
    @DeleteMapping("/deleteRental")
    public void deleteRental(@RequestParam Integer rentalId)
    {
        rentalRepository.deleteRental(rentalId);
    }
}

