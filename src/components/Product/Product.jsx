import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ReactStars from "react-rating-stars-component";
import { addProductToCart } from '../../redux/actions/cart';

import {LikeSvg} from '..'


import './index.scss'
import { logIn } from '../../redux/actions/logInOut';
import { addProductToLiked, removeProductFromLiked } from '../../redux/actions/products';

const Product = ({cart,onClickn,name,brand,image,price,category_name}) => {
    
    const [fill, setFill] = useState(false)
    const {login}=useSelector(({logIn})=>logIn);
    const {likedProducts}=useSelector(({products})=>products);
    const history = useHistory()
    const dispatch = useDispatch()
    const onClickLike =()=>{
        if(login){
            if(likedProducts.includes(cart)){            
                setFill(false)
                dispatch(removeProductFromLiked(cart))
            }
            else {
                setFill(true)
                dispatch(addProductToLiked(cart))
            }
        }

        else{
            console.log('loh')
        }
        
    }
    const handleAddProductToCart = (obj) => {
        dispatch(addProductToCart(obj));
    }
    return (
        <div  className="product-item" /*onClick={()=>history.push(`/${category_name}/${onClickn}`)}*/>
            <div className="product-img">
                <img  className="image" src={`http://localhost:8888/back/uploads/${image}`} alt=''/>
            </div>
            <div className="product-list">
                <h3>{name.split(' ')[0]} {brand} {name.split(' ')[1]}</h3>
                <span className="price">₴ {price}</span>
                <div className="actions">
                </div>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                />
                <button onClick={()=>handleAddProductToCart(cart)} className="cart-button">Купити</button>
                <div className="product-like" onClick={onClickLike} >
                    <LikeSvg select={fill} stroke={false} width='32px' height='32px'/>
                </div>
            </div>
        </div>
    )
}

export default Product
