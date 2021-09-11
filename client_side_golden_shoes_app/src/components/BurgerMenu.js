import {slide as Menu} from 'react-burger-menu';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
                <li onClick={handleMenuClick}>
                    <Link to={{
                        pathname: '/stock/women',
                        state: 'women'
                    }}>WOMEN</Link>
                </li>
                <li onClick={handleMenuClick}>
                    <Link to={{
                        pathname: '/stock/men',
                        state: 'men'
                    }}>MEN</Link>
                </li>
            </Menu>
        </div>
    )
};

export default BurgerMenu;




            