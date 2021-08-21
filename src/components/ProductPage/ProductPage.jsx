import React from 'react'
import { useSelector } from 'react-redux'
import {ProductComments,ProductInfo} from '..'
import {Switch,Route,Link,useRouteMatch, useLocation} from "react-router-dom";

import './index.scss'

const ProductPage = ({params}) => {
    let { path, url } = useRouteMatch();
    let { pathname  }=useLocation();
    const [activeItem, setActiveItem] = React.useState(pathname.includes('comments'))
    const onActiveItem=(active)=>{
        setActiveItem(active);
    }
    const product = useSelector(state => state.products.productsList).filter(obj => obj.id ===params.id)[0]
    return (
        <>
        {product &&
            <div className='product-page-wrapper'>
                <h1>{product.name.split(' ')[0]} {product.brand} {product.name.split(' ')[1]}</h1>
                    <ul>
                        <Link className={!activeItem?'active-item':''} to={url} onClick={()=>onActiveItem(false)}>Про товар</Link>
                        <Link className={activeItem?'active-item':''} to ={`${url}/comments`} onClick={()=>onActiveItem(true)}>Відгуки</Link>
                    </ul>
                    <Switch>
                        <Route exact path ={path} render={()=>(<ProductInfo productId={params.id}/>)}/>
                        <Route path ={`${path}/comments`} render ={()=><ProductComments productId={params.id}/>}/>
                    </Switch>
            </div>}
        </>
        )
}

export default ProductPage
