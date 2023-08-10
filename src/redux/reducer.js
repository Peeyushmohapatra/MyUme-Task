export const reducer = (state={post:[],searchResult:[]},action) => {
    if(action.type === 'posts'){
        return {
            ...state,
            post:action.payload
        }
    }
    else if(action.type === "search-data"){
        return {
            ...state,
            searchResult:action.payload
        }
    }
    return state    
}