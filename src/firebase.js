import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyDHr6-uWXyGUjiJS2LBASjIgLOWS6XH8xQ",
  authDomain: "listed-assignment-54d32.firebaseapp.com",
  projectId: "listed-assignment-54d32",
  storageBucket: "listed-assignment-54d32.appspot.com",
  messagingSenderId: "528601738048",
  appId: "1:528601738048:web:3d2b02ed9651189fcf68a5",
  measurementId: "G-MZLC0M5BX2"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const database = {
  folders: collection(firestore,'folders'),
  files : collection(firestore,'files'),
  formatDoc : doc=>{
    return {id : doc.id,...doc.data()}
  },
  getCurrentTimestamp : new Date(),
}
export const auth = getAuth(app);
export default app;