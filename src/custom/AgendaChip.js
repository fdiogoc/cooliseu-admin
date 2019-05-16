import React, { Fragment } from "react";
import { Field } from "redux-form";
import { ArrayField, SingleFieldList, ChipField } from "react-admin";

import AgendamentoButton from "./AgendamentoButton";

const AgendaChip = props => (
  <Fragment>
    <ArrayField {...props} source="horarios">
      <SingleFieldList>
        <ChipField source="dataString" />
      </SingleFieldList>
    </ArrayField>
    <AgendamentoButton />
  </Fragment>
);

export default AgendaChip;
