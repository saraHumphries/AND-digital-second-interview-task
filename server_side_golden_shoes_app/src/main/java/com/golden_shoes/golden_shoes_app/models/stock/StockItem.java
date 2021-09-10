package com.golden_shoes.golden_shoes_app.models.stock;

import com.golden_shoes.golden_shoes_app.models.orders.Order;

public class Shoe {

    private Long id;

    private Integer size;

    private String colour;

    private Boolean soldStatus;

    private Order order;

    public Shoe(Integer size, String colour, Boolean soldStatus, Order order) {
        this.size = size;
        this.colour = colour;
        this.soldStatus = soldStatus;
        this.order = order;
    }

    public Shoe() {
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
}
