import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './features/CounterSlice'
import  ProjectSlice  from './features/ProjectSlice'
import SubtaskSlice from './features/SubtaskSlice'
import TaskSlice from './features/TaskSlice'
import UserSlice from './features/UserSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    tasks: TaskSlice,
    users: UserSlice,
    subtasks: SubtaskSlice,
    projects: ProjectSlice
  },
})