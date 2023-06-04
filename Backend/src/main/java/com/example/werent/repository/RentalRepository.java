package com.example.werent.repository;

import com.example.werent.entity.RentalDTO;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class RentalRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public RentalRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public RentalDTO addRental(RentalDTO newRental)
    {

        System.out.println(newRental.getHostId());
        jdbcTemplate.update("INSERT INTO \"Rental\" ( \"rental-name\", \"host-id\", \"guest-no\", \"daily-price\", rating, city, province, address, latitude, longitude, \"renting-available-start-date\", \"renting-available-end-date\", \"host-selected-rental-start-date\", \"host-selected-rental-end-date\", \"guest-policy\", \"rental-type\", \"area-in-m2\", \"num-of-beds\", description, \"earthquake-support\", \"max-stay-duration\", \"cancellation-refund\", \"cancellation-day-limit\", \"earliest-check-in-hour\", \"latest-check-in-hour\", \"cancellation-hour-limit\", \"auto-approve-requests\", \"is-admin-approved\", couchsurfing) VALUES ('Rental Name', ?, 2, 100.0, 4.5, 'City', 'Province', 'Address', 41.1, 29.0, '2023-05-30', '2023-06-30', '2023-05-31', '2023-06-29', 'Guest Policy', 'Rental Type', 50, 2, 'Description', true, 30, 50.0, 5, '13:00', '23:00', 48, false, true, false)", newRental.getHostId());
        String sql = "INSERT INTO \"Amenities\" ( \"smoke-alarm\", \"fire-extinguisher\", \"first-aid-kit\", \"free-parking\", facilities, \"single-level-home\", washer, \"bed-linens\", hangers, essentials, \"clothing-storage\", \"AC\", heating, \"outdoor-dining-area\", \"bbq-grill\", \"pets-allowed\", \"daily-cleaning-service\", \"transfer-service\", fridge, oven, stove, dishwasher, \"dining-table\", microwave, dishes, \"hair-conditioner\", \"cleaning-products\", shampoo, \"body-soap\", \"shower-gel\", \"hot-water\", \"beach-access\", \"hopping-access\",\"museum-access\", \"transportation-access\", \"airport-access\", \"private-entrance\", beachfront, crib) " +
                "VALUES ( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)";
        jdbcTemplate.execute(sql);
        int rentalId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
        jdbcTemplate.update("UPDATE \"Rental\" SET \"rental-type\" = ?, \"host-id\"  = ? WHERE \"rental-id\" = ?", newRental.getRentalType(),newRental.getHostId(), newRental.getRentalId());
        if (newRental.getRentalType().equals("Room")) {
            rentalId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
            newRental.setRentalId(rentalId);
            jdbcTemplate.update("INSERT INTO \"Room\" (\"rental-id\", \"common-kitchen-num\", \"common-bathroom-num\", \"common-living-room-num\") VALUES (?, 0, 0, 0)", rentalId);
        } else if (newRental.getRentalType().equals("Flat")) {
            rentalId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
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

    public List<Map<String, Object>> getAllRentals(Integer id) {
        String sql = "SELECT * FROM \"Rental\" WHERE \"host-id\" = ?";
        return jdbcTemplate.queryForList(sql, id);
    }


    public void updateLocation(int id, String city, String province, String address, double latitude, double longitude) {
        String sql = "UPDATE \"Rental\" SET city = ?, province = ?, address = ?, latitude = ?, longitude = ? WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, city, province, address, latitude, longitude, id);
    }

    public RentalDTO getRental(Integer rentalId)
    {
        String sql = "SELECT * FROM \"Rental\" WHERE \"rental-id\" = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{rentalId}, new  RowMapper<RentalDTO>() {
            @Override
            public RentalDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                RentalDTO rental = new RentalDTO();
                rental.setRentalId(rs.getInt("rental-id"));
                rental.setRentalName(rs.getString("rental-name"));
                rental.setHostId(rs.getInt("host-id"));
                rental.setDailyPrice((float) rs.getDouble("daily-price"));
                rental.setRentalType(rs.getString("rental-type"));
                rental.setDailyPrice((float) rs.getDouble("daily-price"));
                rental.setMaxStayDuration(rs.getInt("max-stay-duration"));
                rental.setCancellationRefund( rs.getInt("cancellation-refund"));
                rental.setCancellationDayLimit(rs.getInt("cancellation-day-limit"));
                rental.setEarliestCheckInHour(rs.getTime("earliest-check-in-hour"));
                rental.setLatestCheckOutHour(rs.getTime("latest-check-in-hour"));
                rental.setCancellationHourLimit(rs.getInt("cancellation-hour-limit"));
                rental.setAutoApproveRequests(rs.getBoolean("auto-approve-requests"));
                rental.setAdminApproved(rs.getBoolean("is-admin-approved"));
                rental.setHostSelectedRentalStartDate(rs.getTimestamp("host-selected-rental-start-date"));
                rental.setHostSelectedRentalEndDate(rs.getTimestamp("host-selected-rental-end-date"));
                rental.setAddress(rs.getString("address"));
                rental.setLatitude((float) rs.getDouble("latitude"));
                rental.setLongitude((float) rs.getDouble("longitude"));
                rental.setCity(rs.getString("city"));
                rental.setProvince(rs.getString("province"));
                rental.setEarthquakeSupport(rs.getBoolean("earthquake-support"));
                rental.setGuestNo(rs.getInt("guest-no"));
                rental.setAreaInM2(rs.getInt("area-in-m2"));
                rental.setDescription(rs.getString("description"));
                rental.setNumOfBeds(rs.getInt("num-of-beds"));
                rental.setCancellationRefund(rs.getInt("cancellation-refund"));
                rental.setImagePath(rs.getString("image-path"));
                rental.setCouchsurfing(rs.getBoolean("couchsurfing"));
                return rental;
            }
        });


    }

    public void deleteRental(int id) {
        String sql = "DELETE FROM \"Rental\" WHERE \"rental-id\" = ?";
        jdbcTemplate.update(sql, id);
    }

    public List<Double[]> getAllRentalLocations() {
        String sql = "SELECT latitude, longitude FROM \"Rental\"";
        List<Double[]> locations = jdbcTemplate.query(sql, new RowMapper<Double[]>() {
            @Override
            public Double[] mapRow(ResultSet rs, int rowNum) throws SQLException {
                Double latitude = rs.getDouble("latitude");
                Double longitude = rs.getDouble("longitude");
                return new Double[]{latitude, longitude};
            }
        });
        return locations;
    }

    // Function to calculate the distance between two points based on their latitudes and longitudes
    public double calculateDistance(float lat1, float lon1, float lat2, float lon2) {
        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        double distance = R * c;

        return distance;
    }

    // Modify your database function to filter by distance
    public List<String> getAllRentalLocations(float selectedLat, float selectedLon) {
        String sql = "SELECT \"rental-name\", latitude, longitude FROM \"Rental\"";
        List<String> locations = new ArrayList<>();

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);
        for (Map row : rows) {
            float lat = (float) row.get("latitude");
            float lon = (float) row.get("longitude");

            double distance = calculateDistance(selectedLat, selectedLon, lat, lon);
            if (distance <= 100) {
                locations.add((String) row.get("rental-name"));
            }
        }

        return locations;
    }


}
