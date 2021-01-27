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

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '',
      title: '',
      comment: '',
      brand: '',
      createdAt: null,
    }
  ]);

  useEffect(() => {
    const col = db.collection(Collection.reviews)
      .where('brand', '==', id)
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return doc.data() as Review; // FIXME: 型アサーションが破壊的なためFirestoreDataConverterを使うべき
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

      <main className="">
        <h1 className="title">Brand: {name}</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an {name} detail Page.</p>
        <h2>reviews</h2>
        <div className="pt-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
              <div className="flex flex-row justify-center mr-2">
                <div className="font-semibold text-gray-700">{review.title}</div>
              </div>
              <div className="text-sm text-gray-500">{review.comment}</div>
            </div>
          ))}
        </div>
      </main>
      <AddReview brandId={Array.isArray(id) ? id[0] : id} />
    </div>
  );
};

export default Brand;
