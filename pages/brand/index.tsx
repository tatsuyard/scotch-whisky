import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Link from "next/link";
import { AuthContext } from '../../components/Auth';
import ListItem from "../../components/ListItem";
import { Collection } from "../../consts";
import { Brand } from '../../models';


export default function Home(params) {
  const { db } = params;
  const [brands, setBrands] = useState<Brand[]>([{ id: '', name: '', description: '' }]);
  const { currentUser } = useContext(AuthContext);
  
  const CreateLink = () => (
    <Link href="brand/new">
      <button className="btn-blue">
        Create
      </button>
    </Link>
  )

  useEffect(() => {
    const col = db.collection(Collection.brands).onSnapshot((snapshot) => {
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
        { currentUser && <CreateLink /> }
        {
          brands.map(brand =>
            <ListItem key={brand.id} item={brand} />
          )}
      </main>
    </div>
  );
}
