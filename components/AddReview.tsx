import React, { useState, ReactNode } from 'react';
import initFirebase from '../firebase/init';
import firebase from 'firebase/app';
import { Collection } from '../consts';
import { Review } from '../models';

initFirebase();
const db = firebase.firestore();

type Props = {
  brandId: string;
};

const AddReview: React.FC<Props> = (props: Props) => {
  const [review, setReview] = useState<Review>({
    title: '',
    comment: '',
    brand: '',
    createdAt: null,
  });

  const handleSubmit = () => {
    var reviewContent = {
      title: review.title,
      comment: review.comment,
      brand: props.brandId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    try {
      db.collection(Collection.reviews).add(reviewContent);
      reviewContent = {
        title: '',
        comment: '',
        brand: '',
        createdAt: null,
      };
      setReview(reviewContent);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h2>
          <label>Add Review</label>
        </h2>
        <label className="block text-grey-darker text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={review.title}
          onChange={(e) => setReview({ ...review, title: e.target.value })}
          className="p-2 border"
        />
      </div>
      <div>
        <label className="block text-grey-darker text-sm font-bold mb-2">Review</label>
        <input
          type="textarea"
          name="review"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          className="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
          placeholder="Review here"
        />
      </div>
      <button
        className="font-bold py-2 px-4 w-full bg-blue-400 text-lg text-white shadow-md rounded-lg"
        onClick={handleSubmit}
        disabled={!(review.title && review.comment)}
      >
        Post
      </button>
    </div>
  );
};
export default AddReview;
