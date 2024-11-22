import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSqq-qEqz9HhFccDh3irybj8me9iNFdVk",
  authDomain: "cardapio-4d1cf.firebaseapp.com",
  projectId: "cardapio-4d1cf",
  storageBucket: "cardapio-4d1cf.firebasestorage.app",
  messagingSenderId: "110967617969",
  appId: "1:110967617969:web:d8f61ed48b6b9871a3a590",
  measurementId: "G-6JVXWXDJ0F"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export default app;
