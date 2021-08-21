const initialState= {
    productsList:[],
    categoryProducts:[],
    likedProducts:{}
}


export const productsReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return{
            ...state,     
            productsList:[...action.payload]
        }
        case 'GET_CATEGORY_PRODUCTS':
            return{
            ...state,     
            categoryProducts:[...action.payload]
        }
        case 'ADD_TO_LIKED':
            
            const addItem
            return {
                ...state,
                likedProducts:[...state.likedProducts,action.payload]            
            }
        case 'REMOVE_FROM_LIKED':
            const {[action.payload.id]:value, ...after}=state.likedProducts
		
            const newArr={...after}
            return {
                ...state,
                likedProducts:newArr        
            }
        default:return state;
    }
}