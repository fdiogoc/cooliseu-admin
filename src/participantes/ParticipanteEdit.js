import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  BooleanInput
} from "react-admin";

const ParticipanteTitle = ({ record }) => {
  return <span>Participante {record ? ` - ${record.name}` : ""}</span>;
};

const ParticipanteEdit = props => (
  <Edit title={<ParticipanteTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput source="email" />

      <BooleanInput source="isAdmin" />

      <TextInput source="name" />

      <TextInput source="username" />
    </SimpleForm>
  </Edit>
);

export default ParticipanteEdit;
