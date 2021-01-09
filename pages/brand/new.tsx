import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import initFirebase from "../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../../consts";

initFirebase();
const db = firebase.firestore();

const New: React.FC = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    

    const handleSubmit = async () => {
        setName('')
        setDesc('')
        try {
            db.collection(Collection.brands).add({
                name: name,
                description: desc
            })
        } catch (error) {
            alert(error)
            // setPending(false);
        }
    }

    return (
        <div className={styles.container}>
          <div>
              <Header />
          </div>
          <div>
            <h2>
              <label>
                Add Brand 
              </label>
            </h2>
            <label>
              name
            </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={e => setName(e.target.value)}
                className="p-2 border"
            />
            <label>
              description
            </label>
            <input
              type="text"
              name="description"
              value={desc} 
              onChange={e => setDesc(e.target.value)}
              className="p-4 border"
            />
            <button className="btn-blue" onClick={handleSubmit} disabled={!(name && desc)}>
              Add
            </button>
          </div>
        </div>
    )
}
export default New