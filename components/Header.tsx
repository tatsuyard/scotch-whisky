import { FC, useContext } from 'react';
import Link from "next/link";
import { AuthContext } from './Auth';
import styles from "../styles/Header.module.css";

const linkStyle = {
  marginRight: 15,
};

const Header: FC = () => {
  const { currentUser } = useContext(AuthContext);

  const SignInLink = () => (
    !currentUser && (
      <Link href="/signin">
        <a style={linkStyle}>SignIn</a>
      </Link>
    )
  )
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/brand">
          <a style={linkStyle}>Brand</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <SignInLink />
      </div>
    </div>
  );    
}
  

export default Header;
