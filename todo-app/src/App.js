import './App.css';
import React, {useState} from 'react'
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  return (
    <div className="App">
      <>
        <TodoList todoList={todos}/>
        <input type='text' />
        <button>Add Task</button>
        <button>Clear Complete</button>
        <div>0 Tasks left to do</div>
      </>
    </div>
  );
}

export default App;
