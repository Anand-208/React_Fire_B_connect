import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAbaUKMpUpWtAIfxyPNaT-gV7hqXmARsj0",
    authDomain: "webreactapp-e65fb.firebaseapp.com",
    projectId: "webreactapp-e65fb",
    storageBucket: "webreactapp-e65fb.appspot.com",
    messagingSenderId: "846499892381",
    appId: "1:846499892381:web:7e92ab318bd9cca9d2d874",
    measurementId: "G-LNYQF0Z4ED"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  export default database;