import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ArrowSvg} from '..'
import { getOrdersAdmin } from '../../redux/action'

const Orders = () => {
    const [rotate, setRotate] = React.useState([])
    const onRotate=(id)=>{
        const itemPos = rotate.indexOf(id)
        if(rotate.includes(id)){
            
            const {[itemPos]:id, ...after}=rotate
            setRotate(Object.values(after))        }
        else{
            rotate ?setRotate([...rotate,id]):setRotate([id])
        }
    }
    const dispatch= useDispatch()
    const{ ordersAdmin }  = useSelector(({orders}) => orders)
    React.useEffect(() => {
        dispatch(getOrdersAdmin())},[])
    return (
        <>
            <h1 className='title'>Останні замовлення </h1>
            {ordersAdmin.map(item=>{
                return(
                    <div key={item.id} className="order">
                        <div className="order__name">
                            <div className='order__numder'>Замовлення №{item.id}</div>
                            <div className="order__date">від {item.date}</div>
                        </div>
                        <div className="order__price">{item.count} товар(-ів)на суму {item.sum}</div>
                        <div className={rotate.includes(item.id) ? 'order__arrow-rotate':'order__arrow'} onClick={()=>onRotate(item.id)}>
                            <ArrowSvg/>
                        </div>
                        {rotate.includes(item.id) && 
                                <div className='order-products'>
                                    {item.product.map(product=>{
                                        return(
                                            <div>{product.name}</div>
                                        )
                                    })

                                    }   
                                </div>    
                                }
                    </div>
            )})}   
        </>
    )
}

export default Orders

