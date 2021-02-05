import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import initFirebase from "../../firebase/init";
import firebase from "firebase/app";
import 'firebase/storage'
import { useRouter } from 'next/router';
import { Collection } from "../../consts";
import { Brand } from "../../models"

initFirebase();
const db = firebase.firestore();
const storage = firebase.storage()

type ImageFile = File & {
  preview: string;
};

const New: React.FC = () => {
  const [brand, setBrand] = useState<Brand>({ name: '', description: '' })
  const [file, setFile] = useState<ImageFile>();
  const router = useRouter()

  const handleImageAsFile = (e) => {
    if (e.target.files === '') {
      return
    }
    const image = e.target.files[0]
    setFile(Object.assign(image, { preview: URL.createObjectURL(image) }))
  }

  const handleSubmit = () => {
    try {
      const uploadTask = storage.ref(`/images/${file.name}`).put(file);
      uploadTask.on('state_changed', console.log, console.error, () => {
        storage.ref('images')
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('brands').add({      
              name: brand.name,
              description: brand.description,
              images: url
            })
          })
      })
      router.push('/brand')
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
          <img src={file && file.preview} />
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
              <input type='file' className="hidden" onChange={e => handleImageAsFile(e) } />
          </label>

          <button className="btn-blue" onClick={handleSubmit} disabled={!(brand.name && brand.description)}>
            Add
          </button>
          </div>
          </main>
      </div>
    )
}
export default New