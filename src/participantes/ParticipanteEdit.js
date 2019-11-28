import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  required,
  SelectInput
} from "react-admin";

const ParticipanteTitle = ({ record }) => {
  return <span>Participante {record ? ` - ${record.nome}` : ""}</span>;
};

const ParticipanteEdit = (props) => (
  <Edit title={<ParticipanteTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />
      <TextInput source="email" type="email" />
      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <SelectInput
        source="tipo"
        choices={[
          { id: "PRNC", name: "Rodada de negócio completo" },
          { id: "PRNS", name: "Rodada de negócio simples" },
          { id: "S", name: "Simples" }
        ]}
      />
    </SimpleForm>
  </Edit>
);

export default ParticipanteEdit;
