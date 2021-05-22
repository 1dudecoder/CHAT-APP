import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

// const firebaseConfig = {
//   apiKey: "AIzaSyDoN-nSGUo_1h87nkOXSXX2vv4IBXBXey0",
//   authDomain: "chatify-49.firebaseapp.com",
//   projectId: "chatify-49",
//   storageBucket: "chatify-49.appspot.com",
//   messagingSenderId: "1034185885241",
//   appId: "1:1034185885241:web:a46af138b7a40d318defe8",
//   measurementId: "G-EHQ2YBVYY9",
// };

//nitin 

const firebaseConfig = {
  apiKey: "AIzaSyD_We6Ec2Htbt2DrNBR0w1KQkQMKpVsr_Q",
  authDomain: "chat-app-a7899.firebaseapp.com",
  projectId: "chat-app-a7899",
  storageBucket: "chat-app-a7899.appspot.com",
  messagingSenderId: "615596143985",
  appId: "1:615596143985:web:39df6fff1baf5d8e2032d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
