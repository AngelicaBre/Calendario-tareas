// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBR1c3gPp1_Gm_UPaRhzIUDFpHQDqRdTI",
  authDomain: "calendariodetareas-2dd08.firebaseapp.com",
  projectId: "calendariodetareas-2dd08",
  storageBucket: "calendariodetareas-2dd08.appspot.com",
  messagingSenderId: "1030728684745",
  appId: "1:1030728684745:web:0c556c69c99145abcb2918"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase