import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DisabledInput,
  ReferenceInput,
  required,
  SelectInput,
  FormDataConsumer,
  DateTimeInput,
  LongTextInput
} from "react-admin";

const PalestraCreate = (props) => (
  <Create {...props} label="Criar">
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
      <FormDataConsumer>
        {({ formData, ...rest }) => {
          if (formData.eventoId) {
            return (
              <ReferenceInput
                label="Palestrante"
                source="palestranteId"
                reference="palestrantes"
                resource="palestrantes"
                filter={{ eventoId: formData.eventoId }}
                validate={required()}
              >
                <SelectInput optionText="nome" />
              </ReferenceInput>
            );
          }
        }}
      </FormDataConsumer>
      <DateTimeInput
        label="Data"
        source="data"
        options={{
          format: "dd/MM/YYYY, HH:mm:ss",
          ampm: false,
          clearable: true
        }}
      />
      <TextInput source="tema" />
      <LongTextInput source="descricao" />
    </SimpleForm>
  </Create>
);

export default PalestraCreate;
