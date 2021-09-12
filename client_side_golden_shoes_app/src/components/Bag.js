import { useState, useEffect } from "react";
import { useLocation } from "react-router"
import StockService from "../services/StockService";
import { Link } from "react-router-dom";
import OrderService from "../services/OrderService";

const Bag = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const selectedColour = data.state.selectedColour;
    const selectedSize = data.state.selectedSize;

    
    const [itemToBuy, setItemToBuy] = useState({});

    useEffect(() => {
        StockService.getUnsoldStockItemsByShoeTypeIdAndColourAndSize(shoeType.id, selectedColour, selectedSize)
            .then((res) => {
                setItemToBuy(res[0]);
            });
    }, []);
    

    const onBuyClick = function() {
        const newOrder = {
            stockItems: [{
                id: itemToBuy.id
            }],
            customer: {
                id: 1
            }
        };
        OrderService.postOrder(newOrder);
    };
        

    return (
        <div className='whole-bag'>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
            <div className='size-and-colour-selection'>
                <h3 className='shoe-text'>UK SIZE {selectedSize} IN {selectedColour}</h3>
                
            </div>
            <a href='/orders'><button onClick={onBuyClick}>BUY NOW</button></a>
        </div>

    )
};

export default Bag;