package com.example.werent.controller;

import com.example.werent.entity.FlatDetailsDTO;
import com.example.werent.repository.FlatRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/UpdateFlatDetails")
public class FlatController {

    private final FlatRepository flatRepository;


    public FlatController(FlatRepository flatRepository) {
        this.flatRepository = flatRepository;
    }

    @PostMapping
    public void updateFlatDetails(@RequestBody FlatDetailsDTO flatDetailsDTO)
    {
        flatRepository.updateFlatDetails(flatDetailsDTO.getRentalId(),flatDetailsDTO.getHostId(),flatDetailsDTO.getRentalName(),flatDetailsDTO.getAreaInM2(),flatDetailsDTO.getNumOfRoomsInFlat(),flatDetailsDTO.getFlatType(),flatDetailsDTO.getNumOfBathrooms(),flatDetailsDTO.getNumOfBedsInFlat(),flatDetailsDTO.getGuestNo(),flatDetailsDTO.getDescription(),flatDetailsDTO.isEarthquakeSupport(),flatDetailsDTO.isCouchsurfing());
    }

}
