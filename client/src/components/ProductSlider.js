import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import axios from 'axios';

function ProductSlider(){

    const [productCard, setProductCard] = useState();
    
    useEffect(() => {

        axios.get('http://localhost:5000/api/allProducts')
        .then((res) => {
            let data = res.data;
            let URL = 'http://localhost:5000/productImages/';

            let newProducts = data.slice(-5);
            console.log(newProducts)

            let newest = newProducts.map((item) => <ProductCard
                key={item._id}
                productId={item._id}
                productName={item.productName} 
                productDescription={item.productDescription}
                price={item.price}
                discount={item.discount}
                stock={item.stock}
                pot1={item.pot1}
                pot2={item.pot2}
                pot3={item.pot3}
                pot4={item.pot4}
                image={URL + item.image}
                editRender={setProductCard}
            />)

            setProductCard(newest);
        })

    }, [])

    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 3,
        // autoplay: true,
        // autoplaySpeed: 2500
    }

    return(
        <div>
            <Slider {...settings}>
                {productCard}
            </Slider>
        </div>
    )
}

export default ProductSlider;