import React, { useMemo, useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";

type BrandProps = {
  id?: string,
  name: string,
  description: string,
}

export default function Home(params) {
  const { db } = params;
  const [brands, setBrands] = useState<BrandProps[]>([{ id: '', name: '', description: '' }]);
  
  useEffect(() => {
    const col = db.collection("brands").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
      }))
      setBrands(data)
    })
    return () => {
      col
    }
  }, [])
  

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <main className={styles.main}>
      <h1 className={styles.title}>銘柄一覧</h1>
      {
        brands.map(brand =>
          <ListItem key={brand.id} item={brand}/>
        )}
       </main>
    </div>
  );
}
