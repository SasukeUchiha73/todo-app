
import { useEffect,useState } from 'react'
import getTodosFromApi from '../apis/getTodosFromApi'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Filter from './Filter'
import '../App.css'

const TodoApp=()=> {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all');
  const updateLocalStorage=(todos)=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const addTodo = (title) => {
    const newTodo = { id: Date.now(), todo:title, completed:false,  };
    setTodos([...todos, newTodo]);
    updateLocalStorage([...todos, newTodo])
  };
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos)
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    updateLocalStorage(updatedTodos)
  };

  const filteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'pending') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

 
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      if (savedTodos) {
        setTodos(savedTodos);
      } else {
        getTodosFromApi().then((data)=>
        setTodos(data)
        );
      }
    }
  ,[])
  
  return (
    <>
     <div className="todo-app">
      <h1>Todo List</h1>
      <h2>Total Tasks : {filteredTodos().length}</h2>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter}  />
      <TodoList
        todos={filteredTodos()}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
    </>
  )
}

export default TodoApp
