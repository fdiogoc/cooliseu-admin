import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput,
  required
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";

const SalaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome da Sala" source="nome" />

      <ReferenceInput
        label="Organizador"
        source="palestranteId"
        reference="palestrantes"
        resources="palestrantes"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" label="Evento" />
      </ReferenceInput>

      <AvailableTimeComp source="horarios" />
    </SimpleForm>
  </Create>
);

export default SalaCreate;
