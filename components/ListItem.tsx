import React, { useCallback } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import initFirebase from "../firebase/init";
import { Collection } from "../consts";

initFirebase();
const db = firebase.firestore();

interface Item {
    id?: string,
    name: string,
    description: string
}

type Props = {
    item: Item;
}


const ListItem: React.FC<Props> = (props: Props, params) => {
    const { db } = params;
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
