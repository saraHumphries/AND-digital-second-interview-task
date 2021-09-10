package com.golden_shoes.golden_shoes_app.models.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "shoe_types")
public class ShoeType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "brand")
    private String brand;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @OneToMany(mappedBy = "shoeType", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "shoeType")
    private List<StockItem> stockItems;

    public ShoeType(String brand, String description, Double price) {
        this.brand = brand;
        this.description = description;
        this.price = price;
        this.stockItems = new ArrayList<>();
    }

    public ShoeType(List<StockItem> stockItems) {
        this.stockItems = new ArrayList<>();
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<StockItem> getShoes() {
        return stockItems;
    }

    public void setShoes(List<StockItem> stockItems) {
        this.stockItems = stockItems;
    }
}
