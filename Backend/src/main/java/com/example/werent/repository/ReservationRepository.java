package com.example.werent.repository;

import com.example.werent.entity.ReservationDTO;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


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

    public List<ReservationDTO> getReservationByUserId(Integer userId) {
        String sql = "SELECT r.*, rt.\"rental-name\" as rentalName FROM \"Reservation\" r JOIN \"Rental\" rt ON r.\"rental-id\" = rt.\"rental-id\" WHERE r.\"customer-id\" = ?";

        return jdbcTemplate.query(sql, new Object[]{userId}, (rs, rowNum) -> {
            return new ReservationDTO(
                    rs.getInt("reservation-id"),
                    rs.getInt("customer-id"),
                    rs.getInt("rental-id"),
                    rs.getDate("reservation-start-date"),
                    rs.getDate("reservation-end-date"),
                    rs.getInt("stay-of-duration"),
                    rs.getInt("price"),
                    rs.getBoolean("is-paid-for"),
                    rs.getInt("number-of-guests"),
                    rs.getString("rentalName")
            );
        });
    }





}
