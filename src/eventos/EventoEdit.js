import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const UserTitle = ({ record }) => {
  return <span>User {record ? ` - ${record.name}` : ""}</span>;
};

const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput source="email" />

      <BooleanInput source="isAdmin" />

      <TextInput source="name" />

      <TextInput source="username" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
