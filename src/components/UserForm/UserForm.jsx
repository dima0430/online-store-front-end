import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {Authorization,Registration,UserSvg} from '..'
import "./index.scss"


function UserForm(){
    const client =useSelector(state => state.logIn)     
    const [activeForm, setActiveForm] = useState(true)
    const [visible, setVisible] = useState(false)
    const onActiveForm=(active)=>{
        setActiveForm(active);
        
    }

    return(    
    <>  
        <div onClick={()=>setVisible(!visible)}  className="user__title">   
            <UserSvg/>
            {client.login?<span>{client.firstname} {client.lastname}</span> :<span>Реєстрація | Вхід</span>}
        </div>
    {(visible && !client.login)&&    
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
                {activeForm ? <Authorization/>:<Registration/>}   
            </div>
        </div>
    }       
    </>
        
    );
}

export default UserForm