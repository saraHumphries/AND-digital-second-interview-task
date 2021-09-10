package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.stock.StockManager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockManagerRespository extends JpaRepository<StockManager, Long> {
}
