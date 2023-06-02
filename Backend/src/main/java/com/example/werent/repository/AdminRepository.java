package com.example.werent.repository;

import com.example.werent.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
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

    public List<Map<String, Object>> postReportDetails(String userId){
        String sqlPostRepDet = "SELECT * FROM \"Reports\" r, \"Rental\" re, \"RegisteredUser\" u, \"User\" us WHERE r.\"rental-id\" = re.\"rental-id\" AND u.\"user-id\" = r.\"user-id\" AND u.\"user-id\" = ? AND u.\"user-id\" = us.\"user-id\"";

        int userIdInt = Integer.parseInt(userId);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlPostRepDet, userIdInt);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> userReportDetails(String userId){
        String sqlDet = "SELECT * FROM \"RegisteredUser\" r, \"Complaints\" c, \"User\" us WHERE c.\"user-id1\" = r.\"user-id\" AND r.\"user-id\" = ? AND r.\"user-id\" = us.\"user-id\"";

        int userIdInt = Integer.parseInt(userId);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlDet, userIdInt);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public int deleteReportedUser(int userId){
        String sqlDeleteRepUser = "DELETE FROM \"User\" WHERE \"user-id\" = ?";
        int res = jdbcTemplate.update(sqlDeleteRepUser, userId);
        return res;
    }

    public int deletePost(int rentalId){
        String sqlDeletePost = "DELETE FROM \"Rental\" WHERE \"rental-id\" = ?";
        int res = jdbcTemplate.update(sqlDeletePost, rentalId);
        return res;
    }

    public int reportFakePost(int rentalId){
        String sqlDeleteFakePost = "UPDATE \"Reports\" SET \"is-confirmed\" = ? AND evaluated = ? WHERE \"rental-id\" = ?";

        int res = jdbcTemplate.update(sqlDeleteFakePost, false, true, rentalId);
        return res;
    }

    public int reportFakeUser(int userId){
        String sqlDeleteFakeUser = "UPDATE \"Complaints\" SET \"is-confirmed\" = ? AND evaluated = ? WHERE \"user-id\" = ?";

        int res = jdbcTemplate.update(sqlDeleteFakeUser, false, true, userId);
        return res;
    }

    public List<Map<String, Object>> listAllUsers(){
       String sqlListAll = "SELECT us.\"user-id\", us.name, us.surname, u.\"user-type\", count(*) as \"complaint-cnt\", u.\"join-date\" FROM \"RegisteredUser\" u, \"Complaints\" c, \"User\" us WHERE u.\"user-id\" = c.\"user-id2\" AND u.\"user-id\" = us.\"user-id\" GROUP BY us.\"user-id\", us.name, us.surname, u.\"user-type\", u.\"join-date\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> viewUser(int userId){
        String sqlViewUser = "SELECT * FROM \"RegisteredUser\" r, \"User\" u WHERE r.\"user-id\" = ? AND r.\"user-id\" = u.\"user-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlViewUser, userId);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> viewUserComplaints(){
        String sqlViewUserComplaints = "SELECT * FROM \"RegisteredUser\" u, \"Complaints\" c WHERE u.\"user-id\" = c.\"user-id2\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlViewUserComplaints);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listAllPosts(){
        String sqlListAll = "SELECT \"rental-name\" FROM \"Posts\" p, \"Rental\" r WHERE p.\"rental-id\" = r.\"rental-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> allLandmarkForms(){
        String sqlListAll = "SELECT \"landmark-id\", \"landmark-name\" FROM \"Landmarks\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> singleLandmarkForm(@RequestParam String landmarkId) {
        String sqlLandmark = "SELECT u.\"user-id\", u.name, u.surname, l.\"landmark-id\", l.\"landmark-name\", l.description, l.latitude, l.longitude, l.city, l.province FROM \"Landmarks\" l, \"User\" u WHERE \"landmark-id\" = ? AND u.\"user-id\" = l.\"user-id\"";

        int landmarkIdInt = Integer.parseInt(landmarkId);
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlLandmark, landmarkIdInt);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public int addLandmarkSugg(String landmarkId){
        String sqlAddLandmarkSugg = "UPDATE \"Landmarks\" SET \"accepted\" = ? WHERE \"landmark-id\" = ?";

        int landmarkIdInt = Integer.parseInt(landmarkId);
        int res = jdbcTemplate.update(sqlAddLandmarkSugg, true, landmarkIdInt);
        return res;
    }

    public int deleteLandmarkSugg(String landmarkId){
        String sqlDelLandmarkSugg = "DELETE FROM \"Landmarks\" WHERE \"landmark-id\" = ?";

        int landmarkIdInt = Integer.parseInt(landmarkId);
        int res = jdbcTemplate.update(sqlDelLandmarkSugg, landmarkIdInt);
        return res;
    }

    public List<Map<String, Object>> listEvaluations(){
        String sqlListAll = "SELECT name, date, review, \"user-type\", \"e-mail\", \"communication-rating\", \"cleanliness-rating\", \"check-in-rating\", \"accuracy-rating\", \"location-rating\", \"value-rating\", \"safety-rating\" FROM \"Review\" r, \"Leaves\" l, \"RegisteredUser\" ru, \"User\" u WHERE l.\"user-id1\" = ru.\"user-id\" AND l.\"review-id\" = r.\"review-id\" AND u.\"user-id\" = ru.\"user-id\"";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }

    public List<Map<String, Object>> listAnalytics(){
        String sqlListAll = "SELECT * FROM \"GeneratedReports\" WHERE date = (SELECT max(date) FROM \"GeneratedReports\")";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sqlListAll);
        if (rows.isEmpty()){
            return null;
        }
        else{
            return rows;
        }
    }
}
