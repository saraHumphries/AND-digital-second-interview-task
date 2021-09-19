import { useState, useEffect } from "react";
import { useLocation } from "react-router"
import StockService from "../services/StockService";
import OrderService from "../services/OrderService";
import '../App.css';

const Bag = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;
    const selectedColour = data.state.selectedColour;
    const selectedSize = data.state.selectedSize;

    const [itemToBuy, setItemToBuy] = useState({});

    useEffect(() => {
        StockService.getUnsoldStockItemsByShoeTypeIdAndColourAndSize(shoeType.id, selectedColour, selectedSize)
            .then((res) => {
                setItemToBuy(res[0]);
            });
    }, []);
    

    const onBuyClick = function() {
        if(itemToBuy) {
            const newOrder = {
                stockItems: [{
                    id: itemToBuy.id
                }],
                customer: {
                    id: 1
                }
            };
            OrderService.postOrder(newOrder)
                .then(res => determineOrderPlaced(res));
        } else {
            const buyButton = document.getElementById('buy-button');

            buyButton.disabled = true;
            buyButton.textContent = 'ORDER FAILED';
            buyButton.style.backgroundColor = 'red';
            buyButton.style.border = 'none';
            const orderFailText = document.getElementById('order-fail-text');
            orderFailText.style.display = 'block';
        }
        
            
        
        
    };

    const determineOrderPlaced = function(res) {
        const buyButton = document.getElementById('buy-button');
        const dispatchSection = document.getElementById('dispatch-section');

        if (!res.error) {
            buyButton.disabled = true;
            buyButton.textContent = 'ORDER PLACED';
            buyButton.style.backgroundColor = 'white';
            const myOrdersButton = document.getElementById('my-orders-end-button');
            myOrdersButton.style.display = 'block';
            dispatchSection.style.display = 'none';
        } else {
            buyButton.disabled = true;
            buyButton.textContent = 'ORDER FAILED';
            buyButton.style.backgroundColor = 'red';
            buyButton.style.border = 'none';
            const orderFailText = document.getElementById('order-fail-text');
            orderFailText.style.display = 'block';
        }
    };
        

    return (
        <div className='whole-bag'>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>
            <div className='buy-summary'>
                <div>
                    <div className='size-and-colour-selection'>
                        <h3 className='shoe-text'>UK SIZE {selectedSize} IN {selectedColour}</h3>
                    
                    </div>
                        <div className='buy-voucher-buttons'>
                            <button id='buy-button' onClick={onBuyClick}>BUY NOW</button>
                            <button id='voucher-button'>PAY WITH VOUCHER</button>
                        </div>
                </div>
                    <p hidden id='order-fail-text'>Sorry!  Someone else bought the last pair. This size and colour are now sold out.</p>
                    <button hidden id='my-orders-end-button'><a href="/orders">SEE ALL MY ORDERS</a></button>
                <div id='dispatch-section'>
                    <h3>DISPATCH TO:</h3>
                    <h5 className='shoe-text'>21, MILLAR CRESCENT</h5>
                    <h5 className='shoe-text'>EDINBURGH</h5>
                    <h5 className='shoe-text'>EH10 5HN</h5>
                    <button className='change-address-button'>CHANGE ADDRESS</button>
                </div>
            </div>
        </div>

    )
};

export default Bag;