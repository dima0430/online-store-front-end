import React from 'react'


export default function Main({items}){
    return(
        <main className="main">
            <div className="catalog-list" >
                {items.map((name,index)=>(
                <div className="catalog-item">
                    <div className="catalog-item__icon"/>
                    <span key={`${name}_${index}`} className='catalog-item__text'>{name}</span>
                    <div className="catalog-item__arrow" />
                </div>))}
            </div>
        </main>
    );
}