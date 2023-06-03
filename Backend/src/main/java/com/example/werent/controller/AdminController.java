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

    @RequestMapping(value = "/postReportDetails", method = RequestMethod.GET)
    public List<Map<String, Object>> postReportDetails(@RequestParam String userId){
        return adminRepository.postReportDetails(userId);
    }

    @RequestMapping(value = "/userReportDetails", method = RequestMethod.GET)
    public List<Map<String, Object>> userReportDetails(@RequestParam String userId){
        return adminRepository.userReportDetails(userId);
    }

    @RequestMapping(value = "/deleteReportedUser", method = RequestMethod.DELETE)
    public int deleteReportedUser(@RequestParam int userId){
        return adminRepository.deleteReportedUser(userId);
    }

    @RequestMapping(value = "/deletePost", method = RequestMethod.DELETE)
    public int deletePost(@RequestParam int rentalId){
        return adminRepository.deletePost(rentalId);
    }

    //NEREDE KULLANICAM???
    @RequestMapping(value = "/reportFakePost", method = RequestMethod.PUT)
    public int reportFakePost(@PathVariable int rentalId){
        return adminRepository.reportFakePost(rentalId);
    }

    //NEREDE KULLANICAM???
    @RequestMapping(value = "/reportFakeUser", method = RequestMethod.PUT)
    public int reportFakeUser(@PathVariable int userId){
        return adminRepository.reportFakeUser(userId);
    }

    @RequestMapping(value = "/listAllUsers", method = RequestMethod.GET)
    public List<Map<String, Object>> listAllUsers(){
        return adminRepository.listAllUsers();
    }

    //NEREDE KULLANICAM???
    @RequestMapping(value = "/viewUser", method = RequestMethod.GET)
    public List<Map<String, Object>> viewUser(@RequestParam int userId){
        return adminRepository.viewUser(userId);
    }

    //NEREDE KULLANICAM???
    @RequestMapping(value = "/viewUserComplaints", method = RequestMethod.GET)
    public List<Map<String, Object>> viewUserComplaints(){
        return adminRepository.viewUserComplaints();
    }

    @RequestMapping(value = "/listAllPosts", method = RequestMethod.GET)
    public List<Map<String, Object>> listAllPosts(){
        return adminRepository.listAllPosts();
    }

    @RequestMapping(value = "/singlePost", method = RequestMethod.GET)
    public List<Map<String, Object>> singlePost(@RequestParam String rentalId) {
        return adminRepository.singlePost(rentalId);
    }

    @RequestMapping(value = "/allLandmarkForms", method = RequestMethod.GET)
    public List<Map<String, Object>> allLandmarkForms(){
        return adminRepository.allLandmarkForms();
    }

    @RequestMapping(value = "/searchPosts", method = RequestMethod.GET)
    public List<Map<String, Object>> searchPosts(@RequestParam String title,@RequestParam String check1,@RequestParam String check2,@RequestParam String check3,@RequestParam String check4,@RequestParam String check5,@RequestParam String check6){
        return adminRepository.searchPosts(title, check1, check2, check3, check4, check5, check6);

    }

    @RequestMapping(value = "/searchLandmarks", method = RequestMethod.GET)
    public List<Map<String, Object>> searchLandmarks(@RequestParam String title, @RequestParam String latest, @RequestParam String oldest){
        return adminRepository.searchLandmarks(title, latest, oldest);
    }

    @RequestMapping(value = "/singleLandmarkForm", method = RequestMethod.GET)
    public List<Map<String, Object>> singleLandmarkForm(@RequestParam String landmarkId) {
        return adminRepository.singleLandmarkForm(landmarkId);
    }

    @RequestMapping(value = "/addLandmarkSugg", method = RequestMethod.PUT)
    public int addLandmarkSugg(@RequestParam String landmarkId){
        return adminRepository.addLandmarkSugg(landmarkId);
    }

    @RequestMapping(value = "/deleteLandmarkSugg", method = RequestMethod.DELETE)
    public int deleteLandmarkSugg(@RequestParam String landmarkId){
        return adminRepository.deleteLandmarkSugg(landmarkId);
    }

    @RequestMapping(value = "/listEvaluations", method = RequestMethod.GET)
    public List<Map<String, Object>> listEvaluations(){
        return adminRepository.listEvaluations();
    }

    @RequestMapping(value = "/listAnalytics", method = RequestMethod.GET)
    public List<Map<String, Object>> listAnalytics(){
        return adminRepository.listAnalytics();
    }
}
