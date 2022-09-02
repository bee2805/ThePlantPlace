import React from "react";
// carousel imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  product card
import ProductCard from "./ProductCard";

function ProductSlider(){

    let settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dot:true,
        speed: 1000
        // autoplay: ture,
        // autoplaySpeed: 3000
    }


    return(
        <div>
            <Slider {...settings}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Slider>
        </div>
    )
}

export default ProductSlider;