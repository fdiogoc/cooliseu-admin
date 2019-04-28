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
          <ChipField source="dataString" />
        </SingleFieldList>
      </ArrayField>
      <ReferenceField source="participanteId" reference="participantes">
        <TextField source="nome" />
      </ReferenceField>
      <ReferenceField source="eventoId" reference="eventos">
        <TextField source="nome" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export default SalaList;
