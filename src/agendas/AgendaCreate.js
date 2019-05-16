import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FormDataConsumer,
  SelectInput,
  required,
  GET_ONE,
  showNotification,
  REDUX_FORM_NAME,
  ArrayInput,
  SimpleFormIterator,
  fetchEnd,
  fetchStart
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";
import AgendaFill from "./AgendaFill";
import dataProvider from "../dataProvider";
import HorarioSalaList from "./HorarioSalaList";
import { change } from "redux-form";

const customOnChange = event => {
  if (event.salaId) {
  }
};

const AgendaCreate = props => (
  <Create {...props}>
    <SimpleForm onChange={customOnChange}>
      <TextInput source="name" validate={required()} />
      <AgendaFill />

      <FormDataConsumer>
        {({ formData, ...rest }) => {
          if (formData.salaId) {
            return <HorarioSalaList record={formData} />;
          }
        }}
      </FormDataConsumer>
    </SimpleForm>
  </Create>
);

export default AgendaCreate;
