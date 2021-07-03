import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { AddProduct, Comments, EditProduct, Products, Orders} from '..'
import './index.scss'

const Admin = () => {
    const history =useHistory();
    useEffect(() => {
        history.push('/admin/products')
    }, [])
    return (
        <>
        {/* <h2>Панель Адміністратора</h2> */}
        <div className ='wrappe'>   
            <div className="buttons">
                <h3 className="title">Admin</h3>
                <Link to='/admin/products' className="item">Товари</Link>
                <Link to='/admin/comments' className="item">Відгуки<span className='icon'>4</span></Link>
                <Link to='/admin/orders'className="item">Замовлення<span className='icon'>3</span></Link>
            </div>
            <div className='pages'>    
                <Switch>
                    <Route path ='/admin/products' component={Products}/>
                    <Route path ='/admin/add-product' component={AddProduct}/>
                    <Route path ='/admin/edit-product' component={EditProduct}/>
                    <Route path ='/admin/comments' component={Comments}/>
                    <Route path ='/admin/orders' component={Orders}/>
                    <Route path='/404' component={()=>{return(<div>error</div>)}}/>
                    <Redirect from='*' to='/404'/>     
                </Switch>
            </div>    
        </div>
    </>    
    )
}

    export default Admin
