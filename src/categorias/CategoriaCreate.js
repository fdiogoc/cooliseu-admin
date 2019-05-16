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

const onChangeForm = event => {
  debugger;
  console.log(event);
};

const CategoriaCreate = ({ onCancel, ...props }) => (
  <Create title="" {...props}>
    <SimpleForm
      toolbar={<TagCreateToolbar onCancel={onCancel} onChange={onChangeForm} />}
    >
      <ReferenceInput source="eventoId" reference="eventos">
        <SelectInput optionText="nome" label="Evento" />
      </ReferenceInput>
      <SalaHorarioReferenceInput source="salaId" reference="salas">
        <SelectInput optionText="nome" label="Sala" />
      </SalaHorarioReferenceInput>
      <ReferenceInput
        source="participanteId"
        reference="participantes"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <AvailableTimeComp source="horarios" />
    </SimpleForm>
  </Create>
);

export default CategoriaCreate;
