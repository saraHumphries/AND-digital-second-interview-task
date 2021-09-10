package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.stock.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoeRepository extends JpaRepository<Shoe, Long> {
}
