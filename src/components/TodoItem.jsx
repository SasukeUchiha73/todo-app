import React from "react";
import "../App.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const style = {
    backgroundColor: todo.completed ? "green" : "red",
  };
  return (
    <li>
    
      <span>{todo.todo.length>40?todo.todo.slice(0,30)+'...':todo.todo}</span>
      <div>
      <button
        onClick={() => toggleComplete(todo.id)}
        style={style}
      >
        {todo.completed ? "Completed" : "Pending"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
