import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField
} from "react-admin";
import BooleanCustomField from "../custom/BooleanCustomField";
const SalaList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />
      <ArrayField source="horarios">
        <SingleFieldList>
          <ChipField source="date" />
        </SingleFieldList>
      </ArrayField>
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default SalaList;
