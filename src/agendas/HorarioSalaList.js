import React from "react";
import { Loading, Query, SelectInput, ChipField } from "react-admin";

const HorarioSalaList = ({ record = {} }) => (
  <Query type="GET_ONE" resource="salas" payload={{ id: record.salaId }}>
    {({ data, total, loading, error }) => {
      if (loading) {
        return <Loading />;
      }
      if (error) {
        return <p>ERROR</p>;
      }
      return (
        <div>
          <SelectInput
            choices={data.horarios}
            optionText="dataString"
            optionValue="dataString"
          />
          <ul>
            {data.horarios.map(user => (
              <li key={user.dataString}>{user.dataString}</li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default HorarioSalaList;
