package com.example.werent.repository;

import com.example.werent.entity.ReservationDTO;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;


@Repository
public class ReservationRepository
{
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ReservationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public ReservationDTO addReservation(ReservationDTO reservation)
    {
        String sql = "INSERT INTO \"Reservation\" (\"customer-id\", \"rental-id\", \"reservation-start-date\", \"reservation-end-date\", \"stay-of-duration\", \"price\", \"is-paid-for\", \"number-of-guests\") VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                reservation.getCustomerId(),
                reservation.getRentalId(),
                reservation.getReservationStartDate(),
                reservation.getReservationEndDate(),
                reservation.getStayOfDuration(),
                reservation.getPrice(),
                false,
                reservation.getNumberOfGuests());

        return reservation;
    }



}
