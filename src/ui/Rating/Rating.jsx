import React from 'react';
import uniqid from 'uniqid';

import './Rating.css';
import star from '../../images/star.svg';
import emptyStar from '../../images/empty-star.svg';
import downloadsArrow from '../../images/downloads-arrow.svg';

const Rating = ({numOfRatings, numOfDownloads, numOfStars, date}) => {
    const listOfStars = (numOfStarsInner, typeOfStar) => {
        let stars = [];
        for (let i = 0; i < numOfStarsInner; i++) {
            stars.push(<img key={uniqid()} src={typeOfStar} className="star" alt="star"/>)
        }
        return stars;
    }

    return (
        <div className="rating">
            <div className="rating__stars">
                {listOfStars(numOfStars, star)}
                {listOfStars(5 - numOfStars, emptyStar)}
            </div>
            <div className="rating__ratings-downloads" style={date ? {display: 'none'} : null}>
                <p className="rate">{numOfRatings}</p>
                <div className="downloads">
                    <img src={downloadsArrow} className="downloads-arrow" alt=""/>
                    <p className="rate">{numOfDownloads}</p>
                </div>
            </div>
            <p className="body" style={!date ? {display: 'none'} : null}>{date}</p>
        </div>
    );
};

export default Rating;