import firebase from 'firebase/app'
import 'firebase/auth'

// Firebase configuration for the app
var firebaseConfig = {
    apiKey: "AIzaSyC6fklFadegUexGNFtenpp7IkSD0JmMY4c",
    authDomain: "login-app-387bd.firebaseapp.com",
    projectId: "login-app-387bd",
    storageBucket: "login-app-387bd.appspot.com",
    messagingSenderId: "60218145221",
    appId: "1:60218145221:web:c7bea0ae1648103bf633ac"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase

// Install Firebase on local machine before use: npm install firebase