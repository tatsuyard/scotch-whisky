import Link from "next/link";
import styles from "../styles/Common.module.css";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div className={styles.main}>
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/brand">
        <a style={linkStyle}>Brand</a>
      </Link>
    </div>
  </div>
);

export default Header;
