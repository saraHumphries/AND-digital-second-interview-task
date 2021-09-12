import OrderItem from "./OrderItem";

const Order = function({order}) {

    const orderItems = order.stockItems.map((orderItem) => {
        return <OrderItem orderItem = {orderItem} key={orderItem.id}></OrderItem>
    });


    return (
        <div className='whole-order'>
            <h4>YOUR ORDER CONTAINS</h4>
            {orderItems}
            <h4>DELIVERING TO ADDRESS</h4>
            <h3>{order.customer.address}</h3>
            
        </div>
    );

};
export default Order;