import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />

      <ReferenceInput source="salaId" reference="salas">
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default SalaCreate;
