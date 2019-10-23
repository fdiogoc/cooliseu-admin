import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  SelectInput,
  ReferenceInput,
  required
} from "react-admin";

const ParticipanteEdit = (props) => (
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
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <SelectInput
        source="tipo"
        choices={[
          { id: "PRNC", name: "Rodada de negócio completo" },
          { id: "PRNS", name: "Rodada de negócio simples" },
          { id: "S", name: "Simples" }
        ]}
      />
    </SimpleForm>
  </Create>
);

export default ParticipanteEdit;
