import Link from "next/link";
import styles from "../styles/Header.module.css";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
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
    </div>
  </div>
);

export default Header;
