const WarehouseStockItem = function({warehouseStockItem, index}) {
    return (
        <div id='stock-info'>
            <p className='shoe-text'>{index + 1}</p>
        
            <p className='shoe-text'>COLOUR: {warehouseStockItem.colour}</p>
            <p className='shoe-text'>SIZE: {warehouseStockItem.size}</p>
            <p className='shoe-text'>(STOCK ID: {warehouseStockItem.id})</p>
        </div>
    );
};

export default WarehouseStockItem;