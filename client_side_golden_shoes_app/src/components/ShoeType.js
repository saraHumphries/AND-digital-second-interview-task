import '../App.css';

const ShoeType = function({shoeType, stockInventory}) {
    return (
        
            <div className='shoe-display'>
            <img className="image-icon"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
        
    );
};

export default ShoeType;