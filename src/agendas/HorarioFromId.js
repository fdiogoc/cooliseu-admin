import React from "react";
import { LinearProgress, Query, TextField } from "react-admin";

const HorarioFromId = ({ record = {} }) => {
  return (
    <Query type="GET_ONE" resource="salas" payload={{ id: record.salaId }}>
      {({ data, loading, error }) => {
        console.log(record);
        if (data ? data.horarios : false) {
          var filtered = data.horarios.filter(function(value) {
            return value.id === record.horario;
          });
        }

        if (loading) {
          return <LinearProgress />;
        }
        if (error) {
          return <p>ERROR</p>;
        }
        return <div>{filtered[0].dataString}</div>;
      }}
    </Query>
  );
};

export default HorarioFromId;
