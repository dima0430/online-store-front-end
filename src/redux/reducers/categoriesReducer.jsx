const categories= {
    categoriesList:[]
}


export const categoriesReducer =(state=categories,action)=>{
    switch(action.type){
        case 'GET_CATEGORIES':
            return{
            ...state,     
            categoriesList:[...action.categories]
        }
        default:return state;
    }
}

