import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ front, back, difficulty, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""} ${difficulty}`} onClick={handleClick}>
      <div className="flashcard-inner">
        {/* Front side */}
        <div className="flashcard-front">
          <p>{front}</p>
        </div>

        {/* Back side */}
        <div className="flashcard-back">
          {image && <img src={image} alt="flashcard visual" className="card-image" />}
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
