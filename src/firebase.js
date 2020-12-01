import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDnjOODTtb6wRz1esHkqyjoPoiZYccGQyI",
    authDomain: "e-clone-ccc0e.firebaseapp.com",
    databaseURL: "https://e-clone-ccc0e.firebaseio.com",
    projectId: "e-clone-ccc0e",
    storageBucket: "e-clone-ccc0e.appspot.com",
    messagingSenderId: "738389847434",
    appId: "1:738389847434:web:3e6a879fb5ca50d0bb6c73",
    measurementId: "G-39ETQ625YY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }