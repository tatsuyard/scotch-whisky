import React, { useCallback } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import initFirebase from "../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../consts";

initFirebase();
const db = firebase.firestore();

type Item = {
    id?: string,
    name: string,
    description: string
}

type Props = {
    item: Item;
}


const ListItem: React.FC<Props> = (props: Props) => {
    const item = props.item;

    const handleDelete = useCallback(() => {
        alert('delete?');
        try {
            db.collection(Collection.brands).doc(props.item.id).delete()
        } catch (error) {
            alert(error)
        }
    }, [])

    return (
        <div className={styles.grid}>
            <Link href={{ pathname: `/brand/${item.id}`, query: { id: item.id }}}>
            <a className={styles.card}>
                <h3>{item.name} &rarr;</h3>
                <p>{item.description}</p>
                </a>
            </Link>
            <button className="btn-red" onClick={handleDelete}>delete</button>
        </div>
    )   
};

export default ListItem
