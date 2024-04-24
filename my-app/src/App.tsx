import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/Todo/TodoForm/TodoForm';
import TodoList from './Components/Todo/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
