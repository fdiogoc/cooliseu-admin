import React from "react";
import {
  Edit,
  SimpleForm,
  required,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  FormDataConsumer
} from "react-admin";

import HorarioFromId from "./HorarioFromId";

export const AgendaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput
        label="Evento"
        source="eventoId"
        reference="eventos"
        resource="eventos"
        validate={required()}
      >
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        label="Participante"
        source="participanteId"
        reference="participantes"
        resource="participantes"
        validate={required()}
      >
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
                validate={required()}
              >
                <SelectInput optionText="nome" />
              </ReferenceInput>
            );
          }
        }}
      </FormDataConsumer>

      <HorarioFromId />
    </SimpleForm>
  </Edit>
);

export default AgendaEdit;
