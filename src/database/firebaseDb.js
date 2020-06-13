import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const url =
  'https://firebasestorage.googleapis.com/v0/b/blobtest-36ff6.appspot.com/o/Obsidian.jar?alt=media&token=93154b97-8bd9-46e3-a51f-67be47a4628a';


var firebaseConfig = {
    apiKey: "AIzaSyCXw-slDTbexJssI1VT8L0IzL87k51OImc",
    authDomain: "awesomeproject-c7d7a.firebaseapp.com",
    databaseURL: "https://awesomeproject-c7d7a.firebaseio.com",
    projectId: "awesomeproject-c7d7a",
    storageBucket: "awesomeproject-c7d7a.appspot.com",
    messagingSenderId: "161253365109",
    appId: "1:161253365109:web:289e3afb9296cbf3d1ef3c",
    measurementId: "G-2KFEXZ6WEG"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;