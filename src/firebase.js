import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBWONiS5OBbp4_9wjSp6Cb0da34jIdnh7c",
    authDomain: "clone-c36f2.firebaseapp.com",
    databaseURL: "https://clone-c36f2.firebaseio.com",
    projectId: "clone-c36f2",
    storageBucket: "clone-c36f2.appspot.com",
    messagingSenderId: "994129266997",
    appId: "1:994129266997:web:497d97d5dc42bce5ee247c",
    measurementId: "G-MZ80BXZM5X"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }