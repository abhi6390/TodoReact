import { useContext, createContext } from "react";

//small projects= context api, big projs= redux, etc
//functionalities define hote usually, are later implementedin App.jsx or any other jsx file
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {}, //app.jsx me decide karo
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: ()=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)//useContext ko ek context dena padega bracket me
}

export const TodoProvider = TodoContext.Provider