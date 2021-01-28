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
        <main className={styles.main}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h2>
            <label className="block text-grey-darker text-sm font-bold mb-2">              
              Add Brand 
            </label>
          </h2>
          <label className="block text-grey-darker text-sm font-bold mb-2">  
            name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={brand.name}
            onChange={e => setBrand({...brand, name: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
          <label className="block text-grey-darker text-sm font-bold mb-2">
            description   
          </label>
          <input
            type="text"
            name="description"
            value={brand.description} 
            onChange={e => setBrand({...brand, description: e.target.value})}
            className="shadow appearance-none border border-red rounded w-full py-12 px-9 text-grey-darker mb-3"
          />
          <button className="btn-blue" onClick={handleSubmit} disabled={!(brand.name && brand.description)}>
            Add
          </button>
          </div>
          </main>
      </div>
    )
}
export default New