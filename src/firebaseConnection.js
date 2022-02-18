import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBvU3eVKFChn-jDsB5SbTXz51wNqNl7lzc",
    authDomain: "aprendendofirebase1-a8901.firebaseapp.com",
    projectId: "aprendendofirebase1-a8901",
    storageBucket: "aprendendofirebase1-a8901.appspot.com",
    messagingSenderId: "871368062130",
    appId: "1:871368062130:web:e6e68c001e8ca192fec5ab",
    measurementId: "G-QRW8BZ9FZM"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

