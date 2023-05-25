package com.example.werent.controller;
import com.example.werent.entity.RentalEntity;
import com.example.werent.entity.RoomEntity;
import com.example.werent.repository.RoomRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/RoomDetails")
public class RoomController
{
    private RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository)
    {
        this.roomRepository = roomRepository;
    }


    @PostMapping
    public RoomEntity updateRoomDetails(@RequestBody RoomEntity newRoom, @RequestBody RentalEntity newRental)
    {
        return roomRepository.updateRoomDetails(newRoom,newRental);
    }
}
