import { createSelector } from "reselect"
export const todoListSelector =(state)=>state.todoList
export const searchFilterSelector=(state)=>state.filters.search
export const filterPrioritySelector=(state)=>state.filters.priority
export const filterStatusSelector=(state)=>state.filters.status
export const toggleTodo=(state)=>state.filters.completed



export const todosFilterSelector =createSelector(todoListSelector,searchFilterSelector,filterPrioritySelector,filterStatusSelector,toggleTodo,(todo,search,priority,status)=>{
return (todo.filter((td)=>{
  if(status==='All'){
    return priority.length ? td.name.toUpperCase().includes(search.toUpperCase())&& priority.includes(td.priority):td.name.toUpperCase().includes(search.toUpperCase())
  }if(status==="Completed"){
    return  priority.length ? td.name.toUpperCase().includes(search.toUpperCase())&& priority.includes(td.priority) && td.completed===true :td.name.toUpperCase().includes(search.toUpperCase()) && td.completed===true
  }if(status==="Todo"){
    return  priority.length ? td.name.toUpperCase().includes(search.toUpperCase())&& priority.includes(td.priority) && td.completed===false :td.name.toUpperCase().includes(search.toUpperCase()) && td.completed===false
  }
 

 }))})



