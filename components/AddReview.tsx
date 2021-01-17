import React, { useState, ReactNode } from "react";
import initFirebase from "../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../consts";
import { Review } from "../models"

initFirebase();
const db = firebase.firestore();

type Props = {
  brandId: string
}

const AddReview: React.FC<Props> = (props: Props) => {
  const [review, setReview] = useState<Review>({
    title: '',
    comment: '',
    brand: '',
    createdAt: ''
  })
  
  const handleSubmit = () => {
    var reviewContent = {
      title: review.title,
      comment: review.comment,
      brand: props.brandId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }

    try {
      db.collection(Collection.reviews).add(reviewContent)
    } catch (error) {
      alert(error)
    }
     
    }

    return (
      <div>
        <h2>
          <label>
            Add Review
          </label>
        </h2>
        <label>
          Title
        </label>
        <input
          type="text"          
          name="title"
          autoComplete="off"
          value={review.title}
          onChange={e => setReview({ ...review, title: e.target.value })}
          className="p-2 border"
        />
        <label>
          Review
        </label>
        <input
          type="text"
          name="review"
          value={review.comment} 
          onChange={e => setReview({ ...review, comment: e.target.value })}
          className="p-4 border"
        />
        <button className="btn-blue" onClick={handleSubmit} disabled={!( review.title && review.comment )}>
          Post
        </button>
      </div>
    )
}
export default AddReview
