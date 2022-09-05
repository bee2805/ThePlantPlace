import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import NavBar from '../Components/NavBar';
import axios from 'axios';

function ProductPage () {

    const [renderProducts, setRenderProducts] = useState(false);
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/api/allProducts')
        .then(res => {
            let productData = res.data;
            let URL = 'http://localhost:5000/productImages/';
            // console.table(productData)
            let renderProducts = productData.map((item) => <ProductCard
                key={item._id} productId={item._id}
                productName={item.productName} 
                productDescription={item.productDescription}
                price={item.price}
                discount={item.discount}
                stock={item.stock}
                pot1={item.pot1} pot2={item.pot2}
                pot3={item.pot3}
                pot4={item.pot4}
                image={URL + item.image}
                editRender={setRenderProducts}
            />)

            setProducts(renderProducts);
            setRenderProducts(false);
        })
        .catch(err => console.log(err));
    }, [renderProducts])

    return(
        <>
        <NavBar/>
        <div className="ProductPage">
            <h3>Shop Our</h3>
            <h1>Product Range</h1>
            <p>Explore all of our products! Order now and delivery will between 2-4 working days.<br/>
            Each Plant comes with a pot of your choice included in the price!<br/>
            This Month selected plants are 20% off. Hurry while stocks last!</p>

            {/* products */}
            <div className='products'>
                {products}
            </div>{/* products */}

        </div>
        {/* footer */}
        <div className='footer'>
            <p>ThePlantPlace©2022</p>
            <a href="tel:123-456-7890"><div className='call'></div></a>
            <a href="mailto: ThePlantPlace@gmail.com"><div className='mail'></div></a>
            <a href="https://instagram.com"><div className='instagram'></div></a>
        </div>{/* footer */}
        </>
    )
}

export default ProductPage;