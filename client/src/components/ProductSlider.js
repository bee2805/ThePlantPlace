import React from "react";
// carousel imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images for carousel
import monstera from "../assets/monstera.jpg";
import Zeylanica from "../assets/Zeylanica.jpg";
import ScindapsusPictus from "../assets/ScindapsusPictus.jpg";
import MonsteraMinima from "../assets/MonsteraMinima.jpg";

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
                <div className="sliderProductCard">
                    <img src={monstera} alt="img"/>
                    <div className="productInfo">
                        <h3>Product Name</h3>
                        <p>R150</p>
                    </div>
                </div>

                <div className="sliderProductCard">
                    <img src={Zeylanica} alt="img"/>
                    <div className="productInfo">
                        <h3>Product Name</h3>
                        <p>R150</p>
                    </div>
                </div>

                <div className="sliderProductCard">
                    <img src={ScindapsusPictus} alt="img"/>
                    <div className="productInfo">
                        <h3>Product Name</h3>
                        <p>R150</p>
                    </div>
                </div>

                <div className="sliderProductCard">
                    <img src={MonsteraMinima} alt="img"/>
                    <div className="productInfo">
                        <h3>Product Name</h3>
                        <p>R150</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ProductSlider;