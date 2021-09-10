package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.stock.StockManager;
import com.golden_shoes.golden_shoes_app.repositories.StockManagerRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockManagerController {

    @Autowired
    StockManagerRespository stockManagerRespository;

    @GetMapping(value = "/stock_managers")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<StockManager>> getAllStockManagers() {
        return new ResponseEntity<>(stockManagerRespository.findAll(), HttpStatus.OK);
    }
}
