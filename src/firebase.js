// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCuGdhX0fKLElXvHQ7QDxnCe4zaUjhe9SU",
	authDomain: "xelle-bc603.firebaseapp.com",
	projectId: "xelle-bc603",
	storageBucket: "xelle-bc603.appspot.com",
	messagingSenderId: "3339921783",
	appId: "1:3339921783:web:25296c3c3738bfaa795972",
	measurementId: "G-070GW3LZWQ"
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
