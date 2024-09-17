

"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick"; // Import the Slider from react-slick
import "./Carousel.css"; // Custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const { loading, products, error } = useSelector((state) => state.productSlice);
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        if (products) {
            setAllProducts(products);
        }
    }, [products]);

    if (loading || error) {
        return <div>Loading...</div>;
    }

    const carouselProducts = allProducts ? allProducts.slice(-25) : [];

    // Settings for react-slick carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll per click
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Time between slides
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {carouselProducts?.map((product, index) => (
                    <div key={index} className="carousel-item">
                        <div className="carousel-box">
                            <div className="img-container">
                                <img src={product?.images[0]} alt={product?.title} />
                            </div>
                            <div className="shopping-info">
                                <div className="product-title text-sm">{product?.title}</div>
                                <div className="product-price">${product?.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
