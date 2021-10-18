import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

initializeFirebaseAuth()

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    // Sign Up With Email Password
    const signUp = () => {
        if (password.length < 6) {
            setError("Password should be at least 6 characters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName()
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    // Sign In With Email Password
    const signInUsingEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,
        error,
        setName,
        setEmail,
        setPassword,
        signInUsingGoogle,
        signUp,
        signInUsingEmailPassword,
        logOut
    }
}

export default useFirebase;