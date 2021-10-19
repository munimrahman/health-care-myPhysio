import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { error, setName, setUserName, setError, setEmail, setPassword, signUp } = useAuth();
    const history = useHistory();
    const redirectURL = '/'

    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
    const handleSignUp = () => {
        signUp()
            .then(result => {
                setUserName()
                history.push(redirectURL)
                window.location.reload()
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div>
            <h1>This is sign up page</h1>
            {error && <h3 className="text-danger">{error}</h3>}
            <div>
                <input onBlur={getName} type="text" name="name" id="" />
                <input onBlur={getEmail} type="email" name="" id="" />
                <input onBlur={getPassword} type="password" name="" id="" />
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;