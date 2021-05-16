import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAcZfDptoTTgpxa7ajE9ZHhauTOhpROwUA",
  authDomain: "clone-bab1f.firebaseapp.com",
  projectId: "clone-bab1f",
  storageBucket: "clone-bab1f.appspot.com",
  messagingSenderId: "579499843864",
  appId: "1:579499843864:web:be271408baaea84b6cbe6d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
