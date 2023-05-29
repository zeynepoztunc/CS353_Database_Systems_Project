package com.example.werent.controller;

import com.example.werent.entity.AmenitiesDTO;
import com.example.werent.repository.AmenitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/amenities")
public class AmenitiesController {

    private final AmenitiesRepository amenitiesRepository;

    @Autowired
    public AmenitiesController(AmenitiesRepository amenitiesRepository) {
        this.amenitiesRepository = amenitiesRepository;
    }



    @GetMapping
    public List<String> getAmenities() {
        List<String> amenities = amenitiesRepository.getAmenities();
        return amenities;
    }

}
