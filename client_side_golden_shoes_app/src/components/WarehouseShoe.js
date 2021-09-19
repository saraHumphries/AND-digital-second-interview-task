import { useEffect, useState } from "react/cjs/react.development";
import StockService from "../services/StockService";
import WarehouseStockItem from "./WarehouseStockItem";

const WarehouseShoe = function({shoeType}) {

    const [stockItems, setStockItems] = useState([]);

    useEffect(() => {
        StockService.getStockItemsByShoeTypeId(shoeType.id)
            .then(res => setStockItems(res));
    }, []);

    const warehouseStockItems = stockItems.map((warehouseStockItem) => {
        return <WarehouseStockItem warehouseStockItem = {warehouseStockItem} key={warehouseStockItem.id}></WarehouseStockItem>
    });


    return (
        <div id='warehouse-stock-table'>
            <div id='shoe-type-info'>
                <p className='shoe-text'>{shoeType.brand}</p>
                <p className='shoe-text'>{shoeType.description}</p>
            </div>
            <div id='stock-info-section'>
                {warehouseStockItems}

            </div>
        </div>
    );
};

export default WarehouseShoe;