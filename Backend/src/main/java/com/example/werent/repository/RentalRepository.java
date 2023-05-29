package com.example.werent.repository;

import com.example.werent.entity.RentalDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.Date;

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


    public void updateRentalInfo(int id, String name, double dailyPrice, int maxStayDuration, double cancellationRefund, int cancellationDayLimit, Date earliestCheckInHour, Date latestCheckInHour, int cancellationHourLimit, boolean autoApproveRequests, boolean isAdminApproved) {
        String sql = "UPDATE \"Rental\" SET \"rental-name\" = ?, \"daily-price\" = ?, \"max-stay-duration\" = ?, \"cancellation-refund\" = ?, \"cancellation-day-limit\" = ?, \"earliest-check-in-hour\" = ?, \"latest-check-in-hour\" = ?, \"cancellation-hour-limit\" = ?, \"auto-approve-requests\" = ?, \"is-admin-approved\" = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, name, dailyPrice,  maxStayDuration, cancellationRefund, cancellationDayLimit, earliestCheckInHour, latestCheckInHour, cancellationHourLimit, autoApproveRequests, isAdminApproved, id);
    }

    public void updateRentalDates(int id, Date availableStartDate, Date availableEndDate, Date selectedStartDate, Date selectedEndDate) {
        String sql = "UPDATE \"Rental\" SET \"renting-available-start-date\" = ?, \"renting-available-end-date\" = ?, \"host-selected-rental-start-date\" = ?, \"host-selected-rental-end-date\" = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, availableStartDate, availableEndDate, selectedStartDate, selectedEndDate, id);
    }

    public void updateLocation(int id, String city, String province, String address, double latitude, double longitude) {
        String sql = "UPDATE \"Rental\" SET city = ?, province = ?, address = ?, latitude = ?, longitude = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, city, province, address, latitude, longitude, id);
    }

}
