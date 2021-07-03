import Cookies from 'js-cookie';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route,Switch,} from 'react-router';
import { useLocation, useParams} from 'react-router-dom';
import { CategoryProduct, Main, CatalogList,Header,Admin,ProductPage} from "./components"
import {logIn,getCategories, getProducts} from './redux/action';


function App() {
	const dispatch=useDispatch();
	const {id} = useParams();
	const {pathname} =useLocation();
	useEffect(
		() => {
		dispatch(logIn(JSON.stringify({'jwt':Cookies.get('jwt')})))
		dispatch(getCategories())
		dispatch(getProducts())
		console.log(pathname)
	},[])
	return(
		<Switch>
		{!pathname.includes('admin') &&<Route>
				<Header/>
				<div style={{display:'flex'}}>
				<CatalogList/>
				<Route exact path='/'component={Main}/>
				<Route path="/:category/:id" render={({match})=>(<ProductPage id={id} {...match} />)}/>
				<Route exact path='/:category' render={()=><CategoryProduct/>}/>
				</div>
			</Route>}
			<Route path='/admin' component={Admin}/>
		</Switch>	
				
	);  
}

export default App;
