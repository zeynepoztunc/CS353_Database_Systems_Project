package com.example.werent.controller;
import com.example.werent.entity.ImagesDTO;
import com.example.werent.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.SQLException;

@RestController
@CrossOrigin
@RequestMapping("/photographs")
public class ImagesController {


    ImagesRepository imagesRepository;

    @Autowired
    public ImagesController(ImagesRepository imagesRepository) {
        this.imagesRepository = imagesRepository;
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam MultipartFile image_data, @RequestParam Integer rental_id) throws IOException, SQLException {
       imagesRepository.uploadImage(image_data, rental_id);
    }
}
