import React, { useCallback } from "react";
import styles from "../styles/Home.module.css";
import firebase from "firebase/app";
import initFirebase from "../firebase/init";
import Link from "next/link";

initFirebase();
const db = firebase.firestore();

interface Item {
    id: String,
    name: string,
    description: String
}

type Props = {
    item: Item;
}


const ListItem: React.FC = (props: Props) => {
    const item = props.item;

    const handleDelete = useCallback(() => {
        alert('delete?');
        try {
            db.collection("brands").doc(props.item.id).delete()
        } catch (error) {
            alert(error)
        }
    }, [])

    return (
        <div className={styles.grid}>
            <Link href={`/brand/${encodeURIComponent(item.name)}`}>
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
