import React, { Fragment } from "react";
import { Field } from "redux-form";
import {
  ReferenceInput,
  SelectInput,
  ArrayField,
  Datagrid,
  TextField
} from "react-admin";

import SalaQuickCreateButton from "./SalaQuickCreateButton";

const SalaReferenceInput = props => (
  <Fragment>
    <ReferenceInput {...props}>
      <SelectInput optionText="nome" />
    </ReferenceInput>

    <SalaQuickCreateButton />
  </Fragment>
);

export default SalaReferenceInput;
