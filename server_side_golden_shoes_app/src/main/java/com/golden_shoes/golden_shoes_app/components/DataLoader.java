package com.golden_shoes.golden_shoes_app.components;

import com.golden_shoes.golden_shoes_app.models.customers.Customer;
import com.golden_shoes.golden_shoes_app.models.orders.Order;
import com.golden_shoes.golden_shoes_app.models.stock.ShoeType;
import com.golden_shoes.golden_shoes_app.models.stock.StockItem;
import com.golden_shoes.golden_shoes_app.models.stock.StockManager;
import com.golden_shoes.golden_shoes_app.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    StockManagerRespository stockManagerRespository;
    @Autowired
    StockItemRepository stockItemRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ShoeTypeRepository shoeTypeRepository;
    @Autowired
    CustomerRepository customerRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        StockManager goldenShoes = new StockManager("Golden Shoes");
        stockManagerRespository.save(goldenShoes);

        ShoeType adidas_trainer = new ShoeType("Adidas", "high-ankle trainers", "Men", 60.00);
        shoeTypeRepository.save(adidas_trainer);
        ShoeType doc_marten_boots = new ShoeType("Doc Marten", "heeled boot", "Women", 105.50);
        shoeTypeRepository.save(doc_marten_boots);

        StockItem item1 = new StockItem(7, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item1);
        goldenShoes.addStock(item1);
        StockItem item2 = new StockItem(6, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item2);
        goldenShoes.addStock(item2);
        StockItem item3 = new StockItem(5, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item3);
        goldenShoes.addStock(item3);
        StockItem item4 = new StockItem(4, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item4);
        goldenShoes.addStock(item4);
        StockItem item5 = new StockItem(4, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item5);
        goldenShoes.addStock(item5);
        StockItem item6 = new StockItem(7, "black", doc_marten_boots, goldenShoes);
        stockItemRepository.save(item6);
        goldenShoes.addStock(item6);

        StockItem item7 = new StockItem(3, "pink", adidas_trainer, goldenShoes);
        stockItemRepository.save(item7);
        goldenShoes.addStock(item7);
        StockItem item8 = new StockItem(3, "pink", adidas_trainer, goldenShoes);
        stockItemRepository.save(item8);
        goldenShoes.addStock(item8);
        StockItem item9 = new StockItem(5, "pink", adidas_trainer, goldenShoes);
        stockItemRepository.save(item9);
        goldenShoes.addStock(item9);
        StockItem item10 = new StockItem(5, "blue", adidas_trainer, goldenShoes);
        stockItemRepository.save(item10);
        goldenShoes.addStock(item10);
        StockItem item11 = new StockItem(3, "blue", adidas_trainer, goldenShoes);
        stockItemRepository.save(item11);
        goldenShoes.addStock(item11);
        StockItem item12 = new StockItem(7, "blue", adidas_trainer, goldenShoes);
        stockItemRepository.save(item12);
        goldenShoes.addStock(item12);

        Customer customer1 = new Customer("Sara Humphries", "21, Millar Cresent");
        customerRepository.save(customer1);

        ArrayList<StockItem> orderList1 = new ArrayList<>();
        orderList1.add(item2);
        orderList1.add(item12);
        Order order1 = goldenShoes.makeOrder(customer1, orderList1);
        orderRepository.save(order1);


        ArrayList<StockItem> orderList2 = new ArrayList<>();
        orderList2.add(item3);
        Order order2 = goldenShoes.makeOrder(customer1, orderList2);
        orderRepository.save(order2);

        stockItemRepository.save(item2);
        stockItemRepository.save(item12);
        stockItemRepository.save(item3);



    }
}
