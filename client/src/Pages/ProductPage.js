import React, { useState, useRef, useEffect } from 'react';
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br/>
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br/>
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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