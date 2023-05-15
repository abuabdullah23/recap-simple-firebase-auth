import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase-init';
import { useState } from 'react';

const Login = () => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // for display user info
    const [user, setUser] = useState(null)

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // handle logout button
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {
                user ?
                    <button onClick={handleLogOut} >Log out</button>
                    :
                    <button onClick={handleGoogleLogIn} >Google Login</button>
            }

            {
                user && <div>
                    <h3>User: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;