
import { useState, useEffect } from "react";
import ShoeTypeService from "../services/ShoeTypeService";

const WarehouseOrderItem = function({warehouseOrderItem}) {

    const [warehouseItemShoeType, setWarehouseItemShoeType] = useState({});

    useEffect(() => {
        ShoeTypeService.getShoeTypeForStockItemId(warehouseOrderItem.id)
            .then(res => setWarehouseItemShoeType(res[0]));
    }, []);

    return (
        <div className='warehouse-order-item'>
           <p>stock_id_{warehouseOrderItem.id}</p>
               <div className='warehouse-brand'>
                   <p>{warehouseItemShoeType.brand}: {warehouseItemShoeType.description}</p>
               </div>
               <div className='warehouse-colour-size'>
                   <p>UK {warehouseOrderItem.size} IN {warehouseOrderItem.colour}</p>
               </div>
        </div>
    );
};

export default WarehouseOrderItem;