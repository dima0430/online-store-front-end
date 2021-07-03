import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import './index.scss'

const Product = ({cart,onClickn,name,brand,image,price,category_name}) => {
    const history = useHistory()
    const dispatch = useDispatch()
     const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
}
    return (
        <div  className="wrapper-product" onClick={()=>history.push(`/${category_name}/${onClickn}`)}>
            <div className="product-item">
                <div className="product-img">
                    <img  className="image" src={`http://localhost:8888/back/uploads/${image}`} alt=''/>
                </div>
                <div className="product-list">
                    <h3>{name.split(' ')[0]} {brand} {name.split(' ')[1]}</h3>
                    <span className="price">₴ {price}</span>
                    <div className="actions">
                        <button onClick={()=>handleAddPizzaToCart(cart)} className="cart-button">В кошик</button>
                        <button className="cart-button">В збережені</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
