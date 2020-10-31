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
        <p>
          スコットランドの北側にある、広大な地域のハイランド。スコットランドの蒸溜所は、3分の1ほどがハイランドにあります。広いハイランドのなかでも、有名な蒸溜所が多くあるのが北ハイランドです。
        </p>
      </a>

      <a href="#" className={styles.card}>
        <h3>スペイサイド &rarr;</h3>
        <p>
          さほど大きな土地ではありませんが、大麦の収穫量が多いため多数の蒸溜所があり、有名な蒸溜所が集中しているスペイサイド。ウイスキーは、花やハチミツのようなフローラルな香りと華やかな風味の銘柄が多く、親しみやすいのが特徴です。
        </p>
      </a>

      <a href="#" className={styles.card}>
        <h3>ローランド &rarr;</h3>
        <p>
          ローランドは、スコットランドの南側に位置する地方です。かつてはたくさんのモルトウイスキー蒸溜所がありましたが、次第に衰退し、現在稼働している蒸溜所は6つのみとなっています。
        </p>
      </a>
    </div>
  </div>
);

export default Home;
