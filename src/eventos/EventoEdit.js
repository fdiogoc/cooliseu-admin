import React from "react";
import { Edit, SimpleForm, TextInput, DisabledInput } from "react-admin";

import { DateTimeInput } from "react-admin-date-inputs";
const EventTitle = ({ record }) => {
  return <span>Evento {record ? ` - ${record.nome}` : ""}</span>;
};

const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
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
  </Edit>
);

export default EventEdit;
