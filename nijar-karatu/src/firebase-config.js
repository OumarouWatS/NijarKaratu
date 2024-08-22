import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGijDDhNdx5EEAxqL-N1PC4wo4VW8lVmM",
    authDomain: "niger-karatu.firebaseapp.com",
    projectId: "niger-karatu",
    storageBucket: "niger-karatu.appspot.com",
    messagingSenderId: "423424039537",
    appId: "1:423424039537:web:685c0aa15e4efe9b8fd9d0",
    measurementId: "G-81KLER1Q4M"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);