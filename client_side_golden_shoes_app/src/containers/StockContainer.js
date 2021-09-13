import { useState, useEffect } from "react";
import ShoeType from "../components/ShoeType";
import ShoeTypeService from "../services/ShoeTypeService";
import { useLocation } from "react-router";
import '../App.css';

const StockContainer = function() {

    const data = useLocation();
    const category = data.state;

    
    const [shoeTypes, setShoeTypes] = useState([]);

    useEffect(() => {
        ShoeTypeService.getShoeTypesByCategory(category)
            .then(res => setShoeTypes(res));
    }, [category]);

    const listOfShoeTypes = shoeTypes.map((shoeType) => {
        return <ShoeType category={category} shoeType={shoeType} key={shoeType.id}></ShoeType>
    });



    return (
        <div className='main-container'>
            <div id='shoe-type-list'>
            {listOfShoeTypes}
            </div>
            
        </div>
    );
};

export default StockContainer;