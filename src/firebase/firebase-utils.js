import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDfVQxEbqZ6sLKnWsjPa6d2Xr52J6dS4Ck',
  authDomain: 'crwn-db-59d1f.firebaseapp.com',
  databaseURL: 'https://crwn-db-59d1f.firebaseio.com',
  projectId: 'crwn-db-59d1f',
  storageBucket: 'crwn-db-59d1f.appspot.com',
  messagingSenderId: '189538657927',
  appId: '1:189538657927:web:df4581ad8b67ac3c6a3a22',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
