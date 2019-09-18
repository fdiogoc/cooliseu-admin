import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import BooleanCustomField from "../custom/BooleanCustomField";
const PalestranteList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <EmailField source="email" />

      <BooleanCustomField source="isAdmin" />
      <TextField source="username" />
    </Datagrid>
  </List>
);

export default PalestranteList;
