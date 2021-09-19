const WarehouseStockItem = function({warehouseStockItem}) {
    return (
        <div id='stock-info'>
            <p className='shoe-text'>stock_id_{warehouseStockItem.id}</p>
            <p className='shoe-text'>{warehouseStockItem.colour}</p>
            <p className='shoe-text'>{warehouseStockItem.size}</p>
            {warehouseStockItem.soldStatus? <p className='shoe-text'>SOLD</p> : null}
        </div>
    );
};

export default WarehouseStockItem;