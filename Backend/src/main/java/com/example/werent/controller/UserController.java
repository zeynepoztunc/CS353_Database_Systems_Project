package com.example.werent.controller;

import com.example.werent.entity.UserEntity;
import com.example.werent.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Map<String, Object>> getAllUsers(){
        return userRepository.getAllUsers();
    }

    @PostMapping
    public UserEntity addUser(@RequestBody UserEntity newUser){
        return userRepository.addUser(newUser);
    }

    //PUT Mapping???

    @GetMapping("/{userId}")
    public UserEntity getSingleUser(@PathVariable int userId){
        System.out.println("CONTROLLERDAA: " + userId);
        //Custom Exception ekle
        return userRepository.getSingleUser(userId);
    }

    //DELETE Mapping???
}
