
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEd9Pb8fJhaZyeTPBzfahUal3l70xjZ04",
  authDomain: "clone-97bbb.firebaseapp.com",
  projectId: "clone-97bbb",
  storageBucket: "clone-97bbb.appspot.com",
  messagingSenderId: "537358379536",
  appId: "1:537358379536:web:504fb08948da031c523895",
  measurementId: "G-50TV2Q3WFR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };