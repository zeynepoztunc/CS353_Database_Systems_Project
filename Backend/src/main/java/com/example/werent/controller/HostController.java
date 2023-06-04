package com.example.werent.controller;


import com.example.werent.repository.HostRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/Hosts")
public class HostController {

    private  final HostRepository hostRepository;

    public HostController(HostRepository hostRepository) {
        this.hostRepository = hostRepository;
    }

    @GetMapping("/getHostDetails")
    public Map<String, Object> getHostDetails(@RequestParam Integer hostid)
    {
        return hostRepository.getHostDetails(hostid);
    }

}
