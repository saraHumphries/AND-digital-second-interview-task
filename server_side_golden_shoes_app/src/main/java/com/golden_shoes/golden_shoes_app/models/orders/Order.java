package com.golden_shoes.golden_shoes_app.models.orders;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.stock.Shoe;

import java.util.List;

public class Order {

    private Long id;

    private List<Shoe> shoes;

    private Customer customer;

    private Boolean dispatchedStatus;

    private Boolean deliveredStatus;

    public Order(List<Shoe> shoes, Customer customer, Boolean dispatchedStatus, Boolean deliveredStatus) {
        this.shoes = shoes;
        this.customer = customer;
        this.dispatchedStatus = dispatchedStatus;
        this.deliveredStatus = deliveredStatus;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Shoe> getShoes() {
        return shoes;
    }

    public void setShoes(List<Shoe> shoes) {
        this.shoes = shoes;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Boolean getDispatchedStatus() {
        return dispatchedStatus;
    }

    public void setDispatchedStatus(Boolean dispatchedStatus) {
        this.dispatchedStatus = dispatchedStatus;
    }

    public Boolean getDeliveredStatus() {
        return deliveredStatus;
    }

    public void setDeliveredStatus(Boolean deliveredStatus) {
        this.deliveredStatus = deliveredStatus;
    }
}
