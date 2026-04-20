import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
//   apiKey: "YOUR_KEY",
//   authDomain: "YOUR_DOMAIN",
//   projectId: "YOUR_ID",
  apiKey: "AIzaSyDOqFZWqTu4bpVvkdClLyc8KEGB3q7H2G4",
  authDomain: "moodify-4f9d2.firebaseapp.com",
  projectId: "moodify-4f9d2",
  storageBucket: "moodify-4f9d2.firebasestorage.app",
  messagingSenderId: "876568448259",
  appId: "1:876568448259:web:d707dc5e1c549e0394ad36"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);