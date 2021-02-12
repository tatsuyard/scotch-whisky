import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import initFirebase from "../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../consts";
import { Brand } from '../models';

initFirebase();
const db = firebase.firestore();

type Props = {
  item: Brand;
}

const ListItem: React.FC<Props> = (props: Props) => {
  const item = props.item;
  const handleDelete = () => {
    alert('delete?');
    try {
      db.collection(Collection.brands).doc(props.item.id).delete()
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={styles.grid}>
      <Link href={`/brand/${encodeURIComponent(item.id)}?name=${item.name}`}>
        <a className={styles.card}>
          <h3>{item.name} &rarr;</h3>
          <p>{item.description}</p>
          {item.images && <img src={item.images} />}
        </a>
      </Link>
      <button className="btn-red" onClick={handleDelete}>delete</button>
    </div>
  )   
};

export default ListItem
