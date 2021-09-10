import StockService from "../services/StockService";
import { useState, useEffect } from "react";

const StockContainer = function() {

    const [stockInventory, setStockInventory] = useState([]);

    useEffect(() => {
        StockService.getStockItems()
            .then(res => setStockInventory(res));
    }, []);


    return (
        <div>
            <h2>Stock container</h2>
        </div>
    );
};

export default StockContainer;