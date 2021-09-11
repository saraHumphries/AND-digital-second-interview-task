import StockService from "../services/StockService";
import { useState, useEffect } from "react";
import ShoeType from "../components/ShoeType";
import ShoeTypeService from "../services/ShoeTypeService";
import { useLocation } from "react-router";
import '../App.css';

const StockContainer = function() {

    const data = useLocation();
    const category = data.state;

    const [stockInventory, setStockInventory] = useState([]);
    const [shoeTypes, setShoeTypes] = useState([]);

    useEffect(() => {
        StockService.getStockItems()
            .then(res => setStockInventory(res));
        ShoeTypeService.getShoeTypesByCategory(category)
            .then(res => setShoeTypes(res));
    }, [category]);

    const listOfShoeTypes = shoeTypes.map((shoeType) => {
        return <ShoeType shoeType={shoeType} key={shoeType.id} stockInventory={stockInventory}></ShoeType>
    });


    return (
        <div className='main-container'>
            <ul>
            {listOfShoeTypes}
            </ul>
            
        </div>
    );
};

export default StockContainer;