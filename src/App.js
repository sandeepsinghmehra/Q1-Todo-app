import React, { useState,useEffect } from 'react'
import {AddATodo} from './AddATodo';
import {TodoList} from './TodoList';
import "./App.css";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  let initTodo;
  if(localStorage.getItem('Todos')===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('Todos'));
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))  
  }
  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  
  const [todos, setTodos] = useState(initTodo);
  const addTodo = (todo)=>{
    const arr = [...todos, todo];
    setTodos(arr);
    localStorage.setItem('Todos', JSON.stringify(todos));
  }
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
        <AddATodo setTodos={setTodos} addTodo={addTodo} todos={todos} isEditing={isEditing} setIsEditing={setIsEditing} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
        <TodoList todos={todos} onDelete={onDelete} handleEditClick={handleEditClick} />    
    </div>
  );
}

export default App;

