import Cookies from 'js-cookie';
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route,Switch,} from 'react-router';
import {useLocation, useParams} from 'react-router-dom';
import { CategoryProduct, Main,Header,ProductPage,UserProfileMain,LikedProducts} from "./components"
import {logIn} from './redux/actions/logInOut';
import {getCategories} from './redux/actions/categories';
import { getLikedProducts, getProducts} from './redux/actions/products';



function App() {
	const dispatch=useDispatch();
	const {id} = useParams();
	const {pathname} =useLocation();
	const {login} = useSelector(({logIn}) =>logIn)

	useEffect(
		() => {
		dispatch(logIn(JSON.stringify({'jwt':Cookies.get('jwt')})))
		.then(response=>response?dispatch(getLikedProducts(response.id)):false)
		.then(()=>dispatch(getProducts()))
		dispatch(getCategories())
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
	return(
		<>
				<div className='wrapper' >
		<Header/>
		{/* {!pathname.includes('admin') && */}
		{/* <Route> */}
		<Switch>
				<Route exact path='/'component={Main}/>
				{login &&	
					<Route path='/profile' component={UserProfileMain}/>
				}
				<Route path='/:category/:id' render={({match})=>(<ProductPage id={id} {...match} />)}/>
				<Route exact path='/:category' render={()=><CategoryProduct/>}/>
				{/* <Redirect to='/404'/> */}
		</Switch>	
			{/* </Route> */} 
			{/* }
			<Route path='/admin' component={Admin}/> */}
			</div>
	</>			
	);  
}

export default App;
