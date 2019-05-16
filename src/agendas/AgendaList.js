import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
  CardActions,
  CreateButton
} from "react-admin";
import { Route } from "react-router";
import AgendaEditSimple from "./AgendaEditSimple";
import AgendaChip from "../custom/AgendaChip";

const AgendaList = props => (
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
        <AgendaChip source="horarios" />
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

export default AgendaList;
