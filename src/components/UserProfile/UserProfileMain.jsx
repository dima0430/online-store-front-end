import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import { LikeSvg,UserCircleSvg,ShopSvg,CommentSvg,ExitSvg,LikedProducts} from '..'
import { logOut } from '../../redux/actions/logInOut'
import { clearLiked } from '../../redux/actions/products'
import './index.scss'

const UserProfileMain = () => {
    const {firstname,lastname} = useSelector(({logIn}) =>logIn)
    const dispatch = useDispatch()
    const history=useHistory()
    const handleLogOut =()=>{
        dispatch(logOut());
        dispatch(clearLiked())
        history.push('/');
        Cookies.set('jwt','')
    }
    return (
        <>
            <div className="user-profile">
                <ol>
                    <Link><UserCircleSvg/><span>{firstname} {lastname}</span></Link>
                    <Link><ShopSvg/><span>Мої замовлення</span></Link>
                    <Link><CommentSvg/><span>Мої відгуки</span></Link>
                    <Link to='/profile/liked'><LikeSvg stroke width='20px' height='20px'/><span>Збережені товари</span></Link>
                    <li onClick={handleLogOut}><ExitSvg/><span>Вийти</span></li>
                </ol> 
                <div>
                    <Switch>
                        <Route path='/profile/liked' component={LikedProducts}/>
                    </Switch>
                </div>     
            </div>
        </>
    )
}

export default UserProfileMain
