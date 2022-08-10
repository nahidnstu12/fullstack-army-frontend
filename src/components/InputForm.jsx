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
import { Controller } from "react-hook-form";

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

export const FormInputDropdown = ({ name, control, label, options, optionValue, ...props }) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.id} value={option.id} {...props}>
          {option[optionValue]}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} {...props} >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export const FormInputText = ({ name, control, label, type = "text", ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          type={type}
          {...props}
        />
      )}
    />
  );
};
