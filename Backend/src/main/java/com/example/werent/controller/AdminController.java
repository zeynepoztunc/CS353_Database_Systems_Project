package com.example.werent.controller;

import com.example.werent.entity.*;
import com.example.werent.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("")
public class AdminController {
    private AdminRepository adminRepository;

    @Autowired
    public AdminController(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }

    @RequestMapping(value = "/adminHome", method = RequestMethod.GET)
    public GeneratedReportsDTO generateReport(){
        return adminRepository.generateReport();
    }

    @RequestMapping(value = "/customerReportings", method = RequestMethod.GET)
    public List<Map<String, Object>> listAllCustomerReportings(){
        return adminRepository.listAllCustomerReportings();
    }
}
