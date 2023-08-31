import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZgVCGtbSoUx4MigNpjsOEHTW8qwls1XY",
  authDomain: "auth-pass-f94c5.firebaseapp.com",
  projectId: "auth-pass-f94c5",
  storageBucket: "auth-pass-f94c5.appspot.com",
  messagingSenderId: "439264356331",
  appId: "1:439264356331:web:44482cdf0f1f70516bdbae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;