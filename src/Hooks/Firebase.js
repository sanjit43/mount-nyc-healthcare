import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticationFirebase from "../Firebase.Initialize";

initializeAuthenticationFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();

    //Google signin
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    //Observed user state

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return unSubscribed;
    }, [])

    //Set logout
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    //Login with email and pass

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //Registration
    const handlePasswordChange = e => {
        setError('')
        setPassword(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should have two uppercase')
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password should have at least two digits')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
        console.log(email, password)
    }
    //Return all the effect that i need to excuted
    return {
        user,
        googleSignIn,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        login
    }
}

export default useFirebase