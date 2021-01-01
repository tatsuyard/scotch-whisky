import React, { useState } from "react";

const AddReview: React.FC = () => {

    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')
    

    const handleSubmit = () => {
        setTitle('')
        setReview('')
        try {
            console.log('add');
        } catch (error) {
            alert(error)
            // setPending(false);
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
            <button className="btn-blue" onClick={handleSubmit} disabled={!( title && review)}>
              Post
            </button>
          </div>
    
    )
}
export default AddReview