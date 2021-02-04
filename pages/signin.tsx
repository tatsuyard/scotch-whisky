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
        <div className="flex flex-col h-screen bg-gray-100">
          <div className="grid place-items-center mx-2 my-20 sm:my-auto">
            <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">
              <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                SignIn
              </h2>
              <button className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                  font-medium text-white uppercase
                  focus:outline-none hover:bg-gray-700 hover:shadow-none" onClick={login}>
                 SignIn With Google
              </button>
            </div>
          </div>
        </div>
        
    )
}

export default SignIn
