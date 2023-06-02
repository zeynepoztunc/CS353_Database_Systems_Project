package com.example.werent.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class WishlistsRepository {

   private final JdbcTemplate jdbcTemplate;

   public WishlistsRepository(JdbcTemplate jdbcTemplate) {
      this.jdbcTemplate = jdbcTemplate;
   }

    public void addWishlist(int userId, int rentalId, String date){

        String sql = "INSERT INTO \"Wishlists\" (\"user-id\", \"rental-id\",\"date\") VALUES (?, ?,?)";
        jdbcTemplate.update(sql, userId, rentalId);
    }


}
