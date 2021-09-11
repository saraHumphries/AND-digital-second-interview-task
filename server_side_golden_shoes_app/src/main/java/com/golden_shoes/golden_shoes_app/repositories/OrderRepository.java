package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.orders.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findOrdersByCustomerId(Long customerId);
}
