import '../App.css';
import { Link } from 'react-router-dom';
import StockService from "../services/StockService";
import { useEffect, useState } from 'react';

const ShoeType = function({category, shoeType}) {

    const [stockLevels, setStockLevels] = useState([]);

    useEffect(() => {
        StockService.getUnsoldStockItemsByShoeTypeId(shoeType.id)
            .then(res => setStockLevels(res));
    }, []);

    return (
        <div>
            {stockLevels.length == 0? <div className='shoe-display'>
                    <img className="image-icon out-of-stock-shoe-image"src={shoeType.imageUrl}></img>
                </div>
            : <Link to={{
                pathname: `/stock/${category}/${shoeType.brand}/${shoeType.description}`,
                state: {shoeType, stockLevels}
                }}>
                <div className='shoe-display'>
                    <img className="image-icon"src={shoeType.imageUrl}></img>
                </div>
            </Link>}
                <div className='shoe-advert-text'>
                    <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                    <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                    <h5 className='price shoe-text'>£{shoeType.price}</h5>
                    {stockLevels.length == 0? <h5 className='out-of-stock-text'>OUT OF STOCK</h5> : null}
                </div>
        </div>
            
        
    );
};

export default ShoeType;