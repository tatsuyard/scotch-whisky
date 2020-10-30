import React from "react";
import styles from "../../styles/Home.module.css";

const Home: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>銘柄一覧</h1>

    <div className={styles.grid}>
      <a href="#" className={styles.card}>
        <h3>アイラ &rarr;</h3>
        <p>
          スコットランドの西側に位置する小さな島、アイラ島。その面積は淡路島よりひと回り大きい程度です。現在稼働している蒸溜所は8つと少ないにも関わらず、「スコッチの聖地」と呼ばれています。
        </p>
      </a>

      <a href="#" className={styles.card}>
        <h3>ハイランド &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a href="#" className={styles.card}>
        <h3>スペイサイド &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a href="#" className={styles.card}>
        <h3>ローランド &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </div>
  </div>
);

export default Home;
