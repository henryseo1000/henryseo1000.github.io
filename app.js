import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js'
import firebaseConfig from './firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);       // for 인증
export const storage = getStorage(app); // for 스토리지
export const db = getFirestore(app);    // for 데이터베이스