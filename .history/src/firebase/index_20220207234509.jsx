import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 const db = firebase.firestore();
 const storage = firebase.storage();
 const functions = firebase.functions();
 const fb = firebase;
 const FirebaseTimestamp = firebase.firestore.Timestamp;

 export default auth
 export default db
 export default storage
 export default functions
 export default fb
 export default FirebaseTimestamp
