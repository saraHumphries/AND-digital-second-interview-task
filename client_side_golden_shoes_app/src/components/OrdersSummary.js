import { useState, useEffect } from "react";
import Orders from "./Orders";

import OrderService from "../services/OrderService";

const OrdersSummary = function() {

    const [orders, setOrders] = useState([]);
    const customerId = 1;

    useEffect(() => {
        OrderService.getOrdersByCustomerId(customerId)
            .then(res => setOrders(res));
    }, []);

    const orderItems = orders.map((order) => {
        return <Orders order = {order} key = {order.id}></Orders>
    });

    return (
       <div>
           {orderItems}
       </div>
    );
};

export default OrdersSummary;