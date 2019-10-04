import React from "react";
import {
  SimpleForm,
  TextInput,
  DisabledInput,
  ImageInput,
  ImageField,
  DateField,
  EditController,
  EditView
} from "react-admin";

import { ColorInput } from "react-admin-color-input";
import { DateInput } from "react-admin-date-inputs";
import RichTextInput from "ra-input-rich-text";

const EventTitle = ({ record }) => {
  return <span>Evento {record ? ` - ${record.nome}` : ""}</span>;
};
const myDateField = ({ source, record = {} }) => {
  console.log(record);
  let validDate = record[source].toDate();
  return <DateField source={validDate} showTime />;
};

const EventEdit = (props) => (
  <EditController {...props}>
    {(controllerProps) => {
      console.log(controllerProps);

      return (
        <EditView {...props} {...controllerProps}>
          <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="Nome" source="nome" />

            <DateInput
              label="Data do inicio"
              source="data_inicio"
              format={(v) => {
                if (v) {
                  if (typeof v.toDate === "function" || v !== undefined)
                    return v.toDate();
                }
              }}
              options={{
                format: "dd/MM/YYYY",
                ampm: false,
                clearable: true
              }}
            />
            <DateInput
              label="Data do fim"
              source="data_fim"
              format={(v) => {
                if (v) {
                  if (typeof v.toDate === "function" || v !== undefined)
                    return v.toDate();
                }
              }}
              options={{
                format: "dd/MM/YYYY",
                ampm: false,
                clearable: true
              }}
            />

            <TextInput label="Local" source="local" />
            <RichTextInput source="descricao" />
            <ColorInput label="Cor" source="cor" />
            <ImageInput
              source="image"
              label="Imagem Hero"
              accept="image/*"
              multiple
            >
              <ImageField source="src" title="event_image" />
            </ImageInput>
          </SimpleForm>
        </EditView>
      );
    }}
  </EditController>
);

export default EventEdit;
