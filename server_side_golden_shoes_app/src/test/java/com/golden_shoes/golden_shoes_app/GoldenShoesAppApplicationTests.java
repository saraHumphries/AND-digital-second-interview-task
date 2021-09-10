package com.golden_shoes.golden_shoes_app;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.orders.Order;
import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest

public class GoldenShoesAppApplicationTests {

	private ShoeType adidasTrainer;
	private StockItem stockItem1;
	private StockItem stockItem2;
	private Customer customer;
	private Order order;
	private ArrayList<StockItem> stockItemsForOrder;

	@Before
	public void before() {
		adidasTrainer = new ShoeType("ADIDAS", "trainer", 45.50);
		stockItem1 = new StockItem(7, "blue", adidasTrainer);
		stockItem2 = new StockItem(6, "blue", adidasTrainer);
		stockItemsForOrder = new ArrayList<>();
		stockItemsForOrder.add(stockItem1);
		stockItemsForOrder.add(stockItem2);
		customer = new Customer("Sara", "1, Road");
		order = new Order(stockItemsForOrder, customer, false, false);

	}

	@Test
	void contextLoads() {
	}

}
