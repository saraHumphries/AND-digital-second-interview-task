import ShoeTypeService from "../services/ShoeTypeService";
import { useState, useEffect } from "react";
import WarehouseShoe from "../components/WarehouseShoe";


const WarehouseStockContainer = function() {

    const [shoeTypes, setShoeTypes] = useState([]);

    useEffect(() => {
        removeTopAndTitleBars();
        ShoeTypeService.getShoeTypes()
            .then(res => setShoeTypes(res));
    }, []);

    const removeTopAndTitleBars = function() {
        const topBar = document.getElementById('top-bar');
        topBar.style.display = 'none';
        const titleBar = document.getElementById('title-bar');
        titleBar.style.display = 'none';
    };

    const shoeTypesList = shoeTypes.map((shoeType) => {
        return <WarehouseShoe shoeType = {shoeType}></WarehouseShoe>
    });


    return (
        <div id='warehouse-stock'>
            <h2 id='shop-title'>GOLDEN SHOE</h2>
            <h1>CURRENT STOCK - GOLDEN SHOES</h1>
            {shoeTypesList}
        </div>
    );
};

export default WarehouseStockContainer;