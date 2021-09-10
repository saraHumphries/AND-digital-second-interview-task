package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/customers")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Customer>> getAllCustomersByParams() {
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }
}
