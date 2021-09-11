const baseURL = "http://localhost:8080/orders";

const OrderService = {

    getOrders() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getOrdersByCustomerId(customerId) {
        return fetch(baseURL + `?customer_id=${customerId}`)
            .then(res => res.json());
    }
};


export default OrderService;