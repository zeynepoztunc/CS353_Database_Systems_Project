package com.example.werent.controller;

import com.example.werent.entity.LocationDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping
    public void updateLocation(@RequestBody LocationDTO rentalLocation) {
        System.out.println(rentalLocation.getRentalId());
        rentalRepository.updateLocation(rentalLocation.getRentalId(), rentalLocation.getCity(), rentalLocation.getProvince(), rentalLocation.getAddress(),rentalLocation.getLatitude(), rentalLocation.getLongitude());
    }
    // You can add a method to handle the PUT request and update the rental details

    //DELETE Mapping???
    // You can add a method to handle the DELETE request and delete a rental
}

