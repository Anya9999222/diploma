import './Rating.css'
import { useState } from 'react'
export const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);
    return(
        <div className='rating'>
             {[...Array(totalStars)].map((star, index) => {
            const currentRating = index + 1;
          
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <span
                  className="star"
                  style={{
                    color:
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
       
    )

    
}