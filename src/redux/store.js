import { configureStore } from '@reduxjs/toolkit'
import  ProjectSlice  from './features/ProjectSlice'
import SubtaskSlice from './features/SubtaskSlice'
import TaskSlice from './features/TaskSlice'
import UserSlice from './features/UserSlice'

export const store = configureStore({
  reducer: {
    tasks: TaskSlice,
    users: UserSlice,
    subtasks: SubtaskSlice,
    projects: ProjectSlice
  },
})