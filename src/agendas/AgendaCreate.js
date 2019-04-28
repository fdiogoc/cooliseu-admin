import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceManyField,
  TextInput,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  Datagrid,
  ReferenceField,
  TextField
} from "react-admin";

const SalaCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />

      <ReferenceInput source="salaId" reference="salas">
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <ReferenceInput source="participanteId" reference="participantes">
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <ReferenceManyField
        label="Salas"
        reference="salas"
        target="participanteId"
        source="participanteId"
      >
        <Datagrid>
          <TextField source="participanteId" />
          <ReferenceField source="participanteId" reference="participantes">
            <TextField optionText="nome" />
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Create>
);

export default SalaCreate;
