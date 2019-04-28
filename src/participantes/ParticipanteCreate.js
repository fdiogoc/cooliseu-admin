import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const ParticipanteEdit = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="email" />
      <BooleanInput source="isAdmin" />
      <TextInput source="name" />
      <TextInput source="username" />
    </SimpleForm>
  </Create>
);

export default ParticipanteEdit;
