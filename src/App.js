import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import dataProviderNaga from "./dataProviderNaga";

import participantes from "./participantes";
import eventos from "./eventos";
import salas from "./salas";
import agendas from "./agendas";
import categorias from "./categorias";
import { Layout } from "./layout";
import customRoutes from "./customRoutes";

import portugueseMessages from "ra-language-portuguese";

const messages = {
  pt: portugueseMessages
};
const i18nProvider = locale => messages[locale];

const theme = createMuiTheme({
  palette: {
    primary: { main: "#32ae8e", contrastText: "#ffffff" },
    secondary: { main: "#053a41" }
  }
});

const App = () => (
  <Admin
    locale="pt"
    i18nProvider={i18nProvider}
    theme={theme}
    authProvider={authProvider}
    dataProvider={dataProviderNaga}
    appLayout={Layout}>
    <Resource name="participantes" {...participantes} />
    <Resource name="eventos" {...eventos} />
    <Resource name="salas" {...salas} />
    <Resource name="agendas" {...agendas} />

    <Resource name="horarios" />
  </Admin>
);

export default App;
