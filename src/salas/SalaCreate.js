import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput,
  required,
  FormDataConsumer
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";
import SalaReferenceInput from "../custom/SalaReferenceInput";

const isAdmin = true;
const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome da Sala" source="nome" />

      <ReferenceInput
        label="Organizador"
        source="participanteId"
        reference="participantes"
        resources="participantes"
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
