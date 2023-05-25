package com.example.werent.repository;
import com.example.werent.entity.RentalEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RentalRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RentalRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public RentalEntity addRental(RentalEntity newRental) {
        jdbcTemplate.execute("INSERT INTO \"Rental\" ( \"rental-name\", \"host-id\", \"guest-no\", \"daily-price\", rating, city, province, address, latitude, longitude, \"renting-available-start-date\", \"renting-available-end-date\", \"host-selected-rental-start-date\", \"host-selected-rental-end-date\", \"guest-policy\", \"rental-type\", \"area-in-m2\", \"num-of-beds\", description, \"earthquake-support\", \"max-stay-duration\", \"cancellation-refund\", \"cancellation-day-limit\", \"earliest-check-in-hour\", \"latest-check-in-hour\", \"cancellation-hour-limit\", \"auto-approve-requests\", \"is-admin-approved\", couchsurfing) VALUES ('Rental Name', 1, 2, 100.0, 4.5, 'City', 'Province', 'Address', 41.1, 29.0, '2023-05-30', '2023-06-30', '2023-05-31', '2023-06-29', 'Guest Policy', 'Rental Type', 50, 2, 'Description', true, 30, 50.0, 5, '13:00', '23:00', 48, false, true, false)");
        int rental_id = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
        if (newRental.getRentalType().equals("Room")) {
            // run your SQL query for Room
            jdbcTemplate.update("INSERT INTO  \"Room\" (\"rental-id\",\"common-kitchen-num\", \"common-bathroom-num\", \"common-living-room-num\") VALUES (?,0,0,0)",rental_id);
        } else if (newRental.getRentalType().equals("Flat")) {
            // run your SQL query for Flat
            jdbcTemplate.update("INSERT INTO  \"Flat\" (\"rental-id\",\"flat-type\", \"num-of-rooms\", \"no-of-bathrooms\") VALUES (?,'flat type',0,0)",rental_id);
        }
        // you might also want to save newRental to a general Rentals table
        return newRental;
    }


}

