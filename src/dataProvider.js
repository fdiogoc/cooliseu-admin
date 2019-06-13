import { FirebaseDataProvider } from "react-admin-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5m8jKKZe5Mu969fTaJyxDAYxcCceIO_4",
  authDomain: "teste-react-admin.firebaseapp.com",
  databaseURL: "https://teste-react-admin.firebaseio.com",
  projectId: "teste-react-admin",
  storageBucket: "teste-react-admin.appspot.com",
  messagingSenderId: "278255466390"
};

export default FirebaseDataProvider(firebaseConfig);
