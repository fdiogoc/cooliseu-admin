import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  DisabledInput
} from "react-admin";

import { DateTimeInput } from "react-admin-date-inputs";

const EventoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput label="Nome" source="nome" />
      <DateTimeInput
        label="Data"
        source="data_inicio"
        options={{
          format: "dd/MM/YYYY, HH:mm:ss",
          ampm: false,
          clearable: true
        }}
      />

      <TextInput label="Local" source="local" />
    </SimpleForm>
  </Create>
);

export default EventoCreate;
