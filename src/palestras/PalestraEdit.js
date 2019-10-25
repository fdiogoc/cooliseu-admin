import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

import { DateInput, TimeInput, DateTimeInput } from "react-admin-date-inputs";
const dateFormatter = (v) => {
  if (typeof v.toLocaleString === "function") {
    if (v.constructor.name == "Timestamp") {
      return v.toDate();
    }
    return new Date(v);
  }
  if (v !== undefined) {
    const dataISO = new Date(v.toDate()).toLocaleString();
    return dataISO;
  }
};

const dateParser = (v) => {
  if (v == undefined) {
    return;
  }
  if (typeof v.toLocaleString === "function") {
    if (v.constructor.name == "Timestamp") {
      return v.toDate();
    }
    return new Date(v);
  }
  if (v !== undefined) {
    const dataISO = new Date(v.toDate()).toLocaleString();
    return dataISO;
  }
};

export const PalestraEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="tema" />
      <TextInput source="tema2" />
      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <ReferenceInput source="palestranteId" reference="palestrantes">
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <DisabledInput format={dateFormatter} parse={dateParser} source="data" />

      <DateTimeInput
        format={dateFormatter}
        parse={dateParser}
        source="data"
        label="Data"
        options={{
          format: "dd/MM/YYYY, HH:mm:ss",
          ampm: false,
          clearable: true
        }}
      />
    </SimpleForm>
  </Edit>
);

export default PalestraEdit;
