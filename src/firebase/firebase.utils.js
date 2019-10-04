import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAJ6L76nR0mkWXToCpyxqT49LOoyX8MGqQ",
  authDomain: "crwn-db-f6cc5.firebaseapp.com",
  databaseURL: "https://crwn-db-f6cc5.firebaseio.com",
  projectId: "crwn-db-f6cc5",
  storageBucket: "",
  messagingSenderId: "1082635607757",
  appId: "1:1082635607757:web:228562f9b1e453af251384",
  measurementId: "G-TGC0ZG4HXZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

