
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebas/storage';
import 'firebase/firestore';


let firebaseConfig = {
    apiKey: "AIzaSyCsT4VReFxjHrbb7ZtCrNONIxS296qdkhA",
    authDomain: "landingpage1-82211.firebaseapp.com",
    projectId: "landingpage1-82211",
    storageBucket: "landingpage1-82211.appspot.com",
    messagingSenderId: "748216776140",
    appId: "1:748216776140:web:2298345a52e2c6a8905969",
    measurementId: "G-PH2J06CMQT"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
