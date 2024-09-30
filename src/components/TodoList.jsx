import React from "react";
import TodoItem from "./TodoItem";
import '../App.css'
const TodoList=({todos,toggleComplete,deleteTodo})=>{
    console.log(todos)
    return(
        <ul>
        
        {todos.map((item)=>
            
            <TodoItem todo={item} key={item.id} toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}/>
            
        )}
        </ul>
    )
}

export default TodoList;