
export const addTodo=(data)=>{
    return{
        type:'todoList/addTodo',
        payload:data
    }
}
export const searchText=(text)=>{
    return{
        type:'filters/searchText',
        payload:text
    }
}
export const filterStatus=(status)=>{
    return{
        type:"filter/filterStatus",
        payload:status
    }
}
export const filterPriority=(priority)=>{
    return{
        type:"filter/filterPriority",
        payload:priority
    }
}
export const toggleTodo=(id)=>{
    return{
        type:"todoList/toggleTodo",
        payload:id
    }
}