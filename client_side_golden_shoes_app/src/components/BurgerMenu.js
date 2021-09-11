import {slide as Menu} from 'react-burger-menu';
import './BurgerMenu.css';
import { Link } from 'react-router-dom';

const BurgerMenu = function() {
    return (
        <div>
            <Menu>
                <li>
                    <Link to={{
                        pathname: '/stock/women',
                        state: 'women'
                    }}>WOMEN</Link>
                </li>
                <li>
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




            