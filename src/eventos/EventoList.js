import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <TextField source="local" />
      <DateField soruce="data_inicio" />
    </Datagrid>
  </List>
);

export default UserList;
