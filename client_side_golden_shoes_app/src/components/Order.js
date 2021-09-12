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

    console.log(getStatuses());

    return (
        <div className='whole-order'>
            <h5>ORDER {order.id} -- PLACED ON {order.orderDate} FOR £{order.totalCost}</h5>
            <p>DELIVERY ADDRESS: {order.customer.address}</p>
            {orderItems}
            <p>{getStatuses().dispatchedText}</p>
            <p>{getStatuses().deliveredText}</p>
            
            
        </div>
    );

};
export default Order;