import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthenticationFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthenticationFirebase;