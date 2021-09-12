import { useState, useEffect } from "react";
import Orders from "./Order";

import OrderService from "../services/OrderService";

const OrdersSummary = function() {

    const [orders, setOrders] = useState([]);
    const customerId = 1;

    useEffect(() => {
        OrderService.getOrdersByCustomerId(customerId)
            .then(res => setOrders(res));
    }, []);

    const ordersList = orders.map((order) => {
        return <Orders order = {order} key = {order.id}></Orders>
    });

    return (
       <div className='whole-order-summary'>
           <header className="order-header">
                <h3>YOUR RECENT ORDERS</h3>
           </header>
           {ordersList}
       </div>
    );
};

export default OrdersSummary;