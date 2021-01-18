import React from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';
import AddReview from '../../components/AddReview';
import { useRouter } from 'next/router';

const Brand: React.FC = () => {
  const router = useRouter();
  const { name, id } = router.query;

  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>

      <main className={styles.main}>
        <h1 className="title">Brand: {name}</h1>
        <p className="text-center text-teal-500 text-2xl py-4">This is an {name} detail Page.</p>
      </main>
      <div>
        <AddReview brandId={Array.isArray(id) ? id[0] : id} />
      </div>
    </div>
  );
};

export default Brand;
