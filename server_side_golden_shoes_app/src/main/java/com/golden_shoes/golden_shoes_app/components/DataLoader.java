package com.golden_shoes.golden_shoes_app.components;

import com.golden_shoes.golden_shoes_app.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    StockManagerRespository stockManagerRespository;
    @Autowired
    StockItemRepository stockItemRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ShoeTypeRepository shoeTypeRepository;
    @Autowired
    CustomerRepository customerRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        
    }
}
