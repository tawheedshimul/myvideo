import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../firebase/firebase.init';

export const Authcontext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {


    const [user, setUser] = useState()
    // registration 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // gooogle auth

    const googleProvider = new GoogleAuthProvider();

    // sign in google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //all sign out 
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

    const authinfo = { user, createUser, signIn, logOut, signInWithGoogle }

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;