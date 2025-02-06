import { useState } from "react";  

const Card = ({ title }) => {
    const [count, setCount] = useState(0);  
    const [hasLiked, setHasLiked] = useState(false);  

    return (
        <div className="card" onClick={() => setCount(count + 1)}>  
            <h2>{title} <br /> {count}</h2>  
            
            <button onClick={(e) => {
                e.stopPropagation(); // Prevents card click event from triggering

                if (hasLiked) {
                    setCount(count - 1); // Decrease count if "Unlike"
                } else {
                    setCount(count + 1); // Increase count if "Like"
                }

                setHasLiked(!hasLiked);
            }}>  
                {hasLiked ? "Unlike" : "Like"}  
            </button>
        </div>
    );
};

export default Card;
