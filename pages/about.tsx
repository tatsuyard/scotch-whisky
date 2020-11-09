import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const About: React.FC = () => (
  <div className={styles.container}>
    <div>
      <Header />
    </div>
    <h1>About</h1>
  </div>
);

export default About