import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import {Authorization,Registration,UserSvg} from '..'

import "./index.scss"

function UserForm(){
    const history=useHistory();
    const {firstname,lastname,login} =useSelector(({logIn}) =>logIn)     
    const [visible, setVisible] = useState(false)
    const [activeForm, setActiveForm] = useState(true)
    const onActiveForm=(active)=>{
        setActiveForm(active);
    }
    const onClickUser= ()=>{
        login? history.push('/profile') :setVisible(!visible)
    }

    return(    
    <>  
        <div onClick={onClickUser}  className="user__title">   
            <UserSvg/>
            {login?<span>{firstname} {lastname}</span> :<span>Реєстрація | Вхід</span>}
        </div>
        {(visible && !login ) &&   
            <div className='wrapper-form'>
                <div className='form'>
                    <div className="form__title">
                        <button className={`form__title__item ${activeForm?'active':''}`} onClick={()=>onActiveForm(true)}>
                            Вхід
                        </button>
                        <button className={`form__title__item ${!activeForm ?'active':''}`} onClick={()=>onActiveForm(false)}>
                            Реєстрація
                        </button>
                    </div>
                    {activeForm ? <Authorization visible={()=>setVisible(false)} />:<Registration/>}   
                </div>
            </div>
        }    
    </>  
    );
}

export default UserForm