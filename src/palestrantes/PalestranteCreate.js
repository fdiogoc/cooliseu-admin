import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  required,
  SelectInput
} from "react-admin";

const ParticipanteEdit = props => (
  <Create {...props} label="Criar">
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />
      <TextInput source="email" type="email" />

      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}>
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default ParticipanteEdit;
