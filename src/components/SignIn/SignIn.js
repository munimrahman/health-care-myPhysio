import React from 'react';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { error, user, setEmail, setPassword, logOut, signInUsingGoogle, signInUsingEmailPassword } = useAuth();

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
            {!user.displayName && <button onClick={signInUsingGoogle}>Google Sign In</button>}
            {user.displayName && <button onClick={logOut}>Lg Out</button>}
            <h4>{error}</h4>
            <div>
                <input onBlur={getEmail} type="email" />
                <input onBlur={getPassword} type="password" />
                <button onClick={signInUsingEmailPassword}>Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;