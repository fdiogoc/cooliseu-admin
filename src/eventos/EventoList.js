import React from "react";
import { List, Datagrid, TextField } from "react-admin";

import { ColorField } from "react-admin-color-input";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <TextField source="local" />

      <ColorField label="Cor" source="cor" />
    </Datagrid>
  </List>
);

export default UserList;
