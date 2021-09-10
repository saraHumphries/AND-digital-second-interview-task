package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.orders.Order;
import com.golden_shoes.golden_shoes_app.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping(value = "/orders")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Order>> getAllOrdersByParams() {
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }
}
