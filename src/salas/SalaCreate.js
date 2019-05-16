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
import SalaReferenceInput from "../custom/SalaReferenceInput";

const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome" source="nome" />
      <SalaReferenceInput source="salaId" reference="salas">
        <SelectInput optionText="nome" label="Sala" />
      </SalaReferenceInput>
      <ReferenceInput
        source="participanteId"
        reference="participantes"
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
