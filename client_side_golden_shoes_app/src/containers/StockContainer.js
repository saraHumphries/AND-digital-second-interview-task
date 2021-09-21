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
            <section className="filter-section">
                <div className='filter'>
                    <label htmlFor='brand'>FILTER BY BRAND</label>
                    <select id='brand'>
                        <option>ADIDAS</option>
                        <option>CONVERSE</option>
                    </select>
                </div>

                <div className='filter'>
                    <label htmlFor='price'>FILTER BY PRICE</label>
                    <select id='price'>
                        <option>UNDER £50</option>
                        <option>£50 - £100</option>
                    </select>
                </div>
            </section>
            <div id='shoe-type-list'>
            {listOfShoeTypes}
            </div>
            
        </div>
    );
};

export default StockContainer;