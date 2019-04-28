import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";

const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome" source="nome" />

      <ReferenceInput source="participanteId" reference="participantes">
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
