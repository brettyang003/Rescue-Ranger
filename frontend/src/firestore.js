import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZPGq3RSc3ZKB96uH1zXSxh-LgtU81sIE",
  authDomain: "debrisbot-a1a99.firebaseapp.com",
  projectId: "debrisbot-a1a99",
  storageBucket: "debrisbot-a1a99.appspot.com",
  messagingSenderId: "192936579422",
  appId: "1:192936579422:web:6a53b21fd92d279b7cffcf",
  measurementId: "G-9S0ML0X03K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
