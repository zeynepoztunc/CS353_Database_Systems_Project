package com.example.werent.controller;

import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.entity.WishlistsDTO;
import com.example.werent.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("")
public class CustomerController {
    private CustomerRepository customerRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository){ this.customerRepository = customerRepository; }

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public List<Map<String, Object>> listRentalsForCustomer(@RequestBody RegisteredUserDTO searcher){
        return customerRepository.listRentalsForCustomer(searcher);
    }

    @RequestMapping(value = "/main/like", method = RequestMethod.POST)
    public void favorARental(WishlistsDTO wishlistInfo){
        customerRepository.favorARental(wishlistInfo.getRentalId(), wishlistInfo.getUserId(), wishlistInfo.getDate());
    }
}
