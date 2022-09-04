import React, { useEffect, useState } from 'react';
import ProductSlider from '../Components/ProductSlider';
import ProductCard from '../Components/ProductCard';
import NavBar from '../Components/NavBar';
import axios from 'axios';

function LandingPage () {

    let discountedItems = [];
    const [productCard, setProductCard] = useState();

    useEffect(() => {

        axios.get('http://localhost:5000/api/allProducts')
        .then((res) => {
            let data = res.data;
            let URL = 'http://localhost:5000/productImages/';

            for (let i = 0; i < data.length; i++) {
                if (data[i].discount > 0) {
                    discountedItems.push(data[i]);

                    let discountedProducts = discountedItems.map((item) => <ProductCard
                        key={item._id}
                        productId={item._id}
                        productName={item.productName} 
                        productDescription={item.productDescription}
                        price={item.price}
                        discount={item.discount}
                        stock={item.stock}
                        pot1={item.pot1} pot2={item.pot2}
                        pot3={item.pot3}
                        pot4={item.pot4}
                        image={URL + item.image}
                        editRender={setProductCard}
                    />);

                    setProductCard(discountedProducts);
                };
            };
        })

    }, [])

    return(
        <>
        <NavBar/>
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
                <a href='/ProductPage'><button>View Products</button></a>
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
                        <div className='saleDescription'>
                            <h2>20% off all<br/>Selected Products!</h2>
                            <p>We have an amazing deal for you guys this August. Make sure to get 20% off all products marked products! Get your hands on these amazing plants while stocks last.</p>
                            <a href='/ProductPage'><button>Shop Now!</button></a>
                        </div>
                    </div>
                    <div className='saleItems'>
                        {/* {renderProducts} */}
                        {productCard}
                    </div>
                </div>
            </div>{/* new to store */}

            {/* footer */}
            <div className='footer'>
                <p>ThePlantPlace©2022</p>
                <a href="tel:123-456-7890"><div className='call'></div></a>
                <a href="mailto: ThePlantPlace@gmail.com"><div className='mail'></div></a>
                <a href="https://instagram.com"><div className='instagram'></div></a>
            </div>
        </div>
        </>
    )
}

export default LandingPage;