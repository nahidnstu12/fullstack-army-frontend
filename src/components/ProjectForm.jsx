import React from 'react';
import { priority, users } from '../data';
import { MUIButton, MUIDateInput, MUIInput, MUISelect } from './InputForm';

export default function TaskForm() {
  return (
    <>
    <MUIInput placeholder={"Task Title"} fullWidth   />
    <MUISelect label={"Assigne Person"} options={users} />
    <MUISelect label={"Assigne Priority"} options={priority} />
    <MUIInput type="date" />
    <MUIButton variant="outlined" color="success" sx={{ width:'40%'}} label={"Add Task"}/>
    </>
  );
}

export const SubTaskForm = () => {
    return(
        <>
        <MUIInput placeholder={"Sub Task Title"} type={"text"} />
        <MUISelect label={"Assigne Person"} options={users} />
        <MUISelect label={"Assigne Priority"} options={priority} />
        <MUIDateInput label={"Assignr Date"} />
        <MUIButton variant="outlined" color="success" sx={{ width:'20%'}} label={"Add"}/>
        </>
    )
}

