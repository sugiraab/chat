// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmdwq86SN0Rf3kZ_fb6WJj2EC_gvCJegw",
    authDomain: "jirem-a1491.firebaseapp.com",
    databaseURL: "https://jirem-a1491.firebaseio.com",
    projectId: "jirem-a1491",
    storageBucket: "jirem-a1491.appspot.com",
    messagingSenderId: "810476728844",
    appId: "1:810476728844:web:da46708002476e6e243429",
    measurementId: "G-DSHLW35ZZH"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore;
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features

