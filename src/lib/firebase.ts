import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyDQrAFno5bF6SLCHwqLPJSPDbU_SmLjFYw"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="manufacs-company.firebaseapp.com"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID="manufacs-company"
// NEXT_PUBLIC_FIREBASE_DATABASE_URL="https://manufacs-company-default-rtdb.firebaseio.com
// "
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="manufacs-company.appspot.com"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="946301405301"
// NEXT_PUBLIC_FIREBASE_APP_ID="1:946301405301:web:31108f46c273797619103c"
// NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-J46LVWHY6K"
// NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_6wvrm9j"
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_wr867qe"
// NEXT_PUBLIC_EMAILJS_USER_ID="user_gT75s8QwENPHn7STZsFUI"
// NEXT_PUBLIC_RESEND_API_KEY="re_LF6WTLaf_GiUJ2ca4fxVRj2i79fjw7NaB"


const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export { db, firebaseApp };
