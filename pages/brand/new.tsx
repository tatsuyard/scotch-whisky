import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import initFirebase from "../../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../../consts";
import { Brand } from "../../models"

initFirebase();
const db = firebase.firestore();


const New: React.FC = () => {
  const [brand, setBrand] = useState<Brand>({ name: '', description: '' })
    
  const handleSubmit = async () => {
    try {
      await db.collection(Collection.brands).add({      
        name: brand.name,
        description: brand.description
      })
    }
    catch (error) {
      alert(error)
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
            value={brand.name}
            onChange={e => setBrand({...brand, name: e.target.value})}
            className="p-2 border"
          />
          <label>
            description   
          </label>
          <input
            type="text"
            name="description"
            value={brand.description} 
            onChange={e => setBrand({...brand, description: e.target.value})}
            className="p-4 border"
          />
          <button className="btn-blue" onClick={handleSubmit} disabled={!(brand.name && brand.description)}>
            Add
          </button>
        </div>
      </div>
    )
}
export default New