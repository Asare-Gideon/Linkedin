import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyBTGQTBoRdBPOBL2gkWT_RZNnIQ_nB_amA",
    authDomain: "linkin-project.firebaseapp.com",
    projectId: "linkin-project",
    storageBucket: "linkin-project.appspot.com",
    messagingSenderId: "628798282930",
    appId: "1:628798282930:web:5b1b2437aa5d3719213dab",
    measurementId: "G-SFG3CZ21W8"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();

  const auth = app.auth();

  export {db,auth};
  
  
