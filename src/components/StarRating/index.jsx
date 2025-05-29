import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);  
  }

  function handleMouseLeave() {
    setHover(rating);  
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const current = index + 1;
        return (
          <FaStar
            key={current}
            className={current <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(current)}
            onMouseEnter={() => handleMouseEnter(current)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}
