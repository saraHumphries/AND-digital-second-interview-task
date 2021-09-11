import { useLocation } from "react-router";
import { useState } from "react/cjs/react.development";
import StockService from "../services/StockService";

const Bag = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const selectedColour = data.state.selectedColour;
    const selectedSize = data.state.selectedSize;

    const [itemToBuy, setItemToBuy] = useState({});

    
        

    return (
        <div>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
            <div className='size-and-colour-selection'>
                <h5 className='shoe-text'>Size {selectedSize} in {selectedColour}</h5>
            </div>  
        </div>

    )
};

export default Bag;