import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyClrqrLZ1RmMcztKyCey44ocadTe0XHRpc",
	authDomain: "zoom-optical.firebaseapp.com",
	projectId: "zoom-optical",
	storageBucket: "zoom-optical.appspot.com",
	messagingSenderId: "679452656591",
	appId: "1:679452656591:web:e133ab899488a9b2b008ba",
	measurementId: "G-J8T5ZR0215"
};

const app = !getApps.length ? initializeApp(firebaseConfig,'zoom') : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
