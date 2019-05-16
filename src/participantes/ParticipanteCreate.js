import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const ParticipanteEdit = props => (
  <Create {...props} label="Criar">
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="email" type="email" />
      <BooleanInput source="isAdmin" />
      <TextInput source="nome" />
      <TextInput source="username" />
    </SimpleForm>
  </Create>
);

export default ParticipanteEdit;
