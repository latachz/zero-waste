import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuo-XlZ3q3RClEJFGNGI_yBgaCROBB514',
  authDomain: 'zero-waste-18ec1.firebaseapp.com',
  databaseURL: 'https://zero-waste-18ec1.firebaseio.com',
  projectId: 'zero-waste-18ec1',
  storageBucket: 'zero-waste-18ec1.appspot.com',
  messagingSenderId: '115669004454',
  appId: '1:115669004454:web:ccb98f36d4482948590467',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
