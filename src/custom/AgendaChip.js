import React, { Fragment } from "react";
import { ArrayField, SingleFieldList, Link, Button } from "react-admin";
import get from "lodash/get";

import Chip from "@material-ui/core/Chip";

import classnames from "classnames";

const ChipField2 = ({
  className,
  classes = {},
  source,
  record = {},
  res,
  isTaken = get(record, "isTaken"),
  horarioId = get(record, "id"),
  ...rest
}) => {
  console.log(res);
  return (
    <Button
      component={Link}
      to={{
        pathname: isTaken ? "" : "/agendas/create",
        state: {
          record: { eventoId: res.eventoId, salaId: res.id, horario: horarioId }
        }
      }}>
      <Chip
        className={classnames(classes.chip, className)}
        label={get(record, source)}
        style={{
          backgroundColor: isTaken ? "#ff0000" : "#009900"
        }}
      />
    </Button>
  );
};
const AgendaChip = props => (
  <Fragment>
    <ArrayField {...props} source="horarios">
      <SingleFieldList>
        <ChipField2 source="dataString" res={props.record} />
      </SingleFieldList>
    </ArrayField>
  </Fragment>
);

export default AgendaChip;
