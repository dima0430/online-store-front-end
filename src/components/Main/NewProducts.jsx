import React from 'react'
import { useSelector } from 'react-redux';
import SlickSlider from "react-slick";
import { Product } from '..';

const SampleNextArrow=(props)=>{
	const { onClick } = props;
  	return (
    	<div
    		className='next'
      		onClick={onClick}
    	/>
  	);
}

const SamplePrevArrow=(props)=>{
  	const { onClick } = props;
  	return (
    	<div
      	    className='prev'
      	    onClick={onClick}
    	/>
  	);
}

const NewProducts = () => {
  
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const {productsList} = useSelector(({products}) => products)

    return(
        <div className="container">
            <h2>Новинки</h2>
            <SlickSlider {...settings}>
            {productsList.map( item =>{
                return(
                    <Product item={item} key={item.id} />
            )})}    
            </SlickSlider>
        </div>
)
}
export default NewProducts;