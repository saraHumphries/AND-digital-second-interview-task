import '../App.css';
import { Link } from 'react-router-dom';

const TopBar = function() {
    return (
        <nav id="top-bar">
                <a className='top-bar-link' href='/faq'>FAQ</a>
                <a className='top-bar-link' href='/'>Live Chat Help</a>
                <Link className='top-bar-link' to={{ pathname: '/orders'}}><a  id='track-orders-link' href='/'>My Orders</a></Link>     
        </nav>
    );
};

export default TopBar;