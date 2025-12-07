import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgdurL6czdh_z2Okg4Ajjkb4Er9zqe7Ck",
  authDomain: "nicola-booking.firebaseapp.com",
  projectId: "nicola-booking",
  storageBucket: "nicola-booking.firebasestorage.app",
  messagingSenderId: "282156266094",
  appId: "1:282156266094:web:01b834d3803e689a10ac7f",
  measurementId: "G-NQCV5BW0YS"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics (only on client)
let analytics;
if (typeof window !== "undefined") {
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

export { analytics };
export default app;
