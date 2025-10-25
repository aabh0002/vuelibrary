import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4Sgtq8AdGrQia5FjrxRt7hBsfmrF9oO4",
  authDomain: "week7-abhijith.firebaseapp.com",
  projectId: "week7-abhijith",
  storageBucket: "week7-abhijith.firebasestorage.app",
  messagingSenderId: "293283786040",
  appId: "1:293283786040:web:2247fef6c2eb44c00f65cd"
};

export const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore()
export default db