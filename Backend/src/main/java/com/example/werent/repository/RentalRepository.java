package com.example.werent.repository;

import com.example.werent.entity.RentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;

@Repository
public class RentalRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RentalRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public RentalDTO addRental(RentalDTO newRental)
    {

        jdbcTemplate.execute("INSERT INTO \"Rental\" ( \"rental-name\", \"host-id\", \"guest-no\", \"daily-price\", rating, city, province, address, latitude, longitude, \"renting-available-start-date\", \"renting-available-end-date\", \"host-selected-rental-start-date\", \"host-selected-rental-end-date\", \"guest-policy\", \"rental-type\", \"area-in-m2\", \"num-of-beds\", description, \"earthquake-support\", \"max-stay-duration\", \"cancellation-refund\", \"cancellation-day-limit\", \"earliest-check-in-hour\", \"latest-check-in-hour\", \"cancellation-hour-limit\", \"auto-approve-requests\", \"is-admin-approved\", couchsurfing) VALUES ('Rental Name', 1, 2, 100.0, 4.5, 'City', 'Province', 'Address', 41.1, 29.0, '2023-05-30', '2023-06-30', '2023-05-31', '2023-06-29', 'Guest Policy', 'Rental Type', 50, 2, 'Description', true, 30, 50.0, 5, '13:00', '23:00', 48, false, true, false)");
        String sql = "INSERT INTO \"Amenities\" ( \"smoke-alarm\", \"fire-extinguisher\", \"first-aid-kit\", \"free-parking\", facilities, \"single-level-home\", washer, \"bed-linens\", hangers, essentials, \"clothing-storage\", \"AC\", heating, \"outdoor-dining-area\", \"bbq-grill\", \"pets-allowed\", \"daily-cleaning-service\", \"transfer-service\", fridge, oven, stove, dishwasher, \"dining-table\", microwave, dishes, \"hair-conditioner\", \"cleaning-products\", shampoo, \"body-soap\", \"shower-gel\", \"hot-water\", \"beach-access\", \"hopping-access\",\"museum-access\", \"transportation-access\", \"airport-access\", \"private-entrance\", beachfront, crib) " +
                "VALUES ( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)";
        jdbcTemplate.execute(sql);
        jdbcTemplate.update("UPDATE \"Rental\" SET \"rental-type\" = ?  WHERE \"rental-id\" = ?", newRental.getRentalType(), newRental.getRentalId());
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


    public void updateRentalInfo(int id, double dailyPrice, int maxStayDuration, double cancellationRefund, int cancellationDayLimit, Time earliestCheckInHour, Time latestCheckInHour, int cancellationHourLimit, boolean autoApproveRequests, boolean isAdminApproved) {
        String sql = "UPDATE \"Rental\" SET  \"daily-price\" = ?, \"max-stay-duration\" = ?, \"cancellation-refund\" = ?, \"cancellation-day-limit\" = ?, \"earliest-check-in-hour\" = ?, \"latest-check-in-hour\" = ?, \"cancellation-hour-limit\" = ?, \"auto-approve-requests\" = ?, \"is-admin-approved\" = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, dailyPrice,  maxStayDuration, cancellationRefund, cancellationDayLimit, earliestCheckInHour, latestCheckInHour, cancellationHourLimit, autoApproveRequests, isAdminApproved, id);
    }


    public void updateRentalDates(int id, LocalDateTime availableStartDate, LocalDateTime availableEndDate) {
        Timestamp startDateTimestamp = Timestamp.valueOf(availableStartDate);
        Timestamp endDateTimestamp = Timestamp.valueOf(availableEndDate);

        String sql = "UPDATE \"Rental\" SET  \"host-selected-rental-start-date\" = ?, \"host-selected-rental-end-date\" = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, startDateTimestamp, endDateTimestamp, id);
    }


    public void updateLocation(int id, String city, String province, String address, double latitude, double longitude) {
        String sql = "UPDATE \"Rental\" SET city = ?, province = ?, address = ?, latitude = ?, longitude = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, city, province, address, latitude, longitude, id);
    }

}
