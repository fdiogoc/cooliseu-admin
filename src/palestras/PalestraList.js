import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

const PalestraList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="tema" />

      <ReferenceField source="eventoId" reference="eventos">
        <TextField source="nome" />
      </ReferenceField>
      <ReferenceField source="palestranteId" reference="palestrantes">
        <TextField source="nome" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default PalestraList;
