import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";
import { firebaseConfig } from "./compat/config";

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const fb = firebase;
export const FirebaseTimestamp = firebase.firestore.Timestamp;
