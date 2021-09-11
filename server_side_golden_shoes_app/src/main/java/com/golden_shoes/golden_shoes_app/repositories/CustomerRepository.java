package com.golden_shoes.golden_shoes_app.repositories;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findCustomerById(Long customerId);
}
