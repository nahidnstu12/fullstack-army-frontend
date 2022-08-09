import { Box, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { priority, users } from "../data";
import {useForm} from 'react-hook-form';
import {
  FormInputDropdown,
  FormInputText,
  MUIButton,
  MUIDateInput,
  MUIInput,
  MUISelect,
} from "./InputForm";
import { useDispatch } from 'react-redux';
import { addTask } from "../redux/features/TaskSlice";

const defaultValues = {
  task_title: "",
  task_user: "",
  task_priority: "",
  task_date: "",
};

export const ProjectForm =  () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValues);
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addTask(data))
    
  }
 
  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        New PROJECT FORM
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <FormInputText
          label={"Project Title"}
          fullWidth
          name={"project_title"}
          control={control}
        />
       <FormInputText
          label={"Project Description"}
          fullWidth
          name={"project_description"}
          control={control}
        />
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "30%" }}
          label={"Add New Project"}
          type="submit"
        />
      </form>
    </Box>
  );
}

export const UserForm=()=> {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValues);
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addTask(data))
    
  }
 

  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        ADD NEW USER FORM
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <FormInputText
          label={"User Name"}
          fullWidth
          name={"username"}
          control={control}
        />
        
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "30%" }}
          label={"Add New User"}
          type="submit"
        />
      </form>
    </Box>
  );
}


export default function TaskForm() {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValues);
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addTask(data))
    
  }
 

  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography variant="h5" align="center" color={"primary"}>
        ADD TASK FORM
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <FormInputText
          label={"Task Title"}
          fullWidth
          name={"task_title"}
          control={control}
        />
        <FormInputDropdown
          label={"Assigne Person"}
          options={users}
          name={"task_user"}
          control={control}
        />
        <FormInputDropdown
          label={"Assigne Priority"}
          options={priority}
          control={control}
          name={"task_priority"}
        />

        <FormInputText type="date" name={"task_date"} control={control}/>
       
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "30%" }}
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
