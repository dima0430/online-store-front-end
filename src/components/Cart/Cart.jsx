import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BasketSvg,DashSvg,PlusSvg,DeleteSvg} from '..'
import { addProductToCart, dashProductToCart, removeProductToCart} from '../../redux/actions/cart'
import './index.scss'

const Cart = () => {
    const {totalCount,totalPrice,items} = useSelector(({cart}) =>cart)
    const {id} = useSelector(({logIn}) =>logIn)
    const dispatch = useDispatch()
    const [visible, setVisible] = React.useState(false)

    const onVisible=()=>{
        setVisible(!visible)
    }
    const handleAddProductToCart=(obj)=>{
        dispatch(addProductToCart(obj))
    }
    const handleDashProductToCart=(obj)=>{
        dispatch(dashProductToCart(obj))
    }
    const handleRemoveProductToCart=(obj)=>{
        dispatch(removeProductToCart(obj))
    }
    // visible ? document.body.style.overflow = "hidden":document.body.style.overflow = "auto"
    
    const onOrder=()=>{
        const formData=new FormData();
        formData.append('idClient',id)
        formData.append('items',JSON.stringify(Object.values(items)))
        axios.post('http://localhost:8888/back/api/add_order.php',formData)
    }
    
    return (
        <>
        <div onClick={onVisible} className="cart">
            <BasketSvg/>
            <span className="cart__icon icon-count">{totalCount}</span>
        </div>
        {visible && <div className='cart-wrapper'>
            <div className="cart-form">
                <h1 onClick={onVisible}>Корзина</h1>
                <div className="cart-products">        
                {Object.values(items).length?<table cellPadding='10'>
                        <thead className=''>
                            <tr >
                                <th>Товар</th>
                                <th>Кількість</th>
                                <th>Ціна за одиницю</th>
                                <th>Cума</th>
                                <th></th>
                            </tr>    
                        </thead>
                        <tbody >    
                            {Object.values(items).map(item=>{return(
                                <tr >
                                    <td>
                                        <img src={`http://localhost:8888/back/uploads/${item.image}`} alt="" /> 
                                        <span>  {item.name.split(' ')[0]} {item.brand} {item.name.split(' ')[1]} </span>
                                    </td>
                                    <td> 
                                        <span className='cart-buttons' onClick={()=>handleDashProductToCart(item)}>
                                            <DashSvg/>
                                        </span>  
                                        <span className='cart__count'>{item.count}</span>  
                                        <span onClick={()=>handleAddProductToCart(item)}>
                                             <PlusSvg/>
                                        </span>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.price*item.count}</td>
                                    <td>
                                    <span onClick={()=>handleRemoveProductToCart(item)}>
                                        <DeleteSvg/>
                                    </span>
                                    </td>
                                </tr>
                                )})}
                        </tbody>    
                    </table>:<h1>Кошик порожній</h1>}
                    </div>    
                <h3>Сума: {totalPrice}</h3>
                <button onClick={onOrder} >Оформити замовлення</button>    
            </div>
        </div>}
        </>
    )
}

export default Cart
