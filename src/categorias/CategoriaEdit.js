import React from "react";
import {
  Edit,
  TextInput,
  SimpleForm,
  required,
  SaveButton,
  Toolbar,
  translate,
  DisabledInput
} from "react-admin";
import Button from "@material-ui/core/Button";

const TagCreateToolbar = translate(({ onCancel, translate, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
    <Button onClick={onCancel}>{translate("ra.action.cancel")}</Button>
  </Toolbar>
));

const CategoriaEdit = ({ onCancel, ...props }) => (
  <Edit title="" {...props}>
    <SimpleForm toolbar={<TagCreateToolbar onCancel={onCancel} />}>
      <DisabledInput source="id" />
      <TextInput label="Nome" source="desc" />
    </SimpleForm>
  </Edit>
);

export default CategoriaEdit;
