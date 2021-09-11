import {slide as Menu} from 'react-burger-menu';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BurgerMenu = function() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = function(evt) {
        evt.preventDefault();
        setMenuOpen(false);
    };

    const handleStateChange = function(state) {
        setMenuOpen(state.isOpen);
    };

    return (
        <div>
            <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
                <li className='burger-link' onClick={handleMenuClick}>
                    <Link to={{
                        pathname: '/stock/women',
                        state: 'women'
                    }}>WOMEN</Link>
                </li>
                <li className='burger-link'  onClick={handleMenuClick}>
                    <Link to={{
                        pathname: '/stock/men',
                        state: 'men'
                    }}>MEN</Link>
                </li>
                <li className='burger-link' >KIDS</li>
                <li className='burger-link' >SALE</li>
            </Menu>
        </div>
    )
};

export default BurgerMenu;




            