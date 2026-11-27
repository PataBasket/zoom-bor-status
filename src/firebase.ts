import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {

  apiKey: "AIzaSyDKQOR3YDpVbZetqBtH7_mGnSCTioJ3bTs",

  authDomain: "bor-status.firebaseapp.com",

  projectId: "bor-status",

  storageBucket: "bor-status.firebasestorage.app",

  messagingSenderId: "943645542381",

  appId: "1:943645542381:web:b7730639376c3cbdfa89e4"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, "asia-northeast1");
