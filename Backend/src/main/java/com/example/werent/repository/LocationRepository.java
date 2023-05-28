package com.example.werent.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Repository
public class LocationRepository {
    private final JdbcTemplate jdbcTemplate;

    public LocationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> getCityNames() {
        String sql = "SELECT name FROM \"Cities\" ";
        List<Map<String, Object>> cityNames = jdbcTemplate.queryForList(sql);
        return cityNames;
    }

    public List<Map<String, Object>> getDistrictNames(String city) {
        String sql = "SELECT name FROM \"Districts\" WHERE CITY = '" + city + "'" ;
        List<Map<String, Object>> districtsNames = jdbcTemplate.queryForList(sql);
        return districtsNames;
    }

}
