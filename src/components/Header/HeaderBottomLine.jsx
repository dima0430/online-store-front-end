import React from 'react'
import {SearchForm, UserForm, Cart} from '..'
import catalogs from '../../scss/images/list.svg';


const HeaderBottomLine=()=>{
    return(
        <div className="bottomline">
            <div className="catalog-wrapper" >
                <div className="catalog">
                    <img className='catalog__img' src={catalogs} alt="catalogs"  />
                    <span className ='catalog__text'>Каталог товарів</span>    
                </div>
            </div>
            <span className="contact">0 800 800 4554</span>   
            <SearchForm/>
            <UserForm/>
            <Cart/>
        </div>
   ); 
}

export default HeaderBottomLine;