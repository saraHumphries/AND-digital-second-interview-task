package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShoeTypeRepository extends JpaRepository<ShoeType, Long> {

    List<ShoeType> findShoeTypesByCategory(String category);

    List<ShoeType> findShoeTypeByStockItemsId(Long stockItemId);
}
