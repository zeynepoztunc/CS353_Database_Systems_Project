package com.example.werent.repository;

import com.example.werent.entity.UserEntity;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<Map<String, Object>> getAllUsers(){
        //List<UserEntity> resultList = new ArrayList<UserEntity>();
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT * FROM \"public\".\"User\"");
        System.out.println("GET all Users executed");
        return rows;
    }

    public UserEntity addUser(UserEntity newUser){
        jdbcTemplate.update("INSERT INTO \"public\".\"User\" (\"user-id\", name, surname, password) VALUES (?, ?, ?, ?)",
                newUser.getUserId(), newUser.getName(), newUser.getSurname(), newUser.getPassword());
        System.out.println("New User with attributes " + newUser.getUserId() + ", " + newUser.getName() + ", " + newUser.getSurname() + ", " + newUser.getPassword() + " added");
        return newUser;
    }

    public UserEntity getSingleUser(int userId){
        System.out.println("REPODAAA: " + userId);
        return (UserEntity) jdbcTemplate.queryForObject("SELECT * FROM \"public\".\"User\" WHERE \"user-id\" = ?", new Object[]{userId}, new BeanPropertyRowMapper(UserEntity.class));
    }
}
