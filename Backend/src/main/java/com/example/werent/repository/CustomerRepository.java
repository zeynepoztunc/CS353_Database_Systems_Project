package com.example.werent.repository;

import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.RentalDTO;
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
        String sqlAddToFaavorites = "INSERT INTO \"Wishlists\" VALUES ( ?, ?, ?)";
        jdbcTemplate.update(sqlAddToFaavorites, rentalId, userId, date);
    }
}
