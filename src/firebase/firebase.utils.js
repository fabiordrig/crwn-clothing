import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBv8V3Zq8FHEG2_FAsli0CenmoFiXJld3Q",
  authDomain: "crwn-db-9c21f.firebaseapp.com",
  databaseURL: "https://crwn-db-9c21f.firebaseio.com",
  projectId: "crwn-db-9c21f",
  storageBucket: "crwn-db-9c21f.appspot.com",
  messagingSenderId: "33381838092",
  appId: "1:33381838092:web:bad9380a7680b1d9d3ad29",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
