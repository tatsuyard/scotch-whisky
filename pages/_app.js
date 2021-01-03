import "../styles/globals.css";
import './styles.css'
import firebase from "firebase/app";
import initFirebase from "../firebase/init";
import { AuthProvider } from '../components/Auth';

initFirebase();
const db = firebase.firestore();

function MyApp({ Component, pageProps }) {
  const params = { db };
  return (
    <AuthProvider>
      <Component {...pageProps} {...params} />
    </AuthProvider>
  );
}

export default MyApp;
