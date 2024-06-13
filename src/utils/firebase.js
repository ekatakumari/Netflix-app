// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpxmM9CDBiPihrFDc_oPA34EV2PD2dT7M",
  authDomain: "netflixgpt-90306.firebaseapp.com",
  projectId: "netflixgpt-90306",
  storageBucket: "netflixgpt-90306.appspot.com",
  messagingSenderId: "673758741557",
  appId: "1:673758741557:web:86c71d721099b119fddd7c",
  measurementId: "G-6MR9GPJGB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()