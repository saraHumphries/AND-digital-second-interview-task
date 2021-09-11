package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import com.golden_shoes.golden_shoes_app.repositories.ShoeTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ShoeTypeController {

    @Autowired
    ShoeTypeRepository shoeTypeRepository;

    @GetMapping(value = "/shoe_types")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<ShoeType>> getAllShoeTypesByParams(
            @RequestParam(name = "category", required = false) String category
            , @RequestParam(name = "stock_item_id", required = false) Long stockItemId
    ) {
        if (stockItemId != null && category == null) {
            return new ResponseEntity<>(shoeTypeRepository.findShoeTypeByStockItemsId(stockItemId), HttpStatus.OK);
        }
        else if (category != null) {
            return new ResponseEntity<>(shoeTypeRepository.findShoeTypesByCategory(category), HttpStatus.OK);
        }
        return new ResponseEntity<>(shoeTypeRepository.findAll(), HttpStatus.OK);
    }
}
