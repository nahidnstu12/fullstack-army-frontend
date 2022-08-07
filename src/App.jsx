import { useEffect, useState } from 'react'
import './App.css'
import { useStoreState } from 'easy-peasy';
import AddTodoForm from './components/AddTodo';

function App() {
  const [todoState,setTodos] = useState(null)
  const todos = useStoreState((state) => state.todos)
 
useEffect(()=>{
  setTodos(todos)
}, [todoState])
  return (
    <div className="App">
      <h1>Project Management</h1>
      <AddTodoForm />
     <ul>
      {todoState && todoState.map((todo, id) => (
        <li key={id}>{todo.text}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
