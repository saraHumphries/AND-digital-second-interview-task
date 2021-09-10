package com.golden_shoes.golden_shoes_app.models.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.golden_shoes.golden_shoes_app.models.orders.Order;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "stock_items")
public class StockItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "size")
    private Integer size;

    @Column(name = "colour")
    private String colour;

    @Column(name = "sold_status")
    private Boolean soldStatus;

    @ManyToOne
    @JoinColumn(name = "shoe_type_id", nullable = false)
    @JsonIgnoreProperties(value = "stockItems")
    private ShoeType shoeType;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnoreProperties(value = "stockItems")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "stock_manager_id")
    @JsonIgnoreProperties(value = "stockItems")
    private StockManager stockManager;

    public StockItem(Integer size, String colour, ShoeType shoeType, StockManager stockManager) {
        this.size = size;
        this.colour = colour;
        this.shoeType = shoeType;
        this.stockManager = stockManager;
        this.soldStatus = false;
        this.order = null;

    }

    public StockItem() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }



    public Boolean getSoldStatus() {
        return soldStatus;
    }

    public void setSoldStatus(Boolean soldStatus) {
        this.soldStatus = soldStatus;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public ShoeType getShoeType() {
        return shoeType;
    }

    public void setShoeType(ShoeType shoeType) {
        this.shoeType = shoeType;
    }

    public StockManager getStockManager() {
        return stockManager;
    }

    public void setStockManager(StockManager stockManager) {
        this.stockManager = stockManager;
    }
}
