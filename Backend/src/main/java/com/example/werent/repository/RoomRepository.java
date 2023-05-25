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

    public RoomEntity updateRoomDetails(RoomEntity newRoom, RentalEntity rentalEntity) {
        String sqlUpdateRental = "UPDATE \"Rental\" SET \"rental-name\" = ?, \"area-in-m2\" = ?, \"guest-no\" = ?, \"num-of-beds\" = ?, description = ?, \"earthquake-support\" = ?, couchsurfing = ? WHERE \"host-id\" = ? AND \"rental-id\" = ?";
        jdbcTemplate.update(sqlUpdateRental, rentalEntity.getRentalName(), rentalEntity.getAreaInM2(), rentalEntity.getGuestNo(), rentalEntity.getNumOfBeds(), rentalEntity.getDescription(), rentalEntity.isEarthquakeSupport(), rentalEntity.isCouchsurfing(), rentalEntity.getHostId(), rentalEntity.getRentalId());

        String sqlUpdateRoom = "UPDATE \"Room\" SET \"common-kitchen-num\" = ?, \"common-bathroom-num\" = ?, \"common-living-room-num\" = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sqlUpdateRoom, newRoom.getCommonKitchenNum(), newRoom.getCommonBathroomNum(), newRoom.getCommonLivingRoomNum(), rentalEntity.getRentalId());

        return newRoom;
    }


}
