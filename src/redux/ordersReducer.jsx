const orders= {
    ordersAdmin:[],
    ordersClient:[]
}


export const ordersReducer =(state=orders,action)=>{
    switch(action.type){
        case 'GET_ORDERS_ADMIN':
            return{
            ...state,     
            ordersAdmin:[...action.payload]
        }
        case 'GET_ORDERS_CLIENT':
            return{
            ...state,     
            ordersClient:[...action.payload]
        }
        default:return state;
    }
}