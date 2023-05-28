package com.example.werent.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
@Repository
public class AmenitiesRepository {
    private final JdbcTemplate jdbcTemplate;

    public AmenitiesRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public List<String> getAmenities() {
        List<String> amenities = new ArrayList<>();

        try {
            String sql = "SELECT * FROM \"amenities_list\"";
            List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);

            for (Map<String, Object> row : rows) {
                String columnName = (String) row.get("name");
                amenities.add(columnName);
            }
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception appropriately
        }

        return amenities;
    }

    public void updateAmenitiesForRental(int rentalId, int smokeAlarm, int fireExtinguisher, int firstAidKit, int freeParking, int facilities, int singleLevelHome, int washer, int bedLinens, int hangers, int essentials, int clothingStorage, int ac, int heating, int outdoorDiningArea, int bbqGrill, int petsAllowed, int dailyCleaningService, int transferService, int fridge, int oven, int stove, int dishwasher, int diningTable, int microwave, int dishes, int hairConditioner, int cleaningProducts, int shampoo, int bodySoap, int showerGel, int hotWater, int beachAccess, int hoppingAccess, int museumAccess, int transportationAccess, int airportAccess, int privateEntrance, int beachfront, int crib) {
    System.out.println("inside updateAmenitiesForRental method");
        try {
            String sql = "UPDATE \"Amenities\" SET \"smoke-alarm\" = ?, \"fire-extinguisher\" = ?, \"first-aid-kit\" = ?, \"free-parking\" = ?, facilities = ?, \"single-level-home\" = ?, washer = ?, \"bed-linens\" = ?, hangers = ?, essentials = ?, \"clothing-storage\" = ?, \"AC\" = ?, heating = ?, \"outdoor-dining-area\" = ?, \"bbq-grill\" = ?, \"pets-allowed\" = ?, \"daily-cleaning-service\" = ?, \"transfer-service\" = ?, fridge = ?, oven = ?, stove = ?, dishwasher = ?, \"dining-table\" = ?, microwave = ?, dishes = ?, \"hair-conditioner\" = ?, \"cleaning-products\" = ?, shampoo = ?, \"body-soap\" = ?, \"shower-gel\" = ?, \"hot-water\" = ?, \"beach-access\" = ?, \"hopping-access\" = ?, \"museum-access\" = ?, \"transportation-access\" = ?, \"airport-access\" = ?, \"private-entrance\" = ?, beachfront = ?, crib = ? WHERE \"rental-id\" = ?";
            jdbcTemplate.update(sql, smokeAlarm, fireExtinguisher, firstAidKit, freeParking, facilities, singleLevelHome, washer, bedLinens, hangers, essentials, clothingStorage, ac, heating, outdoorDiningArea, bbqGrill, petsAllowed, dailyCleaningService, transferService, fridge, oven, stove, dishwasher, diningTable, microwave, dishes, hairConditioner, cleaningProducts, shampoo, bodySoap, showerGel, hotWater, beachAccess, hoppingAccess, museumAccess, transportationAccess, airportAccess, privateEntrance, beachfront, crib, rentalId);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception appropriately
        }
    }



}
