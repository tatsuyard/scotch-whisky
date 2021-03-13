import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Link from "next/link";
import firebase from "firebase/app";
import { AuthContext } from '../../components/Auth';
import ListItem from "../../components/ListItem";
import { Collection } from "../../consts";
import { Brand } from '../../models';


export default function Home(params) {
  const { db } = params;
  const [brands, setBrands] = useState<Brand[]>([{
    id: '',
    name: '',
    description: '',
    images: '',
    createdAt: null,
  }]);
  const [admin, setAdmin] = useState(false);
  const { currentUser } = useContext(AuthContext);
  
  
  useEffect(() => {
    firebase.auth().currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        if (idTokenResult.claims.admin) {
          setAdmin(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const col = db.collection(Collection.brands).onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        images: doc.data().images,
      }))
      setBrands(data)
    })
    return () => {
      col
    }
  }, [])

  const CreateLink = () => (
    <Link href="brand/new">
      <button className="btn-blue">
        Create
      </button>
    </Link>
  )

  return (
    <div className="container mx-auto">
      <div>
        <Header />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>銘柄一覧</h1>
        {currentUser && admin && <CreateLink />}
        <div className="grid grid-cols-3 grid-rows-3">
          {
            brands.map(brand =>
              <ListItem key={brand.id} item={brand} />
            )
          }
        </div>
      </main>
    </div>
  );
}
