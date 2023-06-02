package com.example.werent.repository;

import com.example.werent.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Repository
public class AdminRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AdminRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public GeneratedReportsDTO generateReport(){
        String sqlGenerateReport = "SELECT * FROM \"GeneratedReports\" WHERE CURRENT_DATE = (SELECT max(date) FROM \"GeneratedReports\") ";

        RowMapper<GeneratedReportsDTO> rowMapper = (rs, rowNum) -> {
            GeneratedReportsDTO generatedReport = new GeneratedReportsDTO();
            generatedReport.setReportId(rs.getInt("report-id"));
            generatedReport.setDate(rs.getDate("date"));
            generatedReport.setUserCnt(rs.getInt("user-cnt"));
            generatedReport.setHostCnt(rs.getInt("host-cnt"));
            generatedReport.setPostingsCnt(rs.getInt("postings-cnt"));
            generatedReport.setBookingCnt(rs.getInt("booking-cnt"));
            generatedReport.setUserEarthquakeVictimCnt(rs.getInt("user-earthquake-victim-cnt"));
            generatedReport.setHostEarthquakeVictimCnt(rs.getInt("host-earthquake-victim-cnt"));
            generatedReport.setSuperhostCnt(rs.getInt("superhost-cnt"));
            generatedReport.setUserReportingCnt(rs.getInt("user-reporting-cnt"));
            generatedReport.setPostReportingCnt(rs.getInt("post-reporting-cnt"));
            return generatedReport;
        };

        try{
            GeneratedReportsDTO generatedReportsDTO = jdbcTemplate.queryForObject(sqlGenerateReport, new Object[]{}, rowMapper);
            return generatedReportsDTO;
        }
        catch (EmptyResultDataAccessException e){
            System.out.println("Rental listing failed!");
            return null;
        }
    }

    public List<Map<String, Object>> listAllCustomerReportings(){
        String sqlListAll = "SELECT * FROM \"Reports\" r, \"RegisteredUser\" u, \"User\" us, \"Rental\" re, \"Complaints\" c WHERE r.\"rental-id\" = re.\"rental-id\" AND u.\"user-id\" = r.\"user-id\" AND c.\"user-id1\" = u.\"user-id\" AND u.\"user-id\" = us.\"user-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listFilteredReportings(String title, boolean host_checked, boolean customer_checked, boolean evaluated, int recent_to_latest, int latest_to_recent){
        String sqlListFiltered = "SELECT * FROM \"Reports\" r, \"RegisteredUser\" u, \"Rental\" re, \"Complaints\" c WHERE r.\"user-id\" = u.\"user-id\" AND re.\"rental-id\" = r.\"rental-id\" AND \"user-id\" LIKE '?' AND c.\"user-id1\" = u.\"user-id\" AND ( u.\"user-type\" = ? OR u.\"user-type\" = ?) AND ( r.evaluated = ? OR r.evaluated = ? ) AND ( c.evaluated = ? OR c.evaluated = ?) ORDER BY CASE WHEN ? = 1 THEN date END DESC CASE WHEN ? = 1 THEN date END ASC";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListFiltered, title, host_checked, customer_checked, evaluated, !evaluated, evaluated, !evaluated, recent_to_latest, latest_to_recent);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }
}
