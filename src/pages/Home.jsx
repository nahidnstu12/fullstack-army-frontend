import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-9/12'>
       <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Project Lists</Link>
        <Link to={"/users"}>Users</Link>
      </Box>
      <Box className='mt-4 p-4 bg-gray-300 mx-auto w-2/3'>
        <Typography variant='h4'  align='center'>This is Project Managenent Assignment</Typography>
      </Box>
    </div>
  )
}
