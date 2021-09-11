import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import StockService from "../services/StockService";
import StockContainer from "../containers/StockContainer";

const ShowShoe = function() {

    const data = useLocation();
    const shoeType = data.state.shoeType;

    const [availableColours, setAvailableColours] = useState([]);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedColour, setSelectedColour] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [stockInventory, setStockInventory] = useState([]);
    
    useEffect(() => {
        StockService.getStockItemByShoeTypeId(shoeType.id)
            .then(res => setStockInventory(res))
    }, []);

    useEffect(() => {
        getAllAvailableColours();
    }, [stockInventory]);

    useEffect(() => {
        setSizeOptionToSelected();
        setColourOptionToSelected();
        setAvailableSizesForColour();
    },[selectedColour, selectedSize]);



    const getAllAvailableColours = function() {

        const availableColours = [];
        for (const stockItem of stockInventory) {
            if (!availableColours.includes(stockItem.colour)) {
                availableColours.push(stockItem.colour);
            }
        }
        setAvailableColours(availableColours);
    };

    const optionColors = availableColours.map((colour) => {
        return <option value={colour}>{colour}</option>
    });

    const optionSizes = availableSizes.map((size) => {
        return <option value={size}>{size}</option>
    });

    const onColourChange = function() {
        setColourOptionToSelected();
        
        setAvailableSizesForColour();

        const sizeSelector = document.getElementById('sizes');
        sizeSelector.disabled = false;
        sizeSelector.selectedIndex = 0;
    };

    const setColourOptionToSelected = function() {
        const colourOptionSelected = document.getElementById('colours');
        setSelectedColour(colourOptionSelected.value);
    };

    const setAvailableSizesForColour = function() {
        const availableSizesForThisColour = [];
        for (const stockItem of stockInventory) {
            if (stockItem.colour == selectedColour && !availableSizesForThisColour.includes(stockItem.size)) {
                availableSizesForThisColour.push(stockItem.size);
            }
        };
        setAvailableSizes(availableSizesForThisColour);
    };

    const setSizeOptionToSelected = function() {
        const sizeOptionSelected = document.getElementById('sizes');
        setSelectedSize(sizeOptionSelected.value);
    };

    const onSizeChange = function() {
        setSizeOptionToSelected();
    };

    return (
        <div className='main-container show-shoe-display'>
            <div className='shoe-display'>
            <img className="show-shoe-image"src={shoeType.imageUrl}></img>
                <h3 className='brand-name shoe-text'>{shoeType.brand}</h3>
                <h5 className='shoe-description shoe-text'>{shoeType.description}</h5>
                <h5 className='price shoe-text'>£{shoeType.price}</h5>
            </div>

            <div className='size-color-form-container'>
                <form className='size-color-form'>
                    <div className='colour-selector' onChange={onColourChange}>
                        <label htmlFor='colours'>Choose a colour</label>
                        <select id='colours' name='colours'>
                            <option disabled selected value>--</option>
                            {optionColors}
                        </select>
                    </div>
                    <div className='size-selector' onChange={onSizeChange}>
                        <label htmlFor='sizes'>Choose a size</label>
                        <select disabled id='sizes' name='sizes'>
                            <option disabled selected value>--</option>
                            {optionSizes}
                        </select>
                    </div>   
                </form>
            </div>
        </div>
    );
};

export default ShowShoe;