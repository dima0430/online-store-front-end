import { useSelector } from 'react-redux'

import './index.scss'

const ProductPage = ({params}) => {

    const product = useSelector(state => state.products.productsList).filter(obj => obj.id ===params.id)[0]
    // const description =JSON.parse(product.description);
      
    return (
        <div>{product &&
            
            <div>
                <h1>{product.name.split(' ')[0]} {product.brand} {product.name.split(' ')[1]}</h1>
            <div className='product-block'>
                <div>
                    <img className="product-image" src={`http://localhost:8888/back/uploads/${product.image}`} alt=""/>
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
            </div>}
        </div>)
}

export default ProductPage
