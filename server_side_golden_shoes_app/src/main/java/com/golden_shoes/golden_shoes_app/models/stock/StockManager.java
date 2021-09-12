package com.golden_shoes.golden_shoes_app.models.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.orders.Order;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "stock_managers")
public class StockManager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "stockManager", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "stockManager")
    private List<StockItem> stockItems;

    public StockManager(String name) {
        this.name = name;
        this.stockItems = new ArrayList<>();
    }

    public StockManager() {
        this.stockItems = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<StockItem> getStockItems() {
        return stockItems;
    }

    public void setStockItems(List<StockItem> stockItems) {
        this.stockItems = stockItems;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void sellStock(StockItem stockItem) {
        stockItem.setSoldStatus(true);

    }

    public void addStock(StockItem stockItem) {
        this.stockItems.add(stockItem);
        stockItem.setStockManager(this);
    }

    public Order makeOrder(Customer customer, List<StockItem> orderItems) throws Exception {

        ArrayList<StockItem> itemsInStock = new ArrayList<>();
        Order order = new Order(itemsInStock, customer, LocalDate.now(), 0.00);

        for (StockItem stockItem : orderItems) {
            if (!stockItem.getSoldStatus()) {
                this.sellStock(stockItem);
                itemsInStock.add(stockItem);
                stockItem.setOrder(order);
                order.setTotalCost(order.getTotalCost() + stockItem.getShoeType().getPrice());
            }
        }
        if (itemsInStock.size() > 0) {
            return order;
        } else throw new Exception("Order not created");
    }


}
