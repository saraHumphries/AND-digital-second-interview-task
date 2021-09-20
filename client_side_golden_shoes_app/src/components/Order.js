import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

const Order = function({order}) {

    const orderItems = order.stockItems.map((orderItem) => {
        return <OrderItem orderItem = {orderItem} key={orderItem.id}></OrderItem>
    });

    const [statuses, setStatuses] = useState({});

    useEffect(() => {
        getStatuses();
    },[]);

    
    
    const getStatuses = function() {
        const statuses = {};
        const returnsButton = document.getElementById('returns-button');
        
        if (order.dispatchedStatus) {
            statuses.dispatchedText = 'THIS ORDER HAS BEEN DISPATCHED'
        } else {
            statuses.dispatchedText = 'NOT YET DISPATCHED'
        }
        if (order.deliveredStatus) {
            statuses.deliveredText = 'AND SUCCESSFULLY DELIVERED'
            returnsButton.style.display = 'block';
            
        } else {
            statuses.deliveredText = 'NOT YET DELIVERED'
        }
        setStatuses(statuses);
    };

    

    


    return (
        <div className='whole-order'>
            <div>
                <h5 className='order-title'>ORDER {order.id} -- PLACED ON {order.orderDate} FOR £{order.totalCost}</h5>
                <button className='tracking-button'>GET TRACKING INFO</button>
                <p>DELIVERY EXPECTED: {order.etaDelivery}</p>
                <p>DELIVERY ADDRESS: {order.customer.address}</p>
            </div>
            
            <div>{orderItems}</div>
            <div>
                <p>{statuses.dispatchedText}</p>
                <p>{statuses.deliveredText}</p>
                <button hidden id='returns-button'>PRINT RETURNS LABEL</button>
            </div>
            
            
        </div>
    );

};
export default Order;