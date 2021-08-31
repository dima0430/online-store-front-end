import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '..'

import './index.scss'


const LikedProducts = () => {
    const {likedProducts} = useSelector(({products}) => products)

    return (
        <div className='user-profile__liked'>
            {Object.values(likedProducts).map( item =>{
            return(
                <Product key={item.id} item={item}/>
        )})}
        </div>
    )
}

export default LikedProducts
