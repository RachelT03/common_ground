import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyIx77pmvZ1KXhRkZK0C_eYuBFV8mwzDk",
  authDomain: "bigredhacks-e9613.firebaseapp.com",
  databaseURL: "https://bigredhacks-e9613-default-rtdb.firebaseio.com",
  projectId: "bigredhacks-e9613",
  storageBucket: "bigredhacks-e9613.appspot.com",
  messagingSenderId: "54320418009",
  appId: "1:54320418009:web:3c56150edb8b6f97fb82c8",
  measurementId: "G-1LM2RN1EYX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
