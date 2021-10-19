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
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
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
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }
    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
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