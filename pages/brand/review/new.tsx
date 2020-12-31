import React, { useMemo, useState, useEffect, useCallback } from "react";

const New: React.FC = () => {
    const [review, setReview] = useState('')
    return (
        <div>
          <h1>Add Review</h1>
            <label>
              Review:{" "}
              <input
                type="text"
                value=""
                onChange={(event) => setReview(event.target.value)}
              />
            </label>
        </div>
    )

}

export default New