import React from 'react';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { user, logOut, signInUsingGoogle } = useAuth();
    // console.log(user);
    return (
        <div>
            <h1>{user.displayName}</h1>
            <h1>This is sign in page</h1>
            {!user.displayName && <button onClick={signInUsingGoogle}>Google Sign In</button>}
            {user.displayName && <button onClick={logOut}>Lg Out</button>}
        </div>
    );
};

export default SignIn;