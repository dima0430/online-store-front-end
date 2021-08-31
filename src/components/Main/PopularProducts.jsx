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
    const {productsList} = useSelector(({products}) => products)
        

return(
    <div className="container">
        <h2>Найбільш популярні</h2>
        <SlickSlider {...settings}>
        {productsList.map( item =>{
            return(
                <Product key={item.id} item={item}/>
        )})}   
        </SlickSlider>
    </div>
)
}
export default PopularProducts;