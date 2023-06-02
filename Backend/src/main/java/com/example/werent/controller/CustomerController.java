package com.example.werent.controller;

import com.example.werent.entity.*;
import com.example.werent.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("Customers")
public class CustomerController {
    private CustomerRepository customerRepository;

    @Autowired
    public CustomerController(CustomerRepository customerRepository){ this.customerRepository = customerRepository; }

    //CUSTOMER Main Page
    @RequestMapping( "/main/listRentalsForCustomer")
    public List<Map<String, Object>> listRentalsForCustomer(@RequestParam Integer userId){
        return customerRepository.listRentalsForCustomer(userId);
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

    @GetMapping ( "/hostInfo")
    public UserDTO getHostInfo(@RequestParam Integer rentalid){
        return customerRepository.getHostInfo(rentalid);
    }


    //NEED TESTING! (false query)
    @RequestMapping(value = "/main/{rentalId}/reserve", method = RequestMethod.POST)
    public void addReservation(@RequestBody ReservationDTO reservationInfo, @PathVariable int rentalId){
        customerRepository.addReservation(reservationInfo, rentalId);
    }

    @RequestMapping(value = "/main/{rentalId}/location", method = RequestMethod.GET)
    public RentalDTO getLocation(@PathVariable int rentalId){
        return customerRepository.getLocation(rentalId);
    }

    //NEED TESTING! (time)
    @RequestMapping(value = "/main/{rentalId}/averages", method = RequestMethod.GET)
    public List<Map<String, Object>> getAvgForHostAndRental(@RequestBody RegisteredUserDTO customer, @PathVariable int rentalId){
        return customerRepository.getAvgForHostAndRental(customer, rentalId);
    }

    //NEED TESTING! (time)
    @RequestMapping(value = "/main/{rentalId}/reviews", method = RequestMethod.GET)
    public List<Map<String, Object>> getReviews(@RequestBody RegisteredUserDTO customer, @PathVariable int rentalId){
        return customerRepository.getReviews(customer, rentalId);
    }

    //NEED TESTING! (false query)
    @RequestMapping(value = "/pastTransactions", method = RequestMethod.GET)
    public List<Map<String, Object>> getPastTransactions(){
        return customerRepository.getPastTransactions();
    }

    @RequestMapping(value = "/profile/{userId}", method = RequestMethod.GET)
    public RegisteredUserDTO getProfileInfo(@PathVariable int userId){
        return customerRepository.getProfileInfo(userId);
    }

    @RequestMapping(value = "/profile/{userId}/switch", method = RequestMethod.PUT)
    public void switchToHost(@PathVariable int userId){
        customerRepository.switchToHost(userId);
    }

    @RequestMapping(value = "/profile/{userId}/edit", method = RequestMethod.PUT)
    public void editProfileInfo(@RequestBody RegisteredUserDTO newInfo, @PathVariable int userId){
        customerRepository.editProfileInfo(newInfo, userId);
    }

    @RequestMapping(value = "/profile/{userId}/hostReviews", method = RequestMethod.GET)
    public List<Map<String, Object>> getHostReviews(@PathVariable int userId){
        return customerRepository.getHostReviews(userId);
    }

    @RequestMapping(value = "/previousRentings/{userId}", method = RequestMethod.GET)
    public List<Map<String, Object>> getPreviousBookings(@PathVariable int userId){
        return customerRepository.getPreviousBookings(userId);
    }

    @RequestMapping(value = "/addLandmark", method = RequestMethod.POST)
    public void addLandmark(@RequestBody LandmarksDTO landmarkInfo){
        customerRepository.addLandmark(landmarkInfo);
    }

    @RequestMapping(value = "/leaveRating", method = RequestMethod.POST)
    public void leaveRating(@RequestBody ReviewDTO review){
        customerRepository.leaveRating(review);
    }

    @RequestMapping(value = "/putReport", method = RequestMethod.POST)
    public void putReport(@RequestBody ReportsDTO reportDetails){
        customerRepository.putReport(reportDetails);
    }

    @RequestMapping(value = "/putComplaint", method = RequestMethod.POST)
    public void putComplaint(@RequestBody ComplaintsDTO complaintDetails){
        customerRepository.putComplaint(complaintDetails);
    }

    @RequestMapping(value = "/wishlistRentals/{userId}", method = RequestMethod.GET)
    public List<Map<String, Object>> rentalsInWishlist(@PathVariable int userId){
        return customerRepository.rentalsInWishlist(userId);
    }

    @RequestMapping(value = "/wishlistRentals/{userId}", method = RequestMethod.DELETE)
    public void removeFromWishlist(@RequestBody RentalDTO rentalInfo, @PathVariable int userId){
        customerRepository.removeFromWishlist(rentalInfo, userId);
    }
}
