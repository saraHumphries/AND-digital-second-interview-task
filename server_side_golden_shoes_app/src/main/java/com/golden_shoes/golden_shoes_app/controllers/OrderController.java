package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.orders.Order;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import com.golden_shoes.golden_shoes_app.models.stock.StockManager;
import com.golden_shoes.golden_shoes_app.repositories.CustomerRepository;
import com.golden_shoes.golden_shoes_app.repositories.OrderRepository;
import com.golden_shoes.golden_shoes_app.repositories.StockItemRepository;
import com.golden_shoes.golden_shoes_app.repositories.StockManagerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    StockItemRepository stockItemRepository;

    @Autowired
    StockManagerRespository stockManagerRespository;

    @GetMapping(value = "/orders")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Order>> getAllOrdersByParams(@RequestParam(value = "customer_id", required = false) Long customerId) {
        if (customerId != null) {
            return new ResponseEntity<>(orderRepository.findOrdersByCustomerId(customerId), HttpStatus.OK);
        }
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/orders")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {

        Customer customer = customerRepository.findCustomerById(order.getCustomer().getId());
        List<StockItem> stockItems = new ArrayList<>();
        for (StockItem stockItem : order.getStockItems()) {
            StockItem wholeStockItem = stockItemRepository.findStockItemById(stockItem.getId());
            stockItems.add(wholeStockItem);
        }
        StockManager goldenShoes = new StockManager("Golden Shoes");
        Order newOrder = goldenShoes.makeOrder(customer, stockItems);
        orderRepository.save(newOrder);
        return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
    }
}
