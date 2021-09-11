import '../App.css';

const ShoeType = function({shoeType, stockInventory}) {
    return (
        <div>
            <li className='shoe-display'>
            <img className="image-icon"src={shoeType.imageUrl}></img>
                <h3 className='brand-name'>{shoeType.brand}</h3>
                <h5 className='shoe-description'>{shoeType.description}</h5>
                <h5 className='price'>£{shoeType.price}</h5>
            </li>
        </div>
    );
};

export default ShoeType;