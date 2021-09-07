import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfyaLTysx_FvAR65XMvDilnMLPq05chL8",
  authDomain: "instagram-clone-213a6.firebaseapp.com",
  projectId: "instagram-clone-213a6",
  storageBucket: "instagram-clone-213a6.appspot.com",
  messagingSenderId: "793285402785",
  appId: "1:793285402785:web:b3f536bb9f7e9d22a350e0",
  measurementId: "G-6QVJN2M6NF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
