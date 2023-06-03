package com.example.werent.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;


import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.sql.SQLException;


@Repository
public class ImagesRepository
{

    private final JdbcTemplate jdbcTemplate;

    public ImagesRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public void uploadImage(MultipartFile file, Integer rentalId) throws IOException, SQLException {
        String originalFilename = file.getOriginalFilename();
        if (originalFilename != null && originalFilename.toLowerCase().endsWith(".jpg")) {
            // Convert the file to a byte array
            byte[] bytes = file.getBytes();

            // Insert the byte array and rental ID into the Images table
            jdbcTemplate.execute("INSERT INTO \"Images\" ( \"image_data\", \"rental_id\") VALUES (?, ?)",
                    (PreparedStatementCallback<Object>) ps -> {
                        ps.setBytes(1, bytes);
                        ps.setInt(2, rentalId);
                        return ps.execute();
                    });
        } else {
            throw new IllegalArgumentException("File must be a .jpg file");
        }
    }

}
