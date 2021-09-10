package com.golden_shoes.golden_shoes_app.models.orders;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "order")
    private List<StockItem> stockItems;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnoreProperties(value = "orders")
    private Customer customer;

    @Column(name = "dispatched_status")
    private Boolean dispatchedStatus;

    @Column(name = "delivered_status")
    private Boolean deliveredStatus;

    public Order(List<StockItem> stockItems, Customer customer, Boolean dispatchedStatus, Boolean deliveredStatus) {
        this.stockItems = stockItems;
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

    public List<StockItem> getShoes() {
        return stockItems;
    }

    public void setShoes(List<StockItem> stockItems) {
        this.stockItems = stockItems;
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
