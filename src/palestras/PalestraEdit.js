import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

export const PalestraEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="tema" />
      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <ReferenceInput source="palestranteId" reference="palestrantes">
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default PalestraEdit;
