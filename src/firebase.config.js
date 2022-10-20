// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDKvUhpCINPdolJUCBb-VMsKjKD3vdTwHw",
	authDomain: "realtour-clone.firebaseapp.com",
	projectId: "realtour-clone",
	storageBucket: "realtour-clone.appspot.com",
	messagingSenderId: "176272840818",
	appId: "1:176272840818:web:8e9ae693cfd00a646a4aeb",
	measurementId: "G-38QDVQVQH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
