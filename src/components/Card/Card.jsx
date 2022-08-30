import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Rating from "../../ui/Rating/Rating";
import Button from "../../ui/Button/Button";

import './Card.css';
import mobileIcon from '../../images/category phone.svg';
import desktopIcon from '../../images/category deck.svg';
import {CommonContext} from "../../pages/Layout/Layout";

import rates from '../../data/mocks/mock-rates';

const Card = ({item}) => {
    const [rating, setRating] = useState(rates.find(rate => rate.id === Number(item.id)).rates);

    const findAverageRating = (arr) => {
        const { length } = arr;
        return arr.reduce((acc, val) => {
            return acc + (val.rate/length);
        }, 0);
    };

    const navigate = useNavigate();

    const {cartItems, setCartItems} = useContext(CommonContext);

    const addItemToCart = (item) => {
        const found = cartItems.some(el => el.id === item.id);
        if (!found) {
            setCartItems(cartItems.concat(item));
        }
    }

    return (
        <div className="card">
            <div className="card__images" onClick={() => navigate('/' + item.id)}>
                <img className="cover-img" src={item.image} alt="game cover"/>
                <img className="os-img" src={item.os === 'mobile' ? mobileIcon : desktopIcon} alt=""/>
            </div>
            <div className="card__name-description">
                <h1 className="title card__name">{item.title}</h1>
                <p className="card__description">{item.description}</p>
            </div>
            <div className="card__rating-button">
                <Rating numOfStars={Math.round(findAverageRating(rating))}
                        numOfDownloads={item.downloads}
                        numOfRatings={rating.length}/>
                <Button bgColor={'#494799'}
                        onClick={() => addItemToCart(item)}
                        name={!item.price ? `0 ₽` : `${item.price} ₽`} />
            </div>
        </div>
    );
};

export default Card;