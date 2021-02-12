import React,{useState} from 'react'
import {Route,Link} from 'react-router-dom'
import {Authorization,Registration} from '../../'


export default function UserForm(){
    const [visible, setVisible] = useState(false)
    const [activeForm, setActiveForm] = useState(false)
    const onActiveForm=(active)=>{
        setActiveForm(active);
    }
    const visibleForm=()=>{
        setVisible(!visible);
    }

    return(
        <div className="user">
            <Link to="/au">
            <div onClick={visibleForm}  className="user__title">   
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32"    height="32" viewBox="0 0 32 32">
                    <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"/>                   
                </svg>    
                <span>Регистрація | Вхід</span>
            </div>
            </Link>    
            { visible && (
            <div className='wrapper-user-form'>
                <div className='user-form'>
                    <div className="user-form__title">
                         <Link to="/au"> 
                            <button className={`user-form__title__item ${activeForm === false ?'active':''}`} onClick={()=>onActiveForm(false)}>
                                Вхід
                            </button>
                        </Link>    
                        <Link to='/reg'>    
                            <button className={`user-form__title__item ${activeForm === true ?'active':''}`} onClick={()=>onActiveForm(true)}>
                                Регистрація
                            </button>
                        </Link>    
                    </div>
                    
                    
                    <Route path="/au" component={Authorization} exact />
                    <Route path="/reg" component={Registration} />
                    
                    
                </div>    
            </div>)}    

        
        </div>
    );
}