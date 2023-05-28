package com.example.werent.controller;
import com.example.werent.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@RestController
@CrossOrigin
@RequestMapping("/locations")
public class LocationController {

    private final LocationRepository locationRepository;
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    public LocationController(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @GetMapping("/cities")
    public List<Map<String, Object>> getCities() {
        List<Map<String, Object>> cities = locationRepository.getCityNames();
        return cities;
    }

    @GetMapping("/districts")
    public List<Map<String, Object>> getDistricts(@RequestParam String city) {
        List<Map<String, Object>> districts = locationRepository.getDistrictNames(city);
        return districts;
    }
}
