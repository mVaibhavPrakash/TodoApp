import { useState, useEffect } from 'react';
import '../css/TodoBoiler.css';
import Form from './Form';
import Lists from './Lists';

export default function TodoBoiler() {
  let [todoLists, setTodo] = useState([]);
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem('todoList'));
    setTodo(arr);
  }, []);
  return (
    <div className="TodoBoiler">
      <Form todoLists={todoLists} setTodo={setTodo} />
      <Lists todoLists={todoLists} setTodo={setTodo} />
    </div>
  );
}
