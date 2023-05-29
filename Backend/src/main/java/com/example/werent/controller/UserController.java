package com.example.werent.controller;

import com.example.werent.entity.AdminDTO;
import com.example.werent.entity.RegisteredUserDTO;
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
    public void addUser(@RequestBody RegisteredUserDTO newUser){
        userRepository.addUser(newUser);
    }

    @RequestMapping(value = "/userLogin", method = RequestMethod.GET)
    public RegisteredUserDTO login(@RequestBody RegisteredUserDTO loginCredentials){
        return userRepository.login(loginCredentials);
    }

    @RequestMapping(value = "/adminLogin", method = RequestMethod.GET)
    public AdminDTO adminLogin(@RequestBody AdminDTO loginCredentials){
        return userRepository.adminLogin(loginCredentials);
    }

    /*@GetMapping
    public List<Map<String, Object>> getAllUsers(){
        return userRepository.getAllUsers();
    }

    @GetMapping("/{userId}")
    public UserEntity getSingleUser(@PathVariable int userId){
        System.out.println("CONTROLLERDAA: " + userId);
        //Custom Exception ekle
        return userRepository.getSingleUser(userId);
    }*/

    //DELETE Mapping???
}
