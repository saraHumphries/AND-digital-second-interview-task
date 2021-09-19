import ShoeTypeService from "../services/ShoeTypeService";
import { useState, useEffect } from "react";
import WarehouseShoe from "../components/WarehouseShoe";


const WarehouseStockContainer = function() {

    const [shoeTypes, setShoeTypes] = useState([]);

    useEffect(() => {
        ShoeTypeService.getShoeTypes()
            .then(res => setShoeTypes(res));
    }, []);

    const shoeTypesList = shoeTypes.map((shoeType) => {
        return <WarehouseShoe shoeType = {shoeType}></WarehouseShoe>
    });


    return (
        <div id='warehouse-stock'>
            <h1>CURRENT STOCK - GOLDEN SHOES</h1>
            {shoeTypesList}
        </div>
    );
};

export default WarehouseStockContainer;