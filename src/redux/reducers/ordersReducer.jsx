const initialState= {
    ordersAdmin:[],
    ordersAdminCount:null,
    ordersClient:[]
}


export const ordersReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'GET_ORDERS_ADMIN':
            return{
            ...state,     
            ordersAdmin:[...action.payload],
            ordersAdminCount:action.payload.length
        }
        case 'GET_ORDERS_CLIENT':
            return{
            ...state,     
            ordersClient:[...action.payload]
        }
        default:return state;
    }
}