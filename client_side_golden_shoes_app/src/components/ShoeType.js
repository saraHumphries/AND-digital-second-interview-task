import '../App.css';
import { Link } from 'react-router-dom';

const ShoeType = function({category, shoeType, stockInventory}) {


    return (
        <div>
            <Link to={{
                pathname: `/stock/${category}/${shoeType.brand}/${shoeType.description}`,
                state: {stockInventory, shoeType}
                }}>
                <div className='shoe-display'>
                    <img className="image-icon"src={shoeType.imageUrl}></img>
                </div>
            </Link>
                <div className='shoe-advert-text'>
                    <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                    <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                    <h5 className='price shoe-text'>£{shoeType.price}</h5>
                </div>
        </div>
            
        
    );
};

export default ShoeType;