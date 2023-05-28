package com.example.werent.controller;

import com.example.werent.entity.AmenitiesDTO;
import com.example.werent.entity.RoomDetailsDTO;
import com.example.werent.repository.AmenitiesRepository;
import com.example.werent.repository.RoomRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/updateRoomDetails")
public class RoomController {
    private RoomRepository roomRepository;
    private AmenitiesRepository amenitiesRepository;

    public RoomController(RoomRepository roomRepository, AmenitiesRepository amenitiesRepository) {
        this.roomRepository = roomRepository;
        this.amenitiesRepository = amenitiesRepository;
    }

    @PostMapping
    public void updateRoomDetails(@RequestBody RoomDetailsDTO roomDetails) {

        roomRepository.updateRoomDetails(roomDetails.getRentalId(), roomDetails.getHostId(), roomDetails.getRentalName(), roomDetails.getAreaInM2(), roomDetails.getGuestNo(), roomDetails.getNumOfBeds(), roomDetails.getDescription(), roomDetails.isEarthquakeSupport(), roomDetails.isCouchsurfing(), roomDetails.getCommonKitchenNum(), roomDetails.getCommonBathroomNum(), roomDetails.getCommonLivingRoomNum());

    }

    @PostMapping("/amenities")
    public void updateAmenities(@RequestBody AmenitiesDTO amenities) {
        System.out.println("inside updateAmenities");
        amenitiesRepository.updateAmenitiesForRental(amenities.getRentalId(), amenities.getSmokealarm(), amenities.getFireextinguisher(), amenities.getFirstaidkit(), amenities.getFreeparking(), amenities.getFacilities(), amenities.getSinglelevelhome(), amenities.getWasher(), amenities.getBedlinens(), amenities.getHangers(), amenities.getEssentials(), amenities.getClothingstorage(), amenities.getAc(), amenities.getHeating(), amenities.getOutdoordiningarea(), amenities.getBbqgrill(), amenities.getPetsallowed(), amenities.getDailycleaningservice(), amenities.getTransferservice(), amenities.getFridge(), amenities.getOven(), amenities.getStove(), amenities.getDishwasher(), amenities.getDiningtable(), amenities.getMicrowave(), amenities.getDishes(), amenities.getHairconditioner(), amenities.getCleaningproducts(), amenities.getShampoo(), amenities.getBodysoap(), amenities.getShowergel(), amenities.getHotwater(), amenities.getBeachaccess(), amenities.getHoppingaccess(), amenities.getMuseumaccess(), amenities.getTransportationaccess(), amenities.getAirportaccess(), amenities.getPrivateentrance(), amenities.getBeachfront(), amenities.getCrib());
    }
}
