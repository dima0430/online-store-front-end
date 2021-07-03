const products= {
    productsList:[],
    categoryProducts:[]
}


export const productsReducer =(state=products,action)=>{
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
        default:return state;
    }
}