import BurgerMenu from "./BurgerMenu";
import '../App.css';

const TitleBar = function() {
    return (
        <div>
            <BurgerMenu></BurgerMenu>
            <h2 id='shop-title'>GOLDEN SHOES</h2>
        </div>
    );
};

export default TitleBar;