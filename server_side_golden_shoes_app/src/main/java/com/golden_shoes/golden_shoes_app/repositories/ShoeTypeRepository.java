package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoeTypeRepository extends JpaRepository<ShoeType, Long> {
}
