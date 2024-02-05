import { useContext,createContext } from "react";

export const TodoContext = createContext({
    Todos: [{
        id: 1,
        todo: "msg",
        completed: false
    }],
    
    addTodo: (todo)=>{},
    updateTodo: (id,todoMsg)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 