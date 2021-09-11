package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockItemRepository extends JpaRepository<StockItem, Long> {

    List<StockItem> findStockItemsByShoeTypeId(Long shoeTypeId);

    List<StockItem> findStockItemsByShoeTypeIdAndSoldStatus(Long shoeTypeId, Boolean soldStatus);
}
