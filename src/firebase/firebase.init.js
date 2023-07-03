// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLCvWJ53YqUH0roa4njWVArZzVIuX-UzM",
  authDomain: "vdwbd-7bf1e.firebaseapp.com",
  projectId: "vdwbd-7bf1e",
  storageBucket: "vdwbd-7bf1e.appspot.com",
  messagingSenderId: "613573127831",
  appId: "1:613573127831:web:e38f2de42081cf77df03d2",
  measurementId: "G-C3B8YQ4NDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;