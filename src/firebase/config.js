import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyANccZ2Ogxj4m2KLKi9xao-tMz0rMf_vUk',
  authDomain: 'shaun-dojo-site.firebaseapp.com',
  projectId: 'shaun-dojo-site',
  storageBucket: 'shaun-dojo-site.appspot.com',
  messagingSenderId: '890428427059',
  appId: '1:890428427059:web:0c341dda63924a765d4c46'
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp, projectStorage };
