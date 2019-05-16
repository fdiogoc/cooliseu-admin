import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  CardActions,
  CreateButton
} from "react-admin";

const SalaList = props => (
  <Fragment>
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
  </Fragment>
);

export default SalaList;
