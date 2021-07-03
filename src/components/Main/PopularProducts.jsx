import React from 'react'
import { useSelector } from 'react-redux';
import SlickSlider from "react-slick";
import { Product } from '..';

function SampleNextArrow(props) {
	const { onClick } = props;
  	return (
    	<div
    		className='next'
      		onClick={onClick}
    	/>
  	);
}

function SamplePrevArrow(props) {
  	const { onClick } = props;
  	return (
    		<div
      	className='prev'
      	onClick={onClick}
    		/>
  	);
}

const PopularProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    const products = useSelector(state => state.products.productsList)
        

return(
    <div className="container">
        <h2>Найбільш популярні</h2>
        <SlickSlider {...settings}>
        {products.map(item=>{
            const {id} = item
            return(
                <Product key={id} {...item}/>
        )})}   
        </SlickSlider>
    </div>
)
}
export default PopularProducts;