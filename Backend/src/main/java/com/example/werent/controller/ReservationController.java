package com.example.werent.controller;

import com.example.werent.entity.ReservationDTO;
import com.example.werent.repository.ReservationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("Reservations")
public class ReservationController {
    private ReservationRepository reservationRepository;

    public ReservationController(ReservationRepository reservationRepository)
    {
        this.reservationRepository = reservationRepository;
    }

    @RequestMapping("/addReservation")
    public ReservationDTO addReservation(@RequestBody ReservationDTO reservation)
    {
        return reservationRepository.addReservation(reservation);
    }

    @GetMapping("/getReservationByUserId")
    public List<ReservationDTO> getReservationByUserId(@RequestParam Integer userId)
    {
        return reservationRepository.getReservationByUserId(userId);
    }

}
