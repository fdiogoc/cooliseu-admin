import React, { Fragment } from "react";
import { ReferenceInput, SelectInput } from "react-admin";

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
