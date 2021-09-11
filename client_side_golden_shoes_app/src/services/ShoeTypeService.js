const baseURL = "http://localhost:8080/shoe_types";

const ShoeTypeService = {

    getShoeTypes() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getShoeTypesByCategory(category) {
        return fetch(baseURL + `?category=${category}`)
            .then(res => res.json());
    },

    getShoeTypeForStockItemId(stockItemId) {
        return fetch(baseURL + `?stock_item_id=${stockItemId}`)
            .then(res => res.json());
    }
};


export default ShoeTypeService;