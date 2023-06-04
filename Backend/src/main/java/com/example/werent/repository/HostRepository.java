package com.example.werent.repository;

import com.example.werent.entity.HostDTO;
import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.HashMap;
import java.util.Map;

@Repository
public class HostRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public HostRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, Object> getHostDetails(Integer hostid) {
        String sql = "SELECT H.*, U.name AS name, U.surname AS surname, U.password  AS password, R.\"e-mail\" AS email, R.\"date-of-birth\" AS birthdate, R.\"telephone-no\" AS telephoneNo, R.\"gender\" AS gender FROM \"Host\" H LEFT JOIN \"User\" U ON H.\"user-id\" = U.\"user-id\" LEFT JOIN \"RegisteredUser\" R ON H.\"user-id\" = R.\"user-id\" WHERE H.\"user-id\" = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{hostid}, (resultSet, i) -> {
            HostDTO hostDTO = new HostDTO();
            UserDTO userDTO = new UserDTO();
            RegisteredUserDTO registeredUserDTO = new RegisteredUserDTO();

            hostDTO.setUserId(resultSet.getInt("user-id"));
            hostDTO.setIban(resultSet.getString("iban"));
            hostDTO.setRegion(resultSet.getString("region"));
            hostDTO.setLanguage(resultSet.getString("language"));
            hostDTO.setJob(resultSet.getString("job"));
            hostDTO.setSuperhost(resultSet.getBoolean("is-superhost"));

            userDTO.setName(resultSet.getString("name"));
            userDTO.setSurname(resultSet.getString("surname"));
            userDTO.setPassword(resultSet.getString("password"));

            registeredUserDTO.setEmail(resultSet.getString("email"));
            registeredUserDTO.setDateOfBirth(resultSet.getDate("birthdate"));
            registeredUserDTO.setTelephoneNo(resultSet.getString("telephoneNo"));
            registeredUserDTO.setGender(resultSet.getString("gender"));

            Map<String, Object> result = new HashMap<>();
            result.put("host", hostDTO);
            result.put("user", userDTO);
            result.put("registeredUser", registeredUserDTO);

            return result;
        });
    }




}
