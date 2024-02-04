import { useContext,createContext } from "react";

export const TodoContext = createContext({
    Todos: [{
        id: 1,
        todoMsg: "msg",
        completed: false
    }],
    
    addTodo: (todoMsg)=>{},
    updateTodo: (id,todoMsg)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 