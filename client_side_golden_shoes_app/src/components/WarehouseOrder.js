import WarehouseOrderItem from "./WarehouseOrderItem";


const WarehouseOrder = function({order, key}) {

    const warehouseOrderItems = order.stockItems.map((warehouseOrderItem) => {
        return <WarehouseOrderItem warehouseOrderItem = {warehouseOrderItem} key={warehouseOrderItem.id}></WarehouseOrderItem>
    });

    const getDispatch = function() {
        if (order.dispatchedStatus) {
            return <p>DISPATCHED</p>
        } else {
            return <button className='mark-dispatch-button'>mark dispatched</button>
        };
    };

    return (
        <div className='warehourse-order'>
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