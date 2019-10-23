import React from "react";
import {
  TextInput,
  DisabledInput,
  ImageInput,
  ImageField,
  EditController,
  EditView,
  FormTab,
  TabbedForm,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";

import { ColorInput } from "react-admin-color-input";
import { DateInput } from "react-admin-date-inputs";
import RichTextInput from "ra-input-rich-text";

import brLocale from "date-fns/locale/pt-br";
import DateFnsUtils from "@date-io/date-fns";

const EventoTitle = ({ record }) => {
  return <span>Evento {record ? ` - ${record.nome}` : ""}</span>;
};

const EventEdit = (props) => (
  <EditController {...props}>
    {(controllerProps) => {
      console.log(controllerProps);

      return (
        <EditView title={<EventoTitle />} {...props} {...controllerProps}>
          <TabbedForm>
            <FormTab label="Principal">
              <DisabledInput source="id" />
              <TextInput label="Nome" source="nome" />

              <DateInput
                label="Data do inicio"
                options={{ format: "dd/MM/yyyy" }}
                source="data_inicio"
                format={(v) => {
                  if (v) {
                    if (typeof v.toDate === "function" || v !== undefined)
                      return v.toDate();
                  }
                }}
              />
              <DateInput
                label="Data do fim"
                options={{ format: "dd/MM/yyyy" }}
                source="data_fim"
                format={(v) => {
                  if (v) {
                    if (typeof v.toDate === "function" || v !== undefined)
                      return v.toDate();
                  }
                }}
                providerOptions={{ utils: DateFnsUtils, locale: brLocale }}
              />

              <TextInput label="Local" source="local" />
            </FormTab>
            <FormTab label="Site">
              <RichTextInput source="descricao" />
              <ColorInput label="Cor" source="cor" />
              <ImageInput
                source="image"
                label="Imagem Hero"
                accept="image/*"
                multiple
              >
                <ImageField source="src" title="title" />
              </ImageInput>
            </FormTab>

            <FormTab label="Categorias">
              <ArrayInput source="categorias">
                <SimpleFormIterator>
                  <TextInput label="Descrição" source="desc" />
                </SimpleFormIterator>
              </ArrayInput>
            </FormTab>
          </TabbedForm>
        </EditView>
      );
    }}
  </EditController>
);

export default EventEdit;
