import React from "react";
import { Loading, Query, required, RadioButtonGroupInput } from "react-admin";

const HorarioSalaList = ({ record = {} }) => {
  return (
    <Query type="GET_ONE" resource="salas" payload={{ id: record.salaId }}>
      {({ data, loading, error }) => {
        if (data ? data.horarios : false) {
          var filtered = data.horarios.filter(function(value) {
            return value.isTaken === false;
          });
        }

        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <p>ERROR</p>;
        }
        return (
          <div>
            <RadioButtonGroupInput
              source="horario"
              choices={filtered}
              optionText="dataString"
              optionValue="id"
              validate={required()}
            />
          </div>
        );
      }}
    </Query>
  );
};

export default HorarioSalaList;
