import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './features/CounterSlice'
import TaskSlice from './features/TaskSlice'

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    tasks: TaskSlice,
  },
})