/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/style-prop-object */
import React from 'react'
import catalogs from '../../scss/images/list.svg';
import {UserForm} from '..'

export default function HeaderBottomLine(){
    return(
        <div className="header__bottomline">
            <div className="header__catalog">
                <img className='header__catalog__img' src={catalogs} alt="catalogs"  />
                <span className ='header__catalog__text'>Каталог товарів</span>    
            </div>
            <span className="header__contact">0 800 800 4554</span>   
            <form className="header__form" action="">    
                <input className="header__form__search" type="search" placeholder='Поиск товаров'/>
                <button className="header__form__btn" type="submit" value="" >Поиск</button>
            </form>
            <UserForm/>
            <div className="header__liked">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"/>
                </svg>
                <span className="header__liked__icon icon-count">1</span>   
            </div>
            <div className="basket">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"width="32"    height="32"  viewBox="0 0 32 32">
                    <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"/>
                    <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"/>
                    <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"/>
                </svg>
                <span className="basket__icon icon-count">1</span>
            </div>
        </div>
   ); 
}
