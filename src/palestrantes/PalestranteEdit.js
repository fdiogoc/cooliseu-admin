import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const PalestranteTitle = ({ record }) => {
  return <span>Palestrante {record ? ` - ${record.name}` : ""}</span>;
};

const PalestranteEdit = props => (
  <Edit title={<PalestranteTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput source="email" />

      <BooleanInput source="isAdmin" />

      <TextInput source="nome" />

      <TextInput source="username" />
    </SimpleForm>
  </Edit>
);

export default PalestranteEdit;
