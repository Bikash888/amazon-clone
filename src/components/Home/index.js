import React from 'react';
import './Home.css';
import Product from '../Molecules/ProductCard/product';
const Home = () => {
    return (
        <div className="home">
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='' />
            </div>
            <div className='home__row'>
                <Product id="1231" rating={5} title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" />
                <Product id="909090" rating={4} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />

            </div>

            <div className='home__row'>
                <Product id="43121242" rating={3} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={129.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                <Product id="0945637" rating={4} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={89.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
                <Product id="0902827" rating={5} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={529.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" />
            </div>
            <div className='home__row'>
            <Product  id="0992865" rating={5} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={829.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
            </div>
        </div>
    )
}

export default Home;
