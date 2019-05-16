import React, { Fragment, Component } from "react";

import {
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
  TextInput
} from "react-admin";

import ChipListHorario from "./ChipListHorario";

class SalaHorarioReferenceInput extends Component {
  render() {
    return (
      <Fragment>
        <ReferenceInput {...this.props}>
          <SelectInput optionText="nome" />
        </ReferenceInput>

        <ChipListHorario {...this.props} />
      </Fragment>
    );
  }
}

export default SalaHorarioReferenceInput;
