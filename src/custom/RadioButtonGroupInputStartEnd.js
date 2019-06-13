import React, { Component } from "react";

import { DateField, addField } from "react-admin";
import TextField from "@material-ui/core/TextField";
import { Field } from "redux-form";
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={!!(touched && error)}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
const LatLngInput = () => (
  <span>
    <Field name="lat" component={renderTextField} label="latitude" />
    &nbsp;
    <Field name="lng" component={renderTextField} label="longitude" />
  </span>
);

export default LatLngInput;
