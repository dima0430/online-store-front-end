/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function HeaderTopLine({item}){
    return(
        <div className="header__topline">
            <div href="" className="header__topline__logo">inTech</div>
            <a href="#" className="header__topline__link">Магазини</a>
            <a href="#" className="header__topline__link">Кредит</a>
            <a href="#" className="header__topline__link">Доставка</a>
            <a href="#" className="header__topline__link">Блог</a>
            <a href="#" className="header__topline__link">Обмін/Повернення</a>
            <a href="#" className="header__topline__link">Гарантія</a>
        </div>
    )
}
