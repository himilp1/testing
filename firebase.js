import firebase from 'firebase//compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIh7DUEk1IWjz3aW7PgLQjFhlZEW9jZIg",
    authDomain: "plantify-d36ed.firebaseapp.com",
    projectId: "plantify-d36ed",
    storageBucket: "plantify-d36ed.appspot.com",
    messagingSenderId: "804312353430",
    appId: "1:804312353430:web:5a4054446a35dcd3c1d0b7",
    measurementId: "G-GZ0TBCSS23"
  };
  
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
