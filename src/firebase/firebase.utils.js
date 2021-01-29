import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfMGrXRTLtT3hWr1KJRL0RG8jUrURENF0",
    authDomain: "trend-clothing-db.firebaseapp.com",
    projectId: "trend-clothing-db",
    storageBucket: "trend-clothing-db.appspot.com",
    messagingSenderId: "94498402225",
    appId: "1:94498402225:web:98f74796d8092f8389d790",
    measurementId: "G-169LYZLXF2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;