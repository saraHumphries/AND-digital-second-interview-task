package com.golden_shoes.golden_shoes_app.models.orders;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.stock.Shoe;

public class Order {

    private Long id;

    private Shoe[] shoes;

    private Customer customer;

    private Boolean dispatchedStatus;

    private Boolean deliveredStatus;
}
