// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDv9A0K01wT9pnQDhswS4qGGiSUFdVq6M",
  authDomain: "manga-service.firebaseapp.com",
  projectId: "manga-service",
  storageBucket: "manga-service.appspot.com",
  messagingSenderId: "898819628418",
  appId: "1:898819628418:web:447ad0efcc349a855f439b",
  measurementId: "G-6X6TC9WX38"
};

// Initialize Firebase
// Firebaseアプリケーションを初期化
const app = initializeApp(firebaseConfig);

// Firestoreインスタンスを取得
const db = getFirestore(app);

// dbをエクスポート
export { db };