package com.example.werent.repository;

import com.example.werent.entity.RentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;

@Repository
public class RentalRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RentalRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public RentalDTO findById(int id) {
        String sql = "SELECT * FROM \"Rental\" WHERE \"rental-id\" = ?";

        RowMapper<RentalDTO> rowMapper = (rs, rowNum) -> {
            RentalDTO rental = new RentalDTO();
            rental.setRentalId(rs.getInt("rental-id"));
            rental.setRentalName(rs.getString("rental-name"));
            // Set other fields as necessary
            return rental;
        };

        try {
            RentalDTO rentalDTO = jdbcTemplate.queryForObject(sql, new Object[]{id}, rowMapper);
            return rentalDTO;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public RentalDTO addRental(RentalDTO newRental) {
        //jdbcTemplate.update("INSERT INTO \"Rental\" (\"rental-name\", \"host-id\", \"guest-no\", \"daily-price\", rating, city, province, address, latitude, longitude, \"renting-available-start-date\", \"renting-available-end-date\", \"host-selected-rental-start-date\", \"host-selected-rental-end-date\", \"guest-policy\", \"rental-type\", \"area-in-m2\", \"num-of-beds\", description, \"earthquake-support\", \"max-stay-duration\", \"cancellation-refund\", \"cancellation-day-limit\", \"earliest-check-in-hour\", \"latest-check-in-hour\", \"cancellation-hour-limit\", \"auto-approve-requests\", \"is-admin-approved\", couchsurfing) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                //"Rental Name", 1, 2, 100.0, 4.5, "City", "Province", "Address", 41.1, 29.0, "2023-05-30", "2023-06-30", "2023-05-31", "2023-06-29", "Guest Policy", "Rental Type", 50, 2, "Description", true, 30, 50.0, 5, "13:00", "23:00", 48, false, true, false);

        jdbcTemplate.execute("INSERT INTO \"Rental\" ( \"rental-name\", \"host-id\", \"guest-no\", \"daily-price\", rating, city, province, address, latitude, longitude, \"renting-available-start-date\", \"renting-available-end-date\", \"host-selected-rental-start-date\", \"host-selected-rental-end-date\", \"guest-policy\", \"rental-type\", \"area-in-m2\", \"num-of-beds\", description, \"earthquake-support\", \"max-stay-duration\", \"cancellation-refund\", \"cancellation-day-limit\", \"earliest-check-in-hour\", \"latest-check-in-hour\", \"cancellation-hour-limit\", \"auto-approve-requests\", \"is-admin-approved\", couchsurfing) VALUES ('Rental Name', 1, 2, 100.0, 4.5, 'City', 'Province', 'Address', 41.1, 29.0, '2023-05-30', '2023-06-30', '2023-05-31', '2023-06-29', 'Guest Policy', 'Rental Type', 50, 2, 'Description', true, 30, 50.0, 5, '13:00', '23:00', 48, false, true, false)");
        if (newRental.getRentalType().equals("Room")) {
            int rentalId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
            newRental.setRentalId(rentalId);
            jdbcTemplate.update("INSERT INTO \"Room\" (\"rental-id\", \"common-kitchen-num\", \"common-bathroom-num\", \"common-living-room-num\") VALUES (?, 0, 0, 0)", rentalId);
        } else if (newRental.getRentalType().equals("Flat")) {
            int rentalId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
            newRental.setRentalId(rentalId);
            jdbcTemplate.update("INSERT INTO \"Flat\" (\"rental-id\", \"flat-type\", \"num-of-rooms\", \"no-of-bathrooms\") VALUES (?, 'flat type', 0, 0)", rentalId);
        }

        return newRental;
    }

}
