import React from 'react';
import ProductSlider from '../components/ProductSlider';
import ProductCard from '../components/ProductCard';

function LandingPage () {
    return(
        <div className="LandingPage">
            {/* header */}
            <div className="header">
                <h3>Welcome to</h3>
                <h1>The Plant Place</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>View Products</button>
            </div>{/* header */}

            {/* new to store */}
            <div className="newItemContainer">
                <h3>New to</h3>
                <h1>Our Online Store</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <ProductSlider/>
            </div>{/* new to store */}

            {/* new to store */}
            <div className="saleItemContainer">
                <h3>Now</h3>
                <h1>On Sale!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/> 
                </p>

                <div className='sales'>
                    <div className='saleInfo'>
                        <h2>Buy Two,<br/>Get One Free!</h2>
                        <p>We have an amazing deal for you guys this August.<br/>
                        If you buy any two small plants, you get one free!<br/>
                        This applies to all of the plants in store now.
                        </p>
                        <div className='saleImage'></div>
                        <button>Shop Now!</button>
                    </div>
                    <div className='saleItems'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>{/* new to store */}

            {/* footer */}
            <div className='footer'>
                <p></p>
            </div>
        </div>
    )
}

export default LandingPage;