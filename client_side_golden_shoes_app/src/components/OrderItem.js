import { useEffect, useState } from "react";
import ShoeTypeService from "../services/ShoeTypeService";


const OrderItem = function({orderItem}) {

    const [itemShoeType, setItemShoeType] = useState({});

    useEffect(() => {
        ShoeTypeService.getShoeTypeForStockItemId(orderItem.id)
            .then(res => setItemShoeType(res[0]));
    }, []);

    console.log(itemShoeType);

    return (
        <div>
            <div className='ordered-item-shoe-type'>
            <div className='shoe-display order-shoe-display'>
            {/* <img className="show-shoe-image small-image"src={itemShoeType.imageUrl}></img> */}
                <h3 className='brand-name shoe-text'>{itemShoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{itemShoeType.description}</h5>
                <h5 className='price shoe-text'>£{itemShoeType.price}</h5>
            </div>
            </div>
        </div>
    );
};

export default OrderItem;