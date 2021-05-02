import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDjcyIpPtBfspIruQuXO_YkrPmuQEl1YPY",
    authDomain: "book-santa-49550.firebaseapp.com",
    projectId: "book-santa-49550",
    storageBucket: "book-santa-49550.appspot.com",
    messagingSenderId: "421194950770",
    appId: "1:421194950770:web:6d997aefc1181849fa3aeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();