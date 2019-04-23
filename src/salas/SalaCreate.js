import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  AutocompleteInput
} from "react-admin";
import AvailableTimesRA from "../custom/AvailableTimes";
import { DateInput, TimeInput } from "react-admin-date-inputs";

const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome" source="nome" />

      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" label="Evento" />
      </ReferenceInput>
      <ArrayInput source="horarios">
        <SimpleFormIterator>
          <DateInput
            source="dia"
            options={{ format: "dd/MM/YYYY", autoOk: true }}
          />
          <TimeInput source="horario" options={{ ampm: false }} />
        </SimpleFormIterator>
      </ArrayInput>
      <AvailableTimesRA source="horarios" />
    </SimpleForm>
  </Create>
);

export default SalaCreate;
