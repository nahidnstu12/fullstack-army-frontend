import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserForm } from '../components/ProjectForm'

export default function Users() {
  return (
    <div className="mx-auto w-9/12">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Project Lists</Link>
        <Typography>Users</Typography>
      </Box>

      <UserForm />

      <Typography sx={{ margin: "20px 0", padding:"4px", background: "#eee"}} align={"center"}>User Lists</Typography>
        <ul className='mt-5'>
        {[...Array(4)].map((_, i) => (
         <li className='p-2'>Nahid</li>
         ))}
        </ul>
     
    </div>
  )
}
