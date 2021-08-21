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
    const products = useSelector(state => state.products.productsList)
        

return(
    <div className="container">
        <h2>Новинки</h2>
        <SlickSlider {...settings}>
        {products.map((item,index)=>{
            const {id,name,brand,price,image} = item
            return(
                <Product cart={item} onClickn={id} key={id} name={name} brand={brand} price={price} image={image}/>
        )})}    
        </SlickSlider>
    </div>
)
}
export default NewProducts;