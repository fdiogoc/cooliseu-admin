import React from "react";
import {
  Create,
  TextInput,
  SimpleForm,
  required,
  SaveButton,
  Toolbar,
  translate,
  DisabledInput,
  ReferenceInput,
  SelectInput
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";
import SalaHorarioReferenceInput from "../custom/SalaHorarioReferenceInput";

import Button from "@material-ui/core/Button";

const TagCreateToolbar = translate(({ onCancel, translate, ...props }) => (
  <Toolbar {...props}>
    <SaveButton />
    <Button onClick={onCancel}>{translate("ra.action.cancel")}</Button>
  </Toolbar>
));

const onChangeForm = (event) => {
  debugger;
  console.log(event);
};

const CategoriaCreate = ({ onCancel, ...props }) => (
  <Create title="" {...props}>
    <SimpleForm
      toolbar={<TagCreateToolbar onCancel={onCancel} onChange={onChangeForm} />}
    >
      <TextInput label="Descrição" source="desc" />
    </SimpleForm>
  </Create>
);

export default CategoriaCreate;
