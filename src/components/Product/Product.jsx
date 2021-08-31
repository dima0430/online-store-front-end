import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ReactStars from "react-rating-stars-component";
import { addProductToCart } from '../../redux/actions/cart';
import { addProductToLiked, removeProductFromLiked } from '../../redux/actions/products';
import {LikeSvg} from '..'
// import io from 'socket.io-client'
import './index.scss'

// const socket =io('http://localhost:9999')

const Product = ({item}) => {
    const {likedProducts}=useSelector(({products})=>products);
    const client=useSelector(({logIn})=>logIn);
    const [fill, setFill] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        
        item && setFill(likedProducts.hasOwnProperty(item.id))
        // socket.on('GET',data=>console.log(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [likedProducts])
    const onClickProduct=()=>{
        history.push(`/${item.category_name}/${item.id}`)
    }
    
    const onClickLike =(e)=>{
        e.stopPropagation()
        if(client.login){
            if(fill){            
                setFill(false)
                dispatch(removeProductFromLiked(item,item.id,client.id))
                // socket.emit('DELETE',{idClient:client.id,idProduct:item.id})
                
            }
            else {
                setFill(true)
                dispatch(addProductToLiked(item,item.id,client.id))
                // socket.emit('ADD',{idClient:client.id,idProduct:item.id})
            }
        }
        else{
            console.log('loh')
        }  
    }
    const handleAddProductToCart = (e) => {
        e.stopPropagation()
        dispatch(addProductToCart(item));
    }

    return (
    <>
        {item ?(<div  className="product-item" onClick={onClickProduct}>
                <div className="product-img">
                    <img  className="image" src={`http://localhost:8888/back/uploads/${item.image}`} alt=''/>
                </div>
                <div className="product-list">
                    <h3>{item.name.split(' ')[0]} {item.brand} {item.name.split(' ')[1]}</h3>
                    <span className="price">₴ {item.price}</span>
                    <div className="actions">
                    </div>
                    <ReactStars count={5} size={24} activeColor="#ffd700"/>
                    <button onClick={handleAddProductToCart} className="cart-button">Купити</button>
                    <div className="product-like" onClick={onClickLike} >
                        <LikeSvg select={fill} stroke={false} width='32px' height='32px'/>
                    </div>
                </div>
            </div>):<div>eddde</div>}
    </>    
    )
}

export default Product
