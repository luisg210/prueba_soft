// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd97-8LpRgClGCGTNBGCsz7WfoEwMqGH8",
    authDomain: "soft-test-51d17.firebaseapp.com",
    projectId: "soft-test-51d17",
    storageBucket: "soft-test-51d17.firebasestorage.app",
    messagingSenderId: "508586699019",
    appId: "1:508586699019:web:fd1346b15e6c74d0dcda0e",
    measurementId: "G-P7BYEKFWZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export de
export const db = getFirestore(app);

// 👇 Aquí se crea la instancia de auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

