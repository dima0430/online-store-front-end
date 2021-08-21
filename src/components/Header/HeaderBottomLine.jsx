import React from 'react'
import { useHistory } from 'react-router-dom';
import {SearchForm, UserForm, Cart} from '..'


const HeaderBottomLine=()=>{
    const history=useHistory()
    return(
        <div className="bottomline">
            {/* <div className={`catalog-wrapper ${pathname!=='/'?'catalog__border-none':''} `} >
                <div className="catalog ">
                    <img className='catalog__img' src={catalogs} alt="catalogs"  />
                    <span className ='catalog__text'>Каталог товарів</span>    
                </div>
            </div> */}
            <div href="" onClick={()=>history.push('/')} className="logo">InTech</div>
            <span className="contact">0 800 800 4554</span>   
            <SearchForm/>
            <UserForm/>
            <Cart/>
        </div>
   ); 
}

export default HeaderBottomLine;