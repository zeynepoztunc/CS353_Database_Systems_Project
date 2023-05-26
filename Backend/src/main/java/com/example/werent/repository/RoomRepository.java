package com.example.werent.repository;
import com.example.werent.entity.RentalEntity;
import com.example.werent.entity.RoomEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RoomRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RoomRepository(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void updateRoomDetails(int rentalId, int hostId, String rentalName, int areaInM2, int guestNo, int numOfBeds, String description, boolean earthquakeSupport, boolean couchsurfing, int commonKitchenNum, int commonBathroomNum, int commonLivingRoomNum) {
        System.out.println("Entering updateRoomDetails method");
        System.out.println("Parameters: " + rentalId + ", " + hostId + ", " + rentalName + ", " + areaInM2 + ", " + guestNo + ", " + numOfBeds + ", " + description + ", " + earthquakeSupport + ", " + couchsurfing + ", " + commonKitchenNum + ", " + commonBathroomNum + ", " + commonLivingRoomNum);

        String sqlUpdateRental = "UPDATE \"Rental\" SET \"rental-name\" = ?, \"area-in-m2\" = ?, \"guest-no\" = ?, \"num-of-beds\" = ?, description = ?, \"earthquake-support\" = ?, couchsurfing = ? WHERE  \"rental-id\" = ?";
        System.out.println("Executing sqlUpdateRental: " + sqlUpdateRental);
        jdbcTemplate.update(sqlUpdateRental, rentalName, areaInM2, guestNo, numOfBeds, description, earthquakeSupport, couchsurfing,rentalId);

        String sqlUpdateRoom = "UPDATE \"Room\" SET \"common-kitchen-num\" = ?, \"common-bathroom-num\" = ?, \"common-living-room-num\" = ? WHERE \"rental-id\" = ?";
        System.out.println("Executing sqlUpdateRoom: " + sqlUpdateRoom);
        jdbcTemplate.update(sqlUpdateRoom, commonKitchenNum, commonBathroomNum, commonLivingRoomNum, rentalId);

        System.out.println("Exiting updateRoomDetails method");
    }

}