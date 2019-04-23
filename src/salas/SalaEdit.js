import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const SalaTitle = ({ record }) => {
  return <span>User {record ? ` - ${record.nome}` : ""}</span>;
};

const SalaEdit = props => (
  <Edit title={<SalaTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />
    </SimpleForm>
  </Edit>
);

export default SalaEdit;
