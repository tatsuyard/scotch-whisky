import { FC, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/Auth';
import firebase from "firebase/app";


const SignIn: FC = () => {
    const { currentUser } = useContext(AuthContext);
    const router = useRouter()

    useEffect(() => {
        currentUser && router.push('/')
    }, [currentUser]);

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    return (
        <div className="container">
            <button onClick={login}>
                Google Log In
            </button>
        </div>
    )
}

export default SignIn
