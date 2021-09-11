const baseURL = "http://localhost:8080/stock_items";

const StockService = {

    getStockItems() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getStockItemByShoeTypeId(shoeTypeId) {
        return fetch(baseURL + `?shoe_type_id=${shoeTypeId}`)
            .then(res => res.json());
    }
};


export default StockService;