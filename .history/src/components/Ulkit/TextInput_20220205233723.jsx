import React from "react";
import TextField from "@material-ui/core";

const TextInput = (props) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
    />
  );
};

export default TextInput;
