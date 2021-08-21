import React from 'react'
import { useSelector } from 'react-redux'

const ProductInfo = ({productId}) => {
    const product = useSelector(state => state.products.productsList).filter(obj => obj.id ===productId)[0]

    return (
        <div className='product__block'>
        <div>
            <img className="product__image" src={`http://localhost:8888/back/uploads/${product.image}`} alt=""/>
            <h4>Характеристики</h4>
        </div>    
        <div className='product-info'>
            {/* {
               JSON.parse(product.description).map(product=>{
                    return(
                     <div>{product.name}:{product.value}</div>   
                    )
                })
            } */}
        </div>
    </div>
    )
}

export default ProductInfo
