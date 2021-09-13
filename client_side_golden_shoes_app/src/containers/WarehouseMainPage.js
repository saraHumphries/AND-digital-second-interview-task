import OrderService from "../services/OrderService";
import { useState, useEffect } from "react";
import WarehouseOrder from "../components/WarehouseOrder";



const WarehouseMainPage = function() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        OrderService.getOrders()
            .then(res => setOrders(res));
    }, []);

    const warehouseOrdersList = orders.map((order) => {
        return <WarehouseOrder order={order} key={order.id}></WarehouseOrder>
    });



    return (
        <div className='warehouse-main'>
            <div className='table-headings'>
                <h4>order_id</h4>
                <h4>order_date</h4>
                <h4>customer_name</h4>
                <h4>customer_address</h4>
                <div></div>
                <h4>order_items</h4>
            </div>
            {warehouseOrdersList}
        </div>
    );
};

export default WarehouseMainPage;