import React from 'react'
import { useSelector } from 'react-redux'
import { ArrowSvg } from '..'

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
   
    const{ ordersAdmin }  = useSelector(({orders}) => orders)
   
    return (
        <>
            <h1 className='title'>Останні замовлення </h1>
            {ordersAdmin.map(item=>{
                return(
                    <div key={item.id} className="order">
                        <div className="order__name">
                            <h6 className='order__numder'>Замовлення №{item.id}</h6>
                            <div className="order__date">від {item.date}</div>
                        </div>
                        <div className="order__price">{item.count} товар(-ів)на суму {item.sum} грн.</div>
                        <div className={rotate.includes(item.id) ? 'order__arrow-rotate':'order__arrow'} onClick={()=>onRotate(item.id)}>
                            <ArrowSvg/>
                        </div>
                        {rotate.includes(item.id) && 
                                <div className='order__products'>
                                    {item.product.map(product=>{
                                        return(
                                            <div className='order__product'>
                                                <img width='60px' height='60px' src={`http://localhost:8888/back/uploads/${product.image}`} alt="" />
                                                <span className='order__product__info'>    
                                                    <div>{product.name}</div>
                                                    <div>{product.count} шт. {product.count*product.price} грн.</div>
                                                </span>    
                                            </div>
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

