import { Box, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { priority, users } from "../data";
import { MUIButton, MUIDateInput, MUIInput, MUISelect } from "./InputForm";

export default function TaskForm() {
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task_title: "",
      task_user: "",
      task_priority: "",
      task_date: "",
    }
  );
  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    let data = { formInput };

    console.log({data});
  };
  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        ADD TASK FORM
      </Typography>
      <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
        <MUIInput label={"Task Title"} fullWidth name={"task_title"} onChange={handleInput}/>
        <MUISelect
          label={"Assigne Person"}
          options={users}
          name={"task_user"}
          onChange={handleInput}
          defaultValue={formInput.task_user || 1}
        />
        <MUISelect
          label={"Assigne Priority"}
          options={priority}
          name={"task_priority"}
          onChange={handleInput}
          defaultValue={formInput.task_priority || 1}
          optionValueProp={'id'}
          optionTitleProp={['name']}
        />
        <MUIInput type="date" name={"task_date"} onChange={handleInput}/>
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "20%" }}
          label={"Add Task"}
          type="submit"
        />
      </form>
    </Box>
  );
}

export const SubTaskForm = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <MUIInput label={"Sub Task Title"} />
      <MUISelect label={"Assigne Person"} options={users} />
      <MUISelect label={"Assigne Priority"} options={priority} />
      <MUIDateInput label={"Assignr Date"} />
      <MUIButton
        variant="outlined"
        color="success"
        sx={{ width: "20%", alignSelf: "center" }}
        label={"Add"}
      />
    </Box>
  );
};
