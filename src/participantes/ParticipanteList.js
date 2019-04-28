import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import BooleanCustomField from "../custom/BooleanCustomField";
const ParticipanteList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="isAdmin" />
      <BooleanCustomField source="isAdmin" />
      <TextField source="username" />
      <TextField source="password" type="password" />
    </Datagrid>
  </List>
);

export default ParticipanteList;
