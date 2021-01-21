import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AddReview from '../../components/AddReview';
import { useRouter } from 'next/router';
import initFirebase from '../../firebase/init';
import firebase from 'firebase/app';
import { Collection } from '../../consts';
import { Review } from '../../models';

initFirebase();
const db = firebase.firestore();

const Brand: React.FC = () => {
  const router = useRouter();
  const { name, id } = router.query;
  const [reviews, setReviews] = useState<[Review]>([]);

  useEffect(() => {
    const col = db
      .collection(Collection.reviews)
      .where('brand', '==', id)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setReviews(data);
      });
    return () => {
      col;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>

      <main className={styles.main}>
        <h1 className="title">Brand: {name}</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an {name} detail Page.</p>
        <h2>reviews</h2>
        <div className="flex flex-col">
          {reviews.map((review) => (
            <div className="border-4 border-light-blue-500 border-opacity-30">
              <div className="flex-grow p-3">
                <div class="font-semibold text-gray-700">{review.title}</div>
              </div>
              <div class="text-sm text-gray-500">{review.comment}</div>
            </div>
          ))}
        </div>
      </main>

      <div>
        <AddReview brandId={Array.isArray(id) ? id[0] : id} />
      </div>
    </div>
  );
};

export default Brand;
