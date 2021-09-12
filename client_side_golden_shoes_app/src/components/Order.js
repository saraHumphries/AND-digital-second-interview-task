import OrderItem from "./OrderItem";

const Order = function({order}) {

    const orderItems = order.stockItems.map((orderItem) => {
        return <OrderItem orderItem = {orderItem} key={orderItem.id}></OrderItem>
    });



    const getStatuses = function() {
        const statuses = {};
        if (order.dispatchedStatus) {
            statuses.dispatchedText = 'THIS ORDER HAS BEEN DISPATCHED'
        } else {
            statuses.dispatchedText = 'NOT YET DISPATCHED'
        }
        if (order.deliveredStatus) {
            statuses.deliveredText = 'AND SUCCESSFULLY DELIVERED'
        } else {
            statuses.deliveredText = 'NOT YET DELIVERED'
        }
        return statuses;
    };


    return (
        <div className='whole-order'>
            <div>
                <h5 className='order-title'>ORDER {order.id} -- PLACED ON {order.orderDate} FOR £{order.totalCost}</h5>
                <button className='tracking-button'>GET TRACKING INFO</button>
                <p>DELIVERY ADDRESS: {order.customer.address}</p>
            </div>
            
            <div>{orderItems}</div>
            <div>
                <p>{getStatuses().dispatchedText}</p>
                <p>{getStatuses().deliveredText}</p>
            </div>
            
            
        </div>
    );

};
export default Order;