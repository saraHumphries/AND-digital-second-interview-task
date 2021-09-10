package com.golden_shoes.golden_shoes_app.models.stock;

import java.util.ArrayList;
import java.util.List;

public class ShoeType {

    private Long id;

    private String brand;

    private String description;

    private Long price;

    private List<Shoe> shoes;

    public ShoeType(String brand, String description, Long price) {
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.shoes = new ArrayList<>();
    }

    public ShoeType(List<Shoe> shoes) {
        this.shoes = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public List<Shoe> getShoes() {
        return shoes;
    }

    public void setShoes(List<Shoe> shoes) {
        this.shoes = shoes;
    }
}
