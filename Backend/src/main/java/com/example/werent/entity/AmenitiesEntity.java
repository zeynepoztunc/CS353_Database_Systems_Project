package com.example.werent.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Amenities", schema = "public", catalog = "oyfcmypj")
@IdClass(AmenitiesEntityPK.class)
public class AmenitiesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "rental-id", nullable = false)
    private int rentalId;

    public int getRentalId() {
        return rentalId;
    }

    public void setRentalId(int rentalId) {
        this.rentalId = rentalId;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "amenity-type", nullable = false, length = 20)
    private String amenityType;

    public String getAmenityType() {
        return amenityType;
    }

    public void setAmenityType(String amenityType) {
        this.amenityType = amenityType;
    }

    @Basic
    @Column(name = "smoke-alarm", nullable = true)
    private Integer smokeAlarm;

    public Integer getSmokeAlarm() {
        return smokeAlarm;
    }

    public void setSmokeAlarm(Integer smokeAlarm) {
        this.smokeAlarm = smokeAlarm;
    }

    @Basic
    @Column(name = "fire-extinguisher", nullable = true)
    private Integer fireExtinguisher;

    public Integer getFireExtinguisher() {
        return fireExtinguisher;
    }

    public void setFireExtinguisher(Integer fireExtinguisher) {
        this.fireExtinguisher = fireExtinguisher;
    }

    @Basic
    @Column(name = "first-aid-kit", nullable = true)
    private Integer firstAidKit;

    public Integer getFirstAidKit() {
        return firstAidKit;
    }

    public void setFirstAidKit(Integer firstAidKit) {
        this.firstAidKit = firstAidKit;
    }

    @Basic
    @Column(name = "free-parking", nullable = true)
    private Integer freeParking;

    public Integer getFreeParking() {
        return freeParking;
    }

    public void setFreeParking(Integer freeParking) {
        this.freeParking = freeParking;
    }

    @Basic
    @Column(name = "facilities", nullable = true)
    private Integer facilities;

    public Integer getFacilities() {
        return facilities;
    }

    public void setFacilities(Integer facilities) {
        this.facilities = facilities;
    }

    @Basic
    @Column(name = "single-level-home", nullable = true)
    private Integer singleLevelHome;

    public Integer getSingleLevelHome() {
        return singleLevelHome;
    }

    public void setSingleLevelHome(Integer singleLevelHome) {
        this.singleLevelHome = singleLevelHome;
    }

    @Basic
    @Column(name = "washer", nullable = true)
    private Integer washer;

    public Integer getWasher() {
        return washer;
    }

    public void setWasher(Integer washer) {
        this.washer = washer;
    }

    @Basic
    @Column(name = "bed-linens", nullable = true)
    private Integer bedLinens;

    public Integer getBedLinens() {
        return bedLinens;
    }

    public void setBedLinens(Integer bedLinens) {
        this.bedLinens = bedLinens;
    }

    @Basic
    @Column(name = "hangers", nullable = true)
    private Integer hangers;

    public Integer getHangers() {
        return hangers;
    }

    public void setHangers(Integer hangers) {
        this.hangers = hangers;
    }

    @Basic
    @Column(name = "essentials", nullable = true)
    private Integer essentials;

    public Integer getEssentials() {
        return essentials;
    }

    public void setEssentials(Integer essentials) {
        this.essentials = essentials;
    }

    @Basic
    @Column(name = "clothing-storage", nullable = true)
    private Integer clothingStorage;

    public Integer getClothingStorage() {
        return clothingStorage;
    }

    public void setClothingStorage(Integer clothingStorage) {
        this.clothingStorage = clothingStorage;
    }

    @Basic
    @Column(name = "AC", nullable = true)
    private Integer ac;

    public Integer getAc() {
        return ac;
    }

    public void setAc(Integer ac) {
        this.ac = ac;
    }

    @Basic
    @Column(name = "heating", nullable = true)
    private Integer heating;

    public Integer getHeating() {
        return heating;
    }

    public void setHeating(Integer heating) {
        this.heating = heating;
    }

    @Basic
    @Column(name = "outdoor-dining-area", nullable = true)
    private Integer outdoorDiningArea;

    public Integer getOutdoorDiningArea() {
        return outdoorDiningArea;
    }

    public void setOutdoorDiningArea(Integer outdoorDiningArea) {
        this.outdoorDiningArea = outdoorDiningArea;
    }

    @Basic
    @Column(name = "bbq-grill", nullable = true)
    private Integer bbqGrill;

    public Integer getBbqGrill() {
        return bbqGrill;
    }

    public void setBbqGrill(Integer bbqGrill) {
        this.bbqGrill = bbqGrill;
    }

    @Basic
    @Column(name = "pets-allowed", nullable = true)
    private Integer petsAllowed;

    public Integer getPetsAllowed() {
        return petsAllowed;
    }

    public void setPetsAllowed(Integer petsAllowed) {
        this.petsAllowed = petsAllowed;
    }

    @Basic
    @Column(name = "daily-cleaning-service", nullable = true)
    private Integer dailyCleaningService;

    public Integer getDailyCleaningService() {
        return dailyCleaningService;
    }

    public void setDailyCleaningService(Integer dailyCleaningService) {
        this.dailyCleaningService = dailyCleaningService;
    }

    @Basic
    @Column(name = "transfer-service", nullable = true)
    private Integer transferService;

    public Integer getTransferService() {
        return transferService;
    }

    public void setTransferService(Integer transferService) {
        this.transferService = transferService;
    }

    @Basic
    @Column(name = "fridge", nullable = true)
    private Integer fridge;

    public Integer getFridge() {
        return fridge;
    }

    public void setFridge(Integer fridge) {
        this.fridge = fridge;
    }

    @Basic
    @Column(name = "oven", nullable = true)
    private Integer oven;

    public Integer getOven() {
        return oven;
    }

    public void setOven(Integer oven) {
        this.oven = oven;
    }

    @Basic
    @Column(name = "stove", nullable = true)
    private Integer stove;

    public Integer getStove() {
        return stove;
    }

    public void setStove(Integer stove) {
        this.stove = stove;
    }

    @Basic
    @Column(name = "dishwasher", nullable = true)
    private Integer dishwasher;

    public Integer getDishwasher() {
        return dishwasher;
    }

    public void setDishwasher(Integer dishwasher) {
        this.dishwasher = dishwasher;
    }

    @Basic
    @Column(name = "dining-table", nullable = true)
    private Integer diningTable;

    public Integer getDiningTable() {
        return diningTable;
    }

    public void setDiningTable(Integer diningTable) {
        this.diningTable = diningTable;
    }

    @Basic
    @Column(name = "microwave", nullable = true)
    private Integer microwave;

    public Integer getMicrowave() {
        return microwave;
    }

    public void setMicrowave(Integer microwave) {
        this.microwave = microwave;
    }

    @Basic
    @Column(name = "dishes", nullable = true)
    private Integer dishes;

    public Integer getDishes() {
        return dishes;
    }

    public void setDishes(Integer dishes) {
        this.dishes = dishes;
    }

    @Basic
    @Column(name = "hair-conditioner", nullable = true)
    private Integer hairConditioner;

    public Integer getHairConditioner() {
        return hairConditioner;
    }

    public void setHairConditioner(Integer hairConditioner) {
        this.hairConditioner = hairConditioner;
    }

    @Basic
    @Column(name = "cleaning-products", nullable = true)
    private Integer cleaningProducts;

    public Integer getCleaningProducts() {
        return cleaningProducts;
    }

    public void setCleaningProducts(Integer cleaningProducts) {
        this.cleaningProducts = cleaningProducts;
    }

    @Basic
    @Column(name = "shampoo", nullable = true)
    private Integer shampoo;

    public Integer getShampoo() {
        return shampoo;
    }

    public void setShampoo(Integer shampoo) {
        this.shampoo = shampoo;
    }

    @Basic
    @Column(name = "body-soap", nullable = true)
    private Integer bodySoap;

    public Integer getBodySoap() {
        return bodySoap;
    }

    public void setBodySoap(Integer bodySoap) {
        this.bodySoap = bodySoap;
    }

    @Basic
    @Column(name = "shower-gel", nullable = true)
    private Integer showerGel;

    public Integer getShowerGel() {
        return showerGel;
    }

    public void setShowerGel(Integer showerGel) {
        this.showerGel = showerGel;
    }

    @Basic
    @Column(name = "hot-water", nullable = true)
    private Integer hotWater;

    public Integer getHotWater() {
        return hotWater;
    }

    public void setHotWater(Integer hotWater) {
        this.hotWater = hotWater;
    }

    @Basic
    @Column(name = "beach-access", nullable = true)
    private Integer beachAccess;

    public Integer getBeachAccess() {
        return beachAccess;
    }

    public void setBeachAccess(Integer beachAccess) {
        this.beachAccess = beachAccess;
    }

    @Basic
    @Column(name = "hopping-access", nullable = true)
    private Integer hoppingAccess;

    public Integer getHoppingAccess() {
        return hoppingAccess;
    }

    public void setHoppingAccess(Integer hoppingAccess) {
        this.hoppingAccess = hoppingAccess;
    }

    @Basic
    @Column(name = "museum-access", nullable = true)
    private Integer museumAccess;

    public Integer getMuseumAccess() {
        return museumAccess;
    }

    public void setMuseumAccess(Integer museumAccess) {
        this.museumAccess = museumAccess;
    }

    @Basic
    @Column(name = "transportation-access", nullable = true)
    private Integer transportationAccess;

    public Integer getTransportationAccess() {
        return transportationAccess;
    }

    public void setTransportationAccess(Integer transportationAccess) {
        this.transportationAccess = transportationAccess;
    }

    @Basic
    @Column(name = "airport-access", nullable = true)
    private Integer airportAccess;

    public Integer getAirportAccess() {
        return airportAccess;
    }

    public void setAirportAccess(Integer airportAccess) {
        this.airportAccess = airportAccess;
    }

    @Basic
    @Column(name = "private-entrance", nullable = true)
    private Integer privateEntrance;

    public Integer getPrivateEntrance() {
        return privateEntrance;
    }

    public void setPrivateEntrance(Integer privateEntrance) {
        this.privateEntrance = privateEntrance;
    }

    @Basic
    @Column(name = "beachfront", nullable = true)
    private Integer beachfront;

    public Integer getBeachfront() {
        return beachfront;
    }

    public void setBeachfront(Integer beachfront) {
        this.beachfront = beachfront;
    }

    @Basic
    @Column(name = "crib", nullable = true)
    private Integer crib;

    public Integer getCrib() {
        return crib;
    }

    public void setCrib(Integer crib) {
        this.crib = crib;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AmenitiesEntity that = (AmenitiesEntity) o;

        if (rentalId != that.rentalId) return false;
        if (amenityType != null ? !amenityType.equals(that.amenityType) : that.amenityType != null) return false;
        if (smokeAlarm != null ? !smokeAlarm.equals(that.smokeAlarm) : that.smokeAlarm != null) return false;
        if (fireExtinguisher != null ? !fireExtinguisher.equals(that.fireExtinguisher) : that.fireExtinguisher != null)
            return false;
        if (firstAidKit != null ? !firstAidKit.equals(that.firstAidKit) : that.firstAidKit != null) return false;
        if (freeParking != null ? !freeParking.equals(that.freeParking) : that.freeParking != null) return false;
        if (facilities != null ? !facilities.equals(that.facilities) : that.facilities != null) return false;
        if (singleLevelHome != null ? !singleLevelHome.equals(that.singleLevelHome) : that.singleLevelHome != null)
            return false;
        if (washer != null ? !washer.equals(that.washer) : that.washer != null) return false;
        if (bedLinens != null ? !bedLinens.equals(that.bedLinens) : that.bedLinens != null) return false;
        if (hangers != null ? !hangers.equals(that.hangers) : that.hangers != null) return false;
        if (essentials != null ? !essentials.equals(that.essentials) : that.essentials != null) return false;
        if (clothingStorage != null ? !clothingStorage.equals(that.clothingStorage) : that.clothingStorage != null)
            return false;
        if (ac != null ? !ac.equals(that.ac) : that.ac != null) return false;
        if (heating != null ? !heating.equals(that.heating) : that.heating != null) return false;
        if (outdoorDiningArea != null ? !outdoorDiningArea.equals(that.outdoorDiningArea) : that.outdoorDiningArea != null)
            return false;
        if (bbqGrill != null ? !bbqGrill.equals(that.bbqGrill) : that.bbqGrill != null) return false;
        if (petsAllowed != null ? !petsAllowed.equals(that.petsAllowed) : that.petsAllowed != null) return false;
        if (dailyCleaningService != null ? !dailyCleaningService.equals(that.dailyCleaningService) : that.dailyCleaningService != null)
            return false;
        if (transferService != null ? !transferService.equals(that.transferService) : that.transferService != null)
            return false;
        if (fridge != null ? !fridge.equals(that.fridge) : that.fridge != null) return false;
        if (oven != null ? !oven.equals(that.oven) : that.oven != null) return false;
        if (stove != null ? !stove.equals(that.stove) : that.stove != null) return false;
        if (dishwasher != null ? !dishwasher.equals(that.dishwasher) : that.dishwasher != null) return false;
        if (diningTable != null ? !diningTable.equals(that.diningTable) : that.diningTable != null) return false;
        if (microwave != null ? !microwave.equals(that.microwave) : that.microwave != null) return false;
        if (dishes != null ? !dishes.equals(that.dishes) : that.dishes != null) return false;
        if (hairConditioner != null ? !hairConditioner.equals(that.hairConditioner) : that.hairConditioner != null)
            return false;
        if (cleaningProducts != null ? !cleaningProducts.equals(that.cleaningProducts) : that.cleaningProducts != null)
            return false;
        if (shampoo != null ? !shampoo.equals(that.shampoo) : that.shampoo != null) return false;
        if (bodySoap != null ? !bodySoap.equals(that.bodySoap) : that.bodySoap != null) return false;
        if (showerGel != null ? !showerGel.equals(that.showerGel) : that.showerGel != null) return false;
        if (hotWater != null ? !hotWater.equals(that.hotWater) : that.hotWater != null) return false;
        if (beachAccess != null ? !beachAccess.equals(that.beachAccess) : that.beachAccess != null) return false;
        if (hoppingAccess != null ? !hoppingAccess.equals(that.hoppingAccess) : that.hoppingAccess != null)
            return false;
        if (museumAccess != null ? !museumAccess.equals(that.museumAccess) : that.museumAccess != null) return false;
        if (transportationAccess != null ? !transportationAccess.equals(that.transportationAccess) : that.transportationAccess != null)
            return false;
        if (airportAccess != null ? !airportAccess.equals(that.airportAccess) : that.airportAccess != null)
            return false;
        if (privateEntrance != null ? !privateEntrance.equals(that.privateEntrance) : that.privateEntrance != null)
            return false;
        if (beachfront != null ? !beachfront.equals(that.beachfront) : that.beachfront != null) return false;
        if (crib != null ? !crib.equals(that.crib) : that.crib != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = rentalId;
        result = 31 * result + (amenityType != null ? amenityType.hashCode() : 0);
        result = 31 * result + (smokeAlarm != null ? smokeAlarm.hashCode() : 0);
        result = 31 * result + (fireExtinguisher != null ? fireExtinguisher.hashCode() : 0);
        result = 31 * result + (firstAidKit != null ? firstAidKit.hashCode() : 0);
        result = 31 * result + (freeParking != null ? freeParking.hashCode() : 0);
        result = 31 * result + (facilities != null ? facilities.hashCode() : 0);
        result = 31 * result + (singleLevelHome != null ? singleLevelHome.hashCode() : 0);
        result = 31 * result + (washer != null ? washer.hashCode() : 0);
        result = 31 * result + (bedLinens != null ? bedLinens.hashCode() : 0);
        result = 31 * result + (hangers != null ? hangers.hashCode() : 0);
        result = 31 * result + (essentials != null ? essentials.hashCode() : 0);
        result = 31 * result + (clothingStorage != null ? clothingStorage.hashCode() : 0);
        result = 31 * result + (ac != null ? ac.hashCode() : 0);
        result = 31 * result + (heating != null ? heating.hashCode() : 0);
        result = 31 * result + (outdoorDiningArea != null ? outdoorDiningArea.hashCode() : 0);
        result = 31 * result + (bbqGrill != null ? bbqGrill.hashCode() : 0);
        result = 31 * result + (petsAllowed != null ? petsAllowed.hashCode() : 0);
        result = 31 * result + (dailyCleaningService != null ? dailyCleaningService.hashCode() : 0);
        result = 31 * result + (transferService != null ? transferService.hashCode() : 0);
        result = 31 * result + (fridge != null ? fridge.hashCode() : 0);
        result = 31 * result + (oven != null ? oven.hashCode() : 0);
        result = 31 * result + (stove != null ? stove.hashCode() : 0);
        result = 31 * result + (dishwasher != null ? dishwasher.hashCode() : 0);
        result = 31 * result + (diningTable != null ? diningTable.hashCode() : 0);
        result = 31 * result + (microwave != null ? microwave.hashCode() : 0);
        result = 31 * result + (dishes != null ? dishes.hashCode() : 0);
        result = 31 * result + (hairConditioner != null ? hairConditioner.hashCode() : 0);
        result = 31 * result + (cleaningProducts != null ? cleaningProducts.hashCode() : 0);
        result = 31 * result + (shampoo != null ? shampoo.hashCode() : 0);
        result = 31 * result + (bodySoap != null ? bodySoap.hashCode() : 0);
        result = 31 * result + (showerGel != null ? showerGel.hashCode() : 0);
        result = 31 * result + (hotWater != null ? hotWater.hashCode() : 0);
        result = 31 * result + (beachAccess != null ? beachAccess.hashCode() : 0);
        result = 31 * result + (hoppingAccess != null ? hoppingAccess.hashCode() : 0);
        result = 31 * result + (museumAccess != null ? museumAccess.hashCode() : 0);
        result = 31 * result + (transportationAccess != null ? transportationAccess.hashCode() : 0);
        result = 31 * result + (airportAccess != null ? airportAccess.hashCode() : 0);
        result = 31 * result + (privateEntrance != null ? privateEntrance.hashCode() : 0);
        result = 31 * result + (beachfront != null ? beachfront.hashCode() : 0);
        result = 31 * result + (crib != null ? crib.hashCode() : 0);
        return result;
    }
}
