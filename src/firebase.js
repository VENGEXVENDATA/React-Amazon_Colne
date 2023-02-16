import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAFzrOXmsnIei9XtfnhgnYtnUx8Zys4J78",
  authDomain: "clone-8f4a7.firebaseapp.com",
  projectId: "clone-8f4a7",
  storageBucket: "clone-8f4a7.appspot.com",
  messagingSenderId: "118440528614",
  appId: "1:118440528614:web:203101863169c26f418927",
  measurementId: "G-Y7FDB606EX"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};
