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

import java.time.LocalDate;
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

        ShoeType adidasTrainer = new ShoeType("ADIDAS", "HAMBURG", "men", "https://d2ob0iztsaxy5v.cloudfront.net/product/340085/3400852050_zm.jpg", 60.00);
        shoeTypeRepository.save(adidasTrainer);
        ShoeType docMartenBoots = new ShoeType("DR MARTENS", "VOSS QUAD FLUFFY", "women", "https://d2ob0iztsaxy5v.cloudfront.net/product/175236/1752367020_zm.jpg", 109.00);
        shoeTypeRepository.save(docMartenBoots);
        ShoeType birkenstockSandal = new ShoeType("BIRKENSTOCK", "ARIZONA", "men", "https://d2ob0iztsaxy5v.cloudfront.net/product/330393/3303937060_zm.jpg", 60.00);
        shoeTypeRepository.save(birkenstockSandal);
        ShoeType clarksShoe = new ShoeType("CLARKS", "WALLABEE", "men", "https://d2ob0iztsaxy5v.cloudfront.net/product/312099/3120996120_zm.jpg", 125.00);
        shoeTypeRepository.save(clarksShoe);
        ShoeType converseHiTop = new ShoeType("CONVERSE", "ALL STAR HI TOP", "men", "https://d2ob0iztsaxy5v.cloudfront.net/product/340140/3401401070_zm.jpg", 57.00);
        shoeTypeRepository.save(converseHiTop);
        ShoeType ckBoot = new ShoeType("CALVIN KLEIN", "PLATFORM BOOT", "women", "https://d2ob0iztsaxy5v.cloudfront.net/product/144253/1442537060_zm.jpg", 140.00);
        shoeTypeRepository.save(ckBoot);
        ShoeType sandal = new ShoeType("HAVAIANAS", "SLIM", "women", "https://d2ob0iztsaxy5v.cloudfront.net/product/176172/1761722060_zm.jpg", 25.00);
        shoeTypeRepository.save(sandal);
        ShoeType heel = new ShoeType("D AND G", "STILETTO", "women", "https://d2ob0iztsaxy5v.cloudfront.net/product/111222/1112222560_zm.jpg", 300.00);
        shoeTypeRepository.save(heel);


        StockItem item14 = new StockItem(5, "yellow", sandal, goldenShoes);
        stockItemRepository.save(item14);
        StockItem item15 = new StockItem(3, "black", ckBoot, goldenShoes);
        stockItemRepository.save(item15);
        StockItem item16 = new StockItem(3, "grey", converseHiTop, goldenShoes);
        stockItemRepository.save(item16);
        StockItem item17 = new StockItem(5, "red", heel, goldenShoes);
        stockItemRepository.save(item17);
        StockItem item13 = new StockItem(5, "grey", clarksShoe, goldenShoes);
        stockItemRepository.save(item13);
        StockItem item1 = new StockItem(7, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item1);
        goldenShoes.addStock(item1);
        StockItem item2 = new StockItem(6, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item2);
        goldenShoes.addStock(item2);
        StockItem item3 = new StockItem(5, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item3);
        goldenShoes.addStock(item3);
        StockItem item4 = new StockItem(4, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item4);
        goldenShoes.addStock(item4);
        StockItem item5 = new StockItem(4, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item5);
        goldenShoes.addStock(item5);
        StockItem item6 = new StockItem(7, "black", docMartenBoots, goldenShoes);
        stockItemRepository.save(item6);
        goldenShoes.addStock(item6);

        StockItem item7 = new StockItem(3, "yellow", adidasTrainer, goldenShoes);
        stockItemRepository.save(item7);
        goldenShoes.addStock(item7);
        StockItem item8 = new StockItem(6, "yellow", adidasTrainer, goldenShoes);
        stockItemRepository.save(item8);
        goldenShoes.addStock(item8);
        StockItem item9 = new StockItem(5, "yellow", adidasTrainer, goldenShoes);
        stockItemRepository.save(item9);
        goldenShoes.addStock(item9);
        StockItem item10 = new StockItem(5, "yellow", adidasTrainer, goldenShoes);
        stockItemRepository.save(item10);
        goldenShoes.addStock(item10);
        StockItem item11 = new StockItem(3, "blue", adidasTrainer, goldenShoes);
        stockItemRepository.save(item11);
        goldenShoes.addStock(item11);
        StockItem item12 = new StockItem(7, "blue", adidasTrainer, goldenShoes);
        stockItemRepository.save(item12);
        goldenShoes.addStock(item12);

        Customer customer1 = new Customer("Sara Humphries", "21, Millar Cresent");
        customerRepository.save(customer1);

        ArrayList<StockItem> orderList1 = new ArrayList<>();
        orderList1.add(item2);
        orderList1.add(item12);
        Order order1 = goldenShoes.makeOrder(customer1, orderList1);
        order1.setOrderDate(LocalDate.parse("2021-08-12"));
        order1.setEtaDelivery(LocalDate.parse("2021-08-19"));
        order1.setDispatchedStatus(true);
        order1.setDeliveredStatus(true);
        orderRepository.save(order1);


        ArrayList<StockItem> orderList2 = new ArrayList<>();
        orderList2.add(item3);
        Order order2 = goldenShoes.makeOrder(customer1, orderList2);
        order2.setOrderDate(LocalDate.parse("2021-09-12"));
        order2.setEtaDelivery((LocalDate.parse("2021-09-19")));
        order2.setDispatchedStatus(true);
        orderRepository.save(order2);

        stockItemRepository.save(item2);
        stockItemRepository.save(item12);
        stockItemRepository.save(item3);



    }
}
