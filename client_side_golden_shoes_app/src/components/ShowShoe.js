import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const ShowShoe = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const stockInventory = data.state.stockInventory;

    const [availableColours, setAvailableColours] = useState([]);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedColor, setSelectedColour] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    
    useEffect(() => {
        const availableColours = [];
        for (const stockItem of stockInventory) {
            if (!availableColours.includes(stockItem.colour)) {
                availableColours.push(stockItem.colour);
            }
        }
        setAvailableColours(availableColours);
        const availableSizes = [];
        for (const stockItem of stockInventory) {
            if (!availableSizes.includes(stockItem.size)) {
                availableSizes.push(stockItem.size);
            }
        }
        setAvailableSizes(availableSizes.sort());
    }, []);

    console.log(shoeType);

    return (
        <div className='main-container show-shoe-display'>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>

            <div className='size-color-form-container'>
                <form className='size-color-form'>
                    <label for='size'>Choose a size</label>
                        
                </form>
            </div>
        </div>
    );
};

export default ShowShoe;