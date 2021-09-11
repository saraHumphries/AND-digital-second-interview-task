package com.golden_shoes.golden_shoes_app.controllers;

import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import com.golden_shoes.golden_shoes_app.repositories.StockItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StockItemController {

    @Autowired
    StockItemRepository stockItemRepository;

    @GetMapping(value = "/stock_items")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<StockItem>> getAllStockItemsByParams(@RequestParam(name = "shoe_type_id", required = false) Long shoeTypeId) {
        if (shoeTypeId == null) {
            return new ResponseEntity<>(stockItemRepository.findAll(), HttpStatus.OK);
        }
        return new ResponseEntity<>(stockItemRepository.findStockItemsByShoeTypeId(shoeTypeId), HttpStatus.OK);
    }

    @GetMapping(value = "/stock_items/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<StockItem>> getStockItemById(@PathVariable Long id) {
        return new ResponseEntity<>(stockItemRepository.findById(id), HttpStatus.OK);
    }



    @PutMapping(value = "/stock_items/{stockItemId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<StockItem> updateStockItemSoldStatus(@RequestBody StockItem stockItem, @PathVariable Long stockItemId) {
        StockItem stockItemToUpdate = stockItemRepository.findById(stockItemId).get();
        stockItemToUpdate.setSoldStatus(stockItem.getSoldStatus());
        final StockItem updatedStockItem = stockItemRepository.save(stockItemToUpdate);
        return new ResponseEntity<>(updatedStockItem, HttpStatus.OK);

    }

}
