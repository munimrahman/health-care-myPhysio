import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { error, setError, setUserName, user, setUser, setEmail, setIsLoading, setPassword, logOut, signInUsingGoogle, signInUsingEmailPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/'
    // console.log(location.state?.from);

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectURL)
            })
            .finally(() => setIsLoading(false))
    }

    const handleEmailSignIn = () => {
        signInUsingEmailPassword()
            .then(result => {
                setUser(result.user)
                history.push(redirectURL)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false))

    }

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1>{user.email}</h1>
            <h1>This is sign in page</h1>
            {!user.displayName && <button onClick={handleGoogleSignIn}>Google Sign In</button>}
            {user.displayName && <button onClick={logOut}>Lg Out</button>}
            <h4>{error}</h4>
            <div>
                <input onBlur={getEmail} type="email" />
                <input onBlur={getPassword} type="password" />
                <button onClick={handleEmailSignIn}>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;