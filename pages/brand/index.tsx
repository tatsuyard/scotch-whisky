import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";

const Home: React.FC = () => (
  <div className={styles.container}>
    <div>
      <Header />
    </div>
    <h1 className={styles.title}>銘柄一覧</h1>

    <div className={styles.grid}>
      <a href="#" className={styles.card}>
        <h3>アイラ &rarr;</h3>
        <p>アイラについて</p>
      </a>

      <a href="#" className={styles.card}>
        <h3>ハイランド &rarr;</h3>
        <p>ハイランドについて</p>
      </a>

      <a href="#" className={styles.card}>
        <h3>スペイサイド &rarr;</h3>
        <p>スペイサイドについて</p>
      </a>

      <a href="#" className={styles.card}>
        <h3>ローランド &rarr;</h3>
        <p>ローランドについて</p>
      </a>
    </div>
  </div>
);

export default Home;
