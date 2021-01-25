import { FC, useContext } from 'react';
import Link from "next/link";
import { AuthContext } from './Auth';
import firebase from "firebase/app";

const Header: FC = () => {
  const { currentUser } = useContext(AuthContext);

  const SignInOrOutLink = () => (
    currentUser ? (
      <>
        <li className="pr-5">
          <a href="#" className="text-blue-500 hover:text-blue-800" onClick={() => { firebase.auth().signOut();}}>SignOut</a>
        </li>
      </>
    ) : (
      <>
        <li className="pr-5">
          <Link href="/signin">
            <a className="text-blue-500 hover:text-blue-800">SignIn</a>
          </Link>
        </li>
      </>
    )
  )

  return (
    <div className="container mx-auto bg-purple-300 p-5">
      <nav className="flex justify-between">
        <ul className="flex flex-row">
          <li className="pr-5">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800 font-medium">Home</a>
            </Link>
          </li>
          <li className="pr-5">
            <Link href="/brand">
              <a className="text-blue-500 hover:text-blue-800">Brand</a>
            </Link>
          </li>
          <li className="pr-5">
            <Link href="/about">
              <a className="text-blue-500 hover:text-blue-800">About</a>
            </Link>
          </li>
          <SignInOrOutLink />
        </ul>
      </nav>
  </div>
    )

};


export default Header;
