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
  required
} from "react-admin";

const PalestranteTitle = ({ record }) => {
  return <span>Palestrante {record ? ` - ${record.name}` : ""}</span>;
};

const PalestranteEdit = (props) => (
  <Edit title={<PalestranteTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="nome" />
      <TextInput source="email" type="email" />
      <ImageInput source="foto" label="Foto" accept="image/*">
        <ImageField source="src" title="foto" />
      </ImageInput>
      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default PalestranteEdit;
