import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AddReview from '../../components/AddReview';
import { useRouter } from 'next/router';
import initFirebase from "../../firebase/init";
import firebase from "firebase/app";
import { Collection } from '../../consts';

initFirebase();
const db = firebase.firestore();

const Brand: React.FC = () => {
  const router = useRouter();
  const { name, id } = router.query;  
  const [reviews, setReviews] = useState<[]>([])
    

    useEffect(() => {
      const col = db.collection(Collection.reviews).where('brand', '==', id).onSnapshot((snapshot) => {
        const data = snapshot.docs.map(doc => {
          return doc.data()
        })
        setReviews(data)
      })
      return () => {
        col
      }
    }, [])
    
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>

      <main className={styles.main}>
        <h1 className="title">Brand: {name}</h1>
              <p className="text-center text-teal-500 text-2xl py-4">This is an {name} detail Page.</p>
              <h2>reviews</h2>
              {
                  reviews.map(review =>
                    <div>
                      <h3>{review.title}</h3>
                      <p>{review.comment}</p>          
                   </div>
                  )}
              </main>
          
          
      <div>
        <AddReview brandId={Array.isArray(id) ? id[0] : id} />
      </div>
    </div>
  );
};

export default Brand;
