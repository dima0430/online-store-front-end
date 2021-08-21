import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LikeSvg,UserCircleSvg,ShopSvg,CommentSvg,ExitSvg} from '..'
import { logOut } from '../../redux/actions/logInOut'
import './index.scss'

const UserProfileMain = () => {
    const {firstname,lastname} = useSelector(({logIn}) =>logIn)
    const dispatch = useDispatch()
    const history=useHistory()
    const logOutClick =()=>{
        dispatch(logOut());
        history.push('/');
        Cookies.set('jwt','')
    }
    return (
        <>
            <div className="user-profile">
                <ol>
                    <li><UserCircleSvg/><span>{firstname} {lastname}</span></li>
                    <li><ShopSvg/><span>Мої замовлення</span></li>
                    <li><CommentSvg/><span>Мої відгуки</span></li>
                    <li><LikeSvg stroke width='20px' height='20px'/><span>Збережені товари</span></li>
                    <li onClick={logOutClick} ><ExitSvg/><span>Вийти</span></li>
                </ol>
                  
            </div>
        </>
    )
}

export default UserProfileMain
