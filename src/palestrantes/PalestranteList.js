import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField
} from "react-admin";

const PalestranteList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <EmailField source="email" />

      <ReferenceField source="eventoId" reference="eventos">
        <TextField source="nome" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default PalestranteList;
