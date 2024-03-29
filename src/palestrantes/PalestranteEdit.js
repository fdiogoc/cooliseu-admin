import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  ImageInput,
  ImageField,
  ReferenceInput,
  SelectInput,
  required,
  LongTextInput
} from "react-admin";

const PalestranteTitle = ({ record }) => {
  return <span>Palestrante {record ? ` - ${record.nome}` : ""}</span>;
};

const PalestranteEdit = (props) => (
  <Edit title={<PalestranteTitle />} {...props}>
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
      <LongTextInput source="descricao" />
      <ImageInput source="image" label="Foto" accept="image/*" multiple>
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default PalestranteEdit;
