package com.example.werent.repository;

import com.example.werent.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.BeanPropertyRowMapper;

import java.util.List;
import java.util.Map;

@Repository
public class UserRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public RegisteredUserDTO addUser(RegisteredUserDTO newUser){
        RegisteredUserDTO resultingUser = new RegisteredUserDTO();

        Integer cnt = jdbcTemplate.queryForObject(
                "SELECT count(*) FROM \"RegisteredUser\" WHERE \"e-mail\" =  ?", Integer.class, newUser.getEmail()
        );
        if(cnt <= 0){
            System.out.println("Registering User...");
            String sqlAddUser = "INSERT INTO \"User\" (name, surname, password) VALUES (?, ?, ?)";
            jdbcTemplate.update(sqlAddUser, newUser.getName(), newUser.getSurname(), newUser.getPassword());

            int userId = jdbcTemplate.queryForObject("SELECT lastval()", Integer.class);
            newUser.setUserId(userId);

            String sqlAddRegisteredUser = "INSERT INTO \"RegisteredUser\" (\"user-id\", \"e-mail\", \"date-of-birth\", \"telephone-no\", gender, \"is-earthquake-victim\", balance, \"user-rating\", \"usage-mode\", description, \"user-type\", \"join-date\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sqlAddRegisteredUser,userId, newUser.getEmail(), newUser.getDateOfBirth(), newUser.getTelephoneNo(), newUser.getGender(), false, 0, 0, "Customer", null, "Customer", newUser.getJoinDate());

            String sqlAddCustomer = "INSERT INTO \"Customer\" (\"user-id\", \"credit-card-number\") VALUES (?, ?)";
            jdbcTemplate.update(sqlAddCustomer, userId, "");

            String sqlAddHost = "INSERT INTO \"Host\" (\"user-id\", iban, region, language, job, \"is-superhost\") VALUES (?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sqlAddHost, userId, "", "", "", "", false);

            resultingUser.setCreationSuccesful(true);
            return resultingUser;
        }
        else{
            System.out.println("Email already registered!");
            resultingUser.setCreationSuccesful(false);
            return resultingUser;
        }

    }

    public RegisteredUserDTO login(String email, String password){
        System.out.println("Login Credentials -> Email: " + email + " Password: " + password);
        String sqlLogin = "SELECT * FROM \"RegisteredUser\" R, \"User\" U WHERE R.\"e-mail\" = ? AND U.password = ? AND R.\"user-id\" = U.\"user-id\"";

        RowMapper<RegisteredUserDTO> rowMapper = (rs, rowNum) -> {
            RegisteredUserDTO registeredUser = new RegisteredUserDTO();
            registeredUser.setUserId(rs.getInt("user-id"));
            registeredUser.setUsageMode(rs.getString("usage-mode"));
            return registeredUser;
        };

        try{
            RegisteredUserDTO registeredUserDTO = jdbcTemplate.queryForObject(sqlLogin, new Object[]{email, password}, rowMapper);
            registeredUserDTO.setLoginSuccessful(true);
            return registeredUserDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Login failed - User doesn't exist");
            return null;
        }
    }

    public AdminDTO adminLogin(int adminId, String password){
        System.out.println("Login Credentials -> Admin ID: " + adminId + " Password: " + password);
        String sqlAdminLogin = "SELECT * FROM \"Admin\" A, \"User\" U WHERE A.\"admin-id\" = ? AND U.password = ? AND A.\"user-id\" = U.\"user-id\"";

        RowMapper<AdminDTO> rowMapper = (rs, rowNum) -> {
            AdminDTO admin = new AdminDTO();
            admin.setUserId(rs.getInt("user-id"));
            admin.setAdminId(adminId);
            return admin;
        };

        try{
            AdminDTO adminDTO = jdbcTemplate.queryForObject(sqlAdminLogin, new Object[]{adminId, password}, rowMapper);
            adminDTO.setLoginSuccessful(true);
            return adminDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Login failed - Admin doesn't exist");
            return null;
        }
    }

    public List<Map<String, Object>> getAllUsers(){
        //List<UserEntity> resultList = new ArrayList<UserEntity>();
        List<Map<String, Object>> rows = jdbcTemplate.queryForList("SELECT * FROM \"User\"");
        System.out.println("GET all Users executed");
        return rows;
    }

    public UserDTO getSingleUser(int userId){
        System.out.println("REPODAAA: " + userId);
        return (UserDTO) jdbcTemplate.queryForObject("SELECT * FROM \"User\" WHERE \"user-id\" = ?", new Object[]{userId}, new BeanPropertyRowMapper(UserEntity.class));
    }

    public RegisteredUserDTO getSingleRegisteredUser(int userId){
        System.out.println("REPODAAA: " + userId);
        return (RegisteredUserDTO) jdbcTemplate.queryForObject("SELECT * FROM \"RegisteredUser\" WHERE \"user-id\" = ?", new Object[]{userId}, new BeanPropertyRowMapper(RegisteredUserEntity.class));
    }

    public RentalDTO getRentalsForUser(int userId){

        return (RentalDTO) jdbcTemplate.queryForObject("SELECT * FROM \"Rental\" WHERE \"host-id\" = ?", new Object[]{userId}, new BeanPropertyRowMapper(RentalEntity.class));
    }


}
