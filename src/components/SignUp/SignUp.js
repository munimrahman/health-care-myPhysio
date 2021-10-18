import React from 'react';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { error, setName, setEmail, setPassword, signUp } = useAuth();

    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPassword = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <h1>This is sign up page</h1>
            {error && <h3 className="text-danger">{error}</h3>}
            <div>
                <input onBlur={getName} type="text" name="name" id="" />
                <input onBlur={getEmail} type="email" name="" id="" />
                <input onBlur={getPassword} type="password" name="" id="" />
                <button onClick={signUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;