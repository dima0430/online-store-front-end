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
        
        case 'GET_LIKED_PRODUCTS':

        const getLikedProducts=action.payload.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
        return {
            ...state,
            likedProducts:getLikedProducts           
        }
        case 'ADD_TO_LIKED':
            
            const addItem={...state.likedProducts,[action.payload.id]:{...action.payload}}
            // const addItem=action.payload.reduce((acc,cur)=>{acc[cur.idComment]=cur; return acc},{})
            return {
                ...state,
                likedProducts:addItem            
            }
        case 'REMOVE_FROM_LIKED':
            const {[action.payload.id]:value, ...after}=state.likedProducts
		
            const newArr={...after}
            // const removeItem=action.payload.reduce((acc,cur)=>{acc[cur.idComment]=cur; return acc},{})
            return {
                ...state,
                likedProducts:newArr       
            }
                
        case 'CLEAR_LIKED':
            return {
                ...state,
                likedProducts:{}        
            }
                
        default:return state;
    }
}