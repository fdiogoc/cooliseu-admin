import React from "react";
import { Edit, TextInput, SimpleForm, required } from "react-admin";

const AgendaEditSimple = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="isTaken" validate={required()} />
    </SimpleForm>
  </Edit>
);

export default AgendaEditSimple;
