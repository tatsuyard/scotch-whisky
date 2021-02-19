import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const About: React.FC = () => (
  <div className="container mx-auto">
    <div>
      <Header />
    </div>
      <main className={styles.main}>
        <h1 className="title">About</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an About Page.</p>
      </main>
  </div>
);

export default About