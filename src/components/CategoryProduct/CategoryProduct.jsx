import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '..'
import './index.scss'

const CategoryProduct = () => {
    const {categoryProducts} = useSelector(({products}) =>products)
    
    return (
        <div className='wrapper-category-products'>
        {categoryProducts && categoryProducts.map(item=>{ 
        const {id,name,brand,price,image} = item
            return(
                <Product cart={item} onClickn={id} key={id} name={name} brand={brand} price={price} image={image}/>
        )})}
        </div>
    )
}

export default CategoryProduct
