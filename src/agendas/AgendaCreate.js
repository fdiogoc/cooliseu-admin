import React from "react";
import {
  Create,
  SimpleForm,
  FormDataConsumer,
  SelectInput,
  required,
  ReferenceInput
} from "react-admin";

import HorarioSalaList from "./HorarioSalaList";

const customOnChange = event => {
  if (event.salaId) {
  }
};

const AgendaCreate = props => (
  <Create {...props}>
    <SimpleForm onChange={customOnChange} redirect="/agendas">
      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}>
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        label="Participante"
        source="participanteId"
        reference="participantes"
        resource="participantes"
        validate={required()}>
        <SelectInput optionText="nome" />
      </ReferenceInput>

      <FormDataConsumer>
        {({ formData, ...rest }) => {
          if (formData.eventoId) {
            return (
              <ReferenceInput
                label="Sala"
                source="salaId"
                reference="salas"
                resource="salas"
                filter={{ eventoId: formData.eventoId }}
                validate={required()}>
                <SelectInput optionText="nome" />
              </ReferenceInput>
            );
          }
        }}
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) => {
          if (formData.salaId) {
            return <HorarioSalaList record={formData} />;
          }
        }}
      </FormDataConsumer>
    </SimpleForm>
  </Create>
);

export default AgendaCreate;
