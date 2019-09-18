import {
  RestProvider,
  base64Uploader
} from "ra-data-firestore-client-naggertooth";

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
  { name: "palestrantes", isPublic: true },
  { name: "palestras", isPublic: true },
  { name: "eventos", isPublic: true },
  { name: "salas", isPublic: true },
  { name: "agendas", isPublic: true }
];

export default base64Uploader(
  RestProvider(firebaseConfig, { trackedResources })
);
