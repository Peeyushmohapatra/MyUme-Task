export const reducer = (state={employee:[],rightbox:[]},action) => {

    if(action.type === "employee_data"){
        return {
            ...state,
            employee:action.payload
        }
    }
    else if(action.type === "right_data"){
        return {
            ...state,
            rightbox:[...state.rightbox,action.payload]
        }
    }

    else if(action.type === "right_data_change"){
        return {
            ...state,
            rightbox:action.payload
        }
    }
   
    return state    
}