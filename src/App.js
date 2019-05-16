import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

import {
  RestProvider,
  base64Uploader
} from "ra-data-firestore-client-naggertooth";

import dataProvider from "./dataProvider";

import participantes from "./participantes";
import eventos from "./eventos";
import salas from "./salas";
import agendas from "./agendas";
import categorias from "./categorias";
import { Layout } from "./layout";
import customRoutes from "./customRoutes";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#32ae8e", contrastText: "#ffffff" },
    secondary: { main: "#053a41" }
  }
});

const App = () => (
  <Admin theme={theme} dataProvider={dataProvider} appLayout={Layout}>
    <Resource name="participantes" {...participantes} />
    <Resource name="eventos" {...eventos} />
    <Resource name="salas" {...salas} />
    <Resource name="agendas" {...agendas} />
    <Resource name="categorias" {...categorias} />
  </Admin>
);

export default App;
