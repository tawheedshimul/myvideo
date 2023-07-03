import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.init';

export const Authcontext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {


    const [user, setUser] = useState({ displayName: 'akash' })
    // sign up 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out 
    const logOut = () => {
        return signOut(auth);
    }


    // useeffect all change for use 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authinfo = { user, createUser, signIn, logOut }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;