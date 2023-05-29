package com.example.werent.repository;

import com.example.werent.entity.HostDTO;
import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.entity.WishlistsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Repository
public class CustomerRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public CustomerRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> listRentalsForCustomer(RegisteredUserDTO searcher){
        int customerId = searcher.getUserId();
        System.out.println("Listing all rentals for the customer (with id = " + customerId + ")...");
        String sqlListRentalsForCustomer = "SELECT rental.\"rental-id\", rental.\"rental-name\", rental.\"daily-price\", rental.rating, rental.city, rental.\"earthquake-support\", rental.couchsurfing, CASE WHEN  wishlists.\"rental-id\" IS NULL THEN 0 ELSE 1 END AS \"is-favorited\" FROM \"Rental\" rental LEFT JOIN ( SELECT \"rental-id\" FROM \"Wishlists\" wishlists WHERE \"user-id\" = ? ) AS wishlists ON rental.\"rental-id\" = wishlists.\"rental-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListRentalsForCustomer, customerId);
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

    public HostDTO getHostInfo(int rentalId){
        String sqlHostInfo = "SELECT name, \"is-superhost\" FROM \"Host\" WHERE \"user-id\" = ?";

        RowMapper<HostDTO> rowMapper = (rs, rowNum) -> {
            HostDTO host = new HostDTO();
            host.setName(rs.getString("name"));
            host.setSuperhost(rs.getBoolean("is-superhost"));
            return host;
        };

        try{
            HostDTO hostDTO = jdbcTemplate.queryForObject(sqlHostInfo, new Object[]{rentalId}, rowMapper);
            return hostDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Host information retrieval for the rental failed!");
            return null;
        }
    }

}
