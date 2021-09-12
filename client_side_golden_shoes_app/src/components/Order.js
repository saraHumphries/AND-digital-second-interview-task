import OrderItem from "./OrderItem";

const Order = function({order}) {

    const orderItems = order.stockItems.map((orderItem) => {
        return <OrderItem orderItem = {orderItem} key={orderItem.id}></OrderItem>
    });

    


    return (
        <div className='whole-order'>
            <h5>ORDER PLACED ON {order.orderDate} FOR £{order.totalCost}</h5>
            <p>DELIVERY ADDRESS: {order.customer.address}</p>
            <p>DISPATCHED: {order.dispatchedStatus}</p>
            <p>ORDER CONTAINS</p>
            {orderItems}
            
            
        </div>
    );

};
export default Order;