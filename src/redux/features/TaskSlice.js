import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
export const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [
      {
        id: 1,
        task_title: "task1",
        task_user: 1,
        task_priority: 1,
        task_date: "12/8/22",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      let newTask = {
        id: shortid.generate(),
        //    content: action.payload.newContent
        ...action.payload,
      };
      state.taskList.push(newTask);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTask, deleteToDo, editTodo } = taskSlice.actions;
export default taskSlice.reducer;
