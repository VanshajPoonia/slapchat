// import firebaseConfig from './firebaseAPI'
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFDb2bM7hsy7Wg6Hvf4wMvqj6ZJKRUT8",
  authDomain: "snapchat-12dbe.firebaseapp.com",
  projectId: "snapchat-12dbe",
  storageBucket: "snapchat-12dbe.appspot.com",
  messagingSenderId: "538475960372",
  appId: "1:538475960372:web:d98605221868e2afa8d261",
  measurementId: "G-JWRLK9M7YS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// popup auth is done by provider
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
