import React from 'react'
import { useSelector } from 'react-redux'
import {TrashSvg,PenSvg,AddSvg} from "..";

const Products = () => {
    const products = useSelector(state => state.products.productsList)
    return (
        <div>
            <h2 className="title">Список товарів </h2>   
            <div className="new-product"><AddSvg/> Додати новий товар</div>
            <table>
                    <div className="row_table">
                        <span className="column_table">Фото</span>
                        <span className="column_table">Назва</span>
                        <span className="column_table">Ціна</span>
                        {/* <span className="column_table">Категорія</span> */}
                        <span className="column_table">Кількість</span>
                        <span className="column_table">Дія</span>
                    </div >
                
                
                {products.map(( item)=>{ 
                    
                    return<div className="row_table">
                        <span className="column_table"><img width='50px' src={`http://localhost:8888/back/uploads/${item.image}`} alt="" /></span>
                        <span className="column_table">{item.name.split(' ')[0]} {item.brand} {item.name.split(' ')[1]}</span>
                        <span className="column_table">{item.price}</span>
                        {/* <span className="column_table">{item.category_name}</span> */}
                        <span className="column_table">{item.count}</span>
                        <span className="column_table" >
                            <div><TrashSvg/></div><div><PenSvg/></div>
                        </span>
                    </div >})}
            </table>    
        </div>
    )
}

export default Products
