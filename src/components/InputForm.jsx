import React from 'react';
import {FormControl,Button, Input, Select, InputLabel, MenuItem, TextField } from '@mui/material';

export const MUIInput = (props) =>{
  return (
    <Input {...props}/>
  );
}

export const MUIButton = (props) =>{
    return (
      <Button {...props}>{props.label}</Button>
    );
  }
  export const MUIDateInput = (props) => {
    return (
        <TextField
        id="date"
        label={props.label}
        type="date"
        // defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
  }

  export const MUISelect =({label, options}) =>{
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">{label}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label={label}
          onChange={handleChange}
        >
            {options.map((item,key) => 
            <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
            )}
          
        </Select>
      </FormControl>
    )
  }
