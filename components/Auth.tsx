import { FC, createContext, useEffect, useState } from 'react';
import firebase from "firebase/app";

type User = firebase.User
type AuthContextProps = {
    currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(
        undefined
    );

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }