import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  ImageInput,
  ImageField
} from "react-admin";

import { DateInput } from "react-admin-date-inputs";
import { ColorInput } from "react-admin-color-input";
import RichTextInput from "ra-input-rich-text";

const EventoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <TextInput label="Nome" source="nome" />

      <DateInput
        label="Data"
        source="data_inicio"
        options={{
          format: "dd/MM/YYYY",
          ampm: false,
          clearable: true
        }}
      />
      <DateInput
        label="Data"
        source="data_fim"
        options={{
          format: "dd/MM/YYYY",
          ampm: false,
          clearable: true
        }}
      />

      <TextInput label="Local" source="local" />
      <RichTextInput source="descricao" />
      <ColorInput label="Cor" source="cor" />
      <ImageInput source="image" label="Imagem Hero" accept="image/*" multiple>
        <ImageField source="src" title="event_image" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export default EventoCreate;
