package com.example.werent.controller;

import com.example.werent.entity.ReservationDTO;
import com.example.werent.repository.ReservationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
