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

@CrossOrigin
@RestController
@RequestMapping("/Rentals")
public class RentalController {
    private final RentalRepository rentalRepository;
    private UserRepository userRepository;

    @Autowired
    public RentalController(RentalRepository rentalRepository, UserRepository userRepository) {

        this.rentalRepository = rentalRepository;
        this.userRepository = userRepository;

    }

    @PostMapping("/addRental")
    public RentalDTO addRental(@RequestBody RentalDTO newRental) {

        return rentalRepository.addRental(newRental);
    }

    @GetMapping("/getRentalsByUserId")
    public List<RentalDTO> getAllRentals(@RequestParam Integer userid) {
        return userRepository.getRentalsByHostId(userid);
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
}

