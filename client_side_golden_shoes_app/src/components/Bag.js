import { useState, useEffect } from "react";
import { useLocation } from "react-router"
import StockService from "../services/StockService";

const Bag = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const selectedColour = data.state.selectedColour;
    const selectedSize = data.state.selectedSize;

    const [itemToBuy, setItemToBuy] = useState({});
    const [itemStock, setItemStock] = useState(null);

    useEffect(() => {
        StockService.getUnsoldStockItemsByShoeTypeIdAndColourAndSize(shoeType.id, selectedColour, selectedSize)
            .then((res) => {
                setItemToBuy(res[0]);
                setItemStock(res.length);
            });
    }, []);

    const onBuyClick = function() {
        const updatedStockItem = {
            soldStatus: true
        };
        console.log('updatedItem', updatedStockItem);
        StockService.updateStockItemToSold(itemToBuy.id, updatedStockItem)
            .then(res => setItemToBuy(res));
    };
        

    return (
        <div>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
            <div className='size-and-colour-selection'>
                <h3 className='shoe-text'>UK SIZE {selectedSize} IN {selectedColour}</h3>
                <h4 className='shoe-text'>ONLY {itemStock} LEFT!</h4>
            </div> 
            <button onClick={onBuyClick}>BUY NOW</button> 
        </div>

    )
};

export default Bag;