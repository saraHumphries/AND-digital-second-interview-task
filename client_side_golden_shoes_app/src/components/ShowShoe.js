import { useLocation } from "react-router";

const ShowShoe = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const stockInventory = data.state.stockInventory;

    console.log(shoeType);

    return (
        <div className='main-container show-shoe-display'>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
        </div>
    );
};

export default ShowShoe;