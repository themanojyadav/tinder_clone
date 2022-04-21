import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0SwEwrqnwt8U73NX2HQm2a7YRYe1Tuo",
  authDomain: "tinder-clone-32e83.firebaseapp.com",
  databaseURL: "https://tinder-clone-32e83-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-32e83",
  storageBucket: "tinder-clone-32e83.appspot.com",
  messagingSenderId: "702430886689",
  appId: "1:702430886689:web:94aa7f88e5050058719c60",
  measurementId: "G-MJ3BQDW7H3"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;