package com.golden_shoes.golden_shoes_app.models.orders;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import org.apache.tomcat.jni.Local;

import java.time.LocalDate;
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

    @Column(name = "orderDate")
    private LocalDate orderDate;

    @Column(name = "totalCost")
    private Double totalCost;

    @Column(name = "dispatched_status")
    private Boolean dispatchedStatus;

    @Column(name = "delivered_status")
    private Boolean deliveredStatus;

    public Order(List<StockItem> stockItems, Customer customer, LocalDate orderDate, Double totalCost) {
        this.stockItems = stockItems;
        this.customer = customer;
        this.orderDate = orderDate;
        this.totalCost = totalCost;
        this.dispatchedStatus = false;
        this.deliveredStatus = false;

    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<StockItem> getStockItems() {
        return stockItems;
    }

    public void setStockItems(List<StockItem> stockItems) {
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

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Double totalCost) {
        this.totalCost = totalCost;
    }
}
