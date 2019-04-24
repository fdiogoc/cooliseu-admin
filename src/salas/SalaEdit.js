import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DisabledInput,
  SelectInput
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";

const SalaTitle = ({ record }) => {
  return <span>Sala {record ? ` - ${record.nome}` : ""}</span>;
};

const SalaEdit = props => (
  <Edit title={<SalaTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput label="Nome" source="nome" />

      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" label="Evento" />
      </ReferenceInput>

      <AvailableTimeComp source="horarios" />
    </SimpleForm>
  </Edit>
);

export default SalaEdit;
