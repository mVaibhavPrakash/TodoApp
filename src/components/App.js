import {useState,useEffect} from 'react';
import '../css/App.css';
import Form from './Form';
import Lists from './Lists';
function App() {

  let [todoLists,setTodo] = useState([{title:'',content:''}]);
  useEffect(()=>{
    let arr=JSON.parse(localStorage.getItem('todoList'));
      setTodo(arr);
  },[]);  

  return (
    <div className="App">
      <Form todoLists={todoLists} setTodo={setTodo}/>
      <Lists todoLists={todoLists} setTodo={setTodo}/>
    </div>
  );
}

export default App;
