import BurgerMenu from "./BurgerMenu";
import '../App.css';

const TitleBar = function() {
    return (
        <div id='title-bar'>
            <BurgerMenu></BurgerMenu>
            <a href="/">
                <h2 id='shop-title'>GOLDEN SHOE</h2>
            </a>
        </div>
    );
};

export default TitleBar;