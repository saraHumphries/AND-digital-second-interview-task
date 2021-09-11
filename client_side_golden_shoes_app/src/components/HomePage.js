import { Link } from "react-router-dom";


const HomePage = function() {
    return (
        <div>
            <div id='categories-list'>
                <ul>
                    <li>
                        <Link to={{
                            pathname: '/stock/womens',
                            state: 'womens'
                        }}>WOMENS</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/stock/mens',
                            state: 'mens'
                        }}>MENS</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;