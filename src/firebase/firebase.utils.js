import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7yKLqMWdq5tqxaeLt4TPFo1_ead8_YuM",
  authDomain: "crwn-db-a1714.firebaseapp.com",
  databaseURL: "https://crwn-db-a1714.firebaseio.com",
  projectId: "crwn-db-a1714",
  storageBucket: "",
  messagingSenderId: "385563154806",
  appId: "1:385563154806:web:9f494bb82c9eb21d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;