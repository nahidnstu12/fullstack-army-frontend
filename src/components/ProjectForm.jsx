import { Box, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { priority, users } from "../data";
import {
  MUIButton,
  MUIDateInput,
  MUIInput,
  FormInputDropdown,
  MUISelect,
  FormInputText,
} from "./InputForm";
import { useForm } from "react-hook-form";

const defaultValues = {
  task_title: "",
  task_user: "",
  task_priority: "",
  task_date: "",
};
export default function TaskForm() {
  const { handleSubmit, reset, control, setValue, watch } =
    useForm(defaultValues);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        ADD TASK FORM
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        {/* <MUIInput
          label={"Task Title"}
          fullWidth
          name={"task_title"}
          onChange={handleInput}
        /> */}
        <FormInputText
          name={"task_title"}
          control={control}
          label={"Task Title"}
          fullWidth
        />

        <FormInputDropdown
          name={"task_user"}
          label={"Assigne Person"}
          control={control}
          options={users}
        />
        <FormInputDropdown
          name={"task_priority"}
          label={"Assigne Priority"}
          control={control}
          options={priority}
        />

        {/* <MUIInput type="date" name={"task_date"} onChange={handleInput} /> */}
        <FormInputText
          type="date"
          name={"task_date"}
          control={control}
          fullWidth
        />

        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "20%" }}
          label={"Add Task"}
          type={"submit"}
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
