import React, { Fragment } from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

import AgendaChip from "../custom/AgendaChip";

const SalaList = props => (
  <Fragment>
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="nome" />
        <ReferenceField
          source="participanteId"
          reference="participantes"
          label="Organizador">
          <TextField source="nome" />
        </ReferenceField>
        <ReferenceField source="eventoId" reference="eventos">
          <TextField source="nome" />
        </ReferenceField>

        <AgendaChip />
      </Datagrid>
    </List>
  </Fragment>
);

export default SalaList;
