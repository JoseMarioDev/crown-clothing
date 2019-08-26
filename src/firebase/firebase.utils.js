import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCODvAxbx2MchmtuDD73YuJrTXzJ-pQeZI',
  authDomain: 'crown-db-9a25b.firebaseapp.com',
  databaseURL: 'https://crown-db-9a25b.firebaseio.com',
  projectId: 'crown-db-9a25b',
  storageBucket: '',
  messagingSenderId: '554026630743',
  appId: '1:554026630743:web:5fb0d5e15e28027e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
