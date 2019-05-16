import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Datagrid,
  FormDataConsumer,
  TextField,
  SelectInput,
  ArrayField,
  SingleFieldList,
  ChipField
} from "react-admin";
import { AvailableTimeComp } from "../ra-available-times/AvailableTimes";
import SalaReferenceInput from "../custom/SalaReferenceInput";

class AgendaFill extends React.Component {
  render() {
    return (
      <div>
        <ReferenceInput
          label="Sala"
          source="salaId"
          reference="salas"
          resource="salas"
        >
          <SelectInput optionText="nome" />
        </ReferenceInput>
      </div>
    );
  }
}

export default AgendaFill;
