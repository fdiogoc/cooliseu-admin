import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

import {
  RestProvider,
  base64Uploader
} from "ra-data-firestore-client-naggertooth";

import participantes from "./participantes";
import eventos from "./eventos";
import salas from "./salas";
import agendas from "./agendas";
import { Layout } from "./layout";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#32ae8e", contrastText: "#ffffff" },
    secondary: { main: "#053a41" }
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyC5m8jKKZe5Mu969fTaJyxDAYxcCceIO_4",
  authDomain: "teste-react-admin.firebaseapp.com",
  databaseURL: "https://teste-react-admin.firebaseio.com",
  projectId: "teste-react-admin",
  storageBucket: "teste-react-admin.appspot.com",
  messagingSenderId: "278255466390"
};

const trackedResources = [
  { name: "participantes", isPublic: true },
  { name: "eventos", isPublic: true },
  { name: "salas", isPublic: true },
  { name: "agendas", isPublic: true }
];

const dataProvider = base64Uploader(
  RestProvider(firebaseConfig, { trackedResources })
);

const App = () => (
  <Admin theme={theme} dataProvider={dataProvider} appLayout={Layout}>
    <Resource name="participantes" {...participantes} />
    <Resource name="eventos" {...eventos} />
    <Resource name="salas" {...salas} />
    <Resource name="agendas" {...agendas} />
  </Admin>
);

export default App;
