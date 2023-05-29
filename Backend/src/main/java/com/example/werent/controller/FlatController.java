package com.example.werent.controller;

import com.example.werent.entity.AmenitiesDTO;
import com.example.werent.entity.FlatDetailsDTO;
import com.example.werent.repository.AmenitiesRepository;
import com.example.werent.repository.FlatRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/UpdateFlatDetails")
public class FlatController {

    private FlatRepository flatRepository;

    private AmenitiesRepository amenitiesRepository;

    public FlatController(FlatRepository flatRepository,AmenitiesRepository amenitiesRepository) {
        this.flatRepository = flatRepository;
        this.amenitiesRepository = amenitiesRepository;
    }

    public void updateFlatDetails(FlatDetailsDTO flatDetailsDTO)
    {
        flatRepository.updateFlatDetails(flatDetailsDTO.getRentalId(),flatDetailsDTO.getHostId(),flatDetailsDTO.getRentalName(),flatDetailsDTO.getAreaInM2(),flatDetailsDTO.getNumOfRoomsInFlat(),flatDetailsDTO.getFlatType(),flatDetailsDTO.getNumOfBathrooms(),flatDetailsDTO.getNumOfBedsInFlat(),flatDetailsDTO.getGuestNo(),flatDetailsDTO.getDescription(),flatDetailsDTO.isEarthquakeSupport(),flatDetailsDTO.isCouchsurfing());
    }

    @PostMapping("/amenities")
    public void updateAmenities(@RequestBody AmenitiesDTO amenities) {
        System.out.println("inside updateAmenities FOR FLAT");
        amenitiesRepository.updateAmenitiesForRental(amenities.getRentalId(), amenities.getSmokealarm(), amenities.getFireextinguisher(), amenities.getFirstaidkit(), amenities.getFreeparking(), amenities.getFacilities(), amenities.getSinglelevelhome(), amenities.getWasher(), amenities.getBedlinens(), amenities.getHangers(), amenities.getEssentials(), amenities.getClothingstorage(), amenities.getAc(), amenities.getHeating(), amenities.getOutdoordiningarea(), amenities.getBbqgrill(), amenities.getPetsallowed(), amenities.getDailycleaningservice(), amenities.getTransferservice(), amenities.getFridge(), amenities.getOven(), amenities.getStove(), amenities.getDishwasher(), amenities.getDiningtable(), amenities.getMicrowave(), amenities.getDishes(), amenities.getHairconditioner(), amenities.getCleaningproducts(), amenities.getShampoo(), amenities.getBodysoap(), amenities.getShowergel(), amenities.getHotwater(), amenities.getBeachaccess(), amenities.getHoppingaccess(), amenities.getMuseumaccess(), amenities.getTransportationaccess(), amenities.getAirportaccess(), amenities.getPrivateentrance(), amenities.getBeachfront(), amenities.getCrib());
    }
}
