import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBAblR36pFmpEiTqZjNBRmNlY46vE8DtS0",
    authDomain: "proyecto-78-c5574.firebaseapp.com",
    projectId: "proyecto-78-c5574",
    storageBucket: "proyecto-78-c5574.appspot.com",
    messagingSenderId: "153631274275",
    appId: "1:153631274275:web:e20c1c5ddfc6d05c97c896"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


