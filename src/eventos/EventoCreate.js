import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  required
} from "react-admin";

import { DateInput } from "react-admin-date-inputs";

import isPast from "date-fns/isPast";

const isPastf = isPast;
const validateEventCreation = (values) => {
  const errors = {};
  console.log(values);
  if (isPastf(values.data_inicio)) {
    errors.data_inicio = ["Data deve ser posterior a de hoje"];
  }
  if (isPastf(values.data_fim)) {
    errors.data_fim = ["Data final deve ser após a data de inicio"];
  }
  return errors;
};

const EventoCreate = (props) => (
  <Create {...props}>
    <SimpleForm validate={validateEventCreation}>
      <DisabledInput source="id" />

      <TextInput label="Nome" source="nome" validate={required()} />

      <DateInput
        label="Data do inicio"
        source="data_inicio"
        options={{
          format: "dd/MM/YYYY",
          ampm: false,
          clearable: true
        }}
        validate={required()}
      />
      <DateInput
        label="Data do fim"
        source="data_fim"
        options={{
          format: "dd/MM/YYYY",
          ampm: false,
          clearable: true
        }}
        validate={required()}
      />

      <TextInput label="Local" source="local" />
    </SimpleForm>
  </Create>
);

export default EventoCreate;
