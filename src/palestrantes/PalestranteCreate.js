import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  required,
  email,
  SelectInput,
  LongTextInput
} from "react-admin";

const PalestranteEdit = (props) => (
  <Create {...props} label="Criar">
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" validate={required()} />
      <TextInput source="email" type="email" validate={[required(), email()]} />
      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <LongTextInput source="descricao" />
    </SimpleForm>
  </Create>
);

export default PalestranteEdit;
