import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  DisabledInput
} from "react-admin";

const UserEdit = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput source="email" />

      <TextInput source="isAdmin" />
      <TextInput source="name" />

      <TextInput source="username" />
    </SimpleForm>
  </Create>
);

export default UserEdit;
