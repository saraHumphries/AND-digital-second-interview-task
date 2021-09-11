import StockService from "../services/StockService";
import { useState, useEffect } from "react";
import ShoeType from "../components/ShoeType";
import ShoeTypeService from "../services/ShoeTypeService";

const StockContainer = function() {

    const [stockInventory, setStockInventory] = useState([]);
    const [shoeTypes, setShoeTypes] = useState([]);

    useEffect(() => {
        StockService.getStockItems()
            .then(res => setStockInventory(res));
        ShoeTypeService.getShoeTypes()
            .then(res => setShoeTypes(res));
    }, []);

    const listOfShoeTypes = shoeTypes.map((shoeType) => {
        return <ShoeType shoeType={shoeType} key={shoeType.id} stockInventory={stockInventory}></ShoeType>
    });


    return (
        <div>
            <ul>
            {listOfShoeTypes}
            </ul>
            
        </div>
    );
};

export default StockContainer;