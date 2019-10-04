import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ImageInput,
  ImageField,
  DateInput,
  DateField,
  EditController,
  EditView
} from "react-admin";

import { ColorInput } from "react-admin-color-input";

import { DateTimeInput } from "react-admin-date-inputs";
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

            <DateTimeInput
              label="Data"
              source="data_inicio"
              format={(v) => {
                if (typeof v.toDate === "function") return v.toDate();
              }}
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
        </EditView>
      );
    }}
  </EditController>
);

export default EventEdit;
