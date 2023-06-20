const initState={
 
        search:'',
        status:'All',
        priority:[]
    
 
}

const filterReducer=(state=initState,action)=>{
    console.log({state,action})
    switch(action.type){
      
            case "filters/searchText":
                return{
                    ...state,
                 
                        search:action.payload
                    };
                    case "filter/filterStatus":
                        return{
                            ...state,
                         
                                status:action.payload
                            };
                            case "filter/filterPriority":
                                return{
                                    ...state,
                                 
                                    priority :action.payload
                                    };
            
            default:
            return state

    }
}
export default filterReducer