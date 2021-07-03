const initialState = {
	items: {"89":{"id":"89","name":"Мікрохвильовка Gt8 ","description":"null","price":"2000","image":"973413-images.jpg","brand":"Evo","count":3,"category_id":"4","category_name":"Мікрохвильовки"},"90":{"id":"90","name":"Холодильник М-474","description":"null","price":"8000","image":"544887-images-(1).jpg","brand":"Bravis","count":2,"category_id":"1","category_name":"Холодильники"}},
	totalPrice: 0,
	totalCount: 0,
	};
	const count=(newItem)=>Object.values(newItem).reduce((sum,obj)=>obj.count+sum,0)
	const price=(newItem) =>Object.values(newItem).reduce((sum,obj)=>obj.count*obj.price+sum,0)	
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': 
		const addItem={...state.items,[action.payload.id]: !state.items[action.payload.id] ?{...action.payload ,count:1} : {...state.items[action.payload.id],count:state.items[action.payload.id].count+1}};
		  
		return{
		...state,
			items:addItem,
			totalCount:count(addItem),
			totalPrice:price(addItem)
		}
		
		case 'DASH_PIZZA_CART': 
		const dashItem={...state.items,[action.payload.id]: !state.items[action.payload.id]||state.items[action.payload.id].count<=1 ?{...action.payload ,count:1} : {...state.items[action.payload.id],count:state.items[action.payload.id].count-1}};
		 
		return{
		...state,
			items:dashItem,
			totalCount:count(dashItem),
			totalPrice:price(dashItem)
		}
		case 'REMOVE_PIZZA_CART': 
		const {[action.payload.id]:value, ...after}=state.items
		const removeItem={...after}
		return{
		...state,
			items:removeItem,
			totalCount:count(removeItem),
			totalPrice:price(removeItem)
		}
		
		default: return state}}
