import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  DateInput,
  ImageInput,
  ImageField
} from "react-admin";

import { DateTimeInput, TimeInput } from "react-admin-date-inputs";
import { ColorInput } from "react-admin-color-input";

const EventoCreate = (props) => (
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
      <ColorInput label="Cor" source="cor" />
      <ImageInput
        source="image"
        label="Related Image"
        accept="image/*"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default EventoCreate;
