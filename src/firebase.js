import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrrTPKhZsvbYgB3UGef3pYEYuJXuWgcwg",
    authDomain: "diabetes-react.firebaseapp.com",
    databaseURL: "https://diabetes-react.firebaseio.com",
    projectId: "diabetes-react",
    storageBucket: "diabetes-react.appspot.com",
    messagingSenderId: "664218397105",
    appId: "1:664218397105:web:9c677d61705594773cf590",
    measurementId: "G-Z1GFBNQDGC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { auth, database, storage };