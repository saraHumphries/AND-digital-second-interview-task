import WarehouseOrderItem from "./WarehouseOrderItem";



const WarehouseOrder = function({order, markOrderAsDispatched}) {

    const warehouseOrderItems = order.stockItems.map((warehouseOrderItem) => {
        return <WarehouseOrderItem warehouseOrderItem = {warehouseOrderItem} key={warehouseOrderItem.id}></WarehouseOrderItem>
    });

    const handleDispatchButtonClick = function() {
        markOrderAsDispatched(order.id);
    };
    

    const getDispatch = function() {
        if (order.dispatchedStatus) {
            return <p>DISPATCHED</p>
        } else {
            return <button onClick={handleDispatchButtonClick} className='mark-dispatch-delivered-button'>MARK DISPATCHED</button>
        };
    };

    

    return (
        <div className='warehouse-order'>
            <p>{order.id}</p>
            <p>{order.orderDate}</p>
            <p>{order.customer.name}</p>
            <p>{order.customer.address}</p>
            <div>{getDispatch()}</div>
            
            <div>{warehouseOrderItems}</div>
            
            
        </div>
    );
};

export default WarehouseOrder;