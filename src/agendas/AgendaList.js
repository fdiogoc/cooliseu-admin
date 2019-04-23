import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";
import BooleanCustomField from "../custom/BooleanCustomField";
const AgendaList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />
      <ReferenceField source="salaId" reference="salas">
        <TextField source="nome" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default AgendaList;
