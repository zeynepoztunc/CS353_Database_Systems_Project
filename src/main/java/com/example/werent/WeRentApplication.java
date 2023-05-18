package com.example.werent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class WeRentApplication {

    public static void main(String[] args) {
        SpringApplication.run(WeRentApplication.class, args);
    }
}

@Component
class DatabaseHealthChecker {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DatabaseHealthChecker(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @PostConstruct
    public void healthCheck()
    {
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT * FROM \"public\".\"User\" LIMIT 100");
        for (Map row : rows) {
            System.out.println(row);
        }
        System.out.println("Successfully executed a query on the database");
    }
}
