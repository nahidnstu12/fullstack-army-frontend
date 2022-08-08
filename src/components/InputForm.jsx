import React from "react";
import {
  FormControl,
  Button,
  Input,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";

export const MUIInput = (props) => {
  return (
    <TextField id="outlined-basic" variant="outlined" size="small" {...props} />
  );
};

export const MUIButton = (props) => {
  return <Button {...props}>{props.label}</Button>;
};
export const MUIDateInput = (props) => {
  return (
    <TextField
      id="date"
      label={props.label}
      type="date"
      size="small"
      // defaultValue="2017-05-24"
      sx={{ width: 160 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export const MUISelect = ({
  label,
  options,
  handleInput: onChangeCallback,
  defaultValue,
  name,
}) => {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={defaultValue}
        label={label}
        onChange={(event, selected) => {
          const value = selected ? selected[optionValueProp] : null;

          if (onChangeCallback && typeof onChangeCallback === "function") {
            onChangeCallback(value);
          }
        }}
        name={name}
      >
        {options.map((item, key) => (
          <MenuItem key={key} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
