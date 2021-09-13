const baseURL = "http://localhost:8080/orders";

const OrderService = {

    getOrders() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    getOrdersByCustomerId(customerId) {
        return fetch(baseURL + `?customer_id=${customerId}`)
            .then(res => res.json());
    },

    postOrder(order) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    updateOrderDispatchStatus(orderId, updatedOrder) {
        return fetch(baseURL + `/${orderId}/dispatched`, {
            method: 'PUT',
            body: JSON.stringify(updatedOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    updateOrderDeliverStatus(orderId, updatedOrder) {
        return fetch(baseURL + `/${orderId}/delivered`, {
            method: 'PUT',
            body: JSON.stringify(updatedOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
};


export default OrderService;