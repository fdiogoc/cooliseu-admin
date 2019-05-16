import React, { Component } from "react";
import {
  ReferenceInput,
  SelectInput,
  ArrayField,
  Datagrid,
  TextField
} from "react-admin";

Class CustomHorario extends Component{
    render(){
        return(
            <div>
                    <div>
                        <FormDataConsumer>
                        {({ formData, ...rest }) => (
                            formData.protocolo !== "ip" ?
                            <TextInput source="porta" label="Porta" validate={validaPorta} />
                            : null
                        )}
                        </FormDataConsumer>
                    </div>

      <ReferenceInput source="salaId" reference="salas" resource="salas">
        <SelectInput optionText="nome" label="Evento" />
      </ReferenceInput>
            <ReferenceInput source="salaId" reference="salas" resource="salas">
        <SelectInput optionText="horario.start" label="Evento" />
      </ReferenceInput>

   

                </div>
        );
    }
}