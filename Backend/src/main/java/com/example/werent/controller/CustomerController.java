package com.example.werent.controller;

import com.example.werent.entity.HostDTO;
import com.example.werent.entity.RegisteredUserDTO;
import com.example.werent.entity.RentalDTO;
import com.example.werent.entity.WishlistsDTO;
import com.example.werent.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("")
public class CustomerController {
    private CustomerRepository customerRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository){ this.customerRepository = customerRepository; }

    //CUSTOMER Main Page
    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public List<Map<String, Object>> listRentalsForCustomer(@RequestBody RegisteredUserDTO searcher){
        return customerRepository.listRentalsForCustomer(searcher);
    }

    @RequestMapping(value = "/main", method = RequestMethod.POST)
    public void favorARental(@RequestBody  WishlistsDTO wishlistInfo){
        customerRepository.favorARental(wishlistInfo.getRentalId(), wishlistInfo.getUserId(), wishlistInfo.getDate());
    }

    @RequestMapping(value = "/main", method = RequestMethod.DELETE)
    public void unfavorARental(@RequestBody WishlistsDTO deletionInfo){
        customerRepository.unfavorARental(deletionInfo.getRentalId(), deletionInfo.getUserId());
    }

    @RequestMapping(value = "/main/filter", method = RequestMethod.GET)
    public List<Map<String, Object>> listRentalsFiltered(@RequestBody RentalDTO rentalFilters){
        return customerRepository.listRentalsFiltered(rentalFilters);
    }

    //CUSTOMER Shopping Cart Page
    @RequestMapping(value = "/cart/paymentReady", method = RequestMethod.GET)
    public List<Map<String, Object>> listReadyPayments(@RequestBody RegisteredUserDTO customer){
        return customerRepository.listReadyPayments(customer);
    }

    @RequestMapping(value = "/cart/hostApproval", method = RequestMethod.GET)
    public List<Map<String, Object>> listRentalsForHostApproval(@RequestBody RegisteredUserDTO customer){
        return customerRepository.listRentalsForHostApproval(customer);
    }

    //CUSTOMER Payment Page
    @RequestMapping(value = "/payment", method = RequestMethod.GET)
    public List<Map<String, Object>> listRentalsInPayment(@RequestBody RegisteredUserDTO customer){
        return customerRepository.listRentalsInPayment(customer);
    }

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public void insertTransaction(){
        //TODO: SORULACAKKK!!!
    }

    //CUSTOMER Rental Page
    @RequestMapping(value = "/main/{rentalId}", method = RequestMethod.GET)
    public RentalDTO listRentalInfo(@PathVariable int rentalId){
        return customerRepository.listRentalInfo(rentalId);
    }

    @RequestMapping(value = "/main/{rentalId}/favorited", method = RequestMethod.GET)
    public Boolean favoritedOrNot(@RequestBody WishlistsDTO wishlistInfo){
        return customerRepository.favoritedOrNot(wishlistInfo);
    }

    @RequestMapping(value = "/main/{rentalId}/like", method = RequestMethod.POST)
    public void likeRental(@RequestBody  WishlistsDTO wishlistInfo){
        customerRepository.favorARental(wishlistInfo.getRentalId(), wishlistInfo.getUserId(), wishlistInfo.getDate());
    }

    @RequestMapping(value = "/main/{rentalId}/dislike", method = RequestMethod.DELETE)
    public void dislikeRental(@RequestBody WishlistsDTO deletionInfo){
        customerRepository.unfavorARental(deletionInfo.getRentalId(), deletionInfo.getUserId());
    }

    @RequestMapping(value = "/main/{rentalId}/rating", method = RequestMethod.GET)
    public RentalDTO getRatingAvg(@PathVariable int rentalId){
        return customerRepository.getRatingAvg(rentalId);
    }

    @RequestMapping(value = "/main/{rentalId}/hostInfo", method = RequestMethod.GET)
    public HostDTO getHostInfo(@PathVariable int rentalId){
        return customerRepository.getHostInfo(rentalId);
    }

    @RequestMapping(value = "/main/{rentalId}/reserve", method = RequestMethod.POST)
    public void addReservation(@RequestBody RentalDTO rentalInformation){

    }
}
