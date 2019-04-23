import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const AgendaTitle = ({ record }) => {
  return <span>User {record ? ` - ${record.nome}` : ""}</span>;
};

export const AgendaEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />
      <ReferenceInput source="salaId" reference="salas">
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default AgendaEdit;
