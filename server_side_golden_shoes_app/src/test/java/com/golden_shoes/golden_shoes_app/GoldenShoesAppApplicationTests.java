package com.golden_shoes.golden_shoes_app;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.orders.Order;
import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import com.golden_shoes.golden_shoes_app.models.stock.StockManager;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest

public class GoldenShoesAppApplicationTests {

	private ShoeType adidasTrainer;
	private StockItem stockItem1;
	private StockItem stockItem2;
	private Customer customer;
	private Order order;
	private ArrayList<StockItem> stockItemsForOrder;
	private ArrayList<StockItem> stockItemsForShoeType;
	private StockManager stockManager;

	@Before
	public void before() {
		stockManager = new StockManager("golden shoes");
		adidasTrainer = new ShoeType("ADIDAS", "trainer", 45.50);
		stockItem1 = new StockItem(7, "blue", adidasTrainer, stockManager);
		stockItem2 = new StockItem(6, "blue", adidasTrainer, stockManager);
		stockManager.addStock(stockItem1);
		stockManager.addStock(stockItem2);
		stockItemsForOrder = new ArrayList<>();
		stockItemsForOrder.add(stockItem1);
		customer = new Customer("Sara", "1, Road");
		order = new Order(stockItemsForOrder, customer);
	}

	@Test
	public void contextLoads() {
	}

	@Test
	public void orderHasStockItems() {
		assertEquals(order.getStockItems().size(), 1);
	}

	@Test
	public void stockItemStartsUnsold() {
		assertEquals(stockItem1.getSoldStatus(), false);
	}

	@Test
	public void stockItemCanGetSold() {
		stockItem1.setSoldStatus(true);
		assertEquals(stockItem1.getSoldStatus(), true);
	}

	@Test
	public void orderCanGetDispatched() {
		order.setDispatchedStatus(true);
		assertEquals(order.getDispatchedStatus(), true);
	}

	@Test
	public void stockManagerCanAddStock() {
		StockItem stockItem3 = new StockItem(5, "red", adidasTrainer, stockManager);
		stockManager.addStock(stockItem3);
		assertEquals(stockManager.getStockItems().size(), 3);
	}


	@Test
	public void stockMangerCanMakeSale() {
		ArrayList<StockItem> orderItems;
		orderItems = new ArrayList<>();
		orderItems.add(stockItem1);
		Order newOrder = stockManager.makeOrder(customer, orderItems);
		assertEquals(newOrder.getStockItems().size(), 1);
		assertEquals(stockItem1.getSoldStatus(), true);
	}

	@Test
	public void stockMangerCannotSellOutOfStock() {
		stockManager.sellStock(stockItem1);
		ArrayList<StockItem> orderItems = new ArrayList<>();
		orderItems.add(stockItem1);
		Order newOrder = stockManager.makeOrder(customer, orderItems);
		assertEquals(newOrder.getStockItems().size(), 0);
	}

	@Test
	public void stockManagerIsAddedToStock() {
		assertEquals(stockItem1.getStockManager(), stockManager);
	}

	@Test
	public void stockItemHasOrder() {
		ArrayList<StockItem> orderItems = new ArrayList<>();
		StockItem item5 = new StockItem(5, "white", adidasTrainer, stockManager);
		orderItems.add(item5);
		Order order = stockManager.makeOrder(customer, orderItems);
		assertEquals(item5.getOrder(), order);
	}
}
