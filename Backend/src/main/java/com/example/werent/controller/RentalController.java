package com.example.werent.controller;

import com.example.werent.entity.RentalEntity;
import com.example.werent.repository.RentalRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/Rentals")
public class RentalController {
    private RentalRepository rentalRepository;

    public RentalController(RentalRepository rentalRepository)
    {
        this.rentalRepository = rentalRepository;
    }


    @PostMapping
    public RentalEntity addRental(@RequestBody RentalEntity newRental){
        return rentalRepository.addRental(newRental);
    }

    //PUT Mapping???

    //DELETE Mapping???
}
