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

                <p>The plant Place prides themselves with being known for affordability when it comes to<br/>
                house plants. The reason for this is because we include beautiful pots with each plant that<br/>
                is included in the price! We have a passion for plants and love to share that passion<br/>
                with fellow plant parents! Each plant is personally potted with love and includes a hand<br/>
                a hand written care card to ensure you keep your babies happy!</p>
                <a href='/ProductPage'><button>View Products</button></a>
            </div>{/* header */}

            {/* new to store */}
            <div className="newItemContainer">
                <h3>New to</h3>
                <h1>Our Online Store</h1>
                <p>We always try our best to get the latest and greatest plants to liven up your living area<br/>
                and help you make it as beautiful as possible! Our latest releases include some of the most popular<br/>
                uas well as some of the rarest house plants that are difficult to find! Be sure to shop our newest<br/>
                additions and grab the rare babies while you still can!<br/></p>

                <ProductSlider/>
            </div>{/* new to store */}

            {/* new to store */}
            <div className="saleItemContainer">
                <h3>Now</h3>
                <h1>On Sale!</h1>
                <p>The Plant Place is proud to announce that we'll be having new specials each month!<br/>
                These will include combo deals as well! Don't miss out this September as some of our<br/>
                rarest and most expensive items are 20% off!!!<br/> 
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