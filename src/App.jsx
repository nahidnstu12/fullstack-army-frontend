import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Box, Input, Button} from '@mui/material';
import ProjectLists from './components/ProjectLists';


function App() {
  const [todoState,setTodos] = useState(null)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="">
      <h1 className='text-white text-2xl text-center bg-green-400 p-4'>Project Management Assignment</h1>
      <Box sx={{ margin: "0 auto", padding: '2rem', maxWidth:"70%"}}>
      <h3>Project Add Form</h3>
      <Box sx={{ display: 'flex', gap:'10px'}}>
      <Input placeholder="Project Title"  fullWidth/>
      <Button variant="outlined" color="success" sx={{ width:'40%'}}>Add Project</Button>
      </Box>
      </Box>

      <Box sx={{ margin: "0 auto", padding: '2rem', maxWidth:"70%"}}>

        <ProjectLists />

      </Box>

    </div>
  )
}

export default App
