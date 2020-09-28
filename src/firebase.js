// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsGTV3geFBuA1CmMtswCJFFjJvkhNgfMg",
    authDomain: "slack-clone-app-ce2f2.firebaseapp.com",
    databaseURL: "https://slack-clone-app-ce2f2.firebaseio.com",
    projectId: "slack-clone-app-ce2f2",
    storageBucket: "slack-clone-app-ce2f2.appspot.com",
    messagingSenderId: "541959018207",
    appId: "1:541959018207:web:d6cb07c240947fd2ddfb6a",
    measurementId: "G-VTZVG5YNMC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;