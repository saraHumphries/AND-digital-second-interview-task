import '../App.css';
import { Link } from 'react-router-dom';

const TopBar = function() {
    return (
        <nav id="top-bar">
                <a className='top-bar-link' href='/'>FAQ</a>
                <a className='top-bar-link' href='/'>Live Chat</a>
                <Link className='top-bar-link' to={{ pathname: '/orders'}}><a  id='track-orders-link' href='/'>Track Orders</a></Link>     
        </nav>
    );
};

export default TopBar;