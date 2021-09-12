import { useEffect, useState } from "react";
import ShoeTypeService from "../services/ShoeTypeService";


const OrderItem = function({orderItem}) {

    const [itemShoeType, setItemShoeType] = useState({});

    useEffect(() => {
        ShoeTypeService.getShoeTypeForStockItemId(orderItem.id)
            .then(res => setItemShoeType(res[0]));
    }, []);


    return (
        <div>
            <div className='ordered-item-shoe-type'>
            <div className='shoe-display order-shoe-display'>
            <img className="show-shoe-image order-shoe-image"src={itemShoeType.imageUrl}></img>
                <div>
                    <h6 className='brand-name shoe-text'>{itemShoeType.brand} (size {orderItem.size} IN {orderItem.colour})</h6>
                    <h6 className='shoe-description shoe-text'>{itemShoeType.description}</h6>
                    <h6 className='price shoe-text'>£{itemShoeType.price}</h6>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default OrderItem;