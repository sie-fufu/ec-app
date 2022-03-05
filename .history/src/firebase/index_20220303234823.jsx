import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const fb = firebase;
export const FirebaseTimestamp = firebase.firestore.Timestamp;
