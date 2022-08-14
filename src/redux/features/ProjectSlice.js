import { createSlice } from "@reduxjs/toolkit";
import { action } from "easy-peasy";
import shortid from "shortid";
export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projectlists: [
      {
        id: 1,
        project_title: "Build Dashboard",
        project_description: "Debugging React applications can be difficult, especially when users experience issues that are hard to reproduce. If you’re interested in monitoring and tracking Redux state, automatically surfacing JavaScript errors, and tracking slow network requests and component load time"

      },
    ],
    selectedProjectTitle : ''
  },
  reducers: {
    addProject: (state, action) => {
      let newProject = {
        id: shortid.generate(),
        ...action.payload,
      };
      state.projectlists.push(newProject);
    },
    getProjectTitle: (state, action) => {
      // console.log(state.projectlists.find(item => item.id == action.payload).project_title);
      state.selectedProjectTitle = state.projectlists?.find(item => item.id == action.payload).project_title
    }
  },
});
// Action creators are generated for each case reducer function
export const { addProject, getProjectTitle } = projectSlice.actions;
export default projectSlice.reducer;
