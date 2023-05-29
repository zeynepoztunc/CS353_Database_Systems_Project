package com.example.werent.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class FlatRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public FlatRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void updateFlatDetails(int rentalId, int hostId, String rentalName, int areaInM2, int numOfRooms, String flatType, int numOfBathrooms, int numOfBeds, int guestNo, String description, boolean earthquakeSupport, boolean couchsurfing)
    {
        System.out.println("Entering updateFlatDetails method");
        System.out.println("Parameters: " + rentalId + ", " + hostId + ", " + rentalName + ", " + areaInM2 + ", " + numOfRooms + ", " + flatType + ", " + numOfBathrooms + ", " + guestNo + ", " + description + ", " + earthquakeSupport + ", " + couchsurfing);

        String sqlUpdateRental = "UPDATE \"Rental\" SET \"rental-name\" = ?, \"area-in-m2\" = ?, \"num-of-beds\" = ?, \"guest-no\" = ?, description = ?, \"earthquake-support\" = ?, couchsurfing = ? WHERE  \"rental-id\" = ?";
        System.out.println("Executing sqlUpdateRental: " + sqlUpdateRental);
        jdbcTemplate.update(sqlUpdateRental, rentalName, areaInM2, numOfBeds, guestNo, description, earthquakeSupport, couchsurfing, rentalId);

        String sqlUpdateFlat = "UPDATE \"Flat\" SET \"flat-type\" = ?, \"num-of-rooms\" = ?, \"no-of-bathrooms\" = ? WHERE \"rental-id\" = ?";
        System.out.println("Executing sqlUpdateFlat: " + sqlUpdateFlat);
        jdbcTemplate.update(sqlUpdateFlat, flatType,numOfRooms, numOfBathrooms, rentalId);

        System.out.println("Exiting updateFlatDetails method");
    }

}
