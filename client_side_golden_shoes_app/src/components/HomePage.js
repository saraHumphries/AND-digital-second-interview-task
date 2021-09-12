
import '../App.css';


const HomePage = function() {
    return (
        <div className='main-container'>

            <section className='whole-advert'>
                <h3 className='advert-title' id='advert-1-title'>NEW SHOES IN</h3>
                <div className='advert-action' id='advert-1-action'>
                    <button className='action-button'>SHOP NOW</button>
                </div>
            </section>

            <section className='whole-advert'>
                <h3 className='advert-title' id='advert-2-title'>WEEKLY EMAIL DEALS</h3>
                <div className='advert-action' id='advert-2-action'>
                    <button className='action-button'>SIGN UP</button>
                </div>
            </section>

            <section className='whole-advert'>
                <h3 className='advert-title' id='advert-3-title'>AUTUMN SALE</h3>
                <div className='advert-action' id='advert-3-action'>
                    <button className='action-button'>SHOP NOW</button>
                </div>
            </section>

        </div>
    );
};

export default HomePage;