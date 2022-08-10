import { Box, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { priority, users } from "../data";
import {useForm} from 'react-hook-form';
import {
  FormInputDropdown,
  FormInputText,
  MUIButton,
} from "./InputForm";
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from "../redux/features/TaskSlice";
import { addUser } from "../redux/features/UserSlice";
import shortid from "shortid";
import { addSubtask } from "../redux/features/SubtaskSlice";
import { addProject } from "../redux/features/ProjectSlice";

const defaultValuesOfTasks = {
  task_title: "",
  task_user: "",
  task_priority: "",
  task_date: "",
};
const defaultValuesOfSubtasks = {
  subtask_title: "",
  subtask_user: "",
  subtask_priority: "",
  subtask_date: "",
};
const defaultValuesOfUser = {
  username: ""
}

const defaultValuesOfProject = {
  project_title: "",
  project_description: ""
}

export const ProjectForm =  () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValuesOfProject);
  const onSubmit = (data) => {
    const newProjecct ={
      id: shortid.generate(),
      ...data
    }
    // console.log(data)
    dispatch(addProject(newProjecct))
    
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
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValuesOfUser);
  const onSubmit = (data) => {
    const newUser = {
      id: shortid.generate(),
      ...data
    }
    console.log(newUser)
    dispatch(addUser(newUser))
    
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


export default function TaskForm({projectId}) {
  const {userlists} = useSelector(state => state.users)
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValuesOfTasks);
  const onSubmit = (data) => {
    const newTask = {
      project_id: projectId,
      ...data
    }
    // console.log({task:newTask})
    dispatch(addTask(newTask))
    
  }
 

  return (
    <Box>
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
          options={userlists}
          name={"task_user"}
          control={control}
          optionValue={"username"}
        />
        <FormInputDropdown
          label={"Assigne Priority"}
          control={control}
          options={priority}
          name={"task_priority"}
          optionValue={"name"}
        />

        <FormInputText type="date" name={"task_date"} control={control}/>
       
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "30%" }}
          label={"Add Task"}
          type={"submit"}
        />
      </form>
    </Box>
  );
}

export const SubTaskForm = ({taskId}) => {
  const {userlists} = useSelector(state => state.users)
  const dispatch = useDispatch();
  const { handleSubmit, reset, control, setValue, watch } =useForm(defaultValuesOfSubtasks);

  const onSubmit = (data) => {
    const newSubtask = {
      id: shortid.generate(),
      task_id : taskId,
      ...data
    }
    console.log({subtask:data})
    dispatch(addSubtask(newSubtask))
    
  }
  return (
    <Box className=" mx-auto" >
     <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-wrap gap-3"}>
        <FormInputText
          label={"Sub Task Title"}
          name={"subtask_title"}
          control={control}
        />
        <FormInputDropdown
          label={"Assigne Person"}
          options={userlists}
          name={"subtask_user"}
          control={control}
          optionValue={"username"}
          sx={{ width: "200px"}}
        />
        <FormInputDropdown
          label={"Assigne Priority"}
          options={priority}
          control={control}
          name={"subtask_priority"}
          optionValue={"name"}
          sx={{ width: "200px"}}
        />

        <FormInputText type="date" name={"subtask_date"} control={control}/>
       
        <MUIButton
          variant="outlined"
          color="success"
          sx={{ width: "20%" }}
          label={"Add"}
          type="submit"
        />
      </form>
    </Box>
  );
};
