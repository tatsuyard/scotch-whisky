import React, { useMemo, useState, useEffect, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";

const New: React.FC = (params) => {

    const { db } = params;
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    

    const handleSubmit = async () => {
        setName('')
        setDesc('')
        try {
            await console.log(db.collection("brands"))
            db.collection("brands").add({
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
            />
            <label>
                description
            </label>
            <input
              type="text"
              name="description"
              value={desc} 
              onChange={e => setDesc(e.target.value)}
            />

            <button onClick={handleSubmit} disabled={!(name && desc)}>
                    Add
            </button>
        </div>
        </div>
    )
}
export default New