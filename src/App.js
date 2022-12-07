import axios from "axios";
import {useState , useEffect} from "react";
import UserList from './components/UserList';
import TodosList from "./components/TodosList";

function App() {
const [todos , setTodos] = useState(null);

useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((result)=>{
    setTodos(result.data);
  });
},[]);
  return (
    <div>{todos ? <TodosList todos={todos}/> : <UserList/> }</div>
  );
}

export default App;
