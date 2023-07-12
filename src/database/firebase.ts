import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCR-Za3yM-7rVoJuijwnoL9X03kgGhllc",
    authDomain: "loop-3ea06.firebaseapp.com",
    projectId: "loop-3ea06",
    storageBucket: "loop-3ea06.appspot.com",
    messagingSenderId: "131243725137",
    appId: "1:131243725137:web:a5daf0bd91a0cfc427c370",
    measurementId: "G-6LFSTWP93X",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
