package com.golden_shoes.golden_shoes_app.models.customers;

import com.golden_shoes.golden_shoes_app.models.orders.Order;

public class Customer {

    private Long id;

    private String name;

    private String address;

    private Order[] orders;
}
