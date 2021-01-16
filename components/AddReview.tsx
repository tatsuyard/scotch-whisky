import React, { useState, ReactNode } from "react";
import initFirebase from "../firebase/init";
import firebase from "firebase/app";
import { Collection } from "../consts";
import { models } from "../models"

initFirebase();
const db = firebase.firestore();

type Props = {
  brandId: string
}

const AddReview: React.FC<Props> = (props: Props) => {
  // [id].tsxに持って行った方が良いのではないだろう
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  
  const handleSubmit = () => {
    var reviewContent: models.Review;
    setTitle('')
    setReview('')
    
    reviewContent = {
      title: title,
      comment: review,
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
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="p-2 border"
        />
        <label>
          Review
        </label>
        <input
          type="text"
          name="review"
          value={review} 
          onChange={e => setReview(e.target.value)}
          className="p-4 border"
        />
        <button className="btn-blue" onClick={handleSubmit} disabled={!( title && review )}>
          Post
        </button>
      </div>
    )
}
export default AddReview
