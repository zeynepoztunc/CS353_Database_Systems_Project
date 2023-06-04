package com.example.werent.repository;

import com.example.werent.entity.*;
import org.apache.catalina.Host;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class CustomerRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CustomerRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> listRentalsForCustomer(int userId){
        //int customerId = searcher.getUserId();
        System.out.println("Listing all rentals for the customer (with id = " + userId + ")...");
        String sqlListRentalsForCustomer = "SELECT rental.\"rental-id\", rental.\"image-path\",rental.\"rental-name\", rental.\"daily-price\", rental.rating, rental.city, rental.\"earthquake-support\", rental.couchsurfing, CASE WHEN  wishlists.\"rental-id\" IS NULL THEN 0 ELSE 1 END AS \"is-favorited\" FROM \"Rental\" rental LEFT JOIN ( SELECT \"rental-id\" FROM \"Wishlists\" wishlists WHERE \"user-id\" = ? ) AS wishlists ON rental.\"rental-id\" = wishlists.\"rental-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListRentalsForCustomer, userId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }

        /*RowMapper<RentalDTO> rowMapper = (rs, rowNum) -> {
            RentalDTO rental = new RentalDTO();
            rental.setRentalId(rs.getInt("rental-id"));
            rental.setRentalName(rs.getString("rental-name"));
            rental.setDailyPrice(rs.getFloat("daily-price"));
            rental.setRating(rs.getFloat("rating"));
            rental.setCity(rs.getString("city"));
            rental.setEarthquakeSupport(rs.getBoolean("earthquake-support"));
            rental.setCouchsurfing(rs.getBoolean("couchsurfing"));
            return rental;
        };

        try{
            RentalDTO rentalDTO = jdbcTemplate.queryForObject(sqlListRentalsForCustomer, new Object[]{customerId}, rowMapper);
            return rentalDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("No rental listing available...");
            return null;
        }*/
    }

    public void favorARental(int rentalId, int userId, Date date){
        String sqlAddToFaavorites = "INSERT INTO \"Wishlists\" VALUES (?, ?, ?)";
        jdbcTemplate.update(sqlAddToFaavorites, userId, rentalId, date);
    }

    public void unfavorARental(int rentalId, int userId){
        String sqlDeleteFromFavorites = "DELETE FROM \"Wishlists\" WHERE \"user-id\" = ? AND \"rental-id\" = ?";
        jdbcTemplate.update(sqlDeleteFromFavorites, userId, rentalId);
    }

    public List<Map<String, Object>> listRentalsFiltered(RentalDTO rentalFilters){
        String sqlListRentalsFiltered = "SELECT \"rental-id\", \"rental-name\", \"daily-price\", rating, city, \"earthquake-support\", couchsurfing FROM \"Rental\" WHERE (\"rental-name\" LIKE ? OR description LIKE ?) AND CASE WHEN ? = 1 THEN city END = ? AND CASE WHEN ? = 1 THEN \"rental-type\" END = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListRentalsFiltered,rentalFilters.getSearchInput(), rentalFilters.getSearchInput(), rentalFilters.getFilterCity(), rentalFilters.getChosenCity(), rentalFilters.getFilterCategory(), rentalFilters.getChosenCategory());
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listReadyPayments(RegisteredUserDTO customer){
        int customerId = customer.getUserId();
        System.out.println("Listing ready rental payments for the customer (with id = " + customerId + ")...");
        String sqlListReadyPayments = "SELECT ren.\"rental-name\", ren.description, res.\"reservation-start-date\", res.\"reservation-end-date\", res.\"stay-of-duration\", ren.\"daily-price\" * res.\"stay-of-duration\" AS \"whole-price\" FROM \"Rental\" ren, \"Reservation\" res, \"ShoppingCart\" shop WHERE ren.\"rental-id\" = shop.\"rental-id\" AND res.\"reservation-id\" = shop.\"reservation-id\" AND shop.\"user-id\" = ? AND (ren.\"auto-approve-requests\" = true OR (ren.\"auto-approve-requests\" = false AND res.\"is-approved-by-host\" = true))";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListReadyPayments, customerId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listRentalsForHostApproval(RegisteredUserDTO customer){
        int customerId = customer.getUserId();
        System.out.println("Listing rentals waiting for host approval for the customer (with id = " + customerId + ")...");
        String sqlListHostApprovals = "SELECT ren.\"rental-name\", ren.description, res.\"reservation-start-date\", res.\"reservation-end-date\", res.\"stay-of-duration\", ren.\"daily-price\" * res.\"stay-of-duration\" AS \"whole-price\" FROM \"Rental\" ren, \"Reservation\" res, \"ShoppingCart\" shop WHERE ren.\"rental-id\" = shop.\"rental-id\" AND res.\"reservation-id\" = shop.\"reservation-id\" AND shop.\"user-id\" = ? AND (ren.\"auto-approve-requests\" = false AND res.\"is-approved-by-host\" = false)";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListHostApprovals, customerId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listRentalsInPayment(RegisteredUserDTO customer){
        int customerId = customer.getUserId();
        System.out.println("Listing rentals in the payment process for the customer (with id = " + customerId + ")...");
        String sqlListRentalsInPayment = "SELECT ren.\"rental-name\", ren.\"daily-price\" * res.\"stay-of-duration\" AS \"whole-price\" FROM \"Rental\" ren, \"Reservation\" res, \"ShoppingCart\" shop WHERE ren.\"rental-id\" = shop.\"rental-id\" AND res.\"reservation-id\" = shop.\"reservation-id\" AND shop.\"user-id\" = ? AND  (ren.\"auto-approve-requests\" = true OR (ren.\"auto-approve-requests\" = false AND res.\"is-approved-by-host\" = true))";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListRentalsInPayment, customerId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public RentalDTO listRentalInfo(int rentalId){
        String sqlListRentalInfo = "SELECT \"rental-name\", \"daily-price\", description, city, province, \"earthquake-support\", couchsurfing from \"Rental\" WHERE \"rental-id\" = ?";

        RowMapper<RentalDTO> rowMapper = (rs, rowNum) -> {
            RentalDTO rental = new RentalDTO();
            rental.setRentalName(rs.getString("rental-name"));
            rental.setDailyPrice(rs.getFloat("daily-price"));
            rental.setDescription(rs.getString("description"));
            rental.setCity(rs.getString("city"));
            rental.setProvince(rs.getString("province"));
            rental.setEarthquakeSupport(rs.getBoolean("earthquake-support"));
            rental.setCouchsurfing(rs.getBoolean("couchsurfing"));
            return rental;
        };

        try{
            RentalDTO rentalDTO = jdbcTemplate.queryForObject(sqlListRentalInfo, new Object[]{rentalId}, rowMapper);
            return rentalDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Rental listing failed!");
            return null;
        }
    }

    public Boolean favoritedOrNot(WishlistsDTO wishlistInfo){
        int userId = wishlistInfo.getUserId();
        int rentalId = wishlistInfo.getRentalId();
        //String sqlSeeFavoritedOrNot = "SELECT EXISTS (SELECT * FROM \"Wishlists\" WHERE \"user-id\" = " + userId + " AND \"rental-id\" = " + rentalId +")";

        Integer cnt = jdbcTemplate.queryForObject(
                "SELECT count(*) FROM \"Wishlists\" WHERE \"user-id\" = ? AND \"rental-id\" =  ?", Integer.class, userId, rentalId
        );

        return cnt != null && cnt > 0;
    }

    public RentalDTO getRatingAvg(int rentalId){
        String sqlRatingAvg = "SELECT rating FROM \"Rental\" WHERE \"rental-id\" = ?";

        RowMapper<RentalDTO> rowMapper = (rs, rowNum) -> {
            RentalDTO rental = new RentalDTO();
            rental.setRating(rs.getFloat("rating"));
            return rental;
        };

        try{
            RentalDTO rentalDTO = jdbcTemplate.queryForObject(sqlRatingAvg, new Object[]{rentalId}, rowMapper);
            return rentalDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Rental average calculation failed!");
            return null;
        }
    }

    public UserDTO getHostInfo(Integer rentalId) {
        String sqlHostInfo = "SELECT U.\"name\" AS name, U.\"surname\"  AS surname FROM  \"User\" U  INNER JOIN \"Rental\" R ON U.\"user-id\" = R.\"host-id\"  AND  R.\"rental-id\" = ?";
        System.out.println("Retrieving host information for the rental (with id = " + rentalId + ")...");
        System.out.println(sqlHostInfo);
        try {
            UserDTO hostToRetrieve = new UserDTO();
            hostToRetrieve = jdbcTemplate.queryForObject(sqlHostInfo, new Object[]{rentalId}, new BeanPropertyRowMapper<>(UserDTO.class));
            return hostToRetrieve;
        }
        catch (EmptyResultDataAccessException e) {
            System.out.println("Host information retrieval for the rental failed!");
            return null;
        }
    }



    public void addReservation(ReservationDTO reservationInfo, int rentalId){
        System.out.println(rentalId + " " + reservationInfo.getReservationStartDate()+ " " +reservationInfo.getReservationEndDate()+ " " +reservationInfo.getStayOfDuration());
        String sqlAddReservation = "INSERT INTO \"Reservation\"(\"rental-id\",\"reservation-start-date\",\"reservation-end-date\",\"stay-of-duration\",\"is-paid-for\",\"is-approved-by-host\",\"number-of-guests\") VALUES (?,?,?,?,?,?,?)";
        jdbcTemplate.update(sqlAddReservation, rentalId, reservationInfo.getReservationStartDate(), reservationInfo.getReservationEndDate(), reservationInfo.getStayOfDuration(), false, null, reservationInfo.getNumberOfGuests());
    }

    public RentalDTO getLocation(int rentalId){
        String sqlGetLocation = "SELECT latitude, longitude FROM \"Rental\" WHERE \"rental-id\" = ?";

        RowMapper<RentalDTO> rowMapper = (rs, rowNum) -> {
            RentalDTO rental = new RentalDTO();
            rental.setLatitude(rs.getFloat("latitude"));
            rental.setLongitude(rs.getFloat("longitude"));
            return rental;
        };

        try{
            RentalDTO rentalDTO = jdbcTemplate.queryForObject(sqlGetLocation, new Object[]{rentalId}, rowMapper);
            return rentalDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Location retrieval for the rental failed!");
            return null;
        }
    }

    public List<Map<String, Object>> getAvgForHostAndRental(RegisteredUserDTO customer, int rentalId){
        String sqlGetAverages = "SELECT avg(\"Review\".\"cleanliness-rating\") AS \"avg-cleanliness\", avg(\"Review\".\"check-in-rating\") AS \"avg-check-in\", avg(\"Review\".\"communication-rating\") AS \"avg-communication\", avg(\"Review\".\"accuracy-rating\") AS \"avg-accuracy\", avg(\"Review\".\"safety-rating\") AS \"avg-safety\", avg(\"Review\".\"location-rating\") AS \"avg-location\", avg(\"Review\".\"value-rating\") AS \"avg-value\" FROM \"Leaves\" JOIN \"Review\" ON \"Leaves\".\"review-id\" = \"Review\".\"review-id\" JOIN \"Makes\" ON \"Leaves\".\"reservation-id\" = \"Makes\".\"reservation-id\" JOIN \"Rental\" ON \"Makes\".\"rental-id\" = \"Rental\".\"rental-id\" WHERE \"Leaves\".\"user-id2\" = ? AND \"Rental\".\"rental-id\" = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlGetAverages, customer.getUserId(), rentalId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }

        /*
        RowMapper<ReviewAggregateDTO> rowMapper = (rs, rowNum) -> {
            ReviewAggregateDTO reviewAggregate = new ReviewAggregateDTO();
            reviewAggregate.setAvgCleanliness(rs.getFloat("avg-cleanliness"));
            reviewAggregate.setAvgCheckIn(rs.getFloat("acg-check-in"));
            reviewAggregate.setAvgCommunication(rs.getFloat("avg-communication"));
            reviewAggregate.setAvgAccuracy(rs.getFloat("avg-accuracy"));
            reviewAggregate.setAvgSafety(rs.getFloat("avg-safety"));
            reviewAggregate.setAvgLocation(rs.getFloat("avg-location"));
            reviewAggregate.setAvgValue(rs.getFloat("avg-value"));
            return reviewAggregate;
        };

        try{
            ReviewAggregateDTO reviewAggregateDTO = jdbcTemplate.queryForObject(sqlGetAverages, new Object[]{customer.getUserId(), rentalId}, rowMapper);
            return reviewAggregateDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Average information retrieval for the rental failed!");
            return null;
        }
        */
    }

    public List<Map<String, Object>> getReviews(RegisteredUserDTO customer, int rentalId){
        String sqlGetReviews = "SELECT \"RegisteredUser\".name, \"Review\".review FROM \"Leaves\" JOIN \"Review\" ON \"Leaves\".\"review-id\" = \"Review\".\"review.id\" JOIN \"Makes\" ON \"Leaves\".\"reservation-id\" = \"Makes\".\"reservation-id\" JOIN \"Rental\" ON \"Makes\".\"rental-id\" = \"Rental\".\"rental-id\" JOIN \"RegisteredUser\" ON \"Leaves\".\"user-id1\" = \"RegisteredUser\".\"user-id\" WHERE \"Leaves\".\"user-id2\" = ? AND \"Rental\".\"rental-id\" = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlGetReviews, customer.getUserId(), rentalId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }

        /*
        RowMapper<ReviewDTO> rowMapper = (rs, rowNum) -> {
            ReviewDTO review = new ReviewDTO();
            review.setName(rs.getString("name"));
            review.setReview(rs.getString("review"));
            return review;
        };

        try{
            ReviewDTO reviewDTO = jdbcTemplate.queryForObject(sqlGetReviews, new Object[]{customer.getUserId(), rentalId}, rowMapper);
            return reviewDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Reviews retrieval for the rental failed!");
            return null;
        }
        */
    }

    public List<Map<String, Object>> getPastTransactions(){
        String sqlGetPastTransactions = "SELECT \"Transaction\".date, \"Rental\".\"rental-name\", \"Transaction\".\"transaction-type\", \"Transaction\".amount, \"Transaction\".status FROM Transaction JOIN \"Rental\" ON \"Transaction\".\"rental-id\"=\"Rental\".\"rental-id\" ORDER BY \"Transaction\".date DESC";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlGetPastTransactions);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public RegisteredUserDTO getProfileInfo(int userId){
        String sqlGetProfile = "SELECT name, email, password, description, \"user-rating\" FROM \"RegisteredUser\" WHERE \"user-id\" = ?";

        RowMapper<RegisteredUserDTO> rowMapper = (rs, rowNum) -> {
            RegisteredUserDTO user = new RegisteredUserDTO();
            user.setName(rs.getString("name"));
            user.setEmail(rs.getString("email"));
            user.setPassword(rs.getString("password"));
            user.setDescription(rs.getString("description"));
            user.setUserRating(rs.getFloat("user-rating"));
            return user;
        };

        try{
            RegisteredUserDTO registeredUserDTO = jdbcTemplate.queryForObject(sqlGetProfile, new Object[]{userId}, rowMapper);
            return registeredUserDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Profile information retrieval for the rental failed!");
            return null;
        }
    }

    public void switchToHost(int userId){
        String sqlSwitchHost = "UPDATE \"RegisteredUser\" SET \"usage-mode\" = ? WHERE \"user-id\" = ?";
        jdbcTemplate.update(sqlSwitchHost, "host", userId);
    }

    public void editProfileInfo(RegisteredUserDTO newInfo, int userId){
        String sqlEdit = "UPDATE \"RegisteredUser\" SET name = ?, surname = ?, password = ?, \"e-mail\" = ?, description = ? WHERE \"user-id\" = ?";
        jdbcTemplate.update(sqlEdit, newInfo.getName(), newInfo.getSurname(), newInfo.getPassword(), newInfo.getEmail(), newInfo.getDescription(), userId);
    }

    public List<Map<String, Object>> getHostReviews(int userId){
        String sqlGetHostReviews = "SELECT \"RegisteredUser\".name, \"Review\".review FROM \"Leaves\" JOIN \"Review\" ON \"Leaves\".\"review-id\"= \"Review\".\"review-id\" JOIN \"RegisteredUser\" ON \"Leaves\".\"user-id1\"=\"RegisteredUser\".\"user-id\" WHERE \"Leaves\".\"user-id2\" = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlGetHostReviews, userId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> getPreviousBookings(int userId){
        String sqlPreviousBookings = "SELECT \"Reservation\".\"reservation-start-date\", \"Reservation\".\"reservation-end-date\", \"Rental\".city, \"Rental\".\"rental-name\", \"Host\".name, \"Reservation\".\"number-of-guests\" FROM \"Makes\" JOIN \"Rental\" ON \"Makes\".\"rental-id\" = \"Rental\".\"rental-id\" JOIN \"Host\" ON \"Rental\".\"host-id\" = \"Host\".\"user-id\" JOIN \"Reservation\" ON \"Makes\".\"reservation-id\" = \"Reservation\".\"reservation-id\" WHERE \"Makes\".\"user-id\" = ? ORDER BY \"Reservation\".\"end-date\" DESC";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlPreviousBookings, userId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }


    public int leaveRating(ReviewDTO review){
        String sqlLeaveRating = "INSERT INTO \"Review\" (review, \"cleanliness-rating\", \"check-in-rating\", \"communication-rating\", \"accuracy-rating\", \"safety-rating\", \"location-rating\", \"value-rating\", \"is-anonymous\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        int res = jdbcTemplate.update(sqlLeaveRating, review.getReview(), review.getCleanlinessRating(), review.getCheckInRating(), review.getCommunicationRating(), review.getAccuracyRating(), review.getSafetyRating(), review.getLocationRating(), review.getValueRating(), review.isAnonymous());
        return res;
    }

    public void putReport(ReportsDTO reportDetails){
        String sqlPutReport = "INSERT INTO \"Reports\"(\"user-id\", \"rental-id\", \"report-date\", description, \"is-confirmed\", evaluated) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sqlPutReport, reportDetails.getUserId(), reportDetails.getRentalId(), reportDetails.getReportDate(),reportDetails.getDescription(), false, false);
    }

    public void putComplaint(ComplaintsDTO complaintDetails){
        String sqlPutComplaint = "INSERT INTO \"Complaints\" VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sqlPutComplaint, complaintDetails.getUserId1(), complaintDetails.getUserId2(), complaintDetails.getComplaintDate(), complaintDetails.getDescription(), false, false);
    }

    public List<Map<String, Object>> rentalsInWishlist(int userId){
        String sqlRentalsInWishlist = "SELECT ren.\"rental-name\", ren.description, wish.date FROM \"Rental\" ren, \"Wishlists\" wish WHERE ren.\"rental-id\" = wish.\"rental-id\" AND wish.\"user-id\" = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlRentalsInWishlist, userId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public void removeFromWishlist(RentalDTO rentalInfo, int userId){
        String sqlRemoveRentalFromWishlist = "DELETE FROM \"Wishlists\" WHERE \"user-id\" = ? AND \"rental-id\" = ?";
        jdbcTemplate.update(sqlRemoveRentalFromWishlist, userId, rentalInfo.getRentalId());
    }
    public Map<String, Object> getCustomerDetails(Integer customerid) {
        String sql = "SELECT H.*, U.name AS name, U.surname AS surname, U.password  AS password, R.\"e-mail\" AS email,R.\"user-rating\" AS userRating, R.\"date-of-birth\" AS birthdate,R.\"description\" AS description, R.\"telephone-no\" AS telephoneNo, R.\"gender\" AS gender FROM \"Host\" H LEFT JOIN \"User\" U ON H.\"user-id\" = U.\"user-id\" LEFT JOIN \"RegisteredUser\" R ON H.\"user-id\" = R.\"user-id\" WHERE H.\"user-id\" = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{customerid}, (resultSet, i) -> {
            UserDTO userDTO = new UserDTO();
            RegisteredUserDTO registeredUserDTO = new RegisteredUserDTO();


            userDTO.setName(resultSet.getString("name"));
            userDTO.setSurname(resultSet.getString("surname"));
            userDTO.setPassword(resultSet.getString("password"));

            registeredUserDTO.setEmail(resultSet.getString("email"));
            registeredUserDTO.setTelephoneNo(resultSet.getString("telephoneNo"));
            registeredUserDTO.setDescription(resultSet.getString("description"));
            registeredUserDTO.setUserRating(resultSet.getFloat("userRating"));

            Map<String, Object> result = new HashMap<>();
            result.put("user", userDTO);
            result.put("registeredUser", registeredUserDTO);

            return result;
        });
    }
}
