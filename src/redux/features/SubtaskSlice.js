import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
export const subtaskSlice = createSlice({
  name: "subtask",
  initialState: {
    subtaskList: [
      {
        id: shortid.generate(),
        subtask_title: "subtask1",
        subtask_user: 1,
        subtask_priority: 1,
        subtask_date: "12/8/22",
        task_id: 1
      },
    ],
  },
  reducers: {
    addSubtask: (state, action) => {
      let newSubtask = {
        id: shortid.generate(),
        ...action.payload,
      };
      state.subtaskList.push(newSubtask);
    },
   
  },
});
// Action creators are generated for each case reducer function
export const { addSubtask } = subtaskSlice.actions;
export default subtaskSlice.reducer;
