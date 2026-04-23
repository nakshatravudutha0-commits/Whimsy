// ─── WHIMSY — Firebase Configuration ───
// Replace these values with your Firebase project credentials
// Get them from: Firebase Console → Project Settings → Your Apps → SDK Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwY_fD-WN4YQzJQG23Rj1ahJkrNwjSQGM",
  authDomain: "whimsy-84e00.firebaseapp.com",
  projectId: "whimsy-84e00",
  storageBucket: "whimsy-84e00.firebasestorage.app",
  messagingSenderId: "179440001076",
  appId: "1:179440001076:web:eb0202ff31dece68afaa61",
  measurementId: "G-6Z2R3BKL78"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
