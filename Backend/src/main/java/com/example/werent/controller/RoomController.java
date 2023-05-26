package com.example.werent.controller;
import com.example.werent.entity.RentalEntity;
import com.example.werent.entity.RoomDetailsDTO;
import com.example.werent.entity.RoomEntity;
import com.example.werent.repository.RoomRepository;
import com.example.werent.repository.RentalRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/updateRoomDetails")
public class RoomController {
    private RoomRepository roomRepository;
    private RentalRepository rentalRepository;

    public RoomController(RoomRepository roomRepository, RentalRepository rentalRepository) {
        this.roomRepository = roomRepository;
        this.rentalRepository = rentalRepository;
    }


    @PostMapping
    public void updateRoomDetails(@RequestBody RoomDetailsDTO roomDetails)
    {
        roomRepository.updateRoomDetails(roomDetails.getRentalId(), roomDetails.getHostId(), roomDetails.getRentalName(), roomDetails.getAreaInM2(), roomDetails.getGuestNo(), roomDetails.getNumOfBeds(), roomDetails.getDescription(), roomDetails.isEarthquakeSupport(), roomDetails.isCouchsurfing(), roomDetails.getCommonKitchenNum(), roomDetails.getCommonBathroomNum(), roomDetails.getCommonLivingRoomNum());
    }
}

