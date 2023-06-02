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

    @RequestMapping(value = "/customerReportings/filter", method = RequestMethod.GET)
    public List<Map<String, Object>> listFilteredReportings(@RequestParam String title, @RequestParam boolean host_checked, @RequestParam boolean customer_checked, @RequestParam boolean evaluated, @RequestParam int recent_to_latest, @RequestParam int latest_to_recent){
        return adminRepository.listFilteredReportings(title, host_checked, customer_checked, evaluated, recent_to_latest, latest_to_recent);
    }
}
