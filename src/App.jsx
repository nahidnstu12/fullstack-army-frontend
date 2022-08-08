import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Box, Input, Button} from '@mui/material';
import ProjectLists from './components/ProjectLists';
import TaskForm from './components/ProjectForm';


function App() {
  const [todoState,setTodos] = useState(null)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="">
      <h1 className='text-white text-2xl text-center bg-green-400 p-4'>Project Management Assignment</h1>
      <Box sx={{ margin: "0 auto", padding: '2rem', maxWidth:"70%"}}>
      
      <TaskForm />
      </Box>
      

      <Box sx={{ margin: "0 auto", padding: '2rem', maxWidth:"70%"}}>

        <ProjectLists />

      </Box>

    </div>
  )
}

export default App
