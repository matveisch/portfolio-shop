import React, {useEffect} from 'react';

import './Review.css';
import Rating from "../../ui/Rating/Rating";
import UserInit from "../../ui/UserInit/UserInit";
import {HTTP} from "../../interface/HTTP";

const Review = ({review}) => {
    return (
        <div className="review">
            <div className="review__img">
                <UserInit color={'#73CE00'} />
            </div>
            <div className="review__main">
                <h1 className="title author">{'author'}</h1>
                <Rating numOfStars={review.rate}  date={'date'} />
                <p className="body review-text">{review.comment}</p>
            </div>
        </div>
    );
};

export default Review;