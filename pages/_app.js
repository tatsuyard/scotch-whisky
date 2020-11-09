import "../styles/globals.css";
import firebase from "firebase/app";
import initFirebase from "../firebase/init";

initFirebase();
const db = firebase.firestore();

function MyApp({ Component, pageProps }) {
  const params = { db };
  return <Component {...pageProps} {...params} />;
}

export default MyApp;
