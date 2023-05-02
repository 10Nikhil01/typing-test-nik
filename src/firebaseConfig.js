import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
    apiKey: "AIzaSyDE9BFa4gzhOECGpTv6XDR5cy9sLsSvT60",
  authDomain: "typing-test-project-3a838.firebaseapp.com",
  projectId: "typing-test-project-3a838",
  storageBucket: "typing-test-project-3a838.appspot.com",
  messagingSenderId: "673282123589",
  appId: "1:673282123589:web:f87a5ec930e4a4bcd4c02c",
  measurementId: "G-XGT2VNZZBH"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}