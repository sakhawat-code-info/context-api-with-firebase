import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('obsarving current user', currentUser);
            setLoader(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])




    const something = { user, createUser, loginUser, logOut, loader }

    return (
        <AuthContext.Provider value={something}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;