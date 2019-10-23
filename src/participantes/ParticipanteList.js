import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  ChipField
} from "react-admin";
import BooleanCustomField from "../custom/BooleanCustomField";
const ParticipanteList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <EmailField source="email" />

      <ReferenceField source="eventoId" reference="eventos">
        <TextField source="nome" />
      </ReferenceField>
      <ChipField source="tipo" />
    </Datagrid>
  </List>
);

export default ParticipanteList;
