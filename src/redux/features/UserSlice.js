import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userlists: [
      {
        id: 1,
        username: "Nahid",

      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      let newUser = {
        id: shortid.generate(),
        //    content: action.payload.newContent
        ...action.payload,
      };
      state.userlists.push(newUser);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
