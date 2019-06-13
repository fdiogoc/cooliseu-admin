import React, { Fragment } from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField
} from "react-admin";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AgendaChip from "../custom/AgendaChip";
const CreateRelatedCommentButton = ({ record }) => {
  return (
    <Button
      component={Link}
      to={{
        pathname: "/agendas/create",
        state: { record: { eventoId: record.eventoId, salaId: record.id } }
      }}
    >
      Agendar
    </Button>
  );
};

const SalaList = props => (
  <Fragment>
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="nome" />
        <ReferenceField
          source="participanteId"
          reference="participantes"
          label="Organizador"
        >
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
