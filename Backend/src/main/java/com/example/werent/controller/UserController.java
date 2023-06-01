package com.example.werent.controller;

import com.example.werent.entity.AdminDTO;
import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.UserDTO;
import com.example.werent.entity.UserEntity;
import com.example.werent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public RegisteredUserDTO addUser(@RequestBody RegisteredUserDTO newUser){
        return userRepository.addUser(newUser);
    }

    @RequestMapping(value = "/userLogin", method = RequestMethod.GET)
    public RegisteredUserDTO login(@RequestParam String email, @RequestParam String password){
        return userRepository.login(email, password);
    }

    @RequestMapping(value = "/adminLogin", method = RequestMethod.GET)
    public AdminDTO adminLogin(@RequestParam int adminId, @RequestParam String password){
        return userRepository.adminLogin(adminId, password);
    }

    @GetMapping
    public List<Map<String, Object>> getAllUsers(){
        return userRepository.getAllUsers();
    }

    @GetMapping("/{userId}")
    public UserDTO getSingleUser(@RequestParam Integer userId){
        System.out.println("CONTROLLERDAA: " + userId);
        //Custom Exception ekle
        return userRepository.getSingleUser(userId);
    }

    //DELETE Mapping???
}
