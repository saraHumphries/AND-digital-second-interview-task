
const ShoeType = function({shoeType, stockInventory}) {
    return (
        <div>
            <li>
                <p>image</p>
                <h3>{shoeType.brand}</h3>
                <h4>{shoeType.description}</h4>
                <h4>£{shoeType.price}</h4>
            </li>
        </div>
    );
};

export default ShoeType;