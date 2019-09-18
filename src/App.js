import React from "react";
import { Admin, Resource } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

import authProvider from "./authProvider";

import dataProviderNaga from "./dataProviderNaga";

import participantes from "./participantes";
import eventos from "./eventos";
import salas from "./salas";
import agendas from "./agendas";
import palestrantes from "./palestrantes";
import palestras from "./palestras";
import { Layout } from "./layout";

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
    {permissions => [
      permissions === "admin" ? (
        <Resource name="participantes" {...participantes} />
      ) : null,
      permissions === "admin" ? <Resource name="eventos" {...eventos} /> : null,
      permissions === "admin" ? (
        <Resource name="participantes" {...participantes} />
      ) : null,
      <Resource name="horarios" />,
      <Resource name="salas" {...salas} />,
      <Resource name="agendas" {...agendas} />,
      <Resource name="palestrantes" {...palestrantes} />,
      <Resource name="palestras" {...palestras} />
    ]}
  </Admin>
);

export default App;
