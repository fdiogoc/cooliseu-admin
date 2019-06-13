import React, { Fragment } from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";
import get from "lodash/get";
import HorarioFromId from "./HorarioFromId";
const AgendaList = props => (
  <Fragment>
    <List {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField source="salaId" reference="salas">
          <TextField source="nome" />
        </ReferenceField>

        <ReferenceField source="participanteId" reference="participantes">
          <TextField source="nome" />
        </ReferenceField>
        <ReferenceField source="eventoId" reference="eventos">
          <TextField source="nome" />
        </ReferenceField>
        <HorarioFromId />
      </Datagrid>
    </List>
  </Fragment>
);

export default AgendaList;
