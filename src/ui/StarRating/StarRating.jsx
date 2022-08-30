import {useState} from "react";

import './StarRating.css';
import filledStar from '../../images/star.svg';
import blackStar from '../../images/black-star.svg';

const StarRating = ({setRatingData}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                let image;

                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? image = filledStar : image = blackStar}
                        onClick={() => {
                            setRatingData(prevState => ({
                                ...prevState,
                                ['rate']: index
                            }));
                            setRating(index);
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <img src={image} alt=""/>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;